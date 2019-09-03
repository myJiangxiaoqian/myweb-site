<template>
    <div class="icontext">
        <h2>{{ aiIcontext.title }}</h2>
        <dl class="dlbox" v-for="(item,index) in aiIcontext.textList" :key="index">
            <dt><img :src="item.imgurl" alt=""></dt>
            <dd>
                <h3>{{ item.title }}</h3>
                <p>{{ item.content }}</p>
            </dd>
        </dl>
    </div>
</template>
<script>
export default {
    name:"icontext",
    props:['aiIcontext']
}
</script>
<style lang="scss" scoped>
.icontext{
    margin:0 80px;
    h2{
            font-size:34px;
            width:100%;
            height: 200px;
            line-height: 200px;
            text-align: center;
            color:#333;
    }
    .dlbox{
            width:450px;
            height:200px;
            display: inline-block;
            color: #262626;
            margin:30px 50px;
            padding:10px 20px;
            dt{
                width:66px;
                height:300px;
                float: left;
                margin:20px 20px;
            }
            dd{
                width:330px;
                height:300px;
                float: left;
                h3{
                    font-size:20px;
                    font-weight: normal;
                    margin:15px 0;
                    color: #262626;
                }
                p{
                    font-size:16px;
                    line-height: 28px;
                }
            }
    }
    .dlbox:hover{
        box-shadow:3px 3px 4px #afa6a6;
    }
}
</style>