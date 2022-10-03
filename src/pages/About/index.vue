<template>
  <div class="about-container">
    <img src="/about/about.jpg">
    <transition name="showup">
      <div class="text" v-show="isAboutShow">
        <h1>品牌簡介</h1>
        <p>於 2007 年的義大利成立，由於創辦人對礦物工藝的喜愛，奠定了 crystal品牌特殊的工藝風格，傳遞礦物本身優雅氣質</p>
        
        <p>「在礦石的世界，就連 1mm 的差異也是無法退讓的堅持。」－ crystal 創辦人</p>
      </div>
    </transition>
    

  </div>
</template>

<script>
export default {
    name:'About',
    data(){
      return {
        isAboutShow:false,

      }
    },
    methods:{
      showItem(){
        // console.log(window.pageYOffset)
        //170
        if (window.pageYOffset > 100) {
          this.isAboutShow = true
          window.removeEventListener('scroll',this.showItem)
        }
      }
    },
    mounted(){
      window.addEventListener('scroll',this.showItem)
    },
    beforeDestroy(){
      window.removeEventListener('scroll',this.showItem)
    }
    
}
</script>

<style lang="scss" scoped>
  .about-container {
    width: 100%;
    font-size: 1.3rem;
    height: 900px;
    img {
      width: 100%;
    }
    .text {
      margin-top: 5rem;
      margin-bottom: 8rem;

      h1 {
        font-weight: 500;
        font-size:1.8rem;
        text-align: center;
        margin-top:2rem;
        margin-bottom:3rem;
      }
      p {
        margin-bottom:2.5rem;
        text-align: center;
      }
    }
    
  }
  @keyframes showUp {
    from {
      transform: translateY(15%);
      opacity: 0;
    }
    to {
      transform: translateY(0%);
      opacity: 1;
    }
  }
  .showup-enter-active {
    animation: showUp 1s;
  }
</style>