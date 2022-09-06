import {reqGetProducts, reqPostProducts} from '../api'

export default {
    namespaced:true,

    actions : {
        async getProducts({commit}){
            let result = await reqGetProducts()
            if (result.code === 200) {
                commit('GETPRODUCTS', result)
            }
        },
        async postProducts({commit},searchInfo) {
            let result = await reqPostProducts(searchInfo)
            if (result.code === 200) {
                commit('GETPRODUCTS', result)
            }
        }
    },
    
    mutations : {
        GETPRODUCTS(state, result){
            let {data, amount} = result

            state.productsList = data;
            state.totalAmount = amount;
        }
    },
    
    state : {
        productsList:[],
        totalAmount:0,
    },
    
    getters : {
    
    },
}