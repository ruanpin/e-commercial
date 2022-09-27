import axios from 'axios'

//連接本機註冊or登入系統的Server
const requests = axios.create({
    baseURL:'http://localhost:5000',
    timeout:5000,
    'Content-Type':"multipart/form-data"
})

requests.interceptors.request.use((config)=>{
    return config;
})

requests.interceptors.response.use((res)=>{
    return res.data;
},(error)=>{
    return Promise.reject(new Error('DB in localhost access failed.'))
})

export default requests;