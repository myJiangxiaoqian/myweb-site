<template>
    <div class="bank">
        <div class="bankimg">
            <img class="banrimg" src="../assets/img/solution/bank.png" alt="">
        </div>
        
        <div class="navList">
            <router-link to="/bank" class="bottomBodr">银行</router-link>
            <router-link to="/security">证券</router-link>
            <router-link to="/insurance">保险</router-link>
            <router-link to="/finance">互联网金融</router-link>
            <router-link to="/marketing">营销</router-link>
            <router-link to="/operative">运营</router-link>
        </div>
        <div class="banksct">
            <h1>现在银行所面临的营销难点是什么？</h1>
            <img src="../assets/img/solution/bank-1.png" alt="">
        </div>
        <aiTextandimg :aitextandimg="textimgData"></aiTextandimg>
    </div>
</template>
<script>
import aiTextandimg from '../components/ai-textandimg'
export default {
    name:"bank",
    data(){
        return {
            textimgData:{}
        }
    },
    components:{
        aiTextandimg
    },
    mounted(){
        this.seticonimgData();
    },
    methods:{
        seticonimgData(){
            this.textimgData = {
                "title":"AIMO智能营销平台将可以帮助您解决难点",
                "textList":[
                    {
                        "title":"根据目标群体画像，优化推广渠道",
                        "content":"AIMO的用户画像定期追踪用户行为习惯、行为特征变化并根据地域、设备、消费属性等特征以及基于埋点的事情分析进行特定筛选，在目标人群的推广中能够做到有的放矢，有效评估。",
                        "url":"src/assets/img/solution/bank1.png"
                    },
                    {
                        "title":"了解你的用户流失去向",
                        "content":"手机银行、信用卡市场的争夺正趋于激烈，AIMO助力商业银行了解客户流失去向，依靠底层数据解析客户的流失是流向竞品还是放弃使用，为其焕活促醒提供有效策略支持。",
                        "url":"src/assets/img/solution/bank2.png"
                    },
                    {
                        "title":"沉睡用户唤醒促活及流失用户召回",
                        "content":"通过AIMO用户行为数据分析以及基于AIMO埋点的事情分析，按照不同沉睡、流失用户的特性进行精准用户分群，并利用AIMO推送功能进行推送消息的底层拉起，进行消息的精准触达与推送，并根据推送效果进行不断优化。",
                        "url":"src/assets/img/solution/bank3.png"
                    },
                    {
                        "title":"使用营销模板进行推广",
                        "content":"AIMO智能营销运营平台提供海量的金融领域专属营销推广模板，品牌宣传和营销活动一键设置和开展，结合我们专业的营销设计专家为您打造专属定制的银行业务品牌设计和活动推广，为您省心、省时、省力，营销效果更佳。",
                        "url":"src/assets/img/solution/bank4.png"
                    }
                ]
            }
        }
    }
}
</script>
<style lang="scss" scoped>
.bank{
    width:100%;
    overflow: hidden;
    .bankimg{
        width:100%;
        height:711px;
        .banrimg{
            width:100%;
            height:100%; 
        }
    }
    .navList{
        width:100%;
        height:50px;
        line-height: 50px;
        background-color: #1a1a1a;
        padding:0 70px;
        overflow: hidden;
        text-align: center;
        a{
            width:15%;
            float: left;
            color:#fff;
            text-decoration: none;
            font-size:20px;
        }
        .bottomBodr{
            color:#3c85f4;
   	        background:url("../assets/img/solution/ac-1.png") no-repeat bottom;
        }
    }
    .banksct{
        padding:20px 50px;
        h1{
            width: 100%px;
            text-align: center;
            font-size:34px;
            height:300px;
            line-height: 300px;
            color:#333;
        }
        img{
            width:1240px;
            height: 526px;
        }
    }
    
}
</style>