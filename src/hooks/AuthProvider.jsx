import { useContext, createContext, useState, useEffect } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => {
    return useContext(AuthContext)
}

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(localStorage.getItem('user') || null)
    const [token, setToken] = useState(localStorage.getItem('token') || "")

    const navigate = useNavigate()

    useEffect(() => {
        const loggedInUser = localStorage.getItem('user')
        if (loggedInUser) {
            const foundUser = JSON.parse(loggedInUser)
            setUser(foundUser)
        }
    }, [])

    const userLogin = async (data) => {
        try {
            const res = await fetch("http://localhost:8000/api/v1/users/signin", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            })
            
            const json = await res.json()

            if (json) {
                const { token, user: userData } = json
                const userWithRole = {...userData, role: "user"}
                setUser(userWithRole)
                setToken(token)
                localStorage.setItem('token', token)
                localStorage.setItem('user', JSON.stringify(userWithRole))
                navigate('/dashboard/user')
                toast.success('Login Success')
                return
            }

            toast.error("Invalid data input")
            throw new Error(res.message)
        } catch (error) {
            toast.error(error.message)
            console.log(error);
        }
    }

    const adminLogin = async (data) => {
        try {
            const res = await fetch("http://localhost:8000/api/v1/admins/signin", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            })

            const json = await res.json()

            if (json) {
                const { token, user: userData } = json
                 const userWithRole = {...userData, role: "admin"}
                setUser(userWithRole)
                setToken(token)
                localStorage.setItem('token', token)
                localStorage.setItem('user', JSON.stringify(userWithRole))
                navigate('/dashboard/admin')
                toast.success('Login Success')
                return
            }

            toast.error("Invalid data input")
            throw new Error(res.message)
        } catch (error) {
            toast.error(error.message)
            console.log(error);
        }
    }

    const logout = () => {
        setUser(null)
        setToken("")
        localStorage.removeItem('token')
        navigate('/')
        toast.success('Logged Out!')
    }

    return <AuthContext.Provider value={{ token, user, userLogin, adminLogin, logout }}>{children}</AuthContext.Provider>
}

export default AuthProvider

