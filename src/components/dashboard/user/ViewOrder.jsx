import Table from "@/components/Table";
import { Pencil, Eye, Search } from 'lucide-react';
import { currencyFormat } from "@/helpers/currencyFormat";
import { dateFormat } from "@/helpers/dateFormat";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import usePagination from "@/hooks/usePagination";

function ViewOrder() {
    const [searchText, setSearchtext] = useState('')

    const navigate = useNavigate()
    const location = useLocation()

    const laundry_requests = [
    {
        weight: 5,
        type: 'reguler',
        notes: "Use softener",
        current_status: 'accepted',
        completion_date: dateFormat("2025-06-02T20:50:27Z"),
        total_price: currencyFormat(25000),
    },
    {
        weight: 3,
        type: 'reguler',
        notes: "Handle with care",
        current_status: 'accepted',
        completion_date: dateFormat("2025-06-02T20:50:27Z"),
        total_price: currencyFormat(25000),
    },
    {
        weight: 7,
        type: 'reguler',
        notes: "Fold all items",
        current_status: 'accepted',
        completion_date: dateFormat("2025-06-02T20:50:27Z"),
        total_price: currencyFormat(25000),
    },
    {
        weight: 4.5,
        type: 'reguler',
        notes: "Remove tough stains",
        current_status: 'accepted',
        completion_date: dateFormat("2025-06-02T20:50:27Z"),
        total_price: currencyFormat(25000),
    },
    {
        weight: 6,
        type: 'reguler',
        notes: "Silk fabric",
        current_status: 'accepted',
        completion_date: dateFormat("2025-06-02T20:50:27Z"),
        total_price: currencyFormat(25000),
    },
    ];

    const [filteredData, setFilteredData] = useState(laundry_requests || [])

    const {
        currentPage,
        goToPage,
        totalPages,
        paginatedData,
        setCurrentPage
    } = usePagination(filteredData, 5)

    const columns = [
    { key: "weight", label: "Weight (Kg)" },
    { key: "type", label: "Laundry Type" },
    { key: "notes", label: "Notes" },
    { key: "current_status", label: "Status" },
    { key: "completion_date", label: "Completion Date" },
    { key: "total_price", label: "Price" },
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
            const filteredItems = laundry_requests.filter((row) => columns.some((col) => {
                const value = row[col.key]
                return value?.toString().toLowerCase().includes(searchText.toLowerCase())
            }))
            setFilteredData(filteredItems)
        } else {
            setFilteredData(laundry_requests)
        }
    }

    const handleEdit = (laundry_requests) => {
        alert("Edit user: " + laundry_requests.weight);
    };

    return(
        <div className="w-full flex flex-col space-y-5">
            <h1 className="text-2xl font-medium">View Orders</h1>
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
                totalData={filteredData.length}
                currentPage={currentPage}
                goToPage={goToPage}
                totalPages={totalPages}
                renderAction={(row) => ( 
                    <button onClick={() => console.log("Edit", row)} className="flex justify-between gap-4"> 
                    <Eye className="w-5 h-5 cursor-pointer" strokeWidth={1.5} /> 
                    <Pencil className="w-5 h-5 cursor-pointer" strokeWidth={1.5} />
                    </button>
                )}
            />
        </div>
    );

}

export default ViewOrder;