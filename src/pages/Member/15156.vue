<template>
  <div class="member-container">
    <div class="form-section">
      <div class="container">
        <form ref="form" class="contact-form" action="http://localhost:5000/signIn" method="POST" >
          <p>歡迎回來！</p>
          <label>帳號<br><input type="text" placeholder="請輸入帳號" name="username" ref="nameInput" value="" @blur="checkValue"></label>
          <span class="warning" v-show="isNameWarningShow">this is required</span><br>

          <label>密碼<br><input type="password" placeholder="請輸入密碼" name="password" ref="passwordInput" value="" @blur="checkValue"></label>
          <span class="warning" v-show="isEmailWarningShow">this is required</span><br>


          <input type="submit" value="登入" @click="handleSubmit">
          <p class="warning sendingWarning" v-show="isSendingWarningShow">請填寫上方資訊</p><br>
        </form>
      </div>
      <div class="signup">
        <p>沒有帳號嗎?<span class="signup-Btn" @click="goSignUp">註冊</span></p>
      </div>
      <transition name="formMsgShow"> 
          <div v-show="FormMsg">{{FormMsg}}</div> 
      </transition>
    </div>
  </div>
</template>

<script>
export default {
    name:'Member',
    data(){
      return {
        isshow:false,
        FormMsg:'',
        isNameWarningShow:false,
        isEmailWarningShow:false,
        isSendingWarningShow:false,
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
              this.isEmailWarningShow = false
          } else { //該input值為空時，讓warning字樣出現
              this.isEmailWarningShow = true
          }
        }
      },
      // preventDe(e){
      //   e.preventDefault();
      // },
      handleSubmit(e){
        if (this.$refs.nameInput.value && this.$refs.passwordInput.value) {
          this.FormMsg = ''
          // e.preventDefault(); //未開Server時需要，否則會跳轉
          // this.FormMsg = 'Thank you for contacting, I will reply to you as soon as possible !'
          setTimeout(() => {
            this.$refs.nameInput.value = ""
            this.$refs.passwordInput.value = ""
          }, 10);
          // let signUpInfo = {
          //   userame:this.$refs.nameInput.value,
          //   password:this.$refs.passwordInput.value
          // }
          // this.$store.dispatch('Member/postSignUp',signUpInfo)
          this.isSendingWarningShow = false
        } else {
          e.preventDefault();

          if (!this.$refs.nameInput.value && !this.$refs.passwordInput.value){
            // 若Name 和 email input值皆為空，則Name input 獲取焦點
            this.$refs.nameInput.focus();
            this.isNameWarningShow = true
            this.isEmailWarningShow = true
          } else {
            if (!this.$refs.nameInput.value) {
              // 若有input值為空時，讓warning字樣出現
              this.isNameWarningShow = true
              this.$refs.nameInput.focus();
            }
            if (!this.$refs.passwordInput.value) {
              // 若有input值為空時，讓warning字樣出現
              this.isEmailWarningShow = true
              this.$refs.passwordInput.focus(); 
            }
          }

          this.isSendingWarningShow = true;
          this.FormMsg = false;
        }
                
                    
      },
      goSignUp(){
        this.$router.push({
          name:'SignUp'
        })
      }

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
            transform: translateX(-50%);
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
      .signup {
        padding : 2rem;
        .signup-Btn {
          cursor:pointer;
          color:blue;
        }
      }
    }
  }
</style>