<template>
    <div>
      <el-header>
        <!-- 头部 -->
        <MoyuHead/>
      </el-header>
      <el-container>
        <el-aside class="menu-style" width="330px">
          <!-- 左侧菜单  -->
          <MoyuMenu/>
        </el-aside>
        <el-container style="height: 30%">
          <el-main>
            <!-- 主窗口 -->
            <MoyuMainView/>
          </el-main>
        </el-container>
      </el-container>
    </div>
</template>

<script>
import MoyuHead from './comp/MoyuHead.vue'
import MoyuFooter from './comp/MoyuFooter.vue'
import MoyuMainView from './comp/MoyuMainView.vue'
import MoyuMenu from './comp/MoyuMenu.vue'
import api from "@/api/menu/mainView";

export default {
  name: "home",
  components: {
    MoyuHead,
    MoyuFooter,
    MoyuMenu,
    MoyuMainView
  },
  data() {
    return {

    }
  },
  created() {
    api.LoadMenuList().then((data)=>{
      console.log(data,"==========menu=========")
    })
  }
}
</script>

<style scoped>
.menu-style{
  width: 11%;
}
.el-main{
}
.el-aside {
}
</style>