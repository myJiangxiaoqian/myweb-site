<template>
    <div class="iconimg">
        <h2>{{aiIconimg.title}}</h2>
        <div class="imgantext" v-for="(item,index) in aiIconimg.textList" :key="index">
            <img :src="item.imgurl" alt="">
            <p>{{item.title}}</p>
        </div>
    </div>
</template>
<script>
export default {
    name:"iconimg",
    props:['aiIconimg']
}
</script>
<style lang="scss" scoped>
.iconimg{
    width:100%;
    height:700px;
    background-color: #F5F5F5;
    margin-top:80px;
    h2{
        font-size:36px;
        width:100%;
        height: 200px;
        line-height: 200px;
        text-align: center;
        color:#323232;
    }
    .imgantext{
        width:530px;
        height:375px;
        background-color: #fff;
        margin:20px 70px;
        float: left;
        overflow:hidden;
        img{
            width:100%;
            height:304px;
            transition:all 2s;
        }
        img:hover{
            transition:all 2s;
            transform:scale(1.1);
        }
        p{
            height:70px;
            line-height: 70px;
            text-align: center;
            font-size:24px;
            color:#000;
        }
    }
}
</style>