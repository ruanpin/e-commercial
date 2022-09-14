<template>
  <div class="container">
    <div class="logo">logo</div> 
    <ul class="pages-btn">
      <li><router-link to="/home">Home</router-link></li>
      <li @click="getAllProducts"><router-link to="/products">Products</router-link></li>
      <li><router-link to="/about">About</router-link></li>
    </ul>
    <div class="users-area">
      <div class="cart"><i class="fa-solid fa-cart-shopping" @click="toggle('cart')"></i></div>
      <div class="member"><i class="fa-solid fa-user-gear" @click="toggle('member')"></i></div>
    </div>
  </div>
</template>

<script>
    export default {
        name:'Navtop',
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
          }
        },
    }
</script>

<style lang="scss" scoped>
i {
  font-size:1.7em;
  cursor:pointer;
}

  .container {
    display:flex;
    justify-content: space-between;

    .logo {
      display:flex;
      justify-content: space-around;
      align-items: center;
      width: 30%;     
      margin-top:0.5em; 
    }
    .pages-btn {
      display:flex;
      justify-content: space-around;
      align-items: center;
      width: 30%;
      margin-top:0.5em;
      a {
        color:black;
        font-weight: 700;
        font-size: 1.5em;
        border-bottom: 2px transparent solid;
      }
      .router-link-active{
        color:rgb(117, 177, 6);
        border-bottom: 2px rgb(117, 177, 6) solid;
        transition: 1s ease-in;
      }
      
    }

    .users-area {
      width: 30%;   
      display:flex; 
      justify-content: center;
      align-items: center;
      margin-top:0.5em;
      .cart {
        display:flex;
        justify-content: space-around;
        align-items: center;
        margin-right:1rem;
      }
      .member {
        display:flex;
        justify-content: space-around;
        align-items: center;
      }        
    }
  }
</style>