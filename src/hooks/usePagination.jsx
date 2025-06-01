import { useEffect, useMemo, useState, useCallback } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const usePagination = (data = [], limit = 3) => {
    const navigate = useNavigate()
    const location = useLocation()

    const getPageQuery = useCallback(() => {
        const params = new URLSearchParams(location.search)
        const page = params.get('page')
        const pageParam = parseInt(page) || 1

        return pageParam > 0 ? pageParam : 1
      },
      [location.search],
    )

    const [currentPage, setCurrentPage] = useState(getPageQuery())

    const totalPages = Math.ceil(data.length / limit)

    useEffect(() => {
      setCurrentPage(getPageQuery())
    }, [location.search, getPageQuery])

    const paginatedData= useMemo(() => {
        const start = (currentPage - 1) * limit
        const end = start + limit
        return data.slice(start, end)
    }, [data, currentPage, limit])

    const goToPage = (page) => {
        const params = new URLSearchParams(location.search)
        params.set('page', page)
        navigate(`${location.pathname}?${params.toString()}`)
    }

    return {
        currentPage,
        totalPages,
        paginatedData,
        goToPage,
        setCurrentPage
  };
}

export default usePagination