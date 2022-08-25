<template>
  <div id="app">
    <div class="nav-contain">
      <Navtop id="nav"/>
    </div>
    <div class="container">

    </div>
    <Footer/>
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

$max-width:1400px;

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
        .nav-contain {
          background-color: skyblue;
          #nav {
            max-width: $max-width;
            width:85%;
            margin:0px auto;
          }
        }
        
        #container {
          max-width: $max-width;
          width:85%;
          margin:0px auto;
        }
      }
  }


</style>
