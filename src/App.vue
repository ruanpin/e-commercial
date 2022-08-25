<template>
  <div id="app">
    <Navtop/>
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
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  h2 {
    color:red;
  }
}
</style>
