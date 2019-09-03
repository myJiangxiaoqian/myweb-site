<template>
    <div class="imgboost">
        <img :src="imgbox.url" alt="">
    </div>
</template>
<script>
export default {
    name:"imgboost",
    props:["imgbox"]
}
</script>
<style lang="scss" scoped>
.imgboost{
        
        img{
            width:100%;
            height:100%;
            transition:all 2s;
        }
        img:hover{
            transition:all 2s;
            transform:scale(1.1);
        }
}
</style>