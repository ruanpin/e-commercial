<template>
  <div class="change-container">
    <h1>退換貨條款</h1>
    <p>為了讓您能夠安心使用本網站的各項服務與資訊，特此向您說明本網站的退換貨條款政策，以保障您的權益，請您詳閱下列內容：</p>
    <ul>
      <li>1. 使用本服務進行交易時，應依據本網站所提供之確認商品數量及價格機制進行。</li>
      <li>2. 同意使用本服務訂購產品時，於本網站通知確認交易成立前，本網站仍保有不接受訂單或取消出貨之權利。向本網站發出訂購通知後，系統將自動發出接受通知，但此通知並非訂單確認通知，關於交易成立與否本網站將另行告知。若因訂單內容之標的商品或服務，其交易條件(包括但不限於規格、內容說明、圖片)有誤時，本網站得於下單後二工作日內拒絕該筆訂單。</li>
      <li>3. 若於使用本服務訂購產品後倘任意退換貨、取消訂單、或有任何本服務認為不適當而造成經營作業上之困擾或損害之行為，本網站可視情況採取拒絕交易，或永久取消交易資格辦理。</li>
      <li>4. 使用本服務進行交易時，得依照消費者保護法之規定行使權利。因交易行為而對本服務條款產生疑義時，應為有利於消費者之解釋。</li>
    </ul>
    <h2>退換貨條款之修正</h2>
    <p>本網站退換貨條款政策將因應需求隨時進行修正，修正後的條款將刊登於網站上。</p>
  </div>
</template>

<script>
export default {
    name:'ChangePolicy',
}
</script>

<style lang="scss" scoped>
    .change-container {
      font-size:1.3rem;
      line-height:1.8rem;
      h1 {
        font-weight: 700;
        font-size:2rem;
        text-align: center;
        margin-top:2rem;
        margin-bottom:3rem;
      }
      p, ul {
        margin-bottom:2.5rem;
        li {
          margin-bottom:1.5rem;
        }
      }
      h1 + p {
        text-align: center;
      }
      h2 {
        font-weight: 700;
        font-size:1.7rem;
        margin-bottom:1.8rem;
      }
    }
</style>