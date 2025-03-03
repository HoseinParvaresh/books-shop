import axios from "axios";

const apiRequests = axios.create({
    baseURL: 'https://bookshop-server.liara.run/',
    headers: {
        "Content-Type": "application/json",
        Auth: "Bearer Token",
    }
})

export default apiRequests;