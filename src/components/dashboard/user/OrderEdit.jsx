import Modal from "@/components/Modal"
import { useAuth } from "@/hooks/AuthProvider"
import { useState } from "react"
import toast from "react-hot-toast"
import { BASE_URL } from "@/services/query"

const OrderEdit = ({data, isEditModalOpen, closeModals, refetchData}) => {
  const { user } = useAuth()
  const isAdmin = user?.role === "admin"

  const [status, setStatus] = useState(data?.current_status || "pending")
  
  const statusLists = [
    { value: "pending", label: "Pending" },
    { value: "canceled", label: "Canceled" },
    { value: "completed", label: "Completed" },
    { value: "processed", label: "Processed" }
  ]

  const allowedStatus = () => {
    if (data.current_status === "completed") {
      return true
    } else if (data.current_status === "canceled") {
      return true
    }

    return false
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const token = localStorage.getItem('token')
    if (!token || token === "") {
      throw new Error("Missing token")
    }

    try {
      const res = await fetch(`${BASE_URL}/laundry/requests/${data.id}`, {
        method: 'PUT',
        headers: {
          'Authorization': `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ status }),
      })
      if (!res.ok) {
        const error = await res.json()
        throw new Error(error.message)
      }
      await refetchData()

      closeModals()
      toast.success("Laundry request updated successfully")
    } catch (error) {
      console.error('Error creating laundry request', error);
      toast.error(`Error creating laundry request: ${error.message}`);
      throw error;
    }
  }
  
  return (
    <Modal
      isOpen={isEditModalOpen}
      onClose={closeModals}
      title="Edit Laundry Request"
      >
      {data && (
          <form onSubmit={handleSubmit} className="space-y-4 text-sm">
            {isAdmin ? (
              <>
                <div className="flex flex-col gap-1">
                  <label className="block font-medium">Status</label>
                  <select
                    className="w-full rounded-md border border-gray-300 p-2 disabled:text-gray-400 disabled:bg-gray-50 disabled:cursor-not-allowed"
                    defaultValue={data.current_status}
                    onChange={(e) => setStatus(e.target.value)}
                    disabled={allowedStatus()}
                  >
                    {statusLists.map((status) => (
                      <option 
                        key={status.value} 
                        value={status.value}
                      >
                        {status.label}
                      </option>
                    ))}
                  </select>
                </div>
                <button
                    type="submit"
                    className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 cursor-pointer"
                >
                    Save Changes
                </button>
              </>
            ) : (
              <>
                <div className="flex flex-col gap-1">
                <label className="block font-medium">Current Status</label>
                <div className="w-full rounded-md border border-gray-200 p-2 capitalize">{data.current_status}</div>
              </div>
              <button
                onClick={() => setStatus("canceled")}
                type="submit"
                className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={data.current_status === "canceled" || data.current_status === "completed" || data.current_status === "processed"}
              >
                  Cancel Request
              </button>
              </>
            )}
          </form>
      )}
  </Modal>
  )
}

export default OrderEdit