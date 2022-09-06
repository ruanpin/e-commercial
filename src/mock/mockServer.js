import Mock from 'mockjs'

import products from './products.json'



Mock.mock('/mock/products','get',{code:200, data:products, amount:products.length})


// 以下為POST---------------------------------------------------
Mock.mock('/mock/products','post',function(options){
    // 將傳過來的params抓出來
    let reqParams = JSON.parse(options.body).data
    // 將keyword抓出來，方便使用
    let filterKeyword = reqParams.keyword
    // 將一頁呈現幾個拿出來(2)
    let productsShowNumInOnePage = reqParams.productsShowNumInOnePage
    // 拿出當前頁面  (5)
    let pageNow = reqParams.pageNow


    //過濾符合keyword的資料，保存在filterData變數
    let filterData = products.filter((data)=>{
        return data.name.includes(filterKeyword)
    });

    //先在Server處理要在頁面呈現那些資料，再回傳給前端，讓前端直接呈現，不需再做處理
    function calShowData (numInAPage, checkPage) {
        let totalNum = filterData.length
        let totalPages = Math.ceil( totalNum /  numInAPage)
        let slicedData;

        // 以下為測試參考用
        // if(numInAPage == 1) {
        //     slicedData = filterData.slice(0,1)
        //     if (checkPage == 2) {
        //         slicedData = filterData.slice(1,2)
        //     } else if (checkPage == 3) {
        //         slicedData = filterData.slice(2,3)
        //     }
        // } else if (numInAPage == 2) {
        //     slicedData = filterData.slice(0,2)
        //     if (checkPage == 2) {
        //         slicedData = filterData.slice(2,4)
        //     } else if (checkPage == 3) {
        //         slicedData = filterData.slice(4,6)
        //     } else if (checkPage == 4) {
        //         slicedData = filterData.slice(6,8)
        //     } else if (checkPage == 5) {
        //         slicedData = filterData.slice(8,10)
        //     }


        (function test (numInAPage) {
            slicedData = filterData.slice(0,numInAPage)
            for (let j = 1; j<totalNum+1; j++) { //j:一頁呈現多少產品 (8)
                if (numInAPage == j) {
                    for (let i = 2; i<totalPages+1; i++){ // i: 目前頁數 (3)
                        if (checkPage == i) {
                            slicedData = filterData.slice(i==2?j:i*j-j , i*j)
                        }
                    }
                }
            }
        })(numInAPage);

        return slicedData;
    };
    let slicedData = calShowData(productsShowNumInOnePage, pageNow)
    


    // 過濾後回傳
    //(data:要被呈現的資料(不包含全部))
    //(amount:關鍵字查詢後總共的數據量)
    return {code:200, data:slicedData, amount:filterData.length}


})
