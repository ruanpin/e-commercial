import Vue from 'vue'
import Vuex from 'vuex'

import Search from './Search'
import ProductDetail from './ProductDetail' 
import Cart from './Cart' 
import Insta from './Insta' 
import Member from './Member' 
import MemberInfo from './MemberInfo' 


Vue.use(Vuex)



export default new Vuex.Store({
    modules:{
        Search,
        ProductDetail,
        Cart,
        Insta,
        Member,
        MemberInfo
    }
})