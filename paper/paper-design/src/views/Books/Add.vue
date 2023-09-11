<template>
    <div>
        Add hello world
        <Achange>

        </Achange>
    </div>
</template>

<script>
import Achange from '../../components/Achange'
    export default {
        components:{
            Achange
        },
        mounted(){
            console.log(this.$route)
        }
    }
</script>

<style scoped>

</style>