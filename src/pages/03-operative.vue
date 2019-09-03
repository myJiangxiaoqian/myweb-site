<template>
    <div class="operative">
        <div class="bankimg">
            <img class="banrimg" src="../assets/img/solution/operation.png" alt="">
        </div>
        <div class="navList">
            <router-link to="/bank">银行</router-link>
            <router-link to="/security">证券</router-link>
            <router-link to="/insurance">保险</router-link>
            <router-link to="/finance">互联网金融</router-link>
            <router-link to="/marketing">营销</router-link>
            <router-link to="/operative" class="bottomBodr">运营</router-link>
        </div>
        <BanIcontext :banIcontext="banIcontextData"></BanIcontext>
        <aiTextandimg :aitextandimg="textimgData"></aiTextandimg>
    </div>
</template>
<script>
import BanIcontext from '../components/bank-iconText'
import aiTextandimg from '../components/ai-textandimg'
export default {
    name:"operative",
    data(){
        return {
            textimgData:{},
            banIcontextData:{}
        }
    },
    components:{
        BanIcontext,
        aiTextandimg
    },
    mounted(){
        this.setBanIcontextData();
        this.seticonimgData();
    },
    methods:{
        setBanIcontextData(){
            this.banIcontextData = {
                "title":"现证券行业亟待解决的问题",
                "iconTextList":[
                    {
                        "iconurl":"src/assets/img/solution/s-1.png",
                        "text":"互联网流量逐渐见底"
                    },
                    {
                        "iconurl":"src/assets/img/solution/s-2.png",
                        "text":"缺乏完善的客户价值体系"
                    },
                    {
                        "iconurl":"src/assets/img/solution/s-3.png",
                        "text":"内容创意素材匮乏"
                    },
                    {
                        "iconurl":"src/assets/img/solution/s-4.png",
                        "text":"客户复购率低"
                    }
                ]
            }
        },
        seticonimgData(){
            this.textimgData = {
                "title":"AIMO将如何帮您建立完整的运营体系？",
                "textList":[
                    {
                        "title":"新用户转化为有效老用户",
                        "content":"企业发展渠道新用户逐利性较强，品牌新用户成本较高，而复投门槛较低，老用户潜力较大，AIMO为您提供全景用户画像，细致精准的定位目标用户潜在需求，无论是开发新客户还是唤醒老客户，都有利用AI技术的数据模型为依据，能够有效降低获客成本，带来精准的流量以及后续转化。",
                        "url":"src/assets/img/solution/op1.png"
                    },
                    {
                        "title":"便捷高效的内容运营",
                        "content":"企业对外营销推广过程中，面临物料制作、传播、获客、用户画像等一系列营销难题。 目前随着H5技术应用的不断成熟，轻量化的创意内容展示，获得了大量企业用户的青睐，AIMO平台的创意模板丰富，设计效果奢华，制作过程简捷，高效，便于传播。",
                        "url":"src/assets/img/solution/op2.png"
                    },
                    {
                        "title":"丰富产品线提高客户复购率",
                        "content":"AIMO对于产品的销售情况进行跟踪监测，评估不同产品的市场反响，并可根据用户路径进行归因分析，对产品的完善有指导价值，企业运营可以快速响应大数据的反馈，不断优化产品线，丰富产品线，提高客户复购率。",
                        "url":"src/assets/img/solution/op3.png"
                    }
                ]
            }
        }
    }
}
</script>
<style lang="scss" scoped>
.operative{
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
}
</style>