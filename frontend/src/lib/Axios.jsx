import axios from 'axios'

export const Axios = axios.create({
    baseURL: import.meta.env.AXIOS_URL || "http://localhost:8000/api"
})

export default Axios