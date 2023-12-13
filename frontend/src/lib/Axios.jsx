import axios from 'axios'

export const Axios = axios.create({
    baseURL: import.meta.env.VITE_AXIOS_URL || "http://localhost:8000/api/"
})

export default Axios