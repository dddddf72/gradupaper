<template>
  <div id="app">
    <huayu :data="msg"></huayu>
  </div>
</template>

<script>
import huayu from "./components/huayu";
export default {
  components: {
    huayu,
  },
  data() {
    return {
      msg: "good",
    };
  },
};
</script>

<style  scoped>
</style>