<template>
  <div class="member-container">
    <div class="form-section">
      <div class="container">
        <form ref="form" class="contact-form">
          <p>歡迎回來！</p>
          <label>帳號<br><input type="text" placeholder="請輸入帳號" name="username" ref="nameInput" value="" @blur="checkValue"></label>
          <span class="warning" v-show="isNameWarningShow">this is required</span><br>

          <label>密碼<br><input type="password" placeholder="請輸入密碼" name="password" ref="passwordInput" value="" @blur="checkValue"></label>
          <span class="warning" v-show="isPasswordWarningShow">this is required</span><br>


          <input type="submit" value="登入" @click="handleSubmit">
          <p class="warning sendingWarning" v-show="isSendingWarningShow">{{tips}}</p><br>
        </form>
      </div>
      <div class="signin">
        <p>沒有帳號嗎?<span class="signin-Btn" @click="goSignUp"> 註冊</span></p>
      </div>
      <!-- <transition name="formMsgShow"> 
          <div v-show="FormMsg">{{FormMsg}}</div> 
      </transition> -->
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
    name:'SignUp',
    data(){
      return {
        isNameWarningShow:false,
        isPasswordWarningShow:false,
        isSendingWarningShow:false,
        tips:'',
      }
    },
    watch:{
      '$store.state.Member.token':{
        immediate:true,
        handler(newValue, oldValue){
          if (this.$store.state.Member.token) {
            //重置登入訊息
            this.$store.commit('Member/RESETINFO')
            // this.$store.state.Member.memberCartList
            this.goLogin()
          }
        }
      },
      '$store.state.Member.login_msg':{
        immediate:true,
        handler(newValue, oldValue){
          this.tips = newValue;
          this.isSendingWarningShow = true
        }
      }
    },
    methods:{
      checkValue(e){
        // 失去焦點時判斷input內是否有值-------------------

        // // 以下為name input框-------------------------------------------------------
        // 判斷此次失去焦點事件是哪個input
        if (e.target === this.$refs.nameInput) {
          if (this.$refs.nameInput.value){ //該input有值時，讓warning字樣消失
              this.isNameWarningShow = false
          } else { //該input值為空時，讓warning字樣出現
              this.isNameWarningShow = true
          }
        }


        // 以下為email input框-------------------------------------------------------
        // 判斷此次失去焦點事件是哪個input
        if (e.target === this.$refs.passwordInput) {
          if (this.$refs.passwordInput.value){ //該input有值時，讓warning字樣消失
              this.isPasswordWarningShow = false
          } else { //該input值為空時，讓warning字樣出現
              this.isPasswordWarningShow = true
          }
        }
      },
      goLogin(){
        this.$router.push({
          name:'Home'
        })
      },
      handleSubmit(e){
        if (this.$refs.nameInput.value && this.$refs.passwordInput.value) {
          this.FormMsg = ''
          e.preventDefault(); 
          
          let signUpInfo = {
            username:this.$refs.nameInput.value,
            password:this.$refs.passwordInput.value,
            // cartList:this.$store.state.Cart.cartList
          }
          //發送請求到localhost:5000撈資料庫完成登入
          this.$store.dispatch('Member/postSignIn',signUpInfo)
          // setTimeout(() => {
          //   this.$refs.nameInput.value = ""
          //   this.$refs.passwordInput.value = ""
          // }, 10);
          if (this.$store.state.Member.login_success == false) {
            this.isSendingWarningShow = true
            this.tips = this.$store.state.Member.login_msg
          } else {
            this.isSendingWarningShow = false
          }
          

        } else {
          e.preventDefault();

          if (!this.$refs.nameInput.value && !this.$refs.passwordInput.value){
            // 若Name 和 email input值皆為空，則Name input 獲取焦點
            this.$refs.nameInput.focus();
            this.isNameWarningShow = true
            this.isPasswordWarningShow = true
            this.tips = '請填寫上方資訊'
          } else {
            if (!this.$refs.nameInput.value) {
              // 若有input值為空時，讓warning字樣出現
              this.isNameWarningShow = true
              this.$refs.nameInput.focus();
            }
            if (!this.$refs.passwordInput.value) {
              // 若有input值為空時，讓warning字樣出現
              this.isPasswordWarningShow = true
              this.$refs.passwordInput.focus(); 
            }
            this.tips = '請填寫上方資訊'
          }

          this.isSendingWarningShow = true;
          this.FormMsg = false;
        }
                
                    
      },
      goSignUp(){
        this.$router.push({
          name:'SignUp'
        })
      },

    },
    beforeDestroy(){
      this.isNameWarningShow=false;
      this.isPasswordWarningShow=false;
      this.isSendingWarningShow=false;
      this.tips='';
      this.$store.commit('Member/RESETINFO')
    }
}
</script>

<style lang="scss" scoped>
  .member-container {
    .form-section {
      display:flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      .container {
        display: flex;
        justify-content: center;
        align-items: center;
        width:100%;
        form {
          padding:2em;
          background-color: rgb(192, 209, 160);
          border-radius: 2em;
          position : relative;
          .warning {
            color:rgb(220,53,69);
            line-height: 1.8em;
          }
          .sendingWarning {
            text-align: center;
            padding:0em;
            letter-spacing: 0;
            font-size: 1em;
            position : absolute;
            bottom:1.5em;
            left:50%;
            transform: translate(-50%,35%);
          }
          p {
            text-align: center;
            font-size: 1.5em;
            padding:1em;
            color:rgb(95, 72, 33);
            font-weight: 700;
            letter-spacing: 0.2em;
            line-height: 1.5em;
          }
          label {
            display: block;
            padding-top: 0.8em; 
          }
          input[type="text"], input[type="password"] {
            padding:0.8em;
            margin-top:0.5em;
            border-radius: 10px;
            border:0px none;
            background-color: rgb(245,235,216);
            width: 100%;
          }
          input[type="text"]:focus, input[type="password"]:focus {
            background-color: rgb(238, 212, 171);
          }
          input[type="submit"] {
            background-color: rgb(101,122,141);
            border:0px none;
            padding:0.5em;
            border-radius: 10px;  
            display:block;
            margin : 1em auto;
            cursor :pointer;
            font-weight: 700;
            width:100%;
            font-size: 1.2em;
            color:#fff;
          }
        }
      }
      .signin {
        padding : 2rem;
        .signin-Btn {
          cursor:pointer;
          color:blue;
        }
      }
    }
  }
</style>