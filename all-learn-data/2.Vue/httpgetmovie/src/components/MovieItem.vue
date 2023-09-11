<template>
  <div>
    <!-- @是src这个目录 -->
    <img :src="item.pic" alt="" />
    <p>item.title</p>
  </div>
</template>

<script>
export default {
  name: "MovieItem",
  props: {
    item: {
      type: Object,
    },
  },
};
</script>

<style scoped>
</style>