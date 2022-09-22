import mockRequests from './mock'

// export const reqGetProducts = () => mockRequests.get('/products')
export const reqPostProducts = (params) => mockRequests.post('/products',{data:params})

export const reqPostProductDetail = (productID) => mockRequests.post('/productDetail',{data:productID})

export const reqGetPromoteProducts = (params) => mockRequests.get('/promotionProduct',{data:params})