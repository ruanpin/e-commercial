import axios from 'axios'
import nprogress from 'nprogress'
import 'nprogress/nprogress.css'
// import qs from 'qs'

//連接本機註冊or登入系統的Server
const requests = axios.create({
    baseURL:'http://localhost:8080',
    timeout:5000,
    // headers: { "Content-Type": "application/x-www-form-urlencoded" },
    // params: {
    //     ID: 12345
    //   },
    // data: {
    //     ID: 456789
    // },
})



requests.interceptors.request.use((config)=>{
    nprogress.start();
    return config;
})

requests.interceptors.response.use((res)=>{
    nprogress.done();
    return res.data;
},(error)=>{
    nprogress.done();
    return Promise.reject(new Error('DB in localhost access failed.'))
})

export default requests;