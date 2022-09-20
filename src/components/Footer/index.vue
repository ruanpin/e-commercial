<template>
  <div class="footer-container">
    <div class="info-section">
      <div class="info-title">購物須知</div>
      <div class="info">退換貨政策</div>
      <div class="info">隱私權政策</div>
    </div>
    <div class="info-section">
      <div class="info-title">保養須知</div>
      <div class="info">礦石保養</div>
    </div>
    <div class="info-section">
      <div class="info-title">聯絡我們</div>
      <div class="info"><i class="fa-solid fa-phone"></i> 電話: 02-12345678</div>
    </div>
  </div>
</template>

<script>
    export default {
        name:'Footer',
    }
</script>

<style lang="scss" scoped>
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
    }
  }
</style>