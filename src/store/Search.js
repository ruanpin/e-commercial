import {reqGetProducts} from '../api'

export default {
    namespaced:true,

    actions : {
        async getProducts(){
            let result = await reqGetProducts()
            console.log(result)
        },
    },
    
    mutations : {
    
    },
    
    state : {
        
    },
    
    getters : {
    
    },
}