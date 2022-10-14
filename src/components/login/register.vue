<template>
  <div>
    <el-header>
      <!-- 头部 -->
      <MoyuHead/>
    </el-header>
    <el-container>
      <el-container style="height: 30%">
        <el-main>
          <div class="register-div-style">
            <div class="register-form-logo">
              <h1 class="login-title">M O Y U 墨鱼校园</h1>
            </div>
            <div>
              <el-form :model="register" class="register-form-style">
                <el-form-item class="register-form-item-style">
                  <el-input
                      class="register-input"
                      placeholder="用户名"
                      type="text"
                      prefix-icon="User"
                      size="large"
                      v-model="register.username"
                  />
                </el-form-item>
                <el-form-item class="register-form-item-style">
                  <el-input
                      class="register-input"
                      placeholder="密码"
                      type="password"
                      show-password="true"
                      prefix-icon="Lock"
                      size="large"
                      v-model="register.password"
                  />
                </el-form-item>
                <el-form-item class="register-form-item-style">
                  <el-button class="register-button-style" @click="toRegister()">
                    注册
                  </el-button>
                </el-form-item>
                <el-form-item>
                  <div>
                    <span>已有账号,</span>
                    <span>
                      <router-link to="#">
                        直接登录
                      </router-link>
                    </span>
                  </div>
                </el-form-item>
              </el-form>
            </div>
          </div>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import MoyuHead from "@/components/home/comp/MoyuHead";
import api from "@/api/login/login";
import router from "@/router/router.config";

export default {
  name: "register",
  components: {MoyuHead},
  data() {
    return {
      register: {
        username: '',
        password: '',
        userRegisterAddress: '',
        userPhoneNumber: '',
        userAvatar:'',
        registerType: '',
        email: ''
      },
      getResult:'',
    }
  },
  methods:{
    toRegister(){
      api.register(this.register).then((data)=>{
        console.log(data,"返回的注册信息");
        if(data.status){
          this.$message.success(data.message)
          //跳转至登录页面
          router.push({
            name: 'login'
          })
        }else{
          this.$message.warning(data.message)
        }
      })
    }
  }
}
</script>

<style scoped>
.register-form-item-style {
  margin-bottom: 30px;
}

.register-button-style {
  width: 280px;
  border-radius: 15px;
  color: #fff;
  height: 35px;
  background: #4A54FF linear-gradient(315deg, #6772FF 0, #00F9E5 100%) center center;
  background-size: 104% 104%;
}

.register-form-style {
  margin: 50px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.register-input {
  width: 280px;
  border: 1px solid #dfdfdf;
  border-radius: 4px;
  height: 40px;
}

.el-main {
  height: 100vh;
  /*overflow: hidden;*/
}

.login-title {
  text-align: center;
  font-family: 'SZY';
  font-weight: 400;
  font-size: 2.5rem;
  line-height: 1.334;
  letter-spacing: 0.2em;
  color: #FFFFFF;
}

.register-div-style {
  background-color: #FFFFFF;
  border-radius: 20px;
  margin: 15px auto;
  height: 90%;
  width: 472px;
  box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.2);
  font-size: 14px;
}

.register-form-logo {
  width: 100%;
  height: 170px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #201B4F;
  background-image: linear-gradient(180deg, #404040 0, #1E1E1E 100%), linear-gradient(126deg, #201B4F 15%, #0B0930 100%);
  border-radius: 12px 12px 0 0;
  box-shadow: 0 2px 7px 0 #211b4f;
}
</style>