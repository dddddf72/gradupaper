<template>
  <div id="app">
    hello world
    <Hello :data="msg"></Hello>
  </div>
</template>

<script>
import Hello from "./components/Hello";
export default {
  name: "App",
  data() {
    return {
      msg: "good",
    };
  },
  components: {
    Hello,
  },
};
</script>

<style>
</style>
