<template>
  <div class="product-container">
    <div class="search-container">
      <input type="text" placeholder="搜尋..." name="q" v-model="keyword">
      <button>搜尋</button>
    </div>
    
    <ul class="showArea-container">
      <li class="card-container" v-for="item in productsList" :key="item.id">
        <div class="img-container">
          <img :src="item.imgUrl">
        </div>
        
        <div class="text">
          <p>{{item.name}}</p>
          <p>{{item.info}}</p>
        </div>
      </li>
    </ul>

  </div>
</template>

<script>
import {mapState} from 'vuex'

export default {
    name:'Products',
    data(){
      return{
        keyword:'',
      }
    },
    methods:{
      // sendKeyword(){
      //   this.$router.push({})
      // }
    },
    computed:{
      ...mapState({
        productsList : state => state.Search.productsList,
      })
    }
}
</script>

<style lang="scss" scoped>
  .product-container{
    width: 100%;
    .search-container {
      margin : 2em auto; 
      text-align: center; 
      input {
        width: 20em;
        height: 3em;
        border : 0px solid black;
        border-radius: 1em;
        background-color: rgb(168, 206, 119);
        padding:0 1em;
        &::placeholder {
          color:rgb(36, 36, 36);
        }
      }
      button {
        height: 3em;
        border : 0px solid black;
        border-radius: 1em;
        margin-left:1.8em;
        background-color: rgba(0, 0, 0, 0.849);
        color:#fff;
        padding:0em 1.8em;
        cursor:pointer;
      }
    }
    .showArea-container {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      .card-container {
        max-width: 25%;
        display: flex;
        align-items: center;
        flex-direction: column;
        .img-container {
          width: 90%;
          height: 90%;
          margin:1.5em;
          img {
            width: 100%;
          }
        }
      }
      
    }
  }
</style>