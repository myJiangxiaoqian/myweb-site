<template>
    <div class="textBox">
        <h1>{{banksText.title}}</h1>
        <div class="textList">
            <dl v-for="(item,index) in banksText.textList" :key="index">
                <dt>
                    <img :src="item.imgurl" alt="">
                    <p>{{item.title}}</p>
                </dt>
                <dd>{{item.text}}</dd>
            </dl>
        </div>
    </div>
</template>
<script>
export default {
    name:"textBox",
    props:["banksText"]
}
</script>
<style lang="scss" scoped>
.textBox{
    width: 100%;
    padding:40px 90px 120px 90px;
    margin-top:30px;
    h1{
        font-size:36px;
        height:100px;
        line-height: 100px;
        color:#333333;
    }
    .textList{
        width:840px;
        height: 100%;
        border: 1px solid #999;
        padding:0px 170px 0px  130px;
        dl{
            width: 100%;
            border-bottom: 1px solid #999;
            padding-top:60px;
            dt{
                height: 41px;
                line-height: 41px;
                img{
                    width:36px;
                    height: 41px;
                    float: left;
                }
                p{
                    width:400px;
                    font-size:24px;
                    color:#252525;
                    margin-left:20px;
                    float: left;
                }
            }
            dd{
                font-size:16px;
                color:#272727;
                line-height: 35px;
                margin-top:20px;
                padding-bottom: 90px;
            }
            
        }
        dl:last-child{
            border:none;
        }
    }   
    
    
}
</style>