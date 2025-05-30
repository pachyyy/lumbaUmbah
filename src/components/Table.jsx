import React from "react";

const Table = ({ columns = [], data = [], onEdit, renderAction }) => {
  return (
    <div className="relative overflow-x-auto w-full shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left text-black">
        <thead className="text-xs text-black uppercase bg-gray-50">
          <tr>
            {columns.map((col, idx) => (
              <th key={idx} className="px-10 py-3">{col.label}</th>
            ))}
            <th className="px-6 py-3">Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, i) => (
            <tr key={i} className="bg-white border-b hover:bg-sky-50">
              {columns.map((col, j) => (
                <td key={j} className="px-10 py-4">
                  {row[col.key]}
                </td>
              ))}
              <td className="px-10 py-4">
                <button
                  className="text-black"
                  onClick={() => onEdit && onEdit(row)}
                > 
                  {renderAction ? renderAction(row) : null}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
