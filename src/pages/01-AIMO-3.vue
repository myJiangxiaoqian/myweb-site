<template>
    <div class="aimo3">
         <img class="banrimg" src="../assets/img/AIMO/banner3.jpg" alt="">
         <aiIcontext :aiIcontext="aiIcontextData"></aiIcontext>
         <aiTextandimg :aitextandimg="aitextandimgData"></aiTextandimg>
    </div>
</template>
<script>
import aiIcontext from '../components/ai-iconText'
import aiTextandimg from '../components/ai-textandimg'
export default {
    name:"aimo3",
    data(){
        return {
            aiIcontextData:{},
            aitextandimgData:{}
        }
    },
    components:{
        aiIcontext,
        aiTextandimg
    },
    mounted(){
        this.setaiIcontext();
        this.setaitextandimgData();
    },
    methods:{
        setaiIcontext(){
             this.aiIcontextData={
                "title":"技术特点",
                "textList":[
                     {
                        "imgurl":"src/assets/img/AIMO/VATIcon1.png",
                        "title":"分布式数据建模",
                        "content":"支持从数据仓库和数据存储中拉取数据，分布式数据计算、分析；支持任务例行化"
                     },{
                        "imgurl":"src/assets/img/AIMO/VATIcon2.png",
                        "title":"种数据源支持",
                        "content":"支持接入包括AIMO分析型数据库、关系型数据库、本地CSV上传和在线API等，支持动态请求"
                     },
                      {
                        "imgurl":"src/assets/img/AIMO/VATIcon3.png",
                        "title":"统一的时间控件",
                        "content":"时间窗口联动，统一的时间区域控件，自动帮您每天拉取最新的数据进行展示"
                     },{
                        "imgurl":"src/assets/img/AIMO/VATIcon4.png",
                        "title":"丰富的数据建模",
                        "content":"支持用户行为、topK、点击率、留存、漏斗、分位数等数据模型"
                     }
                ]
             }   
        },
         setaitextandimgData(){
             this.aitextandimgData={
                "title":"应用场景",
                "textList":[
                     {
                        "url":"src/assets/img/AIMO/VATMedia1.jpg",
                        "title":"可视化分析",
                        "content":"依托我们的BI可视化分析技术的数据处理能力，提供多种数据模型；用户可以快速对数据进行建模分析，结合AIMO丰富的数据分析能力，让用户进一步挖掘数据的隐含信息。"
                     },
                     {
                        "url":"src/assets/img/AIMO/VATMedia2.jpg",
                        "title":"报表平台",
                        "content":"我们的BI可视化分析技术底层支持多种数据源，并提供种类繁多的可视化图表，提供了从数据源到报表转化的能力，方便用户快速构建报表平台。"
                     }
                ]
             }   
        }
    }

}
</script>
<style lang="scss" scoped>
.aimo3{
    width:100%;
    overflow: hidden;
    .banrimg{
        width:100%;
        height:710px;
        transform: scale(1.5,1.0);
    }    
}
</style>