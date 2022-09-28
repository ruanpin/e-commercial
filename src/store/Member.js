import {reqPostSignUp} from '../api'

export default {
    namespaced:true,

    actions : {
        //使用axios創建出來的instance發請求給後端後，回來的資料如result.msg
        //但直接使用axios發請求給後端，回來的資料如result.data.msg，需再加上.data才能取得
        async postSignUp({commit},signUpInfo) {
            let result = await reqPostSignUp(signUpInfo)
            commit('POSTSIGNUP',result)
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

        }
    

    },
    
    state : {
        msg : '',
        success:''
    },
    
    getters : {
    
    },
}