<template>
  <div id="app">
    <huayu :playlist="item" v-for="item of playlists" :key="item.id"></huayu>
  </div>
</template>

<script>
import axios from "axios";
import huayu from "./components/huayu";
export default {
  name: "App",
  components: {
    huayu,
  },
  data() {
    return {
      playlists: [],
    };
  },
  mounted() {
    axios.get("http://localhost:4000/top/playlist?cat=华语").then((res) => {
      this.playlists = res.data.playlists;
      // console.log(res);
    });
  },
};
</script>

<style>
#app {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}
</style>
