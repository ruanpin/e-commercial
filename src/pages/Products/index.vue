<template>
  <div class="product-container">
    <div class="search-container">
      <div class="search-icon"><div class="icon-container"><i class="fa-solid fa-magnifying-glass"></i></div></div>
      <input type="text" placeholder="搜尋..." name="q" v-model="searchInfo.keyword" ref="keywordInput" @keyup.enter="handleSearch">
      <button @click="handleSearch">搜尋</button>
    </div>

    <!-- v-show配置:點擊單一產品進入商品介紹頁後此showArea-container消失 -->
    <ul class="showArea-container" v-show="$route.path == '/products'">
      <li class="card-container" v-for="item in productsList" :key="item.id">
        <div class="img-container">
          <span :class="{newProduct:item.new==true}" v-show="item.new">NEW ARRIVAL</span>          
          <img :src="item.imgUrl" @click="showProductDetail(item.id)">
        </div>
        <div class="text-container">
          <div class="title brief-info">{{item.name}}</div>
          <div class="priceRemainingArea">
            <div class="price brief-info">$ {{item.price}}</div>
            <div class="remaining brief-info">剩餘{{item.remaining}}件</div>
          </div>
          <div class="info brief-info">{{item.info}}</div>
        </div>
      </li>
    </ul>

    <div class="result-tips" v-show="!productsList.length">
      <p class="icon"><i class="fa-solid fa-magnifying-glass"></i></p>
      <p>找不到此類商品</p>
    </div>

    <div class="product-detail" >
      <button class="returnPage" v-show="!($route.path == '/products')" @click="returnPage">上一頁</button>
      <router-view></router-view>
    </div>

    <!-- pageNow:目前頁面, productsTotal:一共多少產品, productsShowNumInOnePage:一頁展示多少產品,
    optionalPage:當前頁面前後可跳轉頁面數量(含當前頁面) -->
    <!-- v-show配置:點擊單一產品進入商品介紹頁後此showArea-container消失 -->
    <Pagination :pageNow="searchInfo.pageNow" 
      :productsTotal="totalAmount" 
      :productsShowNumInOnePage="searchInfo.productsShowNumInOnePage" 
      :optionalPage="5" 
      @updatingPageNow="updatingPageNow"
      v-show="$route.path == '/products'"
    />
  </div>
</template>

<script>
import {mapState} from 'vuex'

export default {
    name:'Products',
    data(){
      return{
        searchInfo:{ 
          //keyword:查詢關鍵字
          //pageNow:當前頁面,  productsShowNumInOnePage:一頁顯示多少商品, 
          keyword:'',
          pageNow:1,
          productsShowNumInOnePage:4,
        },
      }
    },
    methods:{
      requestData(){
        this.$store.dispatch("Search/postProducts",this.searchInfo)
      },
      handleSearch(){
        this.$router.push({
          name:'Products',
          query:{
            searchInfo:this.searchInfo,
          }
        }).catch(err => {});

        //修復bug---(發出請求後回來的數據頁面與分頁器當前頁面可能不一致)
        if (this.searchInfo.pageNow !=1) {
          this.searchInfo.pageNow = 1
        }
        this.requestData();
      },
      updatingPageNow(resPage){
        if (this.searchInfo.pageNow == resPage) return //若點擊當前頁面按鈕則不會發請求
        this.searchInfo.pageNow = resPage
        this.requestData();
      },
      showProductDetail(productID){
        this.$router.push({
          name:'ProductDetail',
          params:{
            productID
          }
        }).catch(err => {});
        //此處不發請求，只傳遞productID到$route屬性中，再交由ProductDetail component掛載完成後發請求(為解決重新整理後數據清空問題)
      },
      returnPage(){
        this.$router.go(-1);
      }
    },
    computed:{
        // productsList : state => state.Search.productsList, //與下方相同
        //...mapState('Search',{ //與下方相同
        //productsList : 'productsList'
        //}),
      ...mapState('Search',['productsList','totalAmount'])
    },
    mounted(){
      this.$store.dispatch("Search/postProducts",{
        keyword:'',
        pageNow:1,
        productsShowNumInOnePage:4,
      })
    }
}
</script>

<style lang="scss" scoped>
  button {
    height: 3em;
    border : 0px solid black;
    border-radius: 5px;
    margin-left:1.8em;
    background-color: rgba(101,122,141, 0.849);
    color:#fff;
    padding:0em 1.8em;
    cursor:pointer;
  }

  .product-container{
    width: 100%;
    .search-container {
      margin : 2em auto; 
      display:flex;
      justify-content: center;
      .search-icon {
        display:flex;
        justify-content: center;
        align-items: center;
        i {
          font-size:1.6rem;
          margin-right:0.3rem;
        }
      }
      input {
        width: 20em;
        height: 3em;
        border : 1.8px solid rgb(101,122,141);
        border-radius: 5px;
        background-color:rgb(250,250,250);
        padding:0 1em;
        &::placeholder {
          color:rgb(94, 94, 94);
        }
      }

    }
    .showArea-container {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      .card-container {
        max-width: 23%;
        min-height: 13em;
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: center;
        // background-color:rgb(245, 245, 245);
        // background-color:rgba(205, 217, 182, 0.55);
        background-color:rgb(245,235,216);
        border-radius: 5px;
        margin:0em 1%;
        // overflow: hidden;
        
        .img-container {
          width: 90%;
          height: 60%;
          margin:1.5em;
          .newProduct {
            position:absolute;
            transform: translateY(30%);
            padding : 0.5rem;
            background-color: rgb(228,234,215);
            font-weight: 700;
            opacity: 0.9;
          }
          img {
            width: 100%;
            cursor: pointer;
          }
        }
        .text-container {
          display:flex;
          flex-direction: column;
          align-items: flex-start;
          width: 90%;
          margin-bottom:1.2em;
          .brief-info {
            margin-bottom:0.3em;
          }
          .title {
            font-weight: 700;
            font-size: 1.25em;
          }
          .priceRemainingArea {
            display:flex;
            justify-content: space-between;
            align-items: center;
            width: 100%;
            .price {
              color:rgb(208,1,27);
              font-size: 1.3em;
            }
            .remaining {
              color:rgb(53, 53, 53);
            }
          }
          .info {
            color:rgb(53, 53, 53);
            margin-top:0.6em;
          }
        }
      }
      
    }
    .result-tips {
      .icon {
        i {
          font-size: 30px;
          color:black;
          opacity: 0.7;
          line-height: 1.3em;
        }
      }
      p {
        text-align: center;
      }
    }
    .product-detail {
      .returnPage {
        position: absolute;
        transform: translateY(-180%);
      }
    }
  }
</style>