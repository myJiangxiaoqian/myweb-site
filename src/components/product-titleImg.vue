<template>
    <div class="titleImg">
        <h1>{{productTitleImg.title}}</h1>
        <!-- <img src="../assets/img/productAndService/product/PIThumbnail1.jpg" alt=""> -->
        <ul>
            <li v-for="(item,index) in productTitleImg.imgList" :key="index"><aiImgboost :imgbox="item"></aiImgboost></li>
        </ul>
    </div>
</template>
<script>
import aiImgboost from './ai-imgboost'
export default {
    name:"titleImg",
    data(){
        return {
        }
    },
    props:["productTitleImg"],
    components:{
        aiImgboost
    }
}
</script>
<style lang="scss" scoped>
.titleImg{
    width:100%;
    h1{
        height:250px;
        line-height: 250px;
        text-align: center;
        font-size:34px;
    }
    ul{
        width:100%;
        margin-left:70px;
        li{
            width: calc(45% - 20px);
            height:304px;
            float: left;
            margin-left:20px;
            margin-bottom:20px;
            overflow: hidden;
            
        }
    }
}
</style>