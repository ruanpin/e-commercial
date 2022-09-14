
export default {
    namespaced:true,

    actions : {
        addingProduct({commit},cartProduct){
            localStorage.setItem("cartProducts", JSON.stringify(cartProduct))
        }
    },
    
    mutations : {
        
    },
    
    state : {
        cartList:[]
    },
    
    getters : {
    
    },
}