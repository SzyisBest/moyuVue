import {createApp} from 'vue'
import App from './App.vue'
import router from './router/router.config'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import lottie from 'lottie-web'
import Lottie from '@/components/lottie/lottie'
export { Lottie }
import '@/font/font.css'

const app = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}

//路由全局前置守卫
router.beforeEach((to,from,next) => {
    if(to.path === '/register' || to.path === '/login' || to.path === '/'){ //若是进入登录与注册页面 ==> pass
        next()
    }else{
        let userToken = localStorage.getItem('token');
        console.log("Token为:"+userToken);
        if(userToken == null || userToken == ''){
            alert("无权限，请先登录!");
            return next('/login');
        }else{
            next();
        }
    }
});

export function checkObject(obj) {
    if(obj !== null && obj !== '' && obj !== "" && obj !== undefined){
        return true
    }else{
        return false
    }
}


app.use(router)
    .use(ElementPlus)
    .use(lottie)
    .mount('#app')

