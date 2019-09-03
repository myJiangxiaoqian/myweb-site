<template>
    <div class="insurance">
        <div class="bankimg">
            <img class="banrimg" src="../assets/img/solution/insurance.png" alt="">
        </div>
        <div class="navList">
            <router-link to="/bank">银行</router-link>
            <router-link to="/security" >证券</router-link>
            <router-link to="/insurance" class="bottomBodr">保险</router-link>
            <router-link to="/finance">互联网金融</router-link>
            <router-link to="/marketing">营销</router-link>
            <router-link to="/operative">运营</router-link>
        </div>
        <div class="banksct">
            <img src="../assets/img/solution/ball.gif" alt="">
        </div>
        <aiTextandimg :aitextandimg="textimgData"></aiTextandimg>
    </div>
</template>
<script>
import aiTextandimg from '../components/ai-textandimg'
export default {
    name:"insurance",
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
                "title":"如何识别风险用户？+如何优化理赔业务？",
                "textList":[
                    {
                        "title":"挖掘大量隐藏的数据价值",
                        "content":"AIMO可利用大数据与AI技术相结合，从保险公司已有的大量用户数据中挖掘有价值的数据，有助于保险公司开展针对性营销、判断客户潜在需求、个性化推送产品等新型业务。",
                        "url":"src/assets/img/solution/ins1.png"
                    },
                    {
                        "title":"优化营销及理赔业务提高客户满意度",
                        "content":"AIMO系统提供智能化管理系统，跨渠道营销方案，优化营销、理赔、用户服务等环节，降低人工成本，提高风险把控能力，推进更加精准的产品设计、定价及营销推广策略，从而提高用户的满意度，并达到增强用户粘性的效果。",
                        "url":"src/assets/img/solution/ins2.png"
                    },
                    {
                        "title":"提高保险产品服务可得性及便捷性",
                        "content":"打破时空限制，实现远程全天候客户服务，增加用户触点，获得更多信息，增加用户互动途径，获得更多用户信息，推荐新保险产品，持续追踪检测用户及财务状态，将保险业务范围从承保延展到增值服务。",
                        "url":"src/assets/img/solution/ins3.png"
                    }
                ]
            }
        }
    }
}
</script>
<style lang="scss" scoped>
.insurance{
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
        img{
            width:1240px;
            height: 526px;
        }
    }
}
</style>