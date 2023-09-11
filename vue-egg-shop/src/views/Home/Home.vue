<template>
  <div>
    <home-top></home-top>
    <home-nav></home-nav>
    <home-content></home-content>
  </div>
</template>

<script>
import HomeTop from './components/HomeTop'
import HomeNav from './components/HomeNav'
import HomeContent from './components/HomeContent'
export default {
  components:{
    HomeTop,
    HomeNav,
    HomeContent
  }
};
</script>

<style scoped>
</style>