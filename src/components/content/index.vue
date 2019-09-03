<template>
    <div id="contBox">
        <!-- 轮播图 -->
        <div class="block">
            <el-carousel height="710px">
                <el-carousel-item v-for="item in imgList" :key="item">
                    <img class="imgwidth" :src="item" />
                </el-carousel-item>
            </el-carousel>
        </div>
        <div id="contentText">
            <h1 class="aotoh">金融领域领先的人工智能营销运营平台</h1>
            <div class="imgbg" :style="{backgroundImage: 'url(' + 'src/assets/img/banner/1.png' + ')'}">
                <div class="ballList ball1">
                    <router-link to="/product_1">
                        <div class="ballbox">
                            <img class="imgstyle" src="../../assets/img/ball/开放化数据集成.png" alt="">
                            <p class="pfontsize">开放化数据集成</p>
                        </div>
                    </router-link>
                    <p class="textP site1">为您将不同来源，格式、特点性质的数据在逻辑上或物理上有机地集中，从而为企业提供全面的数据共享</p>
                </div>
                <div class="ballList ball2">
                    <router-link to="/product_2">
                        <div class="ballbox">
                            <img class="imgstyle" src="src/assets/img/ball/全景用户画像.png" alt="">
                            <p class="pfontsize">全景用户画像</p>
                        </div>
                    </router-link>
                    <p class="textP site2">为您将不同来源，格式、特点性质的数据在逻辑上或物理上有机地集中，从而为企业提供全面的数据共享</p>
                </div>
                <div class="ballList ball3">
                    <router-link to="/product_3">
                        <div class="ballbox">
                            <img class="imgstyle" src="src/assets/img/ball/互动触达.png" alt="">
                            <p class="pfontsize">互动触达</p>
                        </div>
                    </router-link>
                    <p class="textP site3">为您将不同来源，格式、特点性质的数据在逻辑上或物理上有机地集中，从而为企业提供全面的数据共享</p>
                </div>
                <div class="ballList ball4">
                    <router-link to="/product_4">
                        <div class="ballbox">
                            <img class="imgstyle" src="src/assets/img/ball/活动增长引擎.png" alt="">
                            <p class="pfontsize">活动增长引擎</p>
                        </div>
                    </router-link>
                    <p class="textP site4">为您将不同来源，格式、特点性质的数据在逻辑上或物理上有机地集中，从而为企业提供全面的数据共享</p>
                </div>
                <div class="ballList ball5">
                    <router-link to="/product_5">
                        <div class="ballbox">
                            <img class="imgstyle" src="src/assets/img/ball/自动化智能运营.png" alt="">
                            <p class="pfontsize">自动化智能运营</p>
                        </div>
                    </router-link>
                    <p class="textP site5">为您将不同来源，格式、特点性质的数据在逻辑上或物理上有机地集中，从而为企业提供全面的数据共享</p>
                </div>
                <div class="ballList ball6">
                    <router-link to="/product_6">
                        <div class="ballbox">
                            <img class="imgstyle" src="src/assets/img/ball/数据洞察引擎.png" alt="">
                            <p class="pfontsize">数据洞察引擎</p>
                        </div>
                    </router-link>
                    <p class="textP site6">为您将不同来源，格式、特点性质的数据在逻辑上或物理上有机地集中，从而为企业提供全面的数据共享</p>
                </div>
                <div class="ballList ball7">
                    <router-link to="/product_8">
                        <div class="ballbox">
                            <img class="imgstyle" src="src/assets/img/ball/AI智能营销策略引擎.png" alt="">
                            <p class="pfontsize">AI智能营销策略引擎</p>
                        </div>
                    </router-link>
                    <p class="textP site7">为您将不同来源，格式、特点性质的数据在逻辑上或物理上有机地集中，从而为企业提供全面的数据共享</p>
                </div>
            </div>
            <div>
                <h1 class="aotoh">一分钟开启智能营销运营新方式</h1>
                <div>
                    <dl class="dlbox">
                        <dd class="ddtext">
                            <h2>依托AI技术，智能的营销策略推荐，营销更胜一筹</h2>
                            <p>根据营销运营多种数据维度打造AI智能训练平台，成为您的智能助理，让您的营销更有效果，运营更加高效</p>
                        </dd>
                        <dt class="dtimg"><img src="src/assets/img/home/1.jpg" alt=""></dt>
                    </dl>
                    <dl class="dlbox">
                        <dt class="dtimg"><img src="src/assets/img/home/2.jpg" alt=""></dt>
                        <dd class="ddtext">
                            <h2>智能运营更加高效</h2>
                            <p>依托AI技术，让您的运营更加智能和精细化，提升运营效率</p>
                        </dd> 
                    </dl>
                    <dl class="dlbox">
                        <dd class="ddtext">
                            <h2>创意营销轻松设计</h2>
                            <p>更专注于金融行业H5场景营销，海量丰富的金融行业专属AI+H5活动宣传模板，让您的营销更加轻松有趣</p>
                        </dd>
                        <dt class="dtimg"><img src="src/assets/img/home/3.jpg" alt=""></dt>
                    </dl>
                </div>
            </div>
            <div>
                <h1 class="aotoh">赋能金融，赋能营销，赋能运营</h1>
                <div class="bossbox">
                    <div class="leftbtn"><i class="el-icon-caret-left"></i></div>
                    <div class="listbox">
                        <div class="backbgimg" 
                        :style="{backgroundImage: 'url(' + 'src/assets/img/banner/bank.png' + ')'}"
                        >
                            <div class="titlebox">
                                <img src="src/assets/img/banner/icon-bank.png" alt="">
                                <h1>银行</h1>
                            </div>
                            <div class="tipbox">
                                <h2>银行</h2>
                                <h3>帮助大、中、小银行解决营销难题，释放源源不断的金融创新能力</h3>
                                <router-link to="/bank">了解更多</router-link>
                            </div>
                        </div>
                        <div class="backbgimg" 
                        :style="{backgroundImage: 'url(' + 'src/assets/img/banner/zhengquan.png' + ')'}"
                        >
                            <div class="titlebox">
                                <img src="src/assets/img/banner/icon-zhengquan.png" alt="">
                                <h1>证券</h1>
                            </div>
                            <div class="tipbox">
                                <h2>证券</h2>
                                <h3>帮助证券行业定制、推广理财产品；降低运营成本</h3>
                                <router-link to="/security">了解更多</router-link>
                            </div>
                        </div>
                        <div class="backbgimg" 
                        :style="{backgroundImage: 'url(' + 'src/assets/img/banner/baoxian.png' + ')'}"
                        >
                            <div class="titlebox">
                                <img src="src/assets/img/banner/icon-baoxian.png" alt="">
                                <h1>保险</h1>
                            </div>
                            <div class="tipbox">
                                <h2>保险</h2>
                                <h3>赋能全景客户画像，帮助保险公司更好识别风险用户并且优化理赔业务</h3>
                                <router-link to="/insurance">了解更多</router-link>
                            </div>
                        </div>
                        <div class="backbgimg" 
                        :style="{backgroundImage: 'url(' + 'src/assets/img/banner/baoxian.png' + ')'}"
                        >
                            <div class="titlebox">
                                <img src="src/assets/img/banner/icon-baoxian.png" alt="">
                                <h1>互联网金融</h1>
                            </div>
                            <div class="tipbox">
                                <h2>互联网金融</h2>
                                <h3>赋能全景客户画像，帮助保险公司更好识别风险用户并且优化理赔业务</h3>
                                <router-link to="/finance">了解更多</router-link>
                            </div>
                        </div>
                        <div class="backbgimg" 
                        :style="{backgroundImage: 'url(' + 'src/assets/img/banner/baoxian.png' + ')'}"
                        >
                            <div class="titlebox">
                                <img src="src/assets/img/banner/icon-baoxian.png" alt="">
                                <h1>营销</h1>
                            </div>
                            <div class="tipbox">
                                <h2>营销</h2>
                                <h3>赋能全景客户画像，帮助保险公司更好识别风险用户并且优化理赔业务</h3>
                                <router-link to="/marketing">了解更多</router-link>
                            </div>
                        </div>
                        <div class="backbgimg" 
                        :style="{backgroundImage: 'url(' + 'src/assets/img/banner/baoxian.png' + ')'}"
                        >
                            <div class="titlebox">
                                <img src="src/assets/img/banner/icon-baoxian.png" alt="">
                                <h1>运营</h1>
                            </div>
                            <div class="tipbox">
                                <h2>运营</h2>
                                <h3>赋能全景客户画像，帮助保险公司更好识别风险用户并且优化理赔业务</h3>
                                <router-link to="/operative">了解更多</router-link>
                            </div>
                        </div>
                    </div>
                    <div class="rightbtn"><i class="el-icon-caret-right"></i></div>
                </div>
            </div>
            <div class="chanpin">
                <h1 class="aotoh">产品服务与优势</h1>
                <ul>
                    <li>
                        <img src="src/assets/img/home/icon-zhinenghua.png" alt="">
                        <img src="src/assets/img/gif/1.gif" alt="" style="display:none">
                        智慧智能
                    </li>
                    <li>
                        <img src="src/assets/img/home/icon-kaifangdeshengtai.png" alt="">
                        <img src="src/assets/img/gif/2.gif" alt="" style="display:none">
                        开放强大</li>
                    <li>
                        <img src="src/assets/img/home/icon-anquan.png" alt="">
                        <img src="src/assets/img/gif/3.gif" alt="" style="display:none">
                        安全可靠</li>
                    <li>
                        <img src="src/assets/img/home/icon-fuwu.png" alt="">
                        <img src="src/assets/img/gif/4.gif" alt="" style="display:none">
                        一站式服务
                    </li>                 
                </ul>
            </div>
            <div class='backimg'>
                <h1 class="aotoh">成就客户，是我们最大的价值</h1>
                <ul>    
                    <li v-for="item in backimgList" :key="item"><img :src="item" alt=""></li>
                </ul>
            </div>
            <div class="shiyong">
                <img src="src/assets/img/home/te.jpg" alt="">
                <a href="">免费试用</a>
            </div>
        </div>
    </div>
