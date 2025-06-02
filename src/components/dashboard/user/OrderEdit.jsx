import Modal from "@/components/Modal"

const OrderEdit = ({data, isEditModalOpen, closeModals}) => {

  const allowedStatus = () => {
    if (data.current_status === "completed") {
      return true
    } else if (data.current_status === "canceled") {
      return true
    }

    return false
  }
  
  return (
    <Modal
      isOpen={isEditModalOpen}
      onClose={closeModals}
      title="Edit Laundry Request"
      >
      {data && (
          <form className="space-y-4 text-sm">
            <div className="flex flex-col gap-1">
                <label className="block font-medium">Status</label>
                <select
                  className="w-full rounded-md border border-gray-300 p-2 disabled:text-gray-400 disabled:bg-gray-50 disabled:cursor-not-allowed"
                  defaultValue={data.current_status}
                  disabled={allowedStatus()}
                >
                  <option value="pending">Pending</option>
                  <option value="canceled">Canceled</option>
                  <option value="completed">Completed</option>
                  <option value="processed">Processed</option>
                </select>
            </div>
            <button
                type="submit"
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
                Save Changes
            </button>
          </form>
      )}
  </Modal>
  )
}

export default OrderEdit