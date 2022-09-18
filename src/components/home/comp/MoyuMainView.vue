<template>
  <el-container class="main-view">
    <el-scrollbar>
      <el-container class="inner-view">
        <router-view/>
      </el-container>
    </el-scrollbar>

  </el-container>
</template>

<script>
export default {
  name: "main"
}
</script>

<style scoped>
.main-view {
  height: 640px;
  padding-bottom: 15px;
  padding-left: 15px;
  padding-top: 15px;
  padding-right: 10px;
  scroll-margin: 10px;
  margin: -8px;
  border-radius: 7px;
  background-color: #FFFFFF;
}
.inner-view{

}
</style>