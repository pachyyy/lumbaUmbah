import { useState, useEffect } from "react";
import { fetchLaundryTypes, fetchUserAddresses } from "@/services/query";
import { dateFormat } from "@/helpers/dateFormat";
import { currencyFormat } from "@/helpers/currencyFormat";
import { BASE_URL } from "@/services/query";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { fetchLaundryRequestByUserID } from "@/services/query";

function BookService() {
    const [addressesData, setAddressesData] = useState([])
    const [laundryTypesData, setLaundryTypesData] = useState([])
    const [isAddressesLoading, setIsAddressesLoading] = useState(true)
    const [isLaundryTypesLoading, setIsLaundryTypesLoading] = useState(true)
    const [completionDate, setCompletionDate] = useState(new Date())
    const [totalPrice, setTotalPrice] = useState(0)

    // const { user } = useAuth()
    const navigate = useNavigate()

    const defaultValues = {
        laundry_type_id: '',
        address_id: '',
        weight: 1,
        notes: '',
    }

    const [formData, setFormData] = useState(defaultValues)

    useEffect(() => {
        const loadAddressesData = async () => {
            try {
                const data = await fetchUserAddresses()
                if (!data) {
                    throw new Error("Error loading addresses data")
                }
                const addresses = data.addresses
                setAddressesData(addresses)
            } catch (error) {
                console.error(error)
            } finally {
                setIsAddressesLoading(false)
            }
        }

         const loadTypesData = async () => {
            try {
                const data = await fetchLaundryTypes()
                if (!data) {
                    throw new Error("Error loading laundry types data")
                }
                const types = data.types
                setLaundryTypesData(types)
            } catch (error) {
                console.error(error)
            } finally {
                setIsLaundryTypesLoading(false)
            }
        }

        loadAddressesData()
        loadTypesData()
    }, [])

    useEffect(() => {
      if (laundryTypesData.length > 0) {
            const days = laundryTypesData[0].estimated_days;

            const now = new Date();
            const estimatedCompleted = new Date(now.getTime() + days * 24 * 60 * 60 * 1000);
            const formattedDate = dateFormat(estimatedCompleted);
            setCompletionDate(formattedDate);
      }
    }, [laundryTypesData])

    useEffect(() => {
        const firstType = laundryTypesData[0];
        if (firstType) {
            const price = firstType.price * parseFloat(formData.weight || 0);
            setTotalPrice(price);
        }
        if (formData.weight || formData.laundry_type_id) {
            const selectedType = laundryTypesData.find(type => type.id === formData.laundry_type_id);
            if (selectedType) {
                const price = selectedType.price * parseFloat(formData.weight || 0);
                setTotalPrice(price);
            }
        } else {
            setTotalPrice(0);
        }
    }, [formData.weight, formData.laundry_type_id, laundryTypesData]);

    useEffect(() => {
      setFormData(prev => ({
        ...prev,
        address_id: addressesData.length > 0 ? addressesData[0].id : '',
        laundry_type_id: laundryTypesData.length > 0 ? laundryTypesData[0].id : '',
      }));
    }, [addressesData, laundryTypesData]);
    

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));

        if (name === "laundry_type_id") {
            const laundryType = laundryTypesData.find(type => type.id === value);
            if (laundryType) {
                const days = laundryType.estimated_days;
                const now = new Date();
                const estimatedCompleted = new Date(now.getTime() + days * 24 * 60 * 60 * 1000);
                const formattedDate = dateFormat(estimatedCompleted);
                setCompletionDate(formattedDate);
            }
        }

        if (name === "weight") {
            const weightInput = document.getElementById('weight');
            weightInput.onkeydown = (e) => {
                const invalidKeys = ['e', '-', '+', '.', ' '];
                if (invalidKeys.includes(e.key)) {
                    e.preventDefault();
                }
            };

            weightInput.oninput = (e) => {
                let value = parseInt(e.target.value, 10);

                if (isNaN(value)) {
                    e.target.value = '';
                    return;
                }

                if (value < 1) {
                    e.target.value = 1;
                } else if (value > 100) {
                    e.target.value = 100;
                }
            };
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault()
        const token = localStorage.getItem('token')

        if (!token || token === "") {
            throw new Error("Missing token")
        }

        const { address_id, laundry_type_id, weight, notes } = formData;
        try {
            const res = await fetch(`${BASE_URL}/laundry/requests/create`, {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${token}`,
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    address_id,
                    laundry_type_id,
                    weight: parseFloat(weight || 0),
                    notes
                }),
            });
            if (!res.ok) {
                const error = await res.json();
                throw new Error(error.message);
            }
            handleDefaultValue()
            toast.success('Success creating laundry request');
            navigate('/dashboard/user/view-orders');
            fetchLaundryRequestByUserID();
        } catch (error) {
            console.error('Error creating laundry request', error);
            toast.error(`Error creating laundry request: ${error.message}`);
            throw error;
        }
    }

    const handleDefaultValue = () => {
        setFormData({
            weight: 1,
            notes: '',
            address_id: addressesData.length > 0 ? addressesData[0].id : '',
            laundry_type_id: laundryTypesData.length > 0 ? laundryTypesData[0].id : '',
        });
        const days = laundryTypesData[0].estimated_days;
        const now = new Date();
        const estimatedCompleted = new Date(now.getTime() + days * 24 * 60 * 60 * 1000);
        const formattedDate = dateFormat(estimatedCompleted);
        setCompletionDate(formattedDate);
        setTotalPrice(0);
    }

    return(
        <div className="w-full max-w-3xl mx-auto space-y-4">
            <div className="mx-auto">
                <h1 className="text-2xl font-medium">Book a Service</h1>
            </div>

            {/* Booking Form */}
            <form onSubmit={handleSubmit} className="bg-white rounded-xl w-full p-4">
                <div className="grid grid-cols-2 gap-4 w-full mb-4">
                    {/* Address */}
                    <div className="flex items-start flex-col gap-1 col-span-2">
                        <label className="font-jakarta text-gray-500 font-semibold px-2">Choose Your Address</label>
                        {isAddressesLoading ? (
                            <div className="w-full h-full flex items-center justify-center">
                                Loading...
                            </div>
                        ) : (
                            <select 
                                value={formData.address_id} 
                                onChange={handleChange} 
                                name="address_id"
                                className="w-full rounded-lg p-3 bg-white text-black font-rubik border border-gray-200 capitalize"
                            >
                                {addressesData.map((address, index) => (
                                    <option key={index} value={address.id}>{address.street_address}, {address.city}, {address.state}</option>
                                ))}
                            </select>
                        )}
                    </div>
                    {/* Weight */}
                    <div className="flex items-start flex-col gap-1 col-span-2">
                        <label className="font-jakarta text-gray-500 font-semibold px-2 ">Weight (kg)</label>
                        <input 
                            type="number"
                            name="weight"
                            min="1"
                            max="100"
                            id="weight"
                            value={formData.weight}
                            onChange={handleChange}
                            placeholder="1" 
                            className="w-full rounded-lg p-3 bg-white text-black font-rubik border border-gray-200" 
                        />
                    </div>
                    {/* Service Type */}
                    <div className="flex items-start flex-col gap-1 col-span-2 md:col-span-1">
                        <label className="font-jakarta text-gray-500 font-semibold px-2 ">Laundry Type</label>
                        {isLaundryTypesLoading ? (
                            <div className="w-full h-full flex items-center justify-center">
                                Loading...
                            </div>
                        ) : (
                            <select 
                                value={formData.laundry_type_id}
                                name="laundry_type_id"
                                onChange={handleChange}
                                className="w-full rounded-lg p-3 bg-white text-black font-rubik border border-gray-200 capitalize"
                            >
                                {laundryTypesData.map((type, index) => (
                                    <option key={index} value={type.id}>{type.name} - {currencyFormat(type.price)}</option>
                                ))}
                            </select>
                        )}
                    </div>
                    {/* Completion Date */}
                    <div className="flex items-start flex-col gap-1 col-span-2 md:col-span-1">
                        <label className="font-jakarta text-gray-500 font-semibold px-2">Completion Date</label>
                        {isLaundryTypesLoading ? (
                            <div className="w-full h-full flex items-center justify-center">
                                Loading...
                            </div>
                        ) : (
                            <input 
                                type="date" 
                                placeholder="Fill your username..." 
                                className="w-full rounded-lg p-3 bg-white text-black font-rubik disabled:text-gray-400 disabled:bg-gray-50 disabled:cursor-not-allowed border border-gray-200" 
                                value={completionDate}
                                disabled    
                            />
                        )}
                    </div>
                    {/* Notes */}
                    <div className="flex items-start flex-col gap-1 col-span-2">
                        <label className="font-jakarta text-gray-500 font-semibold px-2">Notes</label>
                        <textarea 
                            name="notes"
                            value={formData.notes}
                            onChange={handleChange}
                            rows="3"
                            placeholder="Fill your notes..."
                            className="w-full rounded-lg p-3 bg-white text-black font-rubik border border-gray-200" 
                        />
                    </div>
                    <div className="flex items-start flex-col gap-1 col-span-2">
                        <label className="font-jakarta text-gray-500 font-semibold px-2 ">Total Price (Rp)</label>
                        <input 
                            type="text"
                            value={currencyFormat(totalPrice)}
                            placeholder="Rp. 0.00"
                            className="w-full rounded-lg p-3 bg-white text-black font-rubik disabled:text-gray-400 disabled:bg-gray-50 disabled:cursor-not-allowed border border-gray-200"
                            disabled
                        />
                    </div>
                </div>
                {/* Submit Button */}
                <div className="flex items-center w-full justify-end gap-2">
                    <button 
                        type="button" 
                        className="flex bg-white rounded-full py-2 px-10 text-primary font-rubik font-medium cursor-pointer border border-gray-200"
                        onClick={handleDefaultValue}
                    >
                        Clear
                    </button>
                    <button type="submit" className="flex bg-sky-700 rounded-full py-2 px-10 text-white font-rubik font-medium cursor-pointer hover:bg-sky-400 transition-ease-in-out duration-300">
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
}

export default BookService;