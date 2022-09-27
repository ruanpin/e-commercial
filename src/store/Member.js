import {reqPostSignUp} from '../api'

export default {
    namespaced:true,

    actions : {
        //
        async postSignUp({commit},signUpInfo) {
            // let {username, password} = signUpInfo
            // console.log('14654165456',signUpInfo)
            let result = await reqPostSignUp(signUpInfo)

            commit('POSTSIGNUP',result)
        },
    },
    
    mutations : {
        POSTSIGNUP(state, result){
            if (result.data.msg == '註冊成功') {
                state.msg = result.data.msg
            }
        },
        RESETMSG(state){
            state.msg = ''
        }
    

    },
    
    state : {
        msg : ''
    },
    
    getters : {
    
    },
}