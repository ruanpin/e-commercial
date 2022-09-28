<template>
  <div class="container">
    <div class="logo"><img src="/logo/logo.svg" alt=""></div>
    <ul class="pages-btn">
      <li><router-link to="/home">Home</router-link></li>
      <li @click="getAllProducts"><router-link to="/products">Products</router-link></li>
      <li><router-link to="/about">About</router-link></li>
    </ul>
    <div class="users-area">
      <div class="cart"><i class="fa-solid fa-cart-shopping" @click="toggle('cart')"></i><div class="cartNum" v-show="cartList.length">{{cartNum}}</div></div>
      <div class="member"><i class="fa-solid fa-user-gear" @click="toggle('member')"></i></div>
      <div class="log-out" v-show="isLogOutShow" @click="logOut">登出 </div>
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'

    export default {
        name:'Navtop',
        data(){
          return {
            isLogOutShow:false
          }
        },
        methods:{
          toggle(page){
            if (page == 'member') {
              this.$router.push({
                path:'/member',
              })
            } else if (page == 'cart') {
              this.$router.push({
                path:'/cart',
              })
            }
            
          },
          getAllProducts(){
            this.$store.dispatch("Search/postProducts",{
              keyword:'',
              pageNow:1,
              productsShowNumInOnePage:4,
            })
          },
          logOut (){
            this.$store.commit("Member/LOGOUT")
          }
        },
        computed:{
            ...mapState('Cart',['cartList']),
            cartNum(){
              let totalNum = 0;
              this.cartList.forEach(e=>{
                totalNum += Number(e.amount)
              })
              let num = totalNum==0?undefined:totalNum
              return num
            }
        },
        watch:{
          '$store.state.Member.token'(newValue){
            if (newValue) {
              this.isLogOutShow = true
            } else {
              this.isLogOutShow = false
            }
          }
        }
    }
</script>

<style lang="scss" scoped>
i {
  font-size:1.5em;
  cursor:pointer;
}

  .container {
    display:flex;
    justify-content: space-between;
    background-color: rgba(205, 217, 182, 0.692);
    .logo {
      display:flex;
      justify-content: space-around;
      align-items: center;
      width: 30%;    
      img {
        width: 35%;
        // height: 30%;
        object-fit: cover;
      }
    }
    .pages-btn {
      display:flex;
      justify-content: space-around;
      align-items: center;
      width: 30%;
      // margin-top:0.5em;
      a {
        color:black;
        font-weight: 600;
        font-size: 1.35rem;
        border-bottom: 2px transparent solid;
      }
      .router-link-active{
        color:rgb(148, 117, 97);
        // border-bottom: 2px rgb(163,138,122) solid;
        transition: 0.2s ease-in;
      }
      
    }

    .users-area {
      width: 30%;   
      display:flex; 
      justify-content: center;
      align-items: center;
      // margin-top:0.5em;
      .cart {
        display:flex;
        justify-content: space-around;
        align-items: center;
        margin-right:1rem;
        .cartNum {
          color:#fff;
          position:absolute;
          transform:translate(75%,-70%);
          width: 1rem;
          height: 1rem;
          line-height: 1.05rem;
          background-color: rgb(208,1,27);
          border-radius: 50%;
          text-align: center;
          z-index:10;
          font-size:0.8rem;
          pointer-events: none;
        }
      }
      .member {
        display:flex;
        justify-content: space-around;
        align-items: center;
      }
      .log-out {
        cursor:pointer;
        margin-left:1rem;
        
      } 
    }
  }
</style>