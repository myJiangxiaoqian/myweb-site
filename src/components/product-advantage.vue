<template>
    <div class="advantagebox">
        <h1>{{ proadvantage.title }}</h1>
        <dl v-for="(item,index) in proadvantage.productAdList" :key="index">
            <dt><img :src="item.img" alt=""></dt>
            <dd>
                <h2>{{ item.title }}</h2>
                <p>{{ item.text }}</p>
            </dd>
        </dl>
    </div>
</template>
<script>
export default {
    name:"advantagebox",
    props:["proadvantage"]
}
</script>
<style lang="scss" scoped>
.advantagebox{
    width:100%;
    background-color: #f5f5f5;
    h1{
        width:100%;
        font-size:36px;
        height: 250px;
        line-height: 250px;
        text-align: center;
    }
    dl{
        width:330px;
        height:470px;
        display: inline-block;
        background-color: #fff;
        margin-left:90px;
        margin-right:10px;
        margin-bottom:70px;
        dt{
            width:101px;
            height:101px;
            margin:70px 20px 40px 115px;
            img{
                width:100%;
                height:100%;
            }
        }
        dd{
            text-align: center;
            padding:10px 40px;
            h2{
                font-size:30px;
                height:70px;
                line-height: 70px;
                font-weight: normal;
            }
            p{
                color:#444444;
                font-size:16px;
                line-height: 38px;
                text-align: left;
            }
        }
    }
    dl:hover{
        box-shadow: 7px 5px 4px #eee;
    }
}
</style>