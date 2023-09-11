<template>
  <div class="item">
    <div class="cover">
      <img class="coverimg" :src="playlist.coverImgUrl" alt="" />
      <div class="playcounts">
        <img class="playcount" src="@/assets/erji.png" alt="" />
        <p>{{ handlenum(playlist.playCount) }}</p>
      </div>
    </div>
    <p class="name">{{ playlist.name }}</p>
  </div>
</template>

<script>
export default {
  props: {
    playlist: {
      type: Object,
    },
  },
  methods: {
    handlenum(value) {
      if (value > 100000000) {
        value = Math.floor(value / 100000000) + "亿";
      } else if (value > 10000) {
        value = Math.floor(value / 10000) + "万";
      }
      return value;
    },
  },
};
</script>

<style scoped>
.item {
  width: 230px;
  font-size: 30px;
  position: relative;
}
.playcounts {
  display: flex;
  align-items: center;
  position: absolute;
  font-size: 15px;
  top: 0;
  right: 0;
  color: #fff;
}
.playcount {
  width: 24px;
  height: 24px;
}
.coverimg {
  position: relative;
  width: 230px;
  height: 230px;
}
.name {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  overflow: hidden;
  -webkit-line-clamp: 2;
}
</style>