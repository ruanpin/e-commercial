import {reqGetIGPosts} from '../api'

export default {
    namespaced:true,

    actions : {
        //拿IG貼文
        async getPostsIG({commit},searchInfo) {
            let result = await reqGetIGPosts(searchInfo)
            commit('GETPOSTSIG',result)
            console.log('執行')
        },
        gettingPostsIG({commit},localStorageData){
            commit('GETTINGPOSTSIG',localStorageData)
        }
    },
    
    mutations : {
        GETPOSTSIG(state, result){
            let {data} = result

            state.postList = data;
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