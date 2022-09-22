import {reqPostProducts, reqGetPromoteProducts} from '../api'

export default {
    namespaced:true,

    actions : {
        // async getProducts({commit}){
        //     let result = await reqGetProducts()
        //     if (result.code === 200) {
        //         commit('GETPRODUCTS', result)
        //     }
        // },
        async postProducts({commit},searchInfo) {
            let result = await reqPostProducts(searchInfo)
            if (result.code === 200) {
                commit('GETPRODUCTS', result)
            }
        },

        //撈promote products
        async getPromoteProducts({commit},searchInfo){
            let result = await reqGetPromoteProducts(searchInfo)
            if (result.code === 200) {
                commit('GETPROMOTEPRODUCTS', result)
            }
        }
    },
    
    mutations : {
        GETPRODUCTS(state, result){
            let {data, amount} = result

            state.productsList = data;
            state.totalAmount = amount;
        },
        GETPROMOTEPRODUCTS(state, result){
            let {data} = result

            state.promoteList = data
        }
    },
    
    state : {
        productsList:[],
        totalAmount:0,
        promoteList:[]
    },
    
    getters : {
    
    },
}