export async function fetchLaundryRequest() {
    const token = localStorage.getItem('token')
    
    if (!token || token === "") {
        throw new Error("Missing token")
    }

    try {
        const res = await fetch('http://localhost:8000/api/v1/laundry/requests', {
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