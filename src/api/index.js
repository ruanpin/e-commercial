import mockRequests from './mock'
import InstaRequest from './request'

// export const reqGetProducts = () => mockRequests.get('/products')
export const reqPostProducts = (params) => mockRequests.post('/products',{data:params})

export const reqPostProductDetail = (productID) => mockRequests.post('/productDetail',{data:productID})

export const reqGetPromoteProducts = (params) => mockRequests.get('/promotionProduct',{data:params})

export const reqGetIGPosts = (params) => InstaRequest.get(`?fields=id,media_type,media_url,thumbnail_url&access_token=IGQVJXUm9vVHRmeHUtbk1OYm5MVi11ZAXFZAd1E5X2lMSzFmRWM2LVJDNnRJYXhFRVlRZAFl6VVZAHODhNaEs4VjBzekstZAGgtYzF2Q1ZAPYnJkdENERDNzblBTaThETmdTYUdfODQxZAmxn`)