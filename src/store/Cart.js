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
            
            //判斷如已儲存過相同數據到state.productInfo則return
            if (state.productInfo.some(e => e.id == data[0].id)) return
            // console.log()
            // data[0].buyNum = state.cartList.find(e=>e.id==data[0].id).amount 
            state.productInfo.push(data[0])
        },
        CHANGECARTPRONUMPLUS(state,speCartProduct){
            state.cartList.find(e=>e==speCartProduct).amount += 1
            localStorage.setItem("cartProducts", JSON.stringify(state.cartList))
        },
        CHANGECARTPRONUMMINUS(state,speCartProduct){
            state.cartList.find(e=>e==speCartProduct).amount -= 1 
            localStorage.setItem("cartProducts", JSON.stringify(state.cartList))
        },
        DELETECARTPRODUCT(state,speCartProductID){
            // state.cartList.find(e=>e.id==speCartProductID)
            state.cartList = state.cartList.filter(element => element.id !== speCartProductID)
            localStorage.setItem("cartProducts", JSON.stringify(state.cartList))
        }
    },
    
    state : {
        cartList:[],
        productInfo:[]
    },
    
    getters : {
    
    },
}