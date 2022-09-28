
import mockRequests from './mock'
import InstaRequest from './request'
import localDBRequest from './member'

//引入in.s ta相關api使用參數
import {instaToken} from '../utils/InstaToken'
import {instaUser_id} from '../utils/InstaToken'

// export const reqGetProducts = () => mockRequests.get('/products')
export const reqPostProducts = (params) => mockRequests.post('/products',{data:params})

export const reqPostProductDetail = (productID) => mockRequests.post('/productDetail',{data:productID})

export const reqGetPromoteProducts = (params) => mockRequests.get('/promotionProduct',{data:params})

export const reqGetIGPosts = () => InstaRequest.get(`?fields=id,media_type,media_url,permalink&access_token=${instaToken}`)

//使用instance發請求
export const reqPostSignUp = params => localDBRequest.post('/member/signUp',params);
// 下方為使用axios直接發請求
//使用axios創建出來的instance發請求給後端後，回來的資料如result.msg
//但直接使用axios發請求給後端，回來的資料如result.data.msg，需再加上.data才能取得
// export const reqPostSignUp = (params) => axios.post('http://localhost:8080/member/signUp',
// {
//     username: params.username,
//     password: params.password
// });

export const reqPostSignIn = params => localDBRequest.post('/member/signIn',params);

export const reqPostBuy = params => localDBRequest.post('/member/buyAction',params);