</template>
<script>

// import '../../../node_modules/jquery/dist/jquery.min.js'
import {advantage} from '../../assets/js/advantage'
export default {
    name:"contBox",
    data(){
        return {
            imgList:[
                'src/assets/img/banner/ban/4.png',
                'src/assets/img/banner/ban/1.png',
                'src/assets/img/banner/ban/3.png',
                'src/assets/img/banner/ban/2.png'
            ],
            backimgList:[
                'src/assets/img/home/customer/zgyh.png',
                'src/assets/img/home/customer/gsyh.png',
                'src/assets/img/home/customer/jsyh.png',
                'src/assets/img/home/customer/zsyh.png',
                'src/assets/img/home/customer/jtyh.png',
                'src/assets/img/home/customer/zggd.png',
                'src/assets/img/home/customer/zxyh.png',
                'src/assets/img/home/customer/zgrs.png',
                'src/assets/img/home/customer/zszq.png',
                'src/assets/img/home/customer/zxjs.png',
            ]
        }
    },
    mounted(){
        advantage()
    },
    methods:{
        
    }
}
</script>
<style >
.imgwidth{
    width:100%;
    height:100%;
}
.el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
     background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
     background-color: #d3dce6;
  }
  .el-carousel__indicators--horizontal{
      bottom:100px;
  }


.aotoh{
    width:100%;
    height:200px;
    line-height: 200px;
    text-align: center;
}
.imgbg{
    width:692px;
    height:693px;
    margin: auto;
    position: relative;
}
.ballList{
    cursor: pointer;
}
.ball1{
    position:absolute;
    top:275px;
    left:-20px;
}
.ball2{
    position:absolute;
    top:80px;
    left:100px;
}
.ball3{
    position:absolute;
    top:65px;
    left:370px;
}
.ball4{
    position:absolute;
    top:225px;
    left:500px;
}
.ball5{
    position:absolute;
    top:412px;
    left:495px;
}
.ball6{
    position:absolute;
    top:542px;
    left:312px;
}
.ball7{
    position:absolute;
    top:482px;
    left:50px;
}
@keyframes rotateBall {
  0% {
    transform: scale(1);
  }

  5% {
    transform: scale(1.2);
  }

  100% {
    transform: scale(1);
  }
}



.imgstyle:hover {
  animation-play-state: paused;
}
.ballbox{
    width:200px;
    height:110px;
    text-align:center;
    
}
.imgstyle{
   animation: rotateBall 5s linear infinite;
}
.pfontsize{
    width:200px;
    height:30px;
    font-size:20px;
    margin-top:5px;
    color:#000;
}
.textP{
    width:250px;
    height:80px;
    line-height: 30px;
    color: #434343;
    font-size:14px;
    position:absolute;
    display: none;
}
.site1{
    top:100px;
    left:-70px;
}
.site2{
    top:40px;
    left:-220px;
}
.site3{
    top:40px;
    left:160px;
}
.site4{
    top:50px;
    left:180px;
}
.site5{
    top:50px;
    left:180px;
}
.site6{
    top:50px;
    left:180px;
}
.site7{
    top:100px;
    left:-50px;
}
.dlbox{
    width:100%;
    height: 400px;
    clear: both;
    display: flex;
    justify-content : space-around;
}
.ddtext{
    width:430px;
    height:400px;
    display: inline-block;
    margin-top:100px;
}
.ddtext h2{
    font-size:28px;
    line-height: 50px;
}
.ddtext p{
    font-size:22px;
    line-height: 35px;
}
.dtimg{
    width:470px;
    height:380px;
    display: inline-block;
}
.dtimg img{
    width: 100%;
    height:100%;
}
.bossbox{
    width: 100%;
    height:600px;
    overflow: hidden;
    position: relative;
}
.listbox{
    width: 2820px;
    height:600px;
}
.backbgimg{
    width:470px;
    height:600px;
    text-align: center;
    float: left;
    background-size:cover;
    position: relative;
}
.leftbtn{
    width:40px;
    height:600px;
    background-color: #434343;
    opacity: 0.7;
    position: absolute;
    top:0px;
    left:0px;
    z-index: 999;
}
.rightbtn{
    width:40px;
    height:600px;
    background-color: #434343;
    opacity: 0.7;
    position: absolute; 
    top:0px;
    right:0px;
}
.el-icon-caret-left{
    line-height: 600px;
    color:#fff;
    font-size:30px;
}
.el-icon-caret-right{
    line-height: 600px;
    color:#fff;
    font-size:30px;
}
.backbgimg img{
    padding-top:190px;
}
.backbgimg h1{
    color: #fff;
}
.tipbox{
    width:470px;
    height:600px;
    position:absolute;
    top:0px;
    left:0px;
    background-color:#5c20bb50;
    display: none;
    /* opacity: 0.2; */
}
.tipbox h2,h3,a{
    color:#fff;
}
.tipbox h2{
    margin:100px 0;
    font-size:40px;
    text-align: center;
}
.tipbox h3{
    margin:50px 60px;
    line-height: 50px;
    font-size:24px;
    text-align: center;
}
.tipbox a{
    width:150px;
    height:50px;
    text-align: center;
    display: block;
    font-size:28px;
    border: #fff 1px solid;
    text-decoration:none;
    margin:0 160px;
}

.chanpin ul{
    width:100%;
    height:210px;
    display:flex;
    justify-content:space-around;
}
.chanpin ul li{
    list-style: none;
    width:164px;
    height:180px;
    text-align: center;
    font-size:22px;
    color:#262626;
}
.chanpin ul li img{
    width: 164px;
    height:164px;
    margin-bottom:5px;
}
.backimg{
    width:100%;
    
}
.backimg ul{
    width:100%;
    clear: both;
    margin:0 100px;
}
.backimg ul li{
    list-style: none;
    width:207px;
    height: 85px;
    display: inline-block;
    margin:10px 10px;
}
.shiyong{
    width:100%;
    height:680px;
    position: relative;
    margin-top:40px;
}
.shiyong img{
    width:100%;
    height: 100%;
}
.shiyong a{
    width:150px;
    height:50px;
    line-height: 50px;
    text-align: center;
    display: block;
    font-size:28px;
    border: #fff 1px solid;
    text-decoration:none;
    position:absolute;
    top:530px;
    left:600px;
    z-index: 999;
}
.shiyong a:hover{
    background-color: steelblue;
    border: steelblue 1px solid;
}
</style>
