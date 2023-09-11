<template>
  <div id="app">
    <huayu :playlist="item" v-for="item of playlists" :key="item.id" />
  </div>
</template>

<script>
import huayu from "./components/huayu";
import axios from "axios";

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
    });
  },
};
</script>

<style>
#app {
  display: grid;
  align-items: top;
  justify-items: center;
  grid-template-columns: repeat(3, 1fr);
  grid-row-gap: 20px;
}
</style>