<template>
    <div class="recommend">
        <img class="banrimg" src="../assets/img/ai/4.jpg" alt="">
        <ai-icontext :aiIcontext="aiIcontextData"></ai-icontext>
        <ai-iconimg :aiIconimg="aiIconimgData"></ai-iconimg>
    </div>
</template>
<script>
import aiIcontext from '../components/ai-iconText'
import aiIconimg from '../components/ai-iconImg'
export default {
    name:"recommend",
    data(){
        return {
            aiIcontextData:{},
            aiIconimgData:{}
        }
    },
    components:{
        aiIcontext,
        aiIconimg
    },
    mounted(){
        this.setaiIcontext()
        this.setaiIconimg()
    },
    methods:{
        setaiIcontext(){
             this.aiIcontextData={
                "title":"技术特点",
                "textList":[
                     {
                        "imgurl":"src/assets/img/ai/icon1.jpg",
                        "title":"多维度",
                        "content":"通过算法聚类、标注分析等方式，从数据中提取特征场景，提供表达精准、逻辑清晰的数据标注规则，最终确保数据训练效果能满足产品的需求"
                     },{
                        "imgurl":"src/assets/img/ai/icon2.jpg",
                        "title":"不断积累通用数据",
                        "content":"不断积累通用数据根据数据应用要求，从已有数据中挑选符合要求的通用数据（适用于同领域内不同客户/用户），形成数据的沉淀和积累"
                     }
                ]
             }   
        },
        setaiIconimg(){
             this.aiIconimgData={
                "title":"应用场景",
                "textList":[
                     {
                        "imgurl":"src/assets/img/ai/5.jpg",
                        "title":"策略推荐"
                     },{
                        "imgurl":"src/assets/img/ai/6.jpg",
                        "title":"智能营销"
                     }
                ]
             }   
        }
    }
}
</script>
<style lang="scss" scoped>
.recommend{
    width:100%;
    .banrimg{
        width:100%;
        height:710px;
    }  
}
</style>