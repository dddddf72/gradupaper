<template>
  <div class="out">
    <div id="app">
      <div class="content" :key="item.id" v-for="item of movies">
        <img :src="item.pic" />
        <p class="name">{{ item.title }}</p>
        <div class="starchange">
          <p class="rat">{{ item.raiting }}</p>
          <div v-for="value of handlestar(item.raiting)" :key="value.id">
            <img v-if="value > 1.5" src="../src/assets/star.png" />
            <img v-else-if="value > 1" src="../src/assets/ban-star.png" />
            <img v-else src="../src/assets/no-star.png" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import http from "../models/http";
// import axios from "axios";
export default {
  // name：组件名
  name: "App",

  data() {
    return {
      movies: [],
    };
  },
  methods: {
    handlestar(value) {
      var arr = [];
      for (let i = 0; i < 5; i++) {
        if (value > 2) {
          arr.push(2);
        } else if (value > 1) {
          arr.push(Number(value.toFixed(1)));
        } else {
          arr.push(0);
        }
        value -= 2;
      }
      return arr;
    },
  },
  mounted() {
    let url = "http://localhost:8000/top250";
    this.$http.get(url).then((res) => {
      console.log(res);
      this.movies = res.data.result;
      // console.log(this.movies); //先执行同步再执行异步
    });
  },
};
</script>

<style>
#app {
  display: grid;
  justify-items: center;
  grid-template-columns: repeat(3, auto);
}
.content {
  display: flex;
  flex-direction: column;
}
.content img {
  width: 13.0208vw;
  height: 19.5313vw;
}
.star {
  display: flex;
}
.out {
  width: 100%;
}
.starchange {
  display: flex;
  align-items: center;
}
.starchange img {
  width: 1.9531vw;
  height: 1.9531vw;
}
.name {
  font-size: 1.9531vw;
}
.rat {
  font-size: 1.9531vw;
}
</style>
