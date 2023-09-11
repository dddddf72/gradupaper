<template>
  <div class="home">{{ msg }}</div>
</template>
<script>
export default {
  // name：给组件的命名
  name: "Home",
  //小程序data是变量，vue中的data是函数
  data() {
    return {
      msg: "hello world",
    };
  },
};
</script>

<style>
.home {
  color: red;
}
</style>

