<template>
    <div class="banks">
        <img class="banrimg" src="../assets/img/customerCase/bank.jpg" alt="">
        <BanksText :banksText="banksTestData"></BanksText>
    </div>
</template>
<script>
import BanksText from '../components/banks-text'
export default {
    name:"banks",
    data(){
        return{
            banksTestData:{}
        }
    },
    components:{
        BanksText
    },
    mounted(){
        this.setbanksTestData();
    },
    methods:{
        setbanksTestData(){
            this.banksTestData={
                "title":"某国内领先证券股份有限公司",
                "textList":[
                    {
                        "imgurl":"src/assets/img/customerCase/1.png",
                        "title":"背景与挑战",
                        "text":"作为国内领先的零售银行，该行积累了海量的基础零售客户群以及丰富的零售理财标的，但也对如何把握每一个客户的理财产品需求，进行个性化的客户触达提出了更高的要求。因此，该行亟需一种手段改变传统的营销策略制定方式，在银行间竞争日益激烈与客户迁移成本越来越低的形势下保持领先与竞争优势。"
                     },
                     {
                        "imgurl":"src/assets/img/customerCase/2.png",
                        "title":"业务目标",
                        "text":"针对千万级的全量零售基础客户，通过分析每一个客户在不同时间点的理财需求与偏好，预估客户对所有理财产品的营销响应率，从而精准地指导理财营销工作的开展，实现理财产品销售额与客户AUM的提升。"
                     },
                     {
                        "imgurl":"src/assets/img/customerCase/3.png",
                        "title":"难点与关键成功因素",
                        "text":"在海量的基础客户群中，每一个客户的需求都是个性化的，甚至每个个体的需求随着时间、外部环境的变化也会相应的发生变化。因此，如何精准地洞察每个客户在不同时间点的需求，并及时的做出营销决策与客户触动是关键的成功因素。通过AIMO智能营销平台，将建模与业务链接在一起，构建了千万级维度的机器学习模型，并利用数千万级别的历史营销样本，对客户的需求及偏好进行了深入的剖析和洞察。例如：某个客户在股票指数下跌时会更倾向于购买哪个理财产品。通过具备如此深入的客户洞察能力，该行实现了对客户理财产品需求的精准把握与度身定制。此外，基于营销平台，实现了该模型的线上预估服务与自学习，在定期生成预估结果的同时，也通过不断地收集营销数据反馈，进行模型的迭代与更新，为该行提供持续优化的营销决策"
                     },
                     {
                        "imgurl":"src/assets/img/customerCase/4.png",
                        "title":"业务成果",
                        "text":"在某一次线上理财营销活动中，针对某一款理财产品，AIMO智能营销平台精准推荐模型相较于专家规则组，在不同的资产段，营销的响应率提升了200% ~ 1100%，金额提升了50% ~ 500%，在显著提升响应率与收入的同时，也有效提升长尾客户的客户价值与留存率，预计为该行每年带来数千万的理财产品销售净利润提升。"
                     },
                     {
                        "imgurl":"src/assets/img/customerCase/5.png",
                        "title":"展望未来",
                        "text":"基于如此振奋人心的业务效果，该行也将继续与AIMO一起，探索机器学习技术在基础客户营销触动领域更深入的应用，包括更丰富的产品线、更立体的触达渠道覆盖、更多样的业务目标等，为客户提供更卓越的服务体验。"
                     }
                ]
            }
        }
    }
}
</script>
<style lang="scss" scoped>
.banks{
    width:100%;
    height: 100%;
    .banrimg{
        width:100%;
        height:310px;
    }   
}
</style>