<template>
  <div class="footer-container">
    <div class="info-section">
      <div class="info-title">購物須知</div>
      <div class="info"><span class="goPage" @click="goChangePolicy">退換貨政策</span></div>
      <div class="info"><span class="goPage" @click="goPrivacyPolicy">隱私權政策</span></div>
    </div>
    <div class="info-section">
      <div class="info-title">保養須知</div>
      <div class="info"><span class="goPage" @click="goMaintain">礦石保養</span></div>
    </div>
    <div class="info-section">
      <div class="info-title">聯絡我們</div>
      <div class="info iconDiv"><i class="fa-solid fa-phone"></i><div class="p">02-12345678</div></div>
      <div class="info iconDiv"><i class="fa-regular fa-envelope"></i><div class="p">12345678@gmail.com</div></div>
      <div class="info iconDiv"><i class="fa-solid fa-city"></i><div class="p">110 台北市信義區市府路45號</div></div>
    </div>
  </div>
</template>

<script>
    export default {
        name:'Footer',
        methods:{
          goChangePolicy(){
            this.$router.push({
              name:'ChangePolicy'
            })
          },
          goPrivacyPolicy(){
            this.$router.push({
              name:'PrivacyPolicy'
            })
          },
          goMaintain(){
            this.$router.push({
              name:'Maintain'
            })
          }
        },
    }
</script>

<style lang="scss" scoped>
i {
  margin-right:0.5rem;
  // position: absolute;
  // transform: translateY(20%);
}
.goPage {
  cursor:pointer;
}

  .footer-container {
    display:flex;
    justify-content: flex-start;
    align-items: center;
    height: 10rem;
    .info-section {
      margin-top:2.5rem;
      width: 25%;
      height: 100%;
      font-size:1.05rem;
      display:flex;
      flex-direction: column;
      line-height: 1.5rem;
      .info-title {
        margin-bottom:1rem;
        color:rgb(163,138,122);
        font-weight: 700;
      }
      .iconDiv {
        display:flex;
        align-items: center;
        margin-top:0.35rem;
      }
      .p {
        position: absolute;
        margin-left:2rem;
      }
    }
  }
</style>