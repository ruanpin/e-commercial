import {reqGetIGPosts} from '../api'

export default {
    namespaced:true,

    actions : {
        //拿IG貼文
        async getPostsIG({commit},searchInfo) {
            let result = await reqGetIGPosts(searchInfo)
            commit('GETPOSTSIG',result)
        },
        gettingPostsIG({commit},localStorageData){
            commit('GETTINGPOSTSIG',localStorageData)
        }
    },
    
    mutations : {
        GETPOSTSIG(state, result){
            let {data} = result

            state.postList = data;
            //拿到貼文資料後存在localStorage，避免重複請求同一個API太多次
            localStorage.setItem("InstaPosts", JSON.stringify(state.postList))

        },
        GETTINGPOSTSIG(state, localStorageData){
            state.postList = localStorageData
        }

    },
    
    state : {
        postList:[]
    },
    
    getters : {
    
    },
}