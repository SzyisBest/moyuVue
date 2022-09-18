<template>
  <div>
    <el-row>
      <el-col :span="24">
        <el-menu
            id="menu-style"
            default-active="1"
            class="el-menu-vertical-demo menu-text"
            mode="vertical"
            :ellipsis="true"
            background-color="#b94a3e"
            :router="true"
            text-color="#fff"
        >
          <el-sub-menu index="1">
            <template #title>
              <el-icon>
                <Menu color="#fff"></Menu>
              </el-icon>
              <span class="menu-text">菜单设置</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="1-1">菜单设置</el-menu-item>
              <el-menu-item index="1-2">菜单设置</el-menu-item>
            </el-menu-item-group>
          </el-sub-menu>
          <el-sub-menu index="2">
            <template #title>
              <el-icon>
                <Reading color="#fff"/>
              </el-icon>
              <span>墨鱼课程</span>
            </template>

          </el-sub-menu>
          <el-sub-menu index="3">
            <template #title>
              <el-icon>
                <BellFilled color="#fff"/>
              </el-icon>
              <span>健康上报</span>
            </template>

          </el-sub-menu>
          <el-sub-menu index="4">
            <template #title>
              <el-icon>
                <Comment color="#fff"/>
              </el-icon>
              <span>申请列表</span>
            </template>

          </el-sub-menu>
          <el-sub-menu index="5">
            <template #title>
              <el-icon>
                <CircleCheck color="#fff"/>
              </el-icon>
              <span>评教打分</span>
            </template>

          </el-sub-menu>
          <el-sub-menu index="6">
            <template #title>
              <el-icon>
                <DataLine color="#fff"/>
              </el-icon>
              <span>任务清单</span>
            </template>
          </el-sub-menu>
        </el-menu>
      </el-col>
    </el-row>
  </div>

</template>

<script>
export default {
  name: "menu",
  data() {
    return {
      drawer: true
    }
  },
  methods: {}
}
</script>

<style scoped>
.el-menu {
  height: 100vh;
}

</style>