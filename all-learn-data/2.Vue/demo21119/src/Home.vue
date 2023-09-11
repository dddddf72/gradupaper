<template>
  <div id="app">
    <div>
      name: <input type="text" v-model="value.name" /> id:
      <input type="text" v-model="value.id" />
      <button @click="doAdd">添加</button>
    </div>
    <div v-for="item of arr" @click="handledelete(item.name)" :key="item.id">
      <!-- :key给dom唯一标识符，便于理解和解析 -->
      <input type="checkbox" />{{ item.name }}
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      value: {
        name: "",
        id: "",
      },
      arr: [
        { name: "html", id: 1001 },
        { name: "css", id: 1002 },
        { name: "js", id: 1003 },
      ],
    };
  },
  methods: {
    doAdd() {
      var value = this.value;
      console.log(value);
      // 涉及到指针的问题（深拷贝）
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