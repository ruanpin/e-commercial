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
            //重置勾選狀態為false
            state.cartList.forEach(e=>{
                e.check = false
            })
            localStorage.setItem("cartProducts", JSON.stringify(state.cartList))
        },
        GETCARTPRODUCTINFO(state, cartProductInfo) {
            //將資訊存在state.productInfo陣列中
            let { data } = cartProductInfo
            
            //判斷如已儲存過相同數據到state.productInfo則return
            if (state.productInfo.some(e => e.id == data[0].id)) return
            state.productInfo.push(data[0])
        },
        CHANGECARTPRONUMPLUS(state,speCartProduct){
            state.cartList.find(e=>e==speCartProduct).amount += 1
            //更新localStorage，保持一致性
            localStorage.setItem("cartProducts", JSON.stringify(state.cartList))
        },
        CHANGECARTPRONUMMINUS(state,speCartProduct){
            state.cartList.find(e=>e==speCartProduct).amount -= 1 
            //更新localStorage，保持一致性
            localStorage.setItem("cartProducts", JSON.stringify(state.cartList))
        },
        CHANGECARTPRONUMINPUTREMAINING(state,speCartProduct){
            state.cartList.find(e=>e.id==speCartProduct.id).amount = Number(speCartProduct.remaining)
            //更新localStorage，保持一致性
            localStorage.setItem("cartProducts", JSON.stringify(state.cartList))
        },
        CHANGECARTPRONUMINPUTRSMALLTHAN0(state,speCartProduct){
            state.cartList.find(e=>e.id==speCartProduct.id).amount = 1
            //更新localStorage，保持一致性
            localStorage.setItem("cartProducts", JSON.stringify(state.cartList))
        },
        CHANGECARTPRONUMINPUTINRANGE(state,params){
            let {amount, eachProduct} = params
            state.cartList.find(e=>e.id==eachProduct.id).amount = amount
            localStorage.setItem("cartProducts", JSON.stringify(state.cartList))
        },
        DELETECARTPRODUCT(state,speCartProductID){
            // 刪除cartList中產品
            state.cartList = state.cartList.filter(element => element.id !== speCartProductID)
            //更新localStorage，保持一致性
            localStorage.setItem("cartProducts", JSON.stringify(state.cartList))
        },
        CHANGECHECKED(state,params){
            //找出目標產品，更改check值，再更新localStorage
            state.cartList.find(e=>e.id==params.id).check = params.checkState
            localStorage.setItem("cartProducts", JSON.stringify(state.cartList))
        },
        IFCHECKALL(state, ifChecked){
            // ifChecked: true or false
            // 勾選全選按鈕時，將所有產品勾選狀態統一變為已勾選or未勾選
            state.cartList.forEach(e=>{
                e.check = ifChecked
            })
            localStorage.setItem("cartProducts", JSON.stringify(state.cartList))
        },
        DIRECTLYBUY(state, targetProduct){
            //更改要被直接購買的產品勾選狀態為true
            let target = state.cartList.find(e=>e.id==targetProduct.id)
            target.check = targetProduct.check

            localStorage.setItem("cartProducts", JSON.stringify(state.cartList))
        },
        ORDERDONERESET(state,buyList){
            // 先把目標ID取出
            let targetID = []
            buyList.forEach(e=>{
                targetID.push(e.id)
            })

            //重置cartList
            targetID.forEach(target_id=>{
                let target = state.cartList.findIndex(e => {
                    target_id = e.id
                })
                if (target) state.cartList.splice(target,1)
            })

            // //infoList 也需重置
            targetID.forEach(target_id=>{
                let target = state.productInfo.findIndex(e => {
                    target_id = e.id
                })
                if (target) state.productInfo.splice(target,1)
            })

            //最後同步localStorage
            localStorage.setItem("cartProducts", JSON.stringify(state.cartList))
        }
    },
    
    state : {
        cartList:[],
        productInfo:[]
    },
    
    getters : {
        // cartProducts(state){
        //     return state.productInfo
        // }
    },
}