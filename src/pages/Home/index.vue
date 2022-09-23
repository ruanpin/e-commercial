<template>
  <div class="home-container">
    <!-- Swiper@5.4.5--vue-awesome-swiper@4.1.1-------------------->
    <div class="app-container">
        <swiper :options="swiperOption" id="mySwiper">

            <!-- 輪播圖分頁 -->
            <swiper-slide class="swiper_slide_item slide1">
                <img src="/home/banner1.png" alt="banner">
                <button @click="goShopping">去購物</button>
            </swiper-slide>
            <swiper-slide class="swiper_slide_item slide2">
                <img src="/home/banner2.png" alt="banner">
                <button @click="goShopping">前往購物</button>

            </swiper-slide>

            <!-- 下方動態小圓點 -->
            <div class="swiper-pagination" slot="pagination"></div>
            <!-- 控制左右按鈕 -->
            <div class="swiper-button-prev swiper-btn" slot="button-prev"></div> 
            <div class="swiper-button-next swiper-btn" slot="button-next"></div>
        </swiper>
    </div>
    <div class="home-title"><i class="fa-solid fa-champagne-glasses title-icon"></i>最新上市</div>
    <ul class="showArea-container">
      <li class="card-container" v-for="item in promoteList" :key="item.id">
        <div class="img-container">
          <img :src="item.imgUrl" @click="showProductDetail(item.id)">
        </div>
        <div class="text-container">
          <div class="title brief-info">{{item.name}}</div>
          <div class="priceRemainingArea">
            <div class="price brief-info">$ {{item.price}}</div>
            <!-- <div class="remaining brief-info">剩餘{{item.remaining}}件</div> -->
          </div>
          <div class="info brief-info">{{item.info}}</div>
        </div>
      </li>
    </ul>
    <div class="title-BG"><div class="home-title"><i class="fa-brands fa-instagram IG-color"></i>instagram 最新貼文</div></div>
    <ul class="insta-container">
      <li class="img-container" v-for="post in postList" :key="post.id">
        <a :href="post.permalink"><img class="img-IG" :src="post.media_url" alt="Photos from IG"></a>
      </li>
    </ul>

  </div>
</template>

<script>
import {mapState} from 'vuex'

export default {
  
    name:'Home',
    data(){
      return {
        // 設定Swiper選項---------------------------------
        swiperOption: {
            //分頁器選項
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
                type: 'bullets', 
                dynamicBullets: true,  //可隱藏其他的分頁器圓點(type為bullets時)
                // renderBullet(index, className) {       // 自訂樣式
                //     return `<span class="${className} swiper-pagination-bullet-custom">${index + 1}</span>`
                // },
            },
            direction: 'horizontal', // 方向:水平或垂直
            navigation: {   //左右按鈕
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev' 
            },
            //播放選項
            loop: true, 
            speed: 1000, // 切換時速度
            autoplay: {
                delay: 5000, // 每頁停留多久
                disableOnInteraction: false, // 使用者操作後，會不會停止自動撥放功能
                stopOnLastSlide: true, // true:當轉到最後一頁便不會再轉動(loop:true時無效)
            },
        },
      }
    },
    methods:{
      goShopping(){
        this.$store.dispatch("Search/postProducts",{
          keyword:'',
          pageNow:1,
          productsShowNumInOnePage:4,
        })
        this.$router.push({
          path:'/products',
        })
      },
      showProductDetail(productID){
        this.$router.push({
          name:'ProductDetail',
          params:{
            productID
          }
        }).catch(err => {});
      },
    },
    computed:{
        // productsList : state => state.Search.productsList, //與下方相同
        //...mapState('Search',{ //與下方相同
        //productsList : 'productsList'
        //}),
      ...mapState('Search',['promoteList']),
      ...mapState('Insta',['postList'])
    },
    mounted(){
      //往資料庫撈新品
      this.$store.dispatch("Search/getPromoteProducts",{
        promote:true
      })
      //拿IG貼文
      this.$store.dispatch("Insta/gettingPostsIG",JSON.parse(localStorage.getItem('InstaPosts')) || [])
      if (this.postList.length) return
      this.$store.dispatch("Insta/getPostsIG")
      
    }
}
</script>

<style lang="scss" scoped>
  .home-container {
    // width: 100%;
    //通用-------------以下----------------
    button {
      width: 12rem;
      height: 5rem;
      font-size: 2.2rem;
      position:absolute;
      top:0rem;
      left:0rem;
      border-radius: 5rem;
      border:0;
      font-weight: 700;
      cursor:pointer;
    }
    //通用--------------以上---------------

    //swiper控制項----------------------------以下-----------
    .swiper-slide.swiper_slide_item{
        // height: 98vh;
        max-width: 1345px;
        height: 700px;
        background-color:rgb(245,235,216);

    }
    .swiper-pagination-bullet-custom .swiper-pagination-bullet{
        width: 20px !important;
        height: 20px !important;
    }
    #mySwiper {
        --swiper-navigation-color:white;
        --swiper-pagination-color:white;
    }
    //swiper控制項----------------------------以上-----------

    .app-container {
      #mySwiper{
        width: 100%;
        max-width: 1345px;
        // height: 98vh;
        height: 700px;
        background-color: rgb(184, 209, 201);
        .slide1 {
          button {
            transform: translate(460%,520%);
            background-color: rgb(245,235,216);
          }
        }
        .slide2 {
          button {
            transform: translate(95%,570%);
            background-color: rgb(148,117,97);
            color:#FFF;
          }
        }
      }
    }
    .home-title {
      font-size:1.6rem;
      text-align: center;
      margin:1rem 0;
      margin-top:4rem;
      padding:1.2rem;
      background-color: rgb(184, 156, 137);
      font-weight: 700;
      color:#fff;
      .title-icon {
        margin-right:1rem;
        color:#fff;
      }
    }
    .IG-color{
      color: transparent;  
      background: -webkit-radial-gradient(30% 107%, circle, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%);
      background: -o-radial-gradient(30% 107%, circle, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%);
      background: radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%);
      background: -webkit-radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%);
      background-clip: text;
      -webkit-background-clip: text;
      margin-right:1rem;
      font-weight: 700;
      font-size: 1.8rem;
    }
    // .title-BG {
    //   background-color: rgb(158, 167, 145);
    // }
    .showArea-container {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      width: 100%;
      .card-container {
        max-width: 23%;
        min-height: 13em;
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: center;
        // background-color:rgb(245, 245, 245);
        background-color:rgba(205, 217, 182, 0.55);
        // background-color:rgb(245,235,216);
        border-radius: 5px;
        margin:1rem 13.5% 1.5rem 13.5%;
        
        .img-container {
          width: 90%;
          height: 60%;
          margin:1.5em;
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
            // text-align: center;
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
    .insta-container{
      // width: 25%;
      display:flex;
      justify-content: center;
      .img-container {
        width: 23%;
        margin:0 0.2rem;
        // display:flex;
      //   justify-content: center;
      //   align-items: center;
      }
      .img-IG {
        width: 100%;
      }
    }


  }
</style>