<template>
    <div class="iconp">
        <h1>{{ banIcontext.title }}</h1>
        <ul>
            <li v-for="(item,index) in banIcontext.iconTextList" :key="index">
                <img :src="item.iconurl" alt="">
                <p>{{ item.text}}</p>
            </li>    
        </ul>    
    </div>
</template>
<script>
export default {
    name:"iconp",
    props:["banIcontext"]
}
</script>
<style lang="scss" scoped>
.iconp{
    width:100%;
    padding:30px 20px;
    h1{
        font-size:36px;
        text-align:center;
        height:200px;
        line-height: 200px;
    }
    ul{
        width:100%;
        text-align:center;
        li{
            width:300px;
            height:180px;
            display: inline-block;
            list-style:none;
            background-color: #fff;
            text-align:center;
            img{
                width:80px;
                height:79px;
            }
            p{
                height:100px;
                line-height: 100px;
                font-size:16px;
                color:#262626;
            }
        }
    }
}
</style>