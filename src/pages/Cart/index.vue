<template>
  <div class="cart-container">
      <div class="title-area">
            <div class="left">
                <div class="checkbox">
                    <input type="checkbox" id="allChecked">
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
          <div class="left">
                <div class="checkbox">
                    <input type="checkbox" id="allChecked">
                </div>
                <div class="product">
                    <div class="img">
                        <img src='/images/product2.jpg' alt="">
                    </div>
                    <div class="product-info">
                        XX水晶
                    </div>
                </div>
          </div>
          <div class="right">
              <div class="title cart-product-infos">$380</div>
              <div id="amount-relative" class="title cart-product-infos">
                <div class="amount-choose">
                    <button class="minus" @click="changeBuyNumBtn('minus')"><i class="fa-solid fa-minus" ></i></button>
                    <input id="amount-input" class="buyNum-input" type="text" v-model="buyNum" @change="changeBuyNumInput">
                    <button class="plus" @click="changeBuyNumBtn('plus')"><i class="fa-solid fa-plus"></i></button>
                </div>
                <div class="remaining">剩餘1件</div>
              </div>
              <div class="title cart-product-infos">$380</div>
              <div class="title cart-product-infos">
                  <a class="delete">刪除</a>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
    export default {
        name:'Cart',
        data(){
            return {
                buyNum:1,
            }
        },
        methods:{
            changeBuyNumBtn(caltype){
                if(caltype=='plus') {
                    if (this.buyNum >= this.product.remaining) return
                    this.buyNum += 1
                } else {
                    if(this.buyNum == 1) return
                    this.buyNum -= 1
                }
            },
            changeBuyNumInput(event){
                if (event.target.value > this.product.remaining) {
                    this.buyNum = this.product.remaining
                } else if(event.target.value < 1) {
                    this.buyNum = 1
                } else if( isNaN(new Number(event.target.value)) ){
                    this.buyNum = 1
                }
            },
        },
        mounted(){
            // localStorage.setItem("todos", JSON.stringify(value))
            // JSON.parse(localStorage.getItem('todos')) || []
        }
    }
</script>

<style lang="scss" scoped>
    // 以下通用-----------------------
    $gbc-color:rgb(175, 224, 226);
    button {
        min-width: 2.5em;
        height:2.5em;
        border:0;
        cursor: pointer;
        
    }

    input {
        width: 1.2rem;
        height: 1.2rem;
        appearance: checkbox;
        margin-right:0.3rem;
    }
    #amount-input {
        border:0;
        text-align: center;
        width: 3em;
        height: 2.5em;
        cursor: text;
        margin-right:0rem;
        margin-bottom:0.5rem;
    }
    .title {
        color:rgb(153,153,153);
    }
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
    // 以上通用-----------------------

    .cart-container {
        display:flex;
        flex-direction: column;
        background-color: rgb(174, 212, 158);
        .title-area {
            display:flex;
            align-items: center;
            justify-content: space-between;
            padding:1.5rem;
            margin-top:1.5rem;
            background-color: $gbc-color;
            // .left {
            //     display:flex;
            //     align-items: center;
            //     .checkbox {
            //         display:flex;
            //         align-items: center;
            //         margin-right:1.5em;
            //     }
            // }
            // .right {
            //     display:flex;
            //     align-items: center;
            //     width: 50%;
            //     .title {
            //         width: 25%;
            //         text-align: center;
            //     }
            // }
        }
        .cart-panel {
            display:flex;
            align-items: center;
            justify-content: space-between;
            padding:1.5em;
            margin:1em 0;
            background-color:$gbc-color;
            .left {
                .product {
                    display:flex;
                    .img {
                        height: 6rem;
                        margin-right:1em;
                        margin-left:2em;
                        img {
                            height: 100%;
                        }
                    }
                }
            }
            .right {
                .cart-product-infos {
                    color:black;
                    // .amount-choose {
                    //     display:flex;
                    // }
                }
                #amount-relative {
                    display:flex;
                    flex-direction: column;
                }
            }
        }
    }
</style>