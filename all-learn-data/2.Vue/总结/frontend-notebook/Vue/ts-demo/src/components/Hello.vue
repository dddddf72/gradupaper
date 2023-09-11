<template>
<input type="checkbox" :checked="value"   @change="changed"/>
</template>

<script lang="ts">
import { Vue, Component,Model } from "vue-property-decorator";

@Component({})
export default class Hello extends Vue {
  @Model('change') value !: boolean
 
  changed(ev:any) {
    this.$emit('change', ev.target.checked)
  }
}
</script>

