<template>
  <div>
    <el-row>
      <el-col :span="24">
        <el-scrollbar>
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
                <el-menu-item index="www.kuangstudy.com">
                  <template #title>
                    <el-icon>
                      <Memo/>
                    </el-icon>
                    <span class="menu-text">字典管理</span>
                  </template>
                </el-menu-item>
                <el-menu-item index="1-2">
                  <template #title>
                    <el-icon>
                      <Lock/>
                    </el-icon>
                    <span class="menu-text">权限设置</span>
                  </template>
                </el-menu-item>
                <el-menu-item index="1-3">
                  <template #title>
                    <el-icon>
                      <User/>
                    </el-icon>
                    <span class="menu-text">角色管理</span>
                  </template>
                </el-menu-item>
                <el-menu-item index="1-4">
                  <template #title>
                    <el-icon>
                      <Menu/>
                    </el-icon>
                    <span class="menu-text">菜单管理</span>
                  </template>
                </el-menu-item>
              </el-menu-item-group>
            </el-sub-menu>
            <el-sub-menu index="2">
              <template #title>
                <el-icon>
                  <Reading color="#fff"/>
                </el-icon>
                <span>墨鱼课程</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="1-1">
                  <template #title>
                    <el-icon>
                      <Memo/>
                    </el-icon>
                    <span class="menu-text">学生课表</span>
                  </template>
                </el-menu-item>
                <el-menu-item index="1-2">
                  <template #title>
                    <el-icon>
                      <Notebook/>
                    </el-icon>
                    <span class="menu-text">课表导入</span>
                  </template>
                </el-menu-item>
              </el-menu-item-group>
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
        </el-scrollbar>
      </el-col>
    </el-row>
  </div>

</template>

<script>
import api from '@/api/menu/mainView'

export default {
  name: "menu",
  data() {
    return {
      drawer: true,
      menuList:{},
    }
  },
  methods: {},
  created() {
    let params = {
      type: "学生",
      id: 1
    }
    api.LoadMenuList2(params).then((result)=>{
      this.menuList = result;
    })

  }
}
</script>

<style scoped>
.el-menu {
  height: 100vh;
  user-select: none;
}

</style>