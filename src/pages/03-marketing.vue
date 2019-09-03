<template>
    <div class="marketing">
        <div class="bankimg">
            <img class="banrimg" src="../assets/img/solution/marketing.png" alt="">
        </div>
        <div class="navList">
            <router-link to="/bank">银行</router-link>
            <router-link to="/security">证券</router-link>
            <router-link to="/insurance">保险</router-link>
            <router-link to="/finance">互联网金融</router-link>
            <router-link to="/marketing" class="bottomBodr">营销</router-link>
            <router-link to="/operative">运营</router-link>
        </div>
        <bankTitletext :bankTitletext="titleTextData"></bankTitletext>
        <aiTextandimg :aitextandimg="textimgData"></aiTextandimg>
    </div>
</template>
<script>
import aiTextandimg from '../components/ai-textandimg'
import bankTitletext from '../components/bank-titleText'
export default {
  name:"marketing",  
    data(){
        return {
            textimgData:{},
            titleTextData:{}
        }
    },
    components:{
        aiTextandimg,
        bankTitletext
    },
    mounted(){
        this.seticonimgData();
        this.settitleTextData();
    },
    methods:{
        seticonimgData(){
            this.textimgData = {
                "title":"",
                "textList":[
                    {
                        "title":"精准选择用户及媒介",
                        "content":"AIMO通过实时运算，洞察7亿安卓用户移动网络行为，运营部门可通过易观万像精准选择潜在用户及潜在投放渠道。",
                        "url":"src/assets/img/solution/ma1.png"
                    },
                    {
                        "title":"用户标签化，更高效的营销",
                        "content":"在激烈的竞争环境中，使用工具来进行智能预测和假设，是一个游戏规则的改变。AIMO利用AI学习库，提供深度可操作的洞察，以实现精准预测。",
                        "url":"src/assets/img/solution/ma2.png"
                    },
                    {
                        "title":"高效触达用户，唤醒沉睡用户",
                        "content":"用户拉新成本越来越高，依靠新用户来维持日活、月活越来越难，沉睡用户唤醒成为运营工作的重点。",
                        "url":"src/assets/img/solution/ma3.png"
                    }
                ]
            }
        },
        settitleTextData(){
            this.titleTextData = {
                "title":"企业营销普遍面临的业务挑战",
                "text":"移动互联网营销成本成倍增加，APP运营压力增大，短短几年时间，APP的营销成本涨幅高达10倍+，对于企业，高涨的营销成本逐渐压缩利润空间，同时限制其发展速度。"
            }
        }
    }
}
</script>
<style lang="css" scoped>
/deep/ .contentbox h1{
    display: none;
}
</style>
<style lang="scss" scoped>
.marketing{
    width:100%;
    overflow: hidden;
    background-color:#F5F5F5; 
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