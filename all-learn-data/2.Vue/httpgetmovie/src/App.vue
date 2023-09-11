<template>
  <div id="app">
    <div>app</div>
    <movie-item
      v-for="item of movies"
      :key="item.title"
      :item="item"
    ></movie-item>
  </div>
</template>

<script>
import axios from "axios";
import MovieItem from "./components/MovieItem";
export default {
  name: "App",
  components: {
    MovieItem,
  },
  data() {
    return {
      movies: [],
    };
  },
  mounted() {
    //mounted生命周期函数中可以获取DOM因此在mounted中进行HTTP请求
    axios.get("http://localhost:8000/top250").then((res) => {
      // console.log(res.data.result);
      this.movies = res.data.result;
    });
  },
};
</script>

<style>
</style>
