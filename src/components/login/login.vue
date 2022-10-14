<template>
  <div>
    <el-container>
      <el-aside width="60%" class="login-Aside">
        <el-image class="login-image-style" :src="imageUrl" :fit="fit"/>
      </el-aside>
      <el-main class="login-main">
        <div>
          <h1 class="login-title">M O Y U 墨鱼校园</h1>
        </div>
        <div>
          <el-form
              :model="loginModel"
              label-width="120px"
          >
            <el-form-item
                class="input-style"
                prop="username"
            >
              <el-input
                  class="input-text-style"
                  size="large"
                  type="text"
                  prefix-icon="User"
                  placeholder="用户名"
                  v-model="loginModel.username"/>
            </el-form-item>
            <el-form-item
                prop="password"
                class="input-style"
            >
              <el-input
                  class="input-text-style"
                  size="large"
                  type="password"
                  prefix-icon="Lock"
                  placeholder="密码"
                  v-model="loginModel.password"/>
            </el-form-item>
            <el-form-item>
              <el-row>
                <el-col :span="12">
                  <el-checkbox
                      v-model="loginModel.is_remember"
                      label="是否记住密码"
                      size="default"
                  />
                </el-col>
                <el-col :span="12">
                  <div class="user-register-style">
                    <router-link class="user-register-alink" to="/register">
                      点我注册
                    </router-link>
                  </div>
                </el-col>
              </el-row>
            </el-form-item>
            <el-form-item>
              <el-button
                  class="input-buton"
                  type="primary"
                  @click="login()"
              >
                登录
              </el-button>
            </el-form-item>
          </el-form>
        </div>
        <div>
          <div id="lottie_box" class="animation">
            <lottie
                width="100%"
                height="400px"
                :jsonData="lottieUrl"
            />
          </div>
        </div>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import api from '@/api/login/login'
import lottieUrl from '@/assets/animate/lottieA1.json'
import Lottie from "@/components/lottie/lottie"
// import { useRouter } from "vue-router";
import router from "@/router/router.config";

const {checkObject} = require("@/main");

export default {
  // setup() {
  //   const router = useRouter();
  //   const loginModel = {
  //     username: '',
  //     password: '',
  //     is_remember: ''
  //   }
  //
  //   function login() {
  //     // Token接口
  //     api.getToken(loginModel).then((data) => {
  //       if (checkObject(data.result.object.token)) {
  //         localStorage.setItem('token', data.result.object.token)
  //         router.push({
  //           name: "home",
  //         });
  //         // 登录接口
  //         // api.login(this.loginModel).then((data) => {
  //         //   console.log(data, "查看login 信息");
  //         //
  //         // })
  //       } else {
  //         this.$message("warning", "Token不能为空")
  //       }
  //     })
  //   }
  //
  //   return {
  //     login
  //   }
  // },
  name: "login",
  components: {Lottie},
  data() {
    return {
      token: '',
      imageUrl: 'https://source.unsplash.com/random',
      lottieUrl: lottieUrl,
      loginModel: {
        username: '',
        password: '',
        is_remember: ''
      },
    }
  },
  methods: {
    login() {
      // Token接口
      api.getToken(this.loginModel).then((data) => {
        if (checkObject(data.result.object.token)) {
          localStorage.setItem('token', data.result.object.token)
          // 登录接口
          let formData = new FormData()
          formData.append("username", this.loginModel.username)
          formData.append("password", this.loginModel.password)
          api.login(formData).then((data) => {
            console.log(data, "查看login 信息");
            if(data.status){
              this.$message.success("登录成功！")
              router.push({
                name: 'home'
              })
            }else{
              this.$message.warning(data.message)
            }
          })
        } else {
          this.$message("warning", "Token不能为空")
        }
      })
    },
  },
  created() {

  },

}
</script>

<style scoped>
.user-register-style{
  width: 230px;
  text-align: right;
}

.user-register-alink{
  color: #409EFF;
  font-family: 'SZY';
  font-weight: 400;
  text-decoration: none;
}


.login-title {
  text-align: center;
  margin-left: 3.5rem;
  margin-bottom: 15px;
  font-family: 'SZY';
  font-weight: 400;
  font-size: 2.5rem;
  line-height: 1.334;
  letter-spacing: 0.2em;

}

.el-aside {
  overflow: hidden;
}

.input-text-style {
  height: 55px;
  transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  box-shadow: 0px 2px 3px -1px #0003, 0px 4px 6px 0px #00000024, 0px 1px 10px 0px #0000001f;
  box-sizing: border-box;
  -webkit-animation-name: mui-auto-fill-cancel;
  animation-name: mui-auto-fill-cancel;
  -webkit-animation-duration: 10ms;
  animation-duration: 10ms;
}

.input-style {
  width: 90%;
}

.input-buton {
  transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  box-shadow: 0px 3px 5px -1px #0003, 0px 6px 10px 0px #00000024, 0px 1px 18px 0px #0000001f;
  box-sizing: border-box;
  height: 45px;
  width: 88%;
  text-align: center;

}

.el-main {
  background-color: #fff;
  color: rgba(0, 0, 0, 0.87);
  -webkit-transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  box-shadow: 0px 3px 5px -1px #0003, 0px 6px 10px 0px #00000024, 0px 1px 18px 0px #0000001f;
  box-sizing: border-box;
  margin: 0;
  -webkit-flex-direction: row;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-flex-basis: 100%;
  -ms-flex-preferred-size: 100%;
  flex-basis: 100%;
  -webkit-box-flex: 0;
  -webkit-flex-grow: 0;
  -ms-flex-positive: 0;
  flex-grow: 0;
  max-width: 100%;
}

.login-Aside {
  height: 100vh;
}

.login-main {
  padding-top: 50px;
  margin-left: -10px;

}

.login-image-style {
  height: inherit;
  box-sizing: border-box;
  margin: 0;
  -webkit-flex-direction: row;
  -ms-flex-direction: row;
  flex-direction: row;
  background-repeat: no-repeat;
  background-color: #fafafa;
  -webkit-background-size: cover;
  background-size: cover;
  -webkit-background-position: center;
  background-position: center;
}

</style>