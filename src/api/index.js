import mockRequests from './mock'
import InstaRequest from './request'

//引入in.s ta相關api使用參數
import {instaToken} from '../utils/InstaToken'
import {instaUser_id} from '../utils/InstaToken'

// export const reqGetProducts = () => mockRequests.get('/products')
export const reqPostProducts = (params) => mockRequests.post('/products',{data:params})

export const reqPostProductDetail = (productID) => mockRequests.post('/productDetail',{data:productID})

export const reqGetPromoteProducts = (params) => mockRequests.get('/promotionProduct',{data:params})

export const reqGetIGPosts = (params) => InstaRequest.get(`?fields=id,media_type,media_url,thumbnail_url&access_token=${instaToken}`)