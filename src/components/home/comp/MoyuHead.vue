<template>
  <div class="head-style">
    <el-page-header
        :title="null"
        :icon="null"
    >
      <template #title>
        <el-container direction="horizontal" class="moyu-head">
          <div>
            <h2 class="text-large font-600 mr-3"> Moyu </h2>
          </div>
          <span class="text-large font-600 mr-3"> 墨鱼校园 </span>
        </el-container>
      </template>
    </el-page-header>
  </div>
</template>

<script>

export default {
  name: "head"
}
</script>

<style scoped>
.head-style {
  color: #ffffff;
  height: 100%;
  margin: -20px;
  /*background-color: #517693;*/
  /*background-color: #002FA7;*/
  background-color: #204254;
  /*background-color: #3080FEFF;*/
  /*background-color: #202E78;*/
}
.moyu-head{
  padding: 15px;
  color: #eeeeee;
}
</style>