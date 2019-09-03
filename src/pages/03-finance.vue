<template>
    <div class="finance">
        <div class="bankimg">
            <img class="banrimg" src="../assets/img/solution/itfin.png" alt="">
        </div>
        <div class="navList">
            <router-link to="/bank">银行</router-link>
            <router-link to="/security">证券</router-link>
            <router-link to="/insurance">保险</router-link>
            <router-link to="/finance" class="bottomBodr">互联网金融</router-link>
            <router-link to="/marketing">营销</router-link>
            <router-link to="/operative">运营</router-link>
        </div>
        <bankTitletext :bankTitletext="titleTextData"></bankTitletext>
        <aiTextandimg :aitextandimg="textimgData"></aiTextandimg>
    </div>
</template>
<script>
import aiTextandimg from '../components/ai-textandimg'
import bankTitletext from '../components/bank-titleText'
export default {
    name:"finance",
    data(){
        return {
            textimgData:{},
            titleTextData:{}
        }
    },
    components:{
        aiTextandimg,
        bankTitletext
    },
    mounted(){
        this.seticonimgData()
        this.settitleTextData()
    },
    methods:{
        seticonimgData(){
            this.textimgData = {
                "title":"",
                "textList":[
                    {
                        "title":"将线上线下的客户数据收集到一个平台",
                        "content":"对互联网金融行业来说，他们的网站、APP和以及线下业务通常都拥有大量数据集。AIMO为金融服务商户提供一套工具，帮助他们进行数据分析和统计，提高推广效率，找到高转化率高留存率的获客渠道，减少无效投放。",
                        "url":"src/assets/img/solution/it1.png"
                    },
                    {
                        "title":"使用智能的AI预测技术，在客户产生想法之前找到它",
                        "content":"在激烈的竞争环境中，使用工具来进行智能预测和假设，是一个游戏规则的改变。AIMO利用AI学习库，提供深度可操作的洞察，以实现精准预测。",
                        "url":"src/assets/img/solution/it2.png"
                    },
                    {
                        "title":"实时数据分析驱动洞察",
                        "content":"有时，改变想法或体验的机会仅在一瞬间。我们让企业拥有跨各种不同营销渠道和触点，轻松创建数据驱动操作的能力。",
                        "url":"src/assets/img/solution/it3.png"
                    }
                ]
            }
        },
        settitleTextData(){
            this.titleTextData = {
                "title":"让数据真正驱动业务并贡献价值已成为互金企业的 “制胜关键”",
                "text":"当前金融行业对大数据的应用需求逐渐增长，以大数据营销、运营及大数据风控等方向的技术应用愈加成熟，如何围绕数字技术不断优化其客户交互、产品、流程和数据已成为互联网金融企业打造核心竞争力的关键。"
            }
        }
    }
}
</script>
<style lang="css" scoped>
/deep/ .contentbox h1{
    display: none;
}
</style>
<style lang="scss" scoped>
.finance{
     width:100%;
    overflow: hidden;
    background-color:#F5F5F5; 
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
    
}
</style>