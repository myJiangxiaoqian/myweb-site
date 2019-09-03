<template>
    <div class="banks">
        <img class="banrimg" src="../assets/img/customerCase/securities.jpg" alt="">
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
                        "text":"随着技术的快速发展，人工智能在证券投资行业的实践中得到日益广泛的应用。作为行业中敢于创新的领先型，该证券公司一直努力探索怎样为其客户提供更加可靠、灵活、高适应性、稳健、并严格控制风险的投资策略。而对于海量的证券大数据的收集、清理、分析、挖掘，并进行决策建议，是其新的挑战。"
                     },
                     {
                        "imgurl":"src/assets/img/customerCase/2.png",
                        "title":"业务目标",
                        "text":"维持客户仓位，以量化交易策略主导客户被套仓位进行交易，降低持仓成本，实现盘活解套。通过对市场进行实时扫描，提取符合各种预设条件的股票，预警过滤器中发出信号，根据各种组合策略实时计算分析，对于不同用户的仓位和风控选择，提醒用户或者直接进行交易。"
                     },
                     {
                        "imgurl":"src/assets/img/customerCase/3.png",
                        "title":"难点与关键成功因素",
                        "text":"证券市场对于大数据和人工智能而言，主要的问题在于如何排除数据的噪声，如何在大量的数据中，让机器学习能够提取到有效的数据。另外还需要确定如何设置短期、中期、与长期目标；在不同的阶段，应正确选择训练特征和训练数据集。针对该证券公司的现状，我们把机器学习定位为一个全市场扫描的辅助手段，即把它作为过滤器，并且将机器学习和传统的技术分析手段结合起来。同时依托AIMO营销训练引擎，实现了机器学习的快速开发，完成了系统的快速建模，快速训练，快速部署。"
                     },
                     {
                        "imgurl":"src/assets/img/customerCase/4.png",
                        "title":"业务成果",
                        "text":"通过AIMO营销训练引擎为该证券公司提供最优量化交易策略。让用户可以进行仓位和风控选择，对交易进行严格把控。"
                     },
                     {
                        "imgurl":"src/assets/img/customerCase/5.png",
                        "title":"展望未来",
                        "text":"虽然我们的人工智能技术在证券行业上已经小有成就，但还是希望在不久的将来，通过对证券大数据的机器学习，分析处理，给证券行业提供更稳定、更严格的风控，对不同阶段、市场、用户群体，有提供更优的投资策略。"
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