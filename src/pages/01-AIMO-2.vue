<template>
    <div class="aimo2">
         <img class="banrimg" src="../assets/img/AIMO/banner2.jpg" alt="">
         <aiIcontext :aiIcontext="aiIcontextData"></aiIcontext>
         <aiTextandimg :aitextandimg="aitextandimgData"></aiTextandimg>
    </div>
</template>
<script>
import aiIcontext from '../components/ai-iconText'
import aiTextandimg from '../components/ai-textandimg'
export default {
    name:"aimo2",
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
                        "imgurl":"src/assets/img/AIMO/DDBIcon1.png",
                        "title":"分布式",
                        "content":"数据读写存储集群化，不受单机限制，业务连接使用没有连接数问题"
                     },{
                        "imgurl":"src/assets/img/AIMO/DDBIcon2.png",
                        "title":"弹性",
                        "content":"数据服务可升降配，数据存储白屏化scale-up/scale-out，读写分离线性提升读能力"
                     },
                      {
                        "imgurl":"src/assets/img/AIMO/DDBIcon3.png",
                        "title":"高性能",
                        "content":"水平拆分聚焦少量分片数据,多种拆分方式适应数据特点,并行执行选项"
                     },{
                        "imgurl":"src/assets/img/AIMO/DDBIcon4.png",
                        "title":"完全可控",
                        "content":"完整类单机数据库账号体系，OpenApi支持，产品支持有保障"
                     }
                ]
             }   
        },
         setaitextandimgData(){
             this.aitextandimgData={
                "title":"应用场景",
                "textList":[
                     {
                        "url":"src/assets/img/AIMO/DDBMedia1.jpg",
                        "title":"高并发、大规模在线事务处理",
                        "content":"AIMO分布式数据库具有无限水平扩展能力，性能随容量扩容而线性提升，同时具备金融级数据一致性，完美支撑高并发实时交易等大规模在线事务，可广泛应用于互联网金融、银行、证券、保险等业务场景；支持在线实时智能扩容，用户无需进行业务分片设计，有效降低业务应用开发、部署及运维的难度和复杂度。"
                     },
                     {
                        "url":"src/assets/img/AIMO/DDBMedia2.jpg",
                        "title":"海量数据实时分析",
                        "content":"AIMO分布式数据库同时支持在线事务处理 (OLTP) 及在线分析处理 (OLAP) 场景，帮助用户基于一套系统同时承载在线交易及数据分析业务，大幅节约存储成本，提高商业决策效率。可广泛应用于工业物联网、商业智能分析、电商推荐系统、搜索引擎等业务场景。"
                     }
                ]
             }   
        }
    }

}
</script>
<style lang="scss" scoped>
.aimo2{
    width:100%;
    overflow: hidden;
    .banrimg{
        width:100%;
        height:710px;
        transform: scale(1.5,1.0);
    }    
}
</style>