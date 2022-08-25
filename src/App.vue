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
          background-color: rgb(151, 196, 214);
          #footer {
            max-width: $max-show-width;
            width:$show-width;
            margin:1em auto;
          }
        }
      }
  }


</style>
