import { useState, useEffect, useCallback } from "react";
import { BASE_URL } from "@/services/query";
import toast from "react-hot-toast";

const BASE_API_URL = "https://www.emsifa.com/api-wilayah-indonesia/api"
const AVAILABLE_PROVINCES = ["DKI JAKARTA", "JAWA BARAT", "BANTEN", "JAWA TENGAH", "JAWA TIMUR", "DI YOGYAKARTA"]

const CreateAddress = () => {
    const [cities, setCities] = useState([]);
    const [provices, setProvinces] = useState([]);
    const [selectedProvince, setSelectedProvince] = useState({ id: 0, name: "" });
    const [isLoadingProvinces, setIsLoadingProvinces] = useState(true);

    const defaultValues = {
        "street_address": "",
        "city": "",
        "province": { id: 0, name: "" }
    }
    const [formData, setFormData] = useState(defaultValues);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const token = localStorage.getItem('token')

        if (!token || token === "") {
            throw new Error("Missing token")
        }

        const { street_address, city, province } = formData;

        try {
            const res = await fetch(`${BASE_URL}/addresses/create`, {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${token}`,
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    street_address,
                    city,
                    state: province.name
                }),
            });
            if (!res.ok) {
                const error = await res.json();
                throw new Error(error.message);
            }
            setFormData(defaultValues);
            toast.success('Success creating address');
        } catch (error) {
            console.error('Error creating address', error);
            toast.error(`Error creating address: ${error.message}`);
            throw error;
        }
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));

        if (name === "province") {
            const selected = JSON.parse(value);
            setSelectedProvince(selected);
            setFormData(prev => ({
                ...prev,
                city: "",
                province: selected
            }));
        } else {
            setFormData(prev => ({ ...prev, [name]: value }));
        }
    };

    const fetchCities = async (provId) => {
        try {
            const res = await fetch(`${BASE_API_URL}/regencies/${provId}.json`);
            if (!res.ok) {
                throw new Error("Failed to fetch cities");
            }
            const data = await res.json();
            setCities(data);
        } catch (error) {
            console.error("Error fetching cities:", error);
        }
    }

    const fetchProvinces = useCallback(async () => {
        try {
            const res = await fetch(`${BASE_API_URL}/provinces.json`);
            if (!res.ok) {
                throw new Error("Failed to fetch provinces");
            }
            const data = await res.json();
            const filteredProvinces = data.filter(province =>
                AVAILABLE_PROVINCES.includes(province.name.toUpperCase())
            );
            setProvinces(filteredProvinces);
        } catch (error) {
            console.error("Error fetching provinces:", error);
        } finally {
            setIsLoadingProvinces(false);
        }
    }, [])

    useEffect(() => {
        fetchProvinces();
    }, [fetchProvinces])
    
    useEffect(() => {
    if (selectedProvince.id === 0) return;
    fetchCities(selectedProvince.id);
    }, [selectedProvince]);

    useEffect(() => {
    if (!isLoadingProvinces && provices.length > 0) {
        const jakarta = provices.find(p => p.name.toUpperCase() === "DKI JAKARTA");
        if (jakarta) {
        setFormData(prev => ({ ...prev, province: jakarta }));
        setSelectedProvince(jakarta);
        }
    }
    }, [isLoadingProvinces, provices]);

  return(
    <div className="w-full max-w-3xl mx-auto space-y-4">
        <div className="mx-auto">
            <h1 className="text-2xl font-medium">Add Address</h1>
        </div>

        <form onSubmit={handleSubmit} className="bg-white rounded-xl w-full p-4">
            <div className="grid grid-cols-2 gap-4 w-full mb-4">
                <div className="flex items-start flex-col gap-1 md:col-span-1 col-span-2">
                    <label className="font-jakarta text-gray-500 font-semibold px-2">Province</label>
                    {isLoadingProvinces ? (
                        <div className="w-full h-full flex items-center justify-center">
                            Loading...
                        </div>
                    ) : (
                       <select 
                        value={JSON.stringify(formData.province)}
                        name="province"
                        onChange={handleChange}
                        className="w-full rounded-lg p-3 bg-white text-black font-rubik border border-gray-200 capitalize"
                        >
                            <option value="" disabled>Select a province</option>
                            {provices.map((item) => (
                                <option key={item.id} value={JSON.stringify(item)}>{item.name}</option>
                            ))}
                        </select>
                    )}
                </div>
                <div className="flex items-start flex-col gap-1 md:col-span-1 col-span-2">
                    <label className="font-jakarta text-gray-500 font-semibold px-2">City</label>
                    <select
                        value={formData.city}
                        name="city"
                        onChange={handleChange}
                        className="w-full rounded-lg p-3 bg-white text-black font-rubik border border-gray-200 capitalize"
                        disabled={selectedProvince.id === 0}
                        >
                        <option value="" disabled>Select a city</option>
                        {cities.map((city) => (
                            <option key={city.id} value={city.name}>{city.name}</option>
                        ))}
                    </select>
                </div>
                <div className="flex items-start flex-col gap-1 col-span-2">
                    <label className="font-jakarta text-gray-500 font-semibold px-2">Street Address</label>
                    <input 
                        value={formData.street_address}
                        type="text" 
                        name="street_address"
                        onChange={handleChange}
                        placeholder="Jl Ikan Ikanan" 
                        className="w-full rounded-lg p-3 bg-white text-black font-rubik disabled:text-gray-400 disabled:bg-gray-50 disabled:cursor-not-allowed border border-gray-200" 
                        required
                    />
                </div>
            </div>
            <div className="flex items-center w-full justify-end gap-2">
                <button 
                    type="button" 
                    className="flex bg-white rounded-full py-2 px-10 text-primary font-rubik font-medium cursor-pointer border border-gray-200"
                    
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

export default CreateAddress