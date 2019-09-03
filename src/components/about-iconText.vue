<template>
    <div class="aboutIconText">
        <dl v-for="(item,index) in aboutIconText.iconTextDataList" :key="index">
            <dt>
                <img :src="item.imgurl" alt="">
            </dt>
            <dd>
                <h2>{{ item.title }}</h2>
                <p>{{ item.text }}</p>
            </dd>
        </dl>
    </div>
</template>
<script>
export default {
    name:"aboutIconText",
    props:["aboutIconText"]
}
</script>
<style lang="scss" scoped>
.aboutIconText{
    width:100%;
    margin-bottom:50px;
    dl{
        width:200px;
        height:200px;
        display: inline-block;
        text-align: center;
        margin:50px 50px;
        dt{
            width:200px;
            height: 79px;
            margin:auto;
            img{
                width:80px;
                height:79px;
            }
        }
        dd{
            width:200px;
            height:140px;
            h2{
                font-size:36px;
                height: 90px;
                line-height: 90px;
                color:#313131;
            }
            p{
                font-size:16px;
                line-height: 50px;
                height: 50px;
                color:#333;
            }
        }
    }
}
</style>