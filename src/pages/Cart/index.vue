<template>
  <div class="cart-container">
      <div class="title-area">
            <div class="left">
                <div class="checkbox">
                    <input type="checkbox" id="allChecked" >
                    <label for="allChecked">全選</label>
                </div>
                <div class="title">商品</div>
            </div>
          
            <div class="right">
                <div class="title">單價</div>
                <div class="title">數量</div>
                <div class="title">總計</div>
                <div class="title">刪除</div>
            </div>
          
      </div>
      <div class="cart-panel">

      </div>
  </div>
</template>

<script>
    export default {
        name:'Cart',
    }
</script>

<style lang="scss" scoped>
    // 以下通用-----------------------
    input {
        width: 1.2rem;
        height: 1.2rem;
        appearance: checkbox;
        margin-right:0.3rem;
    }
    // 以上通用-----------------------

    .cart-container {
        display:flex;
        flex-direction: column;
        background-color: rgb(174, 212, 158);
        .title-area {
            display:flex;
            align-items: center;
            justify-content: space-between;
            padding:1.5em;
            .left {
                display:flex;
                align-items: center;
                .checkbox {
                    display:flex;
                    align-items: center;
                    margin-right:1.5em;
                }
            }
            .right {
                display:flex;
                align-items: center;
                width: 50%;
                .title {
                    width: 25%;
                    text-align: center;
                }
            }
        }
    }
</style>