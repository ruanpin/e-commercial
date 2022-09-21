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
    
    <div class="home-intro">
      
    </div>
  </div>
</template>

<script>
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
      }
    }
}
</script>

<style lang="scss" scoped>
  .home-container {
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

    .app-container {
      #mySwiper{
        width: 100%;
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
    //swiper控制項----------------------------以下-----------
    .swiper-slide.swiper_slide_item{
        // height: 98vh;
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

  }
</style>