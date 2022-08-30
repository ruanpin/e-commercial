import {reqGetProducts} from '../api'

export default {
    namespaced:true,

    actions : {
        async getProducts({commit}){
            let result = await reqGetProducts()
            if (result.code === 200) {
                commit('GETPRODUCTS', result.data)
            }
        },
    },
    
    mutations : {
        GETPRODUCTS(state, data){
            state.productsList = data;
        }
    },
    
    state : {
        productsList:[],
    },
    
    getters : {
    
    },
}