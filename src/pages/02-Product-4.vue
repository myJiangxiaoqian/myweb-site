<template>
    <div class="product1">
        <img class="banrimg" src="../assets/img/productAndService/product/banner2.png" alt="">
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
                    "text":"利用人脸识别库，按人的面部特征规则对图像进行匹配和识别，并提取出面部与H5模板合成，实现人像照H5效果；将语音技术与H5相结合，推出H5人工智能交互解决方案",
                    "img":'src/assets/img/productAndService/product/img1.png'
                }
            
        },
        setproductAdData(){
            this.productAdData=
                {
                    "title":"产品优势",
                    "productAdList":[
                        {
                            "title":"专属模板",
                            "text":"海量金融领域专属H5创意模板，量身打造全场景营销，一键生成，方便快捷",
                            "img":'src/assets/img/productAndService/product/zhuanshutequan.png'
                        },
                        {
                            "title":"创意互动",
                            "text":"AI和营销技术全面结合，用户可上传个性化照片、语音，与H5模板融合，新颖有趣，互动性强",
                            "img":'src/assets/img/productAndService/product/dengpao.png'
                        },
                        {
                            "title":"驱动增长",
                            "text":"H5模板紧跟热点，创意无限，让你的H5引爆朋友圈！吸引用户传播广告，驱动业务增长",
                            "img":'src/assets/img/productAndService/product/gerentishengjihua.png'
                        }
                    ]
                    
                }
        },
        setproductTitleImgData(){
            this.productTitleImgData={
                "title":"适用场景",
                "imgList":[
                    {
                        "url":'src/assets/img/productAndService/product/yingxiao.jpg'
                    },
                    {
                        "url":'src/assets/img/productAndService/product/yunying.jpg'
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