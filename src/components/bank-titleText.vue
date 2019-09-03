<template>
    <div class="titletext">
        <h1>{{ bankTitletext.title}}</h1>
        <p>{{bankTitletext.text}}</p>
    </div>
</template>
<script>
export default {
    name:"titletext",
    props:["bankTitletext"]
}
</script>
<style lang="scss" scoped>
.titletext{
    padding:20px 50px;
    h1{
        width: 100%px;
        text-align: center;
        font-size:34px;
        height:150px;
        line-height: 150px;
        color:#333;
        margin-top:120px;
    }
    p{
        width: 1000px;
        text-align: center;
        font-size:18px;
        line-height: 40px;
        color:#333;
        margin: auto;
        margin-bottom:60px;
    }
}
</style>