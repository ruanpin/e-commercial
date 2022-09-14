import Vue from 'vue'
import Vuex from 'vuex'

import Search from './Search'
import ProductDetail from './ProductDetail' 
import Cart from './Cart' 


Vue.use(Vuex)



export default new Vuex.Store({
    modules:{
        Search,
        ProductDetail,
        Cart,
    }
})