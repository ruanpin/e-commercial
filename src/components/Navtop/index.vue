<template>
  <div class="container">
    <div class="logo">logo</div> 
    <ul class="pages-btn">
      <li><router-link to="/home">Home</router-link></li>
      <li><router-link to="/products">Products</router-link></li>
      <li><router-link to="/about">About</router-link></li>
    </ul>
    <div class="member"><i class="fa-solid fa-user-gear"></i></div>
  </div>
</template>

<script>
    export default {
        name:'Navtop',
    }
</script>

<style lang="scss" scoped>
  .container {
    display:flex;
    justify-content: space-between;
    .logo {
      display:flex;
      justify-content: space-around;
      align-items: center;
      width: 30%;      
    }
    .pages-btn {
      display:flex;
      justify-content: space-around;
      align-items: center;
      width: 30%;
      a {
        color:black;
        font-weight: 700;
        font-size: 1.5em;
      }
      .router-link-active{
        color:rgb(117, 177, 6);
        border-bottom: 1px rgb(117, 177, 6) solid;
      }
      
    }

    .member {
      display:flex;
      justify-content: space-around;
      align-items: center;
      width: 30%;    
      i {
        font-size:2.3em;
        cursor:pointer;
      }        
    }
  }
</style>