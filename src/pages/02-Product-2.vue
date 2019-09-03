<template>
    <div class="product1">
        <img class="banrimg" src="../assets/img/productAndService/product/PIBanner.jpg" alt="">
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
                    "text":"全景客户画像可以为企业提供了一个全面剖析用户整体行为偏好和人口属性的可视化工具。从而企业可以为这些用户进行精准营销。",
                    "img":'src/assets/img/productAndService/product/introduceImg2.jpg'
                }
            
        },
        setproductAdData(){
            this.productAdData=
                {
                    "title":"产品优势",
                    "productAdList":[
                        {
                            "title":"实时监测",
                            "text":"实时监测用户线上行为，探查指标变化影响因素，自定义指标之间的运算构成衍生指标",
                            "img":'src/assets/img/productAndService/product/PIIcon1.png'
                        },
                        {
                            "title":"全面查看",
                            "text":"查看整体用户画像、偏好，深入分析单用户行为，让运营能够有的放矢",
                            "img":'src/assets/img/productAndService/product/PIIcon2.png'
                        },
                        {
                            "title":"流失分析",
                            "text":"回溯分析单个用户行为趋势、再现用户使用产品时的行为，发现关键路径流失的最后现场",
                            "img":'src/assets/img/productAndService/product/PIIcon3.png'
                        }
                    ]
                    
                }
        },
        setproductTitleImgData(){
            this.productTitleImgData={
                "title":"适用场景",
                "imgList":[
                    {
                        "url":'src/assets/img/productAndService/product/PIThumbnail1.jpg'
                    },
                    {
                        "url":'src/assets/img/productAndService/product/PIThumbnail2.jpg'
                    },
                    {
                        "url":'src/assets/img/productAndService/product/PIThumbnail3.jpg'
                    },
                    {
                        "url":'src/assets/img/productAndService/product/PIThumbnail4.jpg'
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