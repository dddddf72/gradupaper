<template>
  <div id="app">
    <div>
      name: <input type="text" v-model="value.name" /> id:
      <input type="text" v-model="value.id" />
      <button @click="doAdd">添加</button>
    </div>
    <div v-for="item of arr" @click="handledelete(item.name)" :key="item.id">
      <input type="checkbox" />{{ item.name }}
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      value: {
        name: "",
        id: "",
      },
      arr: [
        { name: "html", id: 1001 },
        { name: "js", id: 1002 },
        { name: "css", id: 1003 },
      ],
    };
  },
  methods: {
    // 添加
    doAdd() {
      var value = this.value;
      var obj = Object.assign({}, value);
      this.arr.unshift(obj);
    },
    handledelete(value) {
      var res = this.arr.filter((item) => item.name != value);
      this.arr = res;
    },
  },
};
</script>

<style>
</style>
