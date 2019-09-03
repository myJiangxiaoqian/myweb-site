<template>
    <div class="aimo1">
         <img class="banrimg" src="../assets/img/AIMO/banner4.jpg" alt="">
         <aiIcontext :aiIcontext="aiIcontextData"></aiIcontext>
         <aiTextandimg :aitextandimg="aitextandimgData"></aiTextandimg>
    </div>
</template>
<script>
import aiIcontext from '../components/ai-iconText'
import aiTextandimg from '../components/ai-textandimg'
export default {
    name:"aimo1",
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
                        "imgurl":"src/assets/img/AIMO/Icon1.png",
                        "title":"强大的数据整合能力",
                        "content":"不管是存量的历史数据，还是不同应用系统的数据，都可以通过AIMO大数据处理技术采集到平台中。满足用户整合不同系统数据，统一加工分析的需求"
                     },{
                        "imgurl":"src/assets/img/AIMO/Icon2.png",
                        "title":"多样的计算引擎",
                        "content":"AIMO大数据处理技术的分布式计算服务提供多样的数据计算引擎，SQL、MR、图计算、MPI等，满足针对不同数据类型、进行不同类型加工的需求"
                     },
                      {
                        "imgurl":"src/assets/img/AIMO/Icon3.png",
                        "title":"全链路数据生产保障",
                        "content":"通过AIMO大数据处理技术，您可以进行全链路的数据加工过程。生产过程中任何问题都会及时反馈到数据工程师，让数据工程师能够随时掌控数据生产过程，保证数据的稳定产出"
                     },{
                        "imgurl":"src/assets/img/AIMO/Icon4.png",
                        "title":"全方位数据安全掌控",
                        "content":"AIMO大数据处理技术提供全方位的安全管控，多层次的存储和访问安全机制，保护您的数据不丢失、不泄露、不被窃取"
                     }
                ]
             }   
        },
         setaitextandimgData(){
             this.aitextandimgData={
                "title":"应用场景",
                "textList":[
                     {
                        "url":"src/assets/img/AIMO/Media1.jpg",
                        "title":"高并发、大规模在线事务处理",
                        "content":"基于AIMO大数据处理技术强大的计算和存储、多样的编程接口和计算框架、严格安全防护等特征来进行数据集成，数据处理，数据模型设计，数据分层主题设计，数据质量，数据生命周期管理，数据血缘，数据统计等全方位管理数据，实现企业数仓建设"
                     },
                     {
                        "url":"src/assets/img/AIMO/Media2.jpg",
                        "title":"海量数据实时分析",
                        "content":"基于AIMO大数据处理技术，我们搭建了精准化营销平台，将用户所有日志，用户行为数据在平台上进行离线调度和分析，在上亿用户人群里面，精确的找到目标人群，进行资源营销策略"
                     }
                ]
             }   
        }
    }

}
</script>
<style lang="scss" scoped>
.aimo1{
    width:100%;
    overflow: hidden;
    .banrimg{
        width:100%;
        height:710px;
        transform: scale(1.5,1.0);
    }    
}
</style>