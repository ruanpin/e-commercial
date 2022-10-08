# 電子商務網站

## <a href="https://www.ruanpin23.com/#/portfolioShow">網站介紹</a>

這是一個使用Vue建立的電子商務前端專案，再搭配簡易後端及資料庫來完成資料的增刪查改等功能。
為虛構的礦石品牌 Crystal 打造的購物網站。網站使用者為消費者，消費者可在前台網站享受流暢的購物體驗、查看該品牌Instagram最新貼文及活動資訊、註冊/登入會員、並可在後台進行查詢會員訂單等多功能體驗。


> <a href="https://www.ruanpin23.com/#/portfolioShow">Crystal 購物網站</a>


## 目錄結構說明
```
|-- e-commercial
    |-- .gitignore
    |-- babel.config.js
    |-- jsconfig.json
    |-- package-lock.json
    |-- package.json
    |-- README.md
    |-- vue.config.js
    |-- dist
    |   |-- favicon.ico
    |   |-- index.html
    |   |-- css
    |   |   |-- app.807fce01.css
    |   |   |-- cssReset.css
    |   |-- fontAwesome
    |   |   |-- css
    |   |   |   |-- all.css
    |   |   |   |-- all.min.css
    |   |   |   |-- brands.css
    |   |   |   |-- brands.min.css
    |   |   |   |-- fontawesome.css
    |   |   |   |-- fontawesome.min.css
    |   |   |   |-- regular.css
    |   |   |   |-- regular.min.css
    |   |   |   |-- solid.css
    |   |   |   |-- solid.min.css
    |   |   |   |-- svg-with-js.css
    |   |   |   |-- svg-with-js.min.css
    |   |   |   |-- v4-font-face.css
    |   |   |   |-- v4-font-face.min.css
    |   |   |   |-- v4-shims.css
    |   |   |   |-- v4-shims.min.css
    |   |   |   |-- v5-font-face.css
    |   |   |   |-- v5-font-face.min.css
    |   |   |-- webfonts
    |   |       |-- fa-brands-400.ttf
    |   |       |-- fa-brands-400.woff2
    |   |       |-- fa-regular-400.ttf
    |   |       |-- fa-regular-400.woff2
    |   |       |-- fa-solid-900.ttf
    |   |       |-- fa-solid-900.woff2
    |   |       |-- fa-v4compatibility.ttf
    |   |       |-- fa-v4compatibility.woff2
    |   |-- home
    |   |   |-- banner1.png
    |   |   |-- banner2.png
    |   |-- images
    |   |   |-- product1.png
    |   |   |-- product2.png
    |   |   |-- product3.png
    |   |   |-- product4.png
    |   |-- js
    |   |   |-- app.15ae2406.js
    |   |   |-- app.15ae2406.js.map
    |   |   |-- chunk-vendors.a44a6ea9.js
    |   |   |-- chunk-vendors.a44a6ea9.js.map
    |   |-- logo
    |       |-- logo.svg
    |-- public
    |   |-- favicon.ico
    |   |-- index.html
    |   |-- about
    |   |   |-- about.jpg
    |   |-- css
    |   |   |-- cssReset.css
    |   |-- fontAwesome
    |   |   |-- css
    |   |   |   |-- all.css
    |   |   |   |-- all.min.css
    |   |   |   |-- brands.css
    |   |   |   |-- brands.min.css
    |   |   |   |-- fontawesome.css
    |   |   |   |-- fontawesome.min.css
    |   |   |   |-- regular.css
    |   |   |   |-- regular.min.css
    |   |   |   |-- solid.css
    |   |   |   |-- solid.min.css
    |   |   |   |-- svg-with-js.css
    |   |   |   |-- svg-with-js.min.css
    |   |   |   |-- v4-font-face.css
    |   |   |   |-- v4-font-face.min.css
    |   |   |   |-- v4-shims.css
    |   |   |   |-- v4-shims.min.css
    |   |   |   |-- v5-font-face.css
    |   |   |   |-- v5-font-face.min.css
    |   |   |-- webfonts
    |   |       |-- fa-brands-400.ttf
    |   |       |-- fa-brands-400.woff2
    |   |       |-- fa-regular-400.ttf
    |   |       |-- fa-regular-400.woff2
    |   |       |-- fa-solid-900.ttf
    |   |       |-- fa-solid-900.woff2
    |   |       |-- fa-v4compatibility.ttf
    |   |       |-- fa-v4compatibility.woff2
    |   |-- home
    |   |   |-- banner1.png
    |   |   |-- banner2.png
    |   |-- images
    |   |   |-- product1.png
    |   |   |-- product2.png
    |   |   |-- product3.png
    |   |   |-- product4.png
    |   |-- logo
    |       |-- logo.svg
    |-- src
        |-- App.vue
        |-- main.js
        |-- api
        |   |-- index.js
        |   |-- member.js
        |   |-- mock.js
        |   |-- request.js
        |-- assets
        |   |-- logo.png
        |-- components
        |   |-- Footer
        |   |   |-- index.vue
        |   |-- Navtop
        |   |   |-- index.vue
        |   |-- Pagination
        |       |-- index.vue
        |-- mock
        |   |-- mockServer.js
        |   |-- products.json
        |-- pages
        |   |-- About
        |   |   |-- index.vue
        |   |-- Cart
        |   |   |-- index.vue
        |   |-- ChangePolicy
        |   |   |-- index.vue
        |   |-- Home
        |   |   |-- index.vue
        |   |-- Maintain
        |   |   |-- index.vue
        |   |-- Member
        |   |   |-- index.vue
        |   |-- MemberInfo
        |   |   |-- index.vue
        |   |-- Order
        |   |   |-- index.vue
        |   |-- OrderDone
        |   |   |-- index.vue
        |   |-- PrivacyPolicy
        |   |   |-- index.vue
        |   |-- Products
        |   |   |-- index.vue
        |   |   |-- ProductDetail
        |   |       |-- index.vue
        |   |-- SignUp
        |   |   |-- index.vue
        |   |-- SignUpDone
        |       |-- index.vue
        |-- router
        |   |-- index.js
        |-- store
        |   |-- Cart.js
        |   |-- index.js
        |   |-- Insta.js
        |   |-- Member.js
        |   |-- MemberInfo.js
        |   |-- ProductDetail.js
        |   |-- Search.js
        |-- utils
            |-- InstaToken.js
```


## 功能
<ul>
    <li>首頁 - 最新促銷活動(Banner)、最新上架產品、官方Instagram最新貼文 </li>
    <li>產品選購頁 - 可以關鍵字搜尋想要的產品、並加入購物車或馬上購買結帳 </li>
    <li>關於頁 - 官方背景敘述 </li>
    <li>購物車/結帳頁 - 可勾選欲結帳商品、登入會員後可進行結帳並完成該筆訂單 </li>
    <li>登入/註冊頁 - 進行註冊/登入功能、登入後可在後台查看歷史訂單 </li>
</ul>

## 使用技術和第三方套件

<ul>
    <li>Vue - Function Components + Hooks </li>
    <li>Vue Router - Web App 路由管理 </li>
    <li>VueX - 狀態統一管理 </li>
    <li>Axios - 發送AJAX請求串接後端API </li>
    <li>Mock.js - 攔截AJAX請求，模擬數據生成器，協助前端開發與後端進度分離 </li>
    <li>Swiper - Carousel 輪播圖組件 </li>
    <li>nprogress - AJAX請求進度條 </li>
    <li>fontAwesome - 圖標 </li>
    
</ul>


## 如何執行

注意：如在其他電腦上執行，將無法獲取Instagram貼文，因Instagram相關Token並未上傳至此repo

注意：此專案需先至 https://github.com/ruanpin/easyServer 網址clone後端專案及安裝MongoDB(v6.0.1)，並先執行資料庫及該後端專案才可正確執行前端註冊/登入/訂單建立/訂單查詢等功能。

###安裝此專案需要的第三方套件
```
npm install 
```

###執行此前端專案，並可在 http://localhost:8080/ 體驗此電子商務專案
```
npm run serve 
```

