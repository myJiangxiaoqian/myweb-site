<template>
    <div id="footerbox">
        <div class="lianxi">
            <ul>
                <li>
                    <h3>关于我们</h3>
                    <router-link to="/about">公司介绍</router-link>
                </li>
                <li>
                    <h3>法律声明</h3>
                    <router-link to="/serviceAgreement">服务协议</router-link>
                    <router-link to="/privacyPolicy">隐私政策</router-link>
                </li>
                <li>
                    <h3>友情链接</h3>
                    <a href="http://www.chinamworld.com/" target="_Blank">联龙博通</a>
                </li>
                <li>
                    <h3>商务合作</h3>
                    <p>商务合作QQ:465007142</p>
                    <p>邮箱:cs@chinamworld.com</p>
                </li>
            </ul>
            <div class="iphone">
                <h2>010-63107988</h2>
                <p>周一至周五 9：00-18：00</p>
            </div>
        </div>
        <div class="bottom">
            <div class="logn">
                <img src="src/assets/img/home/logo2.jpg" alt="">
                <span></span>
                <img src="src/assets/img/home/logo3.jpg" alt="">
            </div>
            <p>Copyright © 2010 北京联龙博通电子商务技术有限公司 China M-World Co.,Ltd. All Rights Reserved. 京ICP060748号</p>
        </div>
        
    </div>
</template>
<script>
export default {
    name:"footerbox",
    data(){
        return {
            
        }
    }
}
</script>
<style>
#footerbox{
    width:100%;
    height:270px;
    background-color: #1a1a1a;
}
.lianxi ul{
    width:720px;
    height:100px;
    float: left;
    margin:50px 60px;
}
.lianxi ul li{
    list-style: none;
    width:180px;
    height:100px;
    line-height: 30px;
    float: left;
    color: #fff;
    
}
.lianxi ul li h3{
   font-size:16px; 
}
.lianxi ul li a,p{
    color:#9B9B9B;
    display: block;
    font-size:12px;
}
.lianxi ul li a{
    text-decoration: none;
}
.lianxi ul li a:hover{
    color:#fff;
}
.iphone{
    width: 270px;
    height:100px;
    float: right;
    color:#fff;
    text-align: right;
    margin-top:50px;
    margin-right: 60px;
}
.iphone p{
    font-size:16px;
}
.bottom{
    clear: both;
}
.bottom .logn{
    width:300px;
    height:80px;
    float: left;
    margin-left: 50px;
}
.bottom .logn img{
    display: inline-block;
    
}
.bottom .logn span{
    background-color: #626378;
    width:2px;
    height:30px;
    display: inline-block;
    position: relative;
    top:-7px;
}
.bottom p{
    width:700px;
    height:30px;
    float: right;
    color:#fff;
    margin-top: 20px;
}
</style>
