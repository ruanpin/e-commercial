import {reqPostSignUp} from '../api'

export default {
    namespaced:true,

    actions : {
        //
        async postSignUp({commit},signUpInfo) {
            // let {username, password} = signUpInfo
            // console.log('14654165456',signUpInfo)
            let result = await reqPostSignUp(signUpInfo)
            console.log(result,'result')

            commit('POSTSIGNUP',result)
        },
    },
    
    mutations : {
        POSTSIGNUP(state, result){
            console.log(result.data.msg,result.data.msg == '註冊成功')
            if (result.data.msg == '註冊成功') {
                state.msg = result.data.msg
            }
            console.log(state.msg)
            
        }
    

    },
    
    state : {
        msg : ''
    },
    
    getters : {
    
    },
}