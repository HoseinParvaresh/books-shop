import axios from "axios";

const apiRequests = axios.create({
    baseURL: 'https://hopeful-nobel-ow1xn8uvt.liara.run/',
    headers: {
        "Content-Type": "application/json",
        Auth: "Bearer Token",
    }
})

export default apiRequests;