<template>
    <div id="headerbox">
        <div class="hdb">
            <div id="logo">
                <router-link to="/"><img class="logoimg" src="../../assets/img/home/logo5.png" alt=""></router-link>
            </div>
            <!-- Menu,
            Submenu,
            MenuItem,
            MenuItemGroup -->
            <div id="nav">
                <el-menu
                :default-active="activeIndex2"
                class="el-menu-demo"
                mode="horizontal"   
                @select="handleSelect"
                background-color="#000"
                text-color="#fff"
                active-text-color="#ffd04b"
                style="border-bottom:none;"
                >
                    <el-submenu index="1">
                        <template slot="title">核心技术</template>
                        <p class="icontip"><img src="../../assets/img/banner/icon/icon_ai.png" alt="">  AI智能技术</p>
                        <router-link to="/training"><el-menu-item index="1-1" route=true>AI智能营销训练</el-menu-item></router-link>
                        <router-link to="/recommend"><el-menu-item index="1-2">AI智能营销策略推荐</el-menu-item></router-link>
                        <p class="icontip"><img src="../../assets/img/banner/icon/icon_aimo.png" alt="">  AIMO+大数据处理方案</p>
                        <router-link to="/AIMO_1"><el-menu-item index="1-3">大数据处理技术</el-menu-item></router-link>
                        <router-link to="/AIMO_2"><el-menu-item index="1-4">分布式数据库</el-menu-item></router-link>
                        <router-link to="/AIMO_3"><el-menu-item index="1-5">BI可视化分析技术</el-menu-item></router-link>
                    </el-submenu>
                    <el-submenu index="2">
                                          
                        <template slot="title">产品与服务</template>
                        <p class="icontip"><img src="../../assets/img/banner/icon/icon_chanpin.png" alt="">  产品</p>
                        <router-link to="/product_1"><el-menu-item index="2-1">开放化数据集成</el-menu-item></router-link>
                        <router-link to="/product_2"><el-menu-item index="2-2">全景客户画像</el-menu-item></router-link>
                        <router-link to="/product_3"><el-menu-item index="2-3">互动触达</el-menu-item></router-link>
                        <router-link to="/product_4"><el-menu-item index="2-4">活动增长引擎</el-menu-item></router-link>
                        <router-link to="/product_5"><el-menu-item index="2-5">自动化智能运营</el-menu-item></router-link>
                        <router-link to="/product_6"><el-menu-item index="2-6">数据洞察引擎</el-menu-item></router-link>
                        <router-link to="/product_7"><el-menu-item index="2-7">AI智能营销策略引擎</el-menu-item></router-link>
                        <p class="icontip"><img src="../../assets/img/banner/icon/icon_fuwu.png" alt="">  服务</p>
                        <router-link to="/product_8"><el-menu-item index="2-8">定制化智能营销运营服务体系</el-menu-item></router-link>
                    </el-submenu>
                    <el-submenu index="3">
                                          
                        <template slot="title">解决方案</template>
                        <p class="icontip"><img src="../../assets/img/banner/icon/icon_jiejuefangan.png" alt="">  金融行业智能营销运营解决方案</p>
                        <router-link to="/bank"><el-menu-item index="3-1"><a class="el-menu-item-a" href="">银行</a></el-menu-item></router-link>
                        <router-link to="/security"><el-menu-item index="3-2"><a class="el-menu-item-a" href="">证券</a></el-menu-item></router-link>
                        <router-link to="/insurance"><el-menu-item index="3-3"><a class="el-menu-item-a" href="">保险</a></el-menu-item></router-link>
                        <router-link to="/finance"><el-menu-item index="3-4"><a class="el-menu-item-a" href="">互联网金融</a></el-menu-item></router-link>
                        <router-link to="/marketing"><el-menu-item index="3-5"><a class="el-menu-item-a" href="">营销</a></el-menu-item></router-link>
                        <router-link to="/operative"><el-menu-item index="3-6"><a class="el-menu-item-a" href="">运营</a></el-menu-item></router-link>
                        <!-- <el-submenu index="2-8">
                        <template slot="title">选项4</template>
                        <el-menu-item index="2-8-1">选项1</el-menu-item>
                        </el-submenu> -->
                    </el-submenu>
                    <el-menu-item index="4"><router-link to="/vipMember" class="el-menu-itemA">VIP企业会员</router-link></el-menu-item>
                    <el-submenu index="5" style="width:100px;">
                                          
                        <template slot="title">客户案例</template>
                        <router-link to="/banks" style="text-decoration: none"><el-menu-item index="5-1" style="display:block;"><a class="el-menu-item-b" href="">某银行</a></el-menu-item></router-link>
                        <router-link to="/securities" style="text-decoration: none"><el-menu-item index="5-2" style="display:block;"><a class="el-menu-item-b" href="">某证券</a></el-menu-item></router-link>
                    </el-submenu>
                    <el-menu-item index="6"><router-link to="/about" class="el-menu-itemA">关于我们</router-link></el-menu-item>
                </el-menu>
            </div>
            <div id="login">
                <el-button size="small">登录</el-button>
                <el-button size="small">免费试用</el-button>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:'headerbox',
    data(){
        return {
            activeIndex2: '1',
            activeName: 'second'
        }
    },
    methods:{
        handleSelect(key, keyPath) {
            console.log(key, keyPath);
        },
        handleClick(tab, event) {
        console.log(tab, event);
      }
    }
}
</script>
<style>
#headerbox{
    width:100%;
    height:60px;
    background: black;
    opacity: 0.8;
    line-height:60px;
    position: fixed;
    z-index: 100;
}
.hdb{
    width:1248px;
    height:60px;
    margin: auto;
}
#logo{
    width:154px;
    height:60px;
    float: left;
}
.logoimg{
    width:154px;
    height:44px;
    padding-top:7px;
}
#nav{
    width:710px;
    height:60px;
    float: left;
    margin-left:140px;
}
#login{
    width:157px;
    height:60px;
    float: right;
    margin-top:0px;
}
.icontip{
    font-size:16px;
    height:30px;
    line-height: 25px;
    color:#fff;
    margin-top:18px;
    margin-bottom:5px;
    margin-left:60px;
    position: relative;
}
.icontip img{
    position:absolute;
    left:-28px;
    top:2px;
}
.el-menu--popup-bottom-start{
    width:500px;
    top:-6px;
    opacity: 0.8;
}
.el-menu-item{
    display: inline-block;
    line-height: 40px;
    margin-left:30px;
}
.el-menu-item-a{
    text-decoration: none;
    width:100px;
    height:25px;
    text-align: center;
    display:inline-block;
    line-height: 25px;
    border: 1px #fff solid;
    color:#fff;
}

.el-menu-item-b{
    text-decoration: none;
    width:100px;
    height:25px;
    display: block;
    text-align: center;
    line-height: 25px;
    color:#fff;
}
.el-menu{
  border-bottom:1px solid #0f0f0f2d;
  
}
.el-menu-itemA{
    text-decoration: none;
}
</style>
