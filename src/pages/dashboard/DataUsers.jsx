import React from "react";
import { ArrowDownUp, Pencil, Trash2} from 'lucide-react';
import Table from "@/components/Table";

const users = [
  { name: "Saedi Diponegoro Yudi", email: "idk@gmail.com", number: "082123456789", address:"Griya Ketintang Jaya Blok Ponari P-1" },
  { name: "I Gusti Suparman Yoedoyono", email: "idc@example.com", number: "082123456789", address:"Bazooka" },
];

const columns = [
  { key: "name", label: "Full Name" },
  { key: "email", label: "Email" },
  { key: "number", label: "Phone Number" },
  { key: "address", label: "Address" },
];

const DataUsers = () => {
  const handleEdit = (user) => {
    alert("Edit user: " + user.name);
  };

  return (
    <div className="bg-gray-100 w-full min-h-screen">
      <div className="p-6">
        <div className="flex flex-row justify-between mb-4 gap-4">
          <input type="text" placeholder="🔎 Search users data here..." className="bg-gray-200 border-none grow rounded px-4 py-2"/>
          <button className="flex bg-gray-200 text-gray-700 grow-0 gap-2 px-4 py-2 rounded"> <ArrowDownUp/> Sort by Full Name</button>
        </div>

        <Table columns={columns} data={users} onEdit={handleEdit}  
          renderAction={(row) => ( <button onClick={() => console.log("Edit", row)} className="flex justify-between gap-4"> <Pencil/> <Trash2/> </button>)}/>

      </div>
    </div>
  );
};
export default DataUsers;
