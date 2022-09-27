import {reqPostSignUp} from '../api'

export default {
    namespaced:true,

    actions : {
        //
        async postSignUp({commit},signUpInfo) {
            // let {username, password} = signUpInfo
            let result = await reqPostSignUp(signUpInfo)
            debugger;
            console.log(result)
            // commit('GETPOSTSIG',result)
        },
        // gettingPostsIG({commit},localStorageData){
        //     commit('GETTINGPOSTSIG',localStorageData)
        // }
    },
    
    mutations : {
        // GETPOSTSIG(state, result){
        //     let {data} = result

        //     state.postList = data;
        //     //拿到貼文資料後存在localStorage，避免重複請求同一個API太多次
        //     localStorage.setItem("InstaPosts", JSON.stringify(state.postList))

        // },
    

    },
    
    state : {

    },
    
    getters : {
    
    },
}