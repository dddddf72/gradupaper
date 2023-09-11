<template>
  <div id="app">
    <Hello v-model="value" @change="onChange"/>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Model } from "vue-property-decorator";
import Hello from './components/Hello.vue'
@Component({
  components:{
    Hello
  }
})
export default class App extends Vue {
  private value:boolean = true
  onChange(val:any){
    console.log(val)
  }
}
</script>
