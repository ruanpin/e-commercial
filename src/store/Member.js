import {reqPostSignUp, reqPostSignIn, reqPostBuy} from '../api'

export default {
    namespaced:true,

    actions : {
        //使用axios創建出來的instance發請求給後端後，回來的資料如result.msg
        //但直接使用axios發請求給後端，回來的資料如result.data.msg，需再加上.data才能取得
        async postSignUp({commit},signUpInfo) {
            let result = await reqPostSignUp(signUpInfo)
            commit('POSTSIGNUP',result)
        },
        async postSignIn({commit}, signInInfo) {
            let result = await reqPostSignIn(signInInfo)
            if (result.login_success) {
                commit('POSTSIGNIN',result)
            } else if (!result.login_success) {
                commit('POSTSIGNINERROR',result)
            }
            
        },
        async reqBuyAction({commit},buyInfo){
            let result = await reqPostBuy(buyInfo)
            if (result.order_success) {
                commit('REQBUYACTION',result)
            }
        },
    },
    
    mutations : {
        POSTSIGNUP(state, result){
            
            state.msg = result.msg
            state.success = result.success
            
        },
        RESETMSG(state){
            state.msg = ''
            state.success = ''

        },
        POSTSIGNIN(state, result) {
            //取得token
            state.token = result.token
            state.login_success = result.login_success
            
            localStorage.setItem("to", JSON.stringify(state.token))
        },
        POSTSIGNINERROR(state,result){
            state.login_msg = result.login_msg
            state.login_success = result.login_success
        },
        RESETINFO(state){
            state.login_msg = ''
            state.login_success = ''
        },
        LOGOUT(state){
            state.token = null
            localStorage.removeItem("to")
        },
        REQBUYACTION(state,result){
            state.order_success = result.order_success
        },
        GETTINGTOKEN(state, token){
            state.token = token
        }
    

    },
    
    state : {
        msg : '',
        success:'',
        token:'',
        login_msg:'',
        login_success:'',
        order_success:false,
    },
    
    getters : {
    
    },
}