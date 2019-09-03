<template>
    <div class="product1">
        <img class="banrimg" src="../assets/img/productAndService/AIIntellectualTechnology/banner1.jpg" alt="">
        <product-a1 :proFunction="textImgData"></product-a1>
        <ai-icontext :aiIcontext="aiIcontextData"></ai-icontext>
        
    </div>
</template>
<script>
import productA1 from '../components/product-textImg'
import aiIcontext from '../components/ai-iconText'
export default {
    name:"product1",
    data(){
        return {
            textImgData:{},
            aiIcontextData:{}
        }
    },
    components:{
        productA1,
        aiIcontext
    },
    mounted(){
        this.settextImgData();
        this.setaiIcontext();
    },
    methods:{
        settextImgData(){
            this.textImgData=
                {
                    "title":"体系介绍",
                    "text":"AIMO营销管理平台充分利用大数据及人工智能、通过数据可视化，为金融行业提供量身定制的智能营销运营服务，具备低成本、高弹性、高可用、安全合规的特性，帮助金融客户实现从传统IT向一站式智能营销运营的转型",
                    "img":'src/assets/img/productAndService/AIIntellectualTechnology/introduceImg1.jpg'
                }
            
        },
        setaiIcontext(){
             this.aiIcontextData={
                "title":"八大优势",
                "textList":[
                     {
                        "imgurl":"src/assets/img/productAndService/AIIntellectualTechnology/AIIcon1.png",
                        "title":"定制金融数据",
                        "content":"定制金融数据金融行业数据分析，为金融行业客户提供全链路数据服务"
                     },{
                        "imgurl":"src/assets/img/productAndService/AIIntellectualTechnology/AIIcon2.png",
                        "title":"智能预警",
                        "content":"通过对个人客户进行特征分析，结合金融数据维度和品友标签维度共同建模，在个人客户中甄别可能发生不良金融行为的用户并及时进行预警干预"
                     },
                     {
                        "imgurl":"src/assets/img/productAndService/AIIntellectualTechnology/AIIcon3.png",
                        "title":"提升用户转化",
                        "content":"多维度勾勒金融企业用户行为路径，为金融客户实现决策铺路"
                     },{
                        "imgurl":"src/assets/img/productAndService/AIIntellectualTechnology/AIIcon4.png",
                        "title":"渠道策略优化",
                        "content":"依托数据分析，机器学习，标签动态管理，提出针对性的渠道策略，进一步优化渠道管理"
                     },
                     {
                        "imgurl":"src/assets/img/productAndService/AIIntellectualTechnology/AIIcon5.png",
                        "title":"运营优化管理",
                        "content":"基于国际行业标准模型的运营支持服务体系，帮助金融企业改善用户体验从而达到转化率的提升"
                     },{
                        "imgurl":"src/assets/img/productAndService/AIIntellectualTechnology/AIIcon6.png",
                        "title":"产品优化建议",
                        "content":"分析金融企业各产品的热点和用户偏好类型，对金融产品调研更加科学可靠"
                     },
                     {
                        "imgurl":"src/assets/img/productAndService/AIIntellectualTechnology/AIIcon7.png",
                        "title":"精细化受众",
                        "content":"金融企业内部数据，建立金融品牌专属标签体系，全方位展现360度用户画像，以达到对用户的精细化管理"
                     },{
                        "imgurl":"src/assets/img/productAndService/AIIntellectualTechnology/AIIcon8.png",
                        "title":"金融信用风险模型",
                        "content":"利用大数据分析技术建立信用风险评估模型，找到变量间的相关关系，作为提高决策准确率和风险分析的新工具"
                     }
                ]
             }   
        }
    }
}
</script>
<style lang="scss" scoped>
.product1{
    width:100%;
    overflow: hidden;
    margin-bottom: 100px;
    .banrimg{
        width:100%;
        height:710px;
        transform: scale(1.5,1.0);
    }
    .imgboostbox{
        width:100%;
        height: 600px;
    }
}
</style>