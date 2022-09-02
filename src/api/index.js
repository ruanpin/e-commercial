import mockRequests from './mock'

export const reqGetProducts = () => mockRequests.get('/products')
export const reqPostProducts = (params) => mockRequests.post('/products',{data:params})