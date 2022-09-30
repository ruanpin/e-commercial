import {reqGetOrderHistory} from '../api'

export default {
    namespaced:true,

    actions : {
        //連線localhost:5000撈資料庫訂單資料
        async getOrder({commit},token){
            let result = await reqGetOrderHistory(token)
            if (result.getOrders_success) {
                commit('GETORDER',result)
            }
            
        }
    },
    
    mutations : {
        //先暫存在state.targetOrders中以便使用
        GETORDER(state, result){
            let {targetOrders} = result
            // console.log(targetOrders)
            state.targetOrders = targetOrders
        }       
    },
    
    state : {
        targetOrders:[]
    },
    
    getters : {
    
    },
}