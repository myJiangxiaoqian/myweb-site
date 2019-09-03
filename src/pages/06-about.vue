<template>
    <div class="about">
        <img class="banrimg" src="../assets/img/customerCase/about.jpg" alt="">
        <div class="titleantext">
            <h1>公司简介</h1>
            <p>AIMO智能营销平台由北京联龙博通电子商务技术有限公司开发，公司成立于2002年，是以提供金融IT服务、金融营销服务、金融科技服务为主的高新技术企业</p>
        </div>
        <div class="titleantext">
            <h1>公司简介11</h1>
            <p>AIMO智能营销平台由北京联龙博通电子商务技术有限公司开发，公司成立于2002年，是以提供金融IT服务、金融营销服务、金融科技服务为主的高新技术企业</p>
        </div>
        <img class="banrimg1" src="../assets/img/customerCase/img.jpg" alt="">
        <div class="titleimg">
            <h1>主要业务</h1>
            <aiTextandimg :aitextandimg="textimgData"></aiTextandimg>
        </div>
        <div class="titleimg">
            <h1>我们的优势</h1>
            <aboutIconText :aboutIconText="iconTextData"></aboutIconText>
        </div>
        <div class="aboutbg">
            <h1>用AI，驱动企业增长</h1>
            <a href="">免费试用</a>
        </div>
    </div>
</template>
<script>
import aiTextandimg from '../components/ai-textandimg'
import aboutIconText from '../components/about-iconText'
export default {
    name:"about",
    data(){
        return {
            textimgData:{},
            iconTextData:{}
        }
    },
    components:{
        aiTextandimg,
        aboutIconText
    },
    mounted(){
        this.seticonimgData();
        this.seticonTextData();
    },
    methods:{
        seticonimgData(){
            this.textimgData = {
                "title":"22",
                "textList":[
                    {
                        "title":"大数据金融科技",
                        "content":"联龙博通秉承在大数据方面的能力积累落地银行业务的数字智能化应用场景，以科技连接金融未来",
                        "url":"src/assets/img/customerCase/t1.jpg"
                    },
                    {
                        "title":"金融IT服务",
                        "content":"联龙博通以价值链一体化的服务模式，人力项目兼容并包的服务形态，专业高效的服务能力，持续向银行等金融机构提供传统的IT建设实施服务",
                        "url":"src/assets/img/customerCase/t2.jpg"
                    },
                    {
                        "title":"金融营销服务",
                        "content":"2000人地推铁军，专业、高效、亲切的推广效果备受银行合作伙伴的认可，推广网络遍及全国，可承接各类线上线下营销推广工作",
                        "url":"src/assets/img/customerCase/t3.jpg"
                    },
                    {
                        "title":"智能营销云+平台",
                        "content":"联龙博通自主研发的线上线下一体化营销活动全渠道管理运营平台，多项专项营销实施解决方案提升银行创新及获客能力",
                        "url":"src/assets/img/customerCase/t4.jpg"
                    }
                ]
            }
        },
        seticonTextData(){
            this.iconTextData={
                "iconTextDataList":[
                    {
                        "imgurl":"src/assets/img/customerCase/abouticon1.jpg",
                        "title":"16年",
                        "text":"移动金融综合服务经验"
                    },
                    {
                        "imgurl":"src/assets/img/customerCase/abouticon2.jpg",
                        "title":"15+",
                        "text":"覆盖国内主流银行客户"
                    },
                    {
                        "imgurl":"src/assets/img/customerCase/abouticon3.jpg",
                        "title":"100%",
                        "text":"为客户提供百分百满意服务"
                    },
                    {
                        "imgurl":"src/assets/img/customerCase/abouticon4.jpg",
                        "title":"2000人",
                        "text":"大型专业敬业服务团队"
                    }
                ]
                
            }
        }
    }
}
</script>
<style lang="css" scoped>
 /deep/ .contentbox{ 
    background-color: #fff;
    padding-bottom:0px;
  }
  /deep/ .contentbox h1{ 
    display: none;
  }
</style>
<style lang="scss" scoped>
.about{
    width:100%;
    height: 100%;
    .banrimg{
        width:100%;
        height:710px;
    }
    .banrimg1{
        width:100%;
        height:380px;
        margin-top:60px;
    }
    .titleantext{
        width:900px;
        text-align: center;
        margin:auto;
        h1{
            font-size:34px;
            color:#333;
            height: 250px;
            line-height: 250px;
            position: relative;
        }
        h1:after,h1:before{
            position:absolute;
            background:#999999;
            content:"";
            height:1px;
            top:50%;
            width:320px;
        }
        h1:before{
            left:20px;
        }
        h1:after{
            right:20px;
        }
        p{
            font-size:20px;
            line-height: 35px;
            color:#444;
        }
    }   
    .titleimg{
        width:100%;
        text-align: center;
        margin:auto;
        padding: 40px 70px 0px;
        box-sizing: border-box;
        h1{
            font-size:34px;
            color:#333;
            height: 250px;
            line-height: 250px;
            position: relative;
        }
        h1:after,h1:before{
            position:absolute;
            background:#999999;
            content:"";
            height:1px;
            top:50%;
            width:380px;
        }
        h1:before{
            left:20px;
        }
        h1:after{
            right:20px;
        }
    }
    .aboutbg{
        width:100%;
        height:436px;
        background: url(../assets/img/customerCase/bg.jpg) no-repeat;
        background-size: cover;
        text-align: center;
        
        h1{
            font-size:34px;
            color:#fff;
            height:100px;
            line-height: 100px;
            padding-top:120px;
        }
        a{
            display: block;
            width:200px;
            height: 50px;
            line-height: 50px;
            text-decoration: none;
            border: 1px #fff solid;
            font-size:22px;
            border-radius: 2px;
            margin:auto;
            margin-top:40px;
        }
        a:hover{
            
            background-color: #fff;
            color:#2d8cf0;
        }
    }
}
</style>