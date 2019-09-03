<template>
    <div class="security">
        <div class="bankimg">
            <img class="banrimg" src="../assets/img/solution/security.png" alt="">
        </div>
        <div class="navList">
            <router-link to="/bank">银行</router-link>
            <router-link to="/security" class="bottomBodr">证券</router-link>
            <router-link to="/insurance">保险</router-link>
            <router-link to="/finance">互联网金融</router-link>
            <router-link to="/marketing">营销</router-link>
            <router-link to="/operative">运营</router-link>
        </div>
        <BanIcontext :banIcontext="banIcontextData"></BanIcontext>
        <aiTextandimg :aitextandimg="textimgData"></aiTextandimg>
    </div>
</template>
<script>
import BanIcontext from '../components/bank-iconText'
import aiTextandimg from '../components/ai-textandimg'
export default {
    name:"security",
    data(){
        return {
            banIcontextData:{},
            textimgData:{}
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
                        "iconurl":"src/assets/img/solution/i-1.png",
                        "text":"互联网流量逐渐见底"
                    },
                    {
                        "iconurl":"src/assets/img/solution/i-2.png",
                        "text":"缺乏完善的客户价值体系"
                    },
                    {
                        "iconurl":"src/assets/img/solution/i-3.png",
                        "text":"内容创意素材匮乏"
                    },
                    {
                        "iconurl":"src/assets/img/solution/i-4.png",
                        "text":"客户复购率低"
                    }
                ]
            }
        },
        seticonimgData(){
            this.textimgData = {
                "title":"AIMO智能营销平台将如何为您解决这些问题？",
                "textList":[
                    {
                        "title":"评估引流及推广渠道效果",
                        "content":"AIMO可通过埋点方式实现持续监测券商引流合作伙伴及营销推广渠道，即使了解并评估其所带来的新用户、有效户的转化效果，各渠道客户留存效果，从而进行营销推广策略的优化。",
                        "url":"src/assets/img/solution/sec1.png"
                    },
                    {
                        "title":"流失及沉默用户的唤醒",
                        "content":"券商市场的争夺正趋于激烈，AIMO助力商业银行了解客户流失去向，依靠底层数据解析客户的流失是流向竞品还是近期不再交易，为其唤活促醒提供有效策略支持。",
                        "url":"src/assets/img/solution/se2.png"
                    },
                    {
                        "title":"理财产品推广及优化 客户体验的持续提升",
                        "content":"AIMO对于理财产品的营销推广活动进行跟踪监测，评估营销活动效果，并可根据用户路径进行归因分析，对产品推广及界面体验进行持续优化。",
                        "url":"src/assets/img/solution/se3.png"
                    }
                ]
            }
        }
    }
}
</script>
<style lang="scss" scoped>
.security{
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