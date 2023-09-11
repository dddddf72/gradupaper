<template>
    <transition name="list" mode="in-out" >
    <slot></slot>
    </transition>
</template>
<script>
    export default {
        name:'Fade'
    }
</script>
<style scoped>
.list-enter-active, .list-leave-active {
  transition: all .8s;
}
.list-enter, .list-leave-to{
  opacity: 0;
  transform: translateY(50px);
}
</style>