
const url = "http://localhost:3000"

export default async function webFetch(endpoint, opticoes = {}) {
    const token = localStorage.getItem("token")
    const headers = {
        "Content-Type": "application/json",
        ...(opticoes.headers || {})
    }

    if(token) {
        headers["Authorization"] = `Bearer ${token}`
    } 


    const respose = await fetch(`${url}${endpoint}`, {
        ...opticoes,
        headers,
    })

    
    return respose.json()
}
