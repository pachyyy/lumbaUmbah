import Table from "@/components/Table";
import { Pencil, Eye, Search } from 'lucide-react';
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import usePagination from "@/hooks/usePagination";
import { fetchLaundryRequests } from "@/services/query";
import { dateFormat } from "@/helpers/dateFormat";
import { currencyFormat } from "@/helpers/currencyFormat";
import OrderDetails from "../user/OrderDetails";
import OrderEdit from "../user/OrderEdit";

function DataLaundry() {
    const [laundryData, setLaundryData] = useState([])
    const [isLoading, setIsloading] = useState(true)
    const [searchText, setSearchtext] = useState('')
    const [filteredData, setFilteredData] = useState(laundryData || [])
    const [selectedLaundry, setSelectedLaundry] = useState(null);
    const [isShowModalOpen, setIsShowModalOpen] = useState(false);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);

    const navigate = useNavigate()
    const location = useLocation()

    const {
        currentPage,
        goToPage,
        totalPages,
        paginatedData,
        setCurrentPage
    } = usePagination(filteredData, 10)

    const loadLaundryData = async () => {
        try {
            const data = await fetchLaundryRequests()
            if (!data) {
                throw new Error("Error loading laundry data")
            }
            const requests = data.requests
            setLaundryData(requests)
            setFilteredData(requests)
        } catch (error) {
            console.error(error)
        } finally {
            setIsloading(false)
        }
      } 

    useEffect(() => {
      loadLaundryData()
    }, [])

    const columns = [
        { 
            key: "username", 
            label: "Username" ,
            render: (val) => <span className="capitalize">{val}</span>,
        },
        { key: "weight", label: "Weight (Kg)" },
        { 
            key: "laundry_type", 
            label: "Laundry Type" ,
            render: (val) => <span className="capitalize">{val}</span>,
        },
        { 
            key: "current_status", 
            label: "Status" ,
            render: (val) => (
                <span 
                    className={`
                        capitalize text-xs p-3 rounded-md 
                        ${val === "completed" 
                            ? "bg-green-100 text-green-700" :
                         val === "pending" 
                            ? "bg-gray-100 text-gray-700" : 
                         val === "processed" 
                            ? "bg-blue-50 text-blue-700" : "bg-red-100 text-red-700"}`}>
                    {val}
                </span>
            ),
        },
        {
            key: 'completion_date',
            label: 'Completed At',
            render: (val) => dateFormat(val),
        },
        { 
            key: "total_price", 
            label: "Price" ,
            render: (val) => currencyFormat(val),
        },
    ];

    useEffect(() => {
      const params = new URLSearchParams(location.search)
      const page = params.get('page')

      if (!page) {
        params.set('page', 1)
        navigate(`${location.pathname}?${params.toString()}`, { replace: true })
      }
    }, [location.pathname, location.search, navigate])
    
    const handleSearchData = (e) => {
        const { value } = e.target
        setSearchtext(value)
        
        if (value !== '') {
            const filteredItems = laundryData.filter((row) => columns.some((col) => {
                const value = row[col.key]
                return value?.toString().toLowerCase().includes(searchText.toLowerCase())
            }))
            setFilteredData(filteredItems)
        } else {
            setFilteredData(laundryData)
        }
    }

    const handleShow = (laundryData) => {
    setSelectedLaundry(laundryData);
    setIsShowModalOpen(true);
    };

    const handleEdit = (laundryData) => {
    setSelectedLaundry(laundryData);
    setIsEditModalOpen(true);
    };

    const closeModals = () => {
    setIsShowModalOpen(false);
    setIsEditModalOpen(false);
    setSelectedLaundry(null);
    };

    return(
        <div className="w-full flex flex-col space-y-5">
            <h1 className="text-2xl font-medium">Data Laundry</h1>
            <div className="flex justify-between gap-4 h-12">
                <div className="relative w-full h-full">
                    <Search className="w-5 h-5 text-gray-500 absolute top-1/2 left-4 -translate-y-1/2" />
                    <input 
                        type="text" 
                        value={searchText}
                        onChange={(e) => {
                            handleSearchData(e)
                            setCurrentPage(1)
                        }}
                        placeholder="Search here..." 
                        className="bg-white w-full h-full text-sm rounded-md pl-14 py-2 border border-gray-200"    
                    />
                </div>
            </div>

            <Table 
                columns={columns} 
                data={paginatedData} 
                onEdit={handleEdit} 
                onShow={handleShow}
                totalData={filteredData.length}
                currentPage={currentPage}
                goToPage={goToPage}
                totalPages={totalPages}
                isLoading={isLoading}
                renderAction={(row) => (
                    <div className="flex justify-between gap-4">
                        <button onClick={() => handleShow(row)} aria-label="Show Details">
                            <Eye className="w-5 h-5 cursor-pointer" strokeWidth={1.5} />
                        </button>
                        <button onClick={() => handleEdit(row)} aria-label="Edit Item">
                            <Pencil className="w-5 h-5 cursor-pointer" strokeWidth={1.5} />
                        </button>
                    </div>
                )}
            />

            <OrderDetails
                data={selectedLaundry}
                isShowModalOpen={isShowModalOpen}
                closeModals={closeModals}
            />

            <OrderEdit
                data={selectedLaundry}
                closeModals={closeModals}
                isEditModalOpen={isEditModalOpen}
                refetchData={loadLaundryData}
            />
        </div>
    );

}

export default DataLaundry;