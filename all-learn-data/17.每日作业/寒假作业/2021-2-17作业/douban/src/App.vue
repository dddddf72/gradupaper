<template>
  <div class="out">
    <div id="app">
      <div class="content" v-for="item of movies" :key="item.id">
        <img :src="item.pic" alt="" />
        <p class="name">{{ item.title }}</p>
        <div class="start">
          <div v-for="value of handlestar(item.raiting)" :key="value">
            <img v-if="value > 1.5" src="../src/assets/star.png" alt="" />
            <img
              v-else-if="value > 1"
              src="../src/assets/ban-star.png"
              alt=""
            />
            <img v-else src="../src/assets/no-star.png" alt="" />
          </div>
          <p class="rat">{{ item.raiting }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
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
    });
  },
};
</script>

<style>
#app {
  display: grid;
  grid-template-columns: repeat(3, auto);
  justify-items: center;
}
.content {
  display: flex;
  flex-direction: column;
}
.content img {
  width: 200px;
  height: 200px;
}
.out {
  width: 100%;
}
.start {
  display: flex;
  align-items: center;
}
.start img {
  width: 20px;
  height: 20px;
}
.name {
  font-size: 20px;
}
.rat {
  font-size: 20px;
}
</style>
