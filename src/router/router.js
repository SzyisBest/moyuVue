const routes = [   //这里注意,routes，不要写成routers。这部分即路由核心！
    {
        path: '/', //跳转后路径显示
        name: 'login', //设置路由“组件”名称，这里起名不规范，除主页外最好采用驼峰命名法例如：TheHome这种
        component: () => import('../components/login/login.vue'),
    },
    {
        path: '/home',
        name: 'home',
        component: () => import('../components/home/home')
    },
    {
        path: '/register',
        name: 'register',
        component: () => import('../components/login/register')
    }
]
export default routes;