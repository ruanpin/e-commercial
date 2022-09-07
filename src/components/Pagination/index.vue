<template>
  <div class="pagination-container">
        <!-- 上 -->
        <button v-show="!(pageNow == 1)" @click="$emit('updatingPageNow', pageNow - 1)">上一頁</button>
        <button v-show="optNumAroundPageNow.start > 1" @click="$emit('updatingPageNow', 1)" :class="{active:pageNow == 1}">1</button>
        <button v-show="optNumAroundPageNow.start > 2">···</button>
        <!-- 中間 -->
        <button  v-for="(page,index) in optNumAroundPageNow.end" 
            :key="index" 
            v-show="page>=optNumAroundPageNow.start"
            @click="$emit('updatingPageNow', page)"
            :class="{active:pageNow == page}"
        >
        {{page}}
        </button>

        <!-- 下 -->
        <button v-show="optNumAroundPageNow.end < pageTotal - 1">···</button>
        <button 
            v-show="optNumAroundPageNow.end < pageTotal" 
            @click="$emit('updatingPageNow', pageTotal)" 
            :class="{active:pageNow == pageTotal}"
        >
            {{pageTotal}}
        </button>
        <button v-show="!(pageNow == pageTotal)&&productsList.length" @click="$emit('updatingPageNow', pageNow + 1)">下一頁</button>
        <!-- <p>一開始 pageTotal:{{pageTotal}}</p> -->

        <button style="margin-left: 30px">共{{pageTotal}}頁</button>
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
        text-align: center;
        .active {
            background-color: skyblue;
        }
        // button {

        // }
    }
</style>