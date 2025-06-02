import { Outlet, Navigate, useLocation } from "react-router-dom"
import { useAuth } from "@/hooks/AuthProvider"
import { useRef, useEffect } from "react"

const Authorization = ({ permissions }) => {
  const auth = useAuth()
  const location = useLocation()

  const lastAllowedPath = useRef("/")

  const isAuthorized = permissions.some(role => auth.user?.role === role)

  useEffect(() => {
    if (isAuthorized) {
      lastAllowedPath.current = location.pathname;
    }
  }, [isAuthorized, location.pathname]);

    if (auth.loading) return <div className="flex items-center justify-center h-screen w-full">Loading...</div>

    return isAuthorized ? (
        <Outlet />
    ) : (
        <Navigate to={lastAllowedPath.current} replace state={{ from: location }} />
    )
}

export default Authorization