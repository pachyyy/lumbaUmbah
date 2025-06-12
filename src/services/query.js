export const BASE_URL = "http://localhost:8000/api/v1"

export async function fetchLaundryRequestByUserID() {
    const token = localStorage.getItem('token')
    
    if (!token || token === "") {
        throw new Error("Missing token")
    }

    try {
        const res = await fetch(`${BASE_URL}/laundry/requests`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`,
                "Content-Type": "application/json",
            },
        })

        if (!res.ok) {
            const error = await res.json()
            throw new Error(error.message)
        }

        const data = await res.json()
        return data
    } catch (error) {
        console.error('Error fetching laundry requests', error)
        throw error
    }
}

export async function fetchLaundryRequests() {
    const token = localStorage.getItem('token')
    
    if (!token || token === "") {
        throw new Error("Missing token")
    }

    try {
        const res = await fetch(`${BASE_URL}/laundry/requests/lists`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`,
                "Content-Type": "application/json",
            },
        })

        if (!res.ok) {
            const error = await res.json()
            throw new Error(error.message)
        }

        const data = await res.json()
        return data
    } catch (error) {
        console.error('Error fetching laundry requests', error)
        throw error
    }
}

export async function fetchUserAddresses() {
    const token = localStorage.getItem('token')
    
    if (!token || token === "") {
        throw new Error("Missing token")
    }

    try {
        const res = await fetch(`${BASE_URL}/addresses`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`,
                "Content-Type": "application/json",
            },
        })

        if (!res.ok) {
            const error = await res.json()
            throw new Error(error.message)
        }

        const data = await res.json()
        return data
    } catch (error) {
        console.error('Error fetching user addresses', error)
        throw error
    }
}

export async function fetchLaundryTypes() {
    const token = localStorage.getItem('token')
    
    if (!token || token === "") {
        throw new Error("Missing token")
    }

    try {
        const res = await fetch(`${BASE_URL}/laundry/types`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`,
                "Content-Type": "application/json",
            },
        })

        if (!res.ok) {
            const error = await res.json()
            throw new Error(error.message)
        }

        const data = await res.json()
        return data
    } catch (error) {
        console.error('Error fetching laundry types', error)
        throw error
    }
}

export async function fetchUserStats() {
    const token = localStorage.getItem('token')
    
    if (!token || token === "") {
        throw new Error("Missing token")
    }

    try {
        const res = await fetch(`${BASE_URL}/statistics/user`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`,
                "Content-Type": "application/json",
            },
        })

        if (!res.ok) {
            const error = await res.json()
            throw new Error(error.message)
        }

        const data = await res.json()
        return data
    } catch (error) {
        console.error('Error fetching user stats', error)
        throw error
    }
}