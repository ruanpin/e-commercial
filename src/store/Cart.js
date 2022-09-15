import {reqPostProductDetail} from '../api'

export default {
    namespaced:true,

    actions : {
        addingProduct({commit},cartProduct){
            commit('ADDINGPRODUCT', cartProduct)
        },
        gettingProduct({commit},cartProduct) {
            commit('GETTINGPRODUCT', cartProduct)            
        },
        async getCartProductInfo({commit},cartProductID){
            //從 MOCK Server撈購物車中產品的資訊
            let result = await reqPostProductDetail(cartProductID)
            if (result.code === 200) {
                commit('GETCARTPRODUCTINFO', result)
            }
        }
    },
    
    mutations : {
        ADDINGPRODUCT(state, cartProduct){
            if (state.cartList.some(e => e.id == cartProduct.id ) ) {
                state.cartList.find(e => e.id == cartProduct.id).amount += cartProduct.amount
            } else {
                state.cartList.push(cartProduct)
            }
            //儲存cartList中的購物車數據在localStorage中
            localStorage.setItem("cartProducts", JSON.stringify(state.cartList))
        },
        GETTINGPRODUCT(state, cartProduct){
            //將localStorage中的購物車數據拿出並存在state.cartList中
            state.cartList = cartProduct 
        },
        GETCARTPRODUCTINFO(state, cartProductInfo) {
            //將資訊存在state.productInfo陣列中
            let { data } = cartProductInfo
            state.productInfo.push(data[0])
        }
    },
    
    state : {
        cartList:[],
        productInfo:[]
    },
    
    getters : {
    
    },
}