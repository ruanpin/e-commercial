<template>
  <div class="pagination-container">
    <div class="set-middle-container">
        <div class="back">
            <!-- 上 -->
            <button v-show="!(pageNow == 1)" @click="$emit('updatingPageNow', pageNow - 1)">上一頁</button>
            <button v-show="optNumAroundPageNow.start > 1" @click="$emit('updatingPageNow', 1)" :class="{active:pageNow == 1}">1</button>
            <button class="point-sign" v-show="optNumAroundPageNow.start > 2">···</button>
        </div>
        <div class="middle">
            <!-- 中間 -->
            <button  v-for="(page,index) in optNumAroundPageNow.end" 
                :key="index" 
                v-show="page>=optNumAroundPageNow.start"
                @click="$emit('updatingPageNow', page)"
                :class="{active:pageNow == page}"
            >
            {{page}}
            </button>
        </div>
        
        <div class="next">
            <!-- 下 -->
            <button class="point-sign" v-show="optNumAroundPageNow.end < pageTotal - 1">···</button>
            <button 
                id="lastPage"
                v-show="optNumAroundPageNow.end < pageTotal" 
                @click="$emit('updatingPageNow', pageTotal)" 
                :class="{active:pageNow == pageTotal}"
            >
                {{pageTotal}}
            </button>
            <button id="nextPage" v-show="!(pageNow == pageTotal)&&productsList.length" @click="$emit('updatingPageNow', pageNow + 1)">下一頁</button>
        </div>
    </div>
    <button 
        class="totalPages" 
        style="margin-left: 30px"
        :class="{noResults:!productsList.length}"
    >
        共{{pageTotal}}頁
    </button>
  </div>
</template>

<script>
import {mapState} from "vuex"
export default {
    name:"Pagination",
    //pageNow:目前頁面, productsTotal:一共多少產品, productsShowNumInOnePage:一頁展示多少產品,
    //optionalPage:當前頁面前後可跳轉頁面數量(含當前頁面)
    props:['pageNow','productsTotal','productsShowNumInOnePage','optionalPage'],
    computed:{
        pageTotal(){
            return Math.ceil(this.productsTotal / this.productsShowNumInOnePage);
        },
        optNumAroundPageNow(){
            let start, end;

            if (this.pageTotal < this.optionalPage) {
                start = 1
                end = this.pageTotal
            } else {
                start = this.pageNow - parseInt(this.optionalPage / 2)
                end = this.pageNow + parseInt(this.optionalPage / 2)

                if (start < 1) {
                    start = 1;
                    end = this.optionalPage;
                    }
                
                if (end > this.pageTotal) {
                    end = this.pageTotal;
                    start = this.pageTotal - this.optionalPage + 1;
                }
            }
            return {start, end}

        },
        ...mapState('Search',['productsList'])

    }
}
</script>

<style lang="scss" scoped>
    .pagination-container {
        margin-top:4em;
        margin-bottom:4em;
        display:flex;
        justify-content: center;
        align-items: center;
        // 以下通用CSS--------------------
        .active {
            background-color: rgb(163,138,122);
        }
        button {
            margin-right:1em;
            min-width:2.5em;
            height:2.5em;
            border: 0;
            cursor:pointer;
            // background-color: rgba(150, 156, 138, 0.712);
        }
        .point-sign {
            cursor:default;
        }
        // 以上通用CSS--------------------
        .set-middle-container {
            display:flex;
            min-width: 50%;
            .back {
                display:flex;
                min-width: 33%;
            }
            .middle {
                display:flex;
                min-width: 33%;
                justify-content: center;  
            }
            .next {
                display:flex;
                flex-direction:row-reverse;

                min-width: 33%;
                #lastPage {
                    order:-1;
                }
                #nextPage {
                    order:-2;
                }
            }
        }
        .totalPages {
            cursor:default;
            position:absolute;
            transform: translateX(850%);
        }
        .noResults {
            transform: translateX(0%);
        }
    }
</style>