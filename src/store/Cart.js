
export default {
    namespaced:true,

    actions : {
        addingProduct({commit},cartProduct){
            // localStorage.setItem("cartProducts", JSON.stringify(cartProduct))
            commit('ADDINGPRODUCT', cartProduct)
        },
        gettingProduct({commit},cartProduct) {
            console.log('gettingProduct',cartProduct)
            commit('GETTINGPRODUCT', cartProduct)            
        }
    },
    
    mutations : {
        ADDINGPRODUCT(state, cartProduct){
            if (state.cartList.some(e => e.id == cartProduct.id ) ) {
                state.cartList.find(e => e.id == cartProduct.id).amount += cartProduct.amount
                console.log(state.cartList)
            } else {
                state.cartList.push(cartProduct)
            }
            
        },
        GETTINGPRODUCT(state, cartProduct){
            console.log('GETTINGPRODUCT1',state.cartList)
            
            state.cartList.push(cartProduct) 
            console.log('GETTINGPRODUCT2',state.cartList)
        }
    },
    
    state : {
        cartList:[]
    },
    
    getters : {
    
    },
}