import React from "react";
import Table from "@/components/Table";
import { ArrowDownUp, Eye, Pencil, Trash2} from 'lucide-react';
export const LaundryTypeEnum = {
  REGULER: "Reguler",
  MEDIUM: "Medium",
  ULTIMATE: "Ultimate",
};

export const StatusEnum = {
  COMPLETED: "Completed",
  IN_PROCESS: "In Process",
  REJECTED: "Rejected",
};

const getAcceptDate = () => {
  const date = new Date();
  return date.toISOString().split("T")[0]; 
};

const getCompletionDate = (types, acceptedDate) => {
  const date = new Date(acceptedDate); 
  if (types === LaundryTypeEnum.REGULER) {
    date.setDate(date.getDate() + 3);
  } else if (types === LaundryTypeEnum.MEDIUM) {
    date.setDate(date.getDate() + 2);
  } else if (types === LaundryTypeEnum.ULTIMATE) {
    date.setDate(date.getDate() + 1);
  }
  return date.toISOString().split("T")[0]; 
};

const formatToLocalDate = (isoDate) => {
  return new Date(isoDate).toLocaleDateString("id-ID");
};

const getPrice = (types, weight) => {
  let price = 0;
  if (types === LaundryTypeEnum.REGULER) {
    price = 5000 * weight;
  } else if (types === LaundryTypeEnum.MEDIUM) {
    price = 7000 * weight;
  } else if (types === LaundryTypeEnum.ULTIMATE) {
    price = 9000 * weight;
  }
  return price;
};

const laundry = [
  {
    id: "ID_1001",
    types: LaundryTypeEnum.REGULER,
    acceptedDate: formatToLocalDate(getAcceptDate()),
    weight: 8,
    notes: "Gak pake kecap",
    completionDate: formatToLocalDate(getCompletionDate(LaundryTypeEnum.REGULER, getAcceptDate())),
    totalPrice: getPrice(LaundryTypeEnum.REGULER, 8),
    currentStatus: StatusEnum.IN_PROCESS,
  },
];

const columns = [
  { key: "id", label: "ID Laundry" },
  { key: "types", label: "Laundry Type" },
  { key: "acceptedDate", label: "Accepted Date" },
  { key: "weight", label: "Weight (Kg)" },
  { key: "notes", label: "Notes" },
  { key: "completionDate", label: "Completion Date (ETA)" },
  { key: "totalPrice", label: "Total Price (Rp)"},
  { key: "currentStatus", label: "Current Status"},
];
  
const DataLaundry = () => {
  const handleEdit = (laundry) => {
  alert("Edit Laundry: " + laundry.id);
  }

  return (
    <div className="bg-gray-100 w-full min-h-screen">
      <div className="p-6">
        <div className="flex flex-row justify-between mb-4 gap-4">
          <input type="text" placeholder="🔎 Search laundry data here..." className="bg-gray-200 border-none grow rounded px-4 py-2"/>
          <button className="flex bg-gray-200 text-gray-700 grow-0 gap-2 px-4 py-2 rounded"> <ArrowDownUp/> Sort by Date</button>
        </div>

        <Table columns={columns} data={laundry} onEdit={handleEdit} 
          renderAction={(row) => ( <button onClick={() => console.log("Edit", row)} className="flex justify-between gap-4"> <Eye/> <Pencil/> <Trash2/> </button>)}/>

      </div>
    </div>
  )
};

export default DataLaundry;
