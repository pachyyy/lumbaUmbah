import { ChevronRight, ChevronLeft } from "lucide-react";

const Table = ({ 
    columns = [], 
    data = [], 
    renderAction,
    totalData,
    totalPages,
    currentPage,
    goToPage,
    isLoading,
  }) => {

    const handleNextPage = () => {
        goToPage(currentPage + 1)
    }

    const handlePreviousPage = () => {
        goToPage(currentPage - 1)
    }

  return (
    <div className="w-full flex flex-col space-y-3">
      <div className="relative overflow-x-auto w-full shadow-sm rounded-md">
        <table className="w-full text-sm text-left text-black">
          <thead className="text-xs text-black uppercase bg-gray-300">
            <tr>
              {columns.map((col, idx) => (
                <th key={idx} className="px-10 py-3">{col.label}</th>
              ))}
              <th className="px-6 py-3">Action</th>
            </tr>
          </thead>
          <tbody>
            {isLoading && (
              <tr>
                <td colSpan={columns.length + 1} className="px-10 py-4">
                  <div className="flex items-center justify-center h-20 text-gray-500">Loading...</div>
                </td>
              </tr>
            )}
            {data.length > 0 ? (
              <>
                {data.map((row, i) => (
                  <tr key={i} className="bg-white border-b hover:bg-sky-50">
                    {columns.map((col, j) => (
                      <td key={j} className="px-10 py-2">
                        {col.render ? col.render(row[col.key]) : row[col.key]}
                      </td>
                    ))}
                    <td className="px-10 py-4">
                      {renderAction ? renderAction(row) : null}
                    </td>
                  </tr>
                ))}
              </>
            ) : (
              <tr>
                <td colSpan={columns.length + 1} className="px-10 py-4">
                  <div className="flex items-center justify-center h-20 text-gray-500">No data found...</div>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      <div className="w-full items-center flex justify-between">
        <span className="text-sm text-gray-500">Showing {data.length} of {totalData} results</span>
        <div className="flex items-center gap-x-6">
          <button 
            onClick={handlePreviousPage} 
            className="h-8 w-8 cursor-pointer rounded-md bg-white border border-gray-200 flex items-center justify-center
                      text-gray-700 hover:bg-gray-100 disabled:text-gray-400 disabled:bg-gray-50 disabled:cursor-not-allowed"
            disabled={currentPage === 1}
          >
            <ChevronLeft className="h-4 w-4" />
          </button>

          <span className="text-sm text-gray-500">Page {currentPage} of {totalPages}</span>

          <button 
            onClick={handleNextPage} 
            className="h-8 w-8 cursor-pointer rounded-md bg-white border border-gray-200 flex items-center justify-center
                      text-gray-700 hover:bg-gray-100 disabled:text-gray-400 disabled:bg-gray-50 disabled:cursor-not-allowed"
            disabled={currentPage === totalPages}
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Table;
