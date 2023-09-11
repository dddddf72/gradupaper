<template>
  <div>
    <div id="app">
      <div class="title">
        <p>ToDoList</p>
        <input
          class="input"
          @keyup.enter="handleenter"
          v-model="value.name"
          type="text"
          placeholder="添加ToDo"
        />
      </div>
    </div>

    <div class="now">
      <p>正在进行</p>
      <div class="num1"></div>
    </div>

    <div class="nowtxt" v-for="(item, index) of lists" :key="item.id">
      <input type="checkbox" v-model="sum" />{{ item.name }}
      <div class="jian" @click="handledelete(index)">-</div>
    </div>

    <div class="al">
      <p>已经完成</p>
      <div class="num2"></div>
    </div>

    <div class="altxt" v-for="(item, index) of lists" :key="item.id">
      <input type="checkbox" />
      <div class="jian" @click="handledelete(index)">-</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      value: { name: "", state: false },
      lists: [],
    };
  },
  methods: {
    handleenter() {
      var value = this.value;
      var obj = Object.assign({}, value);
      this.lists.unshift(obj);
      this.value = { name: "", state: false };
    },
    handledelete(index) {
      console.log(index);
      this.lists.splice(index, 1);
    },
  },
  computed: {
    sum: {
      get() {
        return this.lists.every((item) => item.state == true);
      },
      set(value, event) {
        console.log(value);
        // var obj = lists[value.name];
        // obj.state = value
        // this.lists.forEach((item) => {
        // item.state = value;
        // });
      },
      readyItem() {
        var res = this.lists.filter((item) => item.state == true);
        return res.length;
      },
    },
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
body {
  background-color: #cdcdcd;
}
input[type="checkbox"] {
  width: 25px;
  height: 25px;
}
#app {
  height: 50px;
  line-height: 50px;
  background-color: #323232;
  align-items: center;
}
#app p {
  color: #dddddd;
  font-size: 23px;
  font-weight: 500;
}
.input {
  width: 354px;
  height: 26px;
  border-radius: 5px;
  border: none;
  outline: none;
  padding-left: 10px;
  box-shadow: inset 0px 0px 5px 2px rgba(97, 97, 97, 0.5);
}
.title {
  margin-left: auto;
  margin-right: auto;
  display: flex;
  width: 600px;
  justify-content: space-between;
  align-items: center;
}
.now {
  margin-top: 20px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  width: 600px;
  justify-content: space-between;
  align-items: center;
}
.nowtxt {
  border-left: 5px solid #629a9c;
  border-radius: 5px;
  background-color: #fff;
  width: 560px;
  padding: 5px 20px;
  margin-top: 20px;
  margin-left: auto;
  margin-right: auto;
  display: flex;

  justify-content: space-between;
  align-items: center;
}
.now p {
  font-size: 24px;
  font-weight: bold;
}
.num1 {
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background-color: #e6e6fa;
}

.al {
  margin-top: 20px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  width: 600px;
  justify-content: space-between;
  align-items: center;
}
.altxt {
  border-radius: 5px;
  border-left: 5px solid #629a9c;
  background-color: #fff;
  width: 560px;
  padding: 5px 20px;
  margin-top: 20px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.al p {
  font-size: 24px;
  font-weight: bold;
}
.num2 {
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background-color: #e6e6fa;
}
.jian {
  text-align: center;
  line-height: 20px;
  width: 20px;
  height: 20px;
  border-radius: 20px;
  color: #fff;
  font-weight: bold;
  font-size: 20px;
  background-color: #cccccc;
  border: 2px solid #fff;
  box-shadow: 0 0 0px 2px #cccccc;
}
</style>