import axios from "axios";


const axiosClient = axios.create({
    baseURL: `${import.meta.env.VITE_API_BASE_URL}/api`
})

//interceptors are special fxns executed b4 request sent or after response received
axiosClient.interceptors.request.use((config) => {
    const token = localStorage.getItem('ACCESS_TOKEN')
    config.headers.Authorization = `Bearer ${token}`
    return config
})


axiosClient.interceptors.response.use((response) => {
    return response
}, (error) => {
    const { response } = error;
    console.log(error)
    if (response.status === 401) {
        //user is unauthorized
        localStorage.removeItem('ACCESS_TOKEN')
    }
    throw error
})

export default axiosClient;