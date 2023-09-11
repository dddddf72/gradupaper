<template>
    <div>
        <Fade>
        <router-view></router-view>
        </Fade>
    </div>
</template>

<script>
import Fade from '../../components/Fade'
    export default {
        components:{
            Fade
        },
    }
</script>

<style scoped>

</style>