<template>
  <div id="app">
    <div @click="handleclick">{{ msg }}</div>
  </div>
</template>

<script lang="ts">
// export default {
//   data() {
//     return { msg: "good" };
//   },
// };
import { Vue, Component } from "vue-property-decorator";
export default class App extends Vue {
  private msg: string = "good";
  handleclick(): void {
    console.log("click");
  }
}
</script>

<style>
</style>
