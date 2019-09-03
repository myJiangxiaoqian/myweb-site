<template>
    <div class="function">
            <h1>{{ proFunction.title }}</h1>
            <p>{{ proFunction.text }}</p>
            <img :src="proFunction.img" alt="">
    </div>
</template>
<script>
export default {
    name:"function",
    props:["proFunction"]
}
</script>
<style lang="scss" scoped>
.function{
    width:100%px;
    padding:30px 120px;
    text-align: center;
    h1{
        font-size:36px;
        height: 180px;
        line-height: 100px;
    }
    p{
        width:900px;
        margin: auto;
        font-size:20px;
        line-height: 40px;
        color:#444444;
        margin-bottom:50px;
    }
    img{
        width:100%;
        height:450px;
    }
} 
</style>