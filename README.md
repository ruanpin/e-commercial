# 電子商務網站

## <a href="https://www.ruanpin23.com/#/portfolioShow">網站介紹(截圖)</a>

這是一個使用Vue建立的電子商務前端專案，再搭配簡易後端及資料庫來完成資料的增刪查改等功能。
為虛構的礦石品牌 Crystal 打造的購物網站。網站使用者為消費者，消費者可在前台網站享受流暢的購物體驗、查看該品牌Instagram最新貼文及活動資訊、註冊/登入會員、並可在後台進行查詢會員訂單等多功能體驗。

## 目錄結構說明
e-commercial
├── public
│   ├── favicon.ico
│   ├── index.html
│   ├── manifest.json
│   └── robots.txt
├── src
│   ├── API
│   │   ├── fetchAPI.js
│   │   ├── imgurAPI.js
│   │   └── WEBAPI.js
│   ├── components
│   │   ├── App
│   │   │   ├── App.js
│   │   │   └── App.test.js
│   │   ├── common
│   │   │   ├── Counter.js
│   │   │   ├── Dropdown.js
│   │   │   ├── EachErrorMessage.js
│   │   │   ├── Errormessage.js
│   │   │   ├── IconMark.js
│   │   │   ├── index.css
│   │   │   ├── Item.js
│   │   │   ├── Loading.js
│   │   │   ├── PageBtn.js
│   │   │   ├── PopModal.js
│   │   │   └── ProductsSectionTiTleContent.js
│   │   ├── Footer
│   │   │   ├── Footer.js
│   │   │   └── index.js
│   │   ├── Header
│   │   │   ├── Header.js
│   │   │   └── index.js
│   │   ├── img
│   │   │   ├── banner
│   │   │   ├── homePhoto
│   │   │   ├── icon
│   │   │   └── product
│   │   ├── routes
│   │   │   └── ProtectedRoutes.js
│   │   └── Style
│   │       └── style.js
│   ├── context.js
│   ├── hooks
│   │   ├── carts
│   │   │   ├── shipping
│   │   │   ├── useAddCartItems.js
│   │   │   ├── useCartApi.js
│   │   │   ├── useCount.js
│   │   │   ├── useDebounce.js
│   │   │   ├── useGetSingleProduct.js
│   │   │   ├── useRecommendsApi.js
│   │   │   ├── useScroll.js
│   │   │   ├── useShipping.js
│   │   │   └── useShippingApi.js
│   │   ├── common
│   │   │   ├── useHeader.js
│   │   │   └── usePagination.js
│   │   ├── discountHooks
│   │   │   ├── useDiscount.js
│   │   │   └── useEditDiscount.js
│   │   ├── orders
│   │   │   ├── useFIndAllOrder.js
│   │   │   └── useOneOrder.js
│   │   ├── paginationHooks
│   │   │   └── usePagination.js
│   │   ├── productHooks
│   │   │   ├── useAddProduct.js
│   │   │   ├── useAdminProducts.js
│   │   │   ├── useAdminRestoreProducts.js
│   │   │   ├── useCategory.js
│   │   │   ├── useFindHotProducts.js
│   │   │   ├── useFindNewProducts.js
│   │   │   ├── useFindProducts.js
│   │   │   ├── useFindRecommendProducts.js
│   │   │   ├── useHotProducts.js
│   │   │   ├── useSearchProducts.js
│   │   │   └── useUpdateProduct.js
│   │   └── user
│   │       ├── useLogin.js
│   │       ├── useRegister.js
│   │       ├── useSingleTransaction.js
│   │       ├── useTransaction.js
│   │       ├── useUpadtePassword.js
│   │       ├── useUpdateUserInfo.js
│   │       └── useUser.js
│   ├── index.css
│   ├── index.js
│   ├── normalize.css
│   ├── pages
│   │   ├── AddProductPage
│   │   │   ├── AddProductPage.js
│   │   │   └── index.js
│   │   ├── Admin
│   │   │   ├── components
│   │   │   ├── index.js
│   │   │   └── OrderPage.js
│   │   ├── AdminProductsPage
│   │   │   ├── AdminProductsPage.js
│   │   │   ├── components
│   │   │   └── index.js
│   │   ├── AdminProductsRestorePage
│   │   │   ├── AdminProductsRestorePage.js
│   │   │   ├── components
│   │   │   └── index.js
│   │   ├── CartPage
│   │   │   ├── CartPage.js
│   │   │   ├── component
│   │   │   └── index.js
│   │   ├── discountPages
│   │   │   ├── DiscountEditPage.js
│   │   │   ├── DiscountsPage.js
│   │   │   ├── index.js
│   │   │   ├── inputItem.js
│   │   │   └── TdContext.js
│   │   ├── FaqPage
│   │   │   ├── FaqItems.js
│   │   │   ├── FaqPage.js
│   │   │   └── index.js
│   │   ├── HomePage
│   │   │   ├── components
│   │   │   ├── HomePage.js
│   │   │   └── index.js
│   │   ├── HotProductsPage
│   │   │   ├── components
│   │   │   ├── HotProductsPage.js
│   │   │   └── index.js
│   │   ├── LoginPage
│   │   │   ├── components
│   │   │   ├── index.js
│   │   │   └── LoginPage.js
│   │   ├── NewProductsPage
│   │   │   ├── components
│   │   │   ├── index.js
│   │   │   └── NewProductsPage.js
│   │   ├── OrderWholeListPagePage
│   │   │   ├── components
│   │   │   ├── index.js
│   │   │   └── OrderWholeListPage.js
│   │   ├── ProductsPage
│   │   │   ├── components
│   │   │   ├── index.js
│   │   │   └── ProductsPage.js
│   │   ├── RegisterPage
│   │   │   ├── components
│   │   │   ├── index.js
│   │   │   └── RegisterPage.js
│   │   ├── SearchPage
│   │   │   ├── components
│   │   │   ├── index.js
│   │   │   └── SearchPage.js
│   │   ├── SingleProductPage
│   │   │   ├── index.js
│   │   │   ├── SingleProduct.js
│   │   │   └── SingleProductPage.js
│   │   ├── SingleTransactionPage
│   │   │   ├── index.js
│   │   │   └── SingleTransactionPage.js
│   │   ├── TransactionPage
│   │   │   ├── index.js
│   │   │   └── TransactionPage.js
│   │   ├── UpdateProductPage
│   │   │   ├── index.js
│   │   │   ├── old.js
│   │   │   └── UpdateProductPage.js
│   │   └── UserPage
│   │       ├── components
│   │       ├── index.js
│   │       └── UserPage.js
│   ├── reportWebVitals.js
│   ├── setupTests.js
│   └── utils.js


├── src
├── .gitignore
├── babel.config.js
├── jsconfig.json
├── package-lock.json
├── package.json
├── README.md
└── vue.config.js


## 功能
<ul>
    <li>首頁</li> 最新促銷活動(Banner)、最新上架產品、官方Instagram最新貼文
    <li>產品選購頁</li>可以關鍵字搜尋想要的產品、並加入購物車或馬上購買結帳
    <li>關於頁</li>官方背景敘述
    <li>購物車/結帳頁</li>可勾選欲結帳商品、登入會員後可進行結帳並完成該筆訂單
    <li>登入/註冊頁</li>進行註冊/登入功能、登入後可在後台查看歷史訂單
</ul>


## 如何執行

注意：如在其他電腦上執行，將無法獲取Instagram貼文，因Instagram相關Token並未上傳至此repo

注意：此專案需先至 https://github.com/ruanpin/easyServer 網址clone後端專案及安裝MongoDB(v6.0.1)，並先執行資料庫及該後端專案才可正確執行前端註冊/登入/訂單建立/訂單查詢等功能。

```
npm install 安裝此專案需要的第三方套件
```
```
npm run serve 執行此前端專案，並可在 http://localhost:8080/ 體驗此電子商務專案
```

