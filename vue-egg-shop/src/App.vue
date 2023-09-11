<template>
  <div id="app" v-loading="this.$store.state.isLoading">
    <router-view/>
  </div>
</template>
<style scoped>
#app{
  width:1200px;
  margin-left: auto;
  margin-right: auto;
}
  
</style>