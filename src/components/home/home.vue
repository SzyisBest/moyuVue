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
  }
}
</script>

<style scoped>
.menu-style{
  width: 11%;
  background-color: aquamarine;
}
.el-main{
}
.el-aside {
}
.el-footer{
  padding: 0px;
  margin: 0px;
  height: 30px;
}
</style>