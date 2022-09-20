<template>
  <div id="app">
    <div id="nav-container">
      <Navtop id="nav"/>
    </div>
    <div id="container">
      <router-view></router-view>
    </div>
    <div id="footer-container">
      <Footer id="footer"/>
    </div>
  </div>
</template>

<script>
import Navtop from './components/Navtop'
import Footer from './components/Footer'


export default {
  name: 'App',
  components: {
    Navtop,
    Footer,
  },
  mounted(){
    this.$store.dispatch("Search/postProducts",{
      keyword:'',
      pageNow:1,
      productsShowNumInOnePage:4,
    })
    //掛載完成後立即取出localStorage內的購物車數據至vuex(Cart.js)中
    this.$store.dispatch("Cart/gettingProduct",JSON.parse(localStorage.getItem('cartProducts')) || [])
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');

$max-show-width:1400px;
$show-width:85%;

  * {
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
  }

  body {
    font-family: 'Poppins', sans-serif;
    position: relative;
    width: 100%;
      #app {
        #nav-container {
          // background-color: skyblue;
          #nav {
            max-width: $max-show-width;
            width:$show-width;
            margin:0px auto;
          }
        }
        
        #container {
          max-width: $max-show-width;
          width:$show-width;
          margin:1em auto;

        }

        #footer-container {
          // background-color: rgb(151, 196, 214);
          border-top:1.5px solid rgb(163,138,122);
          #footer {
            max-width: $max-show-width;
            width:$show-width;
            margin:1em auto;
            margin-bottom:0rem;
          }
        }
      }
  }


</style>
