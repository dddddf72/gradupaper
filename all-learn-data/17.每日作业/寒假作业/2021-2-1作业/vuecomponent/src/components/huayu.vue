<template>
  <div class="content">
    <div>
      <img :src="playlist.coverImgUrl" alt="" />
      <p>{{ playlist.name }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    playlist: {
      type: Object,
    },
  },
};
</script>

<style  scoped>
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.content img {
  width: 200px;
  height: 200px;
}

.content p {
  width: 200px;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  overflow: hidden;
  -webkit-line-clamp: 2;
}
</style>