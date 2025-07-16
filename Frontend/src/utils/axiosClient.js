import axios from 'axios';


const axiosClient = axios.create({
    baseURL: 'http://localhost:1234',
    withCredentials: true, // Include cookies in requests
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
    },
});

export default axiosClient;