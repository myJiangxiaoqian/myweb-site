<template>
    <div class="product1">
        <img class="banrimg" src="../assets/img/productAndService/product/banner5.png" alt="">
        <product-a1 :proFunction="textImgData"></product-a1>
        <product-ad :proadvantage="productAdData"></product-ad>
        <productTitleImg :productTitleImg="productTitleImgData"></productTitleImg>
        
    </div>
</template>
<script>
import productA1 from '../components/product-textImg'
import productAd from '../components/product-advantage'
import productTitleImg from '../components/product-titleImg'
export default {
    name:"product1",
    data(){
        return {
            textImgData:{},
            productAdData:{},
            productTitleImgData:{}
        }
    },
    components:{
        productA1,
        productAd,
        productTitleImg
    },
    mounted(){
        this.settextImgData();
        this.setproductAdData();
        this.setproductTitleImgData();
    },
    methods:{
        settextImgData(){
            this.textImgData=
                {
                    "title":"产品功能",
                    "text":"基于互联网行为数据的营销策略推荐，建立数据驱动的营销管理系统，并以此来指导精准投放，提升广告投放效果",
                    "img":'src/assets/img/productAndService/product/imgg.png'
                }
            
        },
        setproductAdData(){
            this.productAdData=
                {
                    "title":"产品优势",
                    "productAdList":[
                        {
                            "title":"营销决策智能化",
                            "text":"依据AI算法系统生成的方案为企业推荐最佳营销策略，提供定制化的优质服务",
                            "img":'src/assets/img/productAndService/product/weibiaoti---3.png'
                        },
                        {
                            "title":"营销闭环数据化",
                            "text":"AIMO以智能营销策略推荐为基础，建立营销管理系统，提供端到端的营销闭环数据解决方案",
                            "img":'src/assets/img/productAndService/product/shuju.png'
                        },
                        {
                            "title":"广告投放精准化",
                            "text":"通过大数据智能分析，将营销策略结构化，并以此来指导精准投放，提升广告投放效果",
                            "img":'src/assets/img/productAndService/product/kujialeqiyezhan_jingzhunputie.png'
                        }
                    ]
                    
                }
        },
        setproductTitleImgData(){
            this.productTitleImgData={
                "title":"适用场景",
                "imgList":[
                    {
                        "url":'src/assets/img/productAndService/product/DITjingzun.jpg'
                    },
                    {
                        "url":'src/assets/img/productAndService/product/DITzhengneng.jpg'
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