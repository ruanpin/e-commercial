import {reqPostProductDetail} from '../api'

export default {
    namespaced:true,

    actions : {
        async postProductDetail({commit},productID) {
            let result = await reqPostProductDetail(productID)
            if (result.code === 200) {
                commit('GETPRODUCTDETAIL', result)
            }
        }
    },
    
    mutations : {
        GETPRODUCTDETAIL(state, result){
            let { data } = result

            state.productDetail = data
        }
    },
    
    state : {
        productDetail:[]
    },
    
    getters : {
    
    },
}