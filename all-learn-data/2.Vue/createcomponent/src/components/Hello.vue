<template>
  <div>hello world{{ data }}</div>
</template>

<script>
export default {
  name: "Hello",
  props: {
    data: {
      type: String,
    },
  },
};
</script>

<style scoped>
div {
  color: red;
}
</style>