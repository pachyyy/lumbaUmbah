import Modal from "@/components/Modal"
import { dateFormat } from "@/helpers/dateFormat";
import { currencyFormat } from "@/helpers/currencyFormat";
import { useAuth } from "@/hooks/AuthProvider";
import { dateFormatTime } from "@/helpers/dateFormat";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

const OrderDetails = ({ data, isShowModalOpen, closeModals }) => {
    const [showStatusHistories, setShowStatusHistories] = useState(false)

    const { user } = useAuth()

  return (
    <Modal
        isOpen={isShowModalOpen}
        onClose={closeModals}
        title="Laundry Request Details"
    >
        {data && (
            <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="flex flex-col gap-1 items-start text-sm col-span-2">
                    <span className="text-gray-500">
                        ID Laundry
                    </span>
                    <h3 className="font-medium">{data.id}</h3>
                </div>
                <div className="flex flex-col gap-1 items-start text-sm">
                    <span className="text-gray-500">
                        Weight
                    </span>
                    <h3 className="font-medium">{data.weight} kg</h3>
                </div>
                <div className="flex flex-col gap-1 items-start text-sm">
                    <span className="text-gray-500">
                        Completion Date
                    </span>
                    <h3 className="font-medium">{dateFormat(data.completion_date)}</h3>
                </div>
                <div className="flex flex-col gap-1 items-start text-sm">
                    <span className="text-gray-500">
                        Price
                    </span>
                    <h3 className="font-medium">{currencyFormat(data.total_price)}</h3>
                </div>
                <div className="flex flex-col gap-1 items-start text-sm">
                    <span className="text-gray-500">
                        Status
                    </span>
                    <span 
                    className={`
                        capitalize text-xs p-2 rounded-md 
                        ${data.current_status === "completed" 
                            ? "bg-green-100 text-green-700" :
                        data.current_status === "pending" 
                            ? "bg-gray-100 text-gray-700" : 
                        data.current_status === "processed" 
                            ? "bg-blue-50 text-blue-700" : "bg-red-100 text-red-700"}`}
                    >
                        {data.current_status}
                    </span>
                </div>
                <div className="flex flex-col gap-1 items-start text-sm col-span-2">
                    <span className="text-gray-500">
                        Notes
                    </span>
                    <textarea 
                        className="text-sm/5 p-3 border border-gray-200 rounded-md max-h-20 w-full overflow-y-auto" disabled
                        value={data.notes}
                    />
                </div>

                <div className="flex flex-col gap-4 items-start text-sm col-span-2">
                    <div className="flex items-center w-full justify-between">
                        <h3 className="font-medium">
                            Status Histories
                        </h3>
                        <button 
                            onClick={() => setShowStatusHistories(!showStatusHistories)}
                            className="text-gray-500 cursor-pointer flex items-center gap-1"
                        >
                            {showStatusHistories ? "Hide all" : "Show all"}
                            {showStatusHistories ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                        </button>
                    </div>
                    {showStatusHistories && (
                        <div className="flex flex-col space-y-5 items-start text-sm p-2 w-full">
                            {data.status_histories.map((history, index) => {
                                const isLast = index === data.status_histories.length - 1
                                return (
                                <div 
                                    key={index}
                                    className="flex items-start gap-4 relative"
                                >
                                    <div className="h-3 w-3 rounded-full bg-gray-400" />
                                    {!isLast && <hr className="absolute top-3 left-1 h-[180px] w-[2px] bg-gray-200" />}
                                    <div className="flex flex-col gap-2 items-start">
                                        <div className="flex flex-col gap-1 items-start text-sm">
                                            <span className="text-gray-500">
                                                Status
                                            </span>
                                            <span 
                                            className={`
                                                capitalize text-xs p-2 rounded-md 
                                                ${history.status === "completed" 
                                                    ? "bg-green-100 text-green-700" :
                                                history.status === "pending" 
                                                    ? "bg-gray-100 text-gray-700" : 
                                                history.status === "processed" 
                                                    ? "bg-blue-50 text-blue-700" : "bg-red-100 text-red-700"}`}
                                            >
                                                {history.status}
                                            </span>
                                        </div>
                                        <div className="flex flex-col gap-1 items-start text-sm col-span-2">
                                            <span className="text-gray-500">
                                                Updated Date
                                            </span>
                                            <h3 className="font-medium">{dateFormatTime(history.updated_at)}</h3>
                                        </div>
                                        <div className="flex flex-col gap-1 items-start text-sm col-span-2">
                                            <span className="text-gray-500">
                                                Updater
                                            </span>
                                            <h3 className="font-medium">{user.id === history.updated_by ? "You" : "Admin"}</h3>
                                        </div>
                                    </div>
                                </div>
                                )
                            })}
                        </div>
                    )}
                </div>
            </div>
        )}
    </Modal>
  )
}

export default OrderDetails