<template>
    <div class="product1">
        <img class="banrimg" src="../assets/img/productAndService/product/DIBanner.jpg" alt="">
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
                    "text":"将不同渠道的数据，在内容、格式以及质量方面进行统一、有效的集成管理，从而实现数据共享。同时也解决数据碎片化的问题，系统可以更快地驱动业务决策。",
                    "img":'src/assets/img/productAndService/product/introduceImg1.jpg'
                }
            
        },
        setproductAdData(){
            this.productAdData=
                {
                    "title":"产品优势",
                    "productAdList":[
                        {
                            "title":"提高效率",
                            "text":"相比传统数据集成方式更多高效快捷，新业务迅速上线，提升推广效率",
                            "img":'src/assets/img/productAndService/product/DIIcon1.png'
                        },
                        {
                            "title":"降低成本",
                            "text":"统一的数据管理、应用开发、数据分析，带来时间及人力成本的极大缩减",
                            "img":'src/assets/img/productAndService/product/DIIcon2.png'
                        },
                        {
                            "title":"业务洞察",
                            "text":"产品运营、市场舆情、用户行为、风险管理，多种视角透析业务状态，提供全方位的决策支持",
                            "img":'src/assets/img/productAndService/product/DIIcon3.png'
                        }
                    ]
                    
                }
        },
        setproductTitleImgData(){
            this.productTitleImgData={
                "title":"适用场景",
                "imgList":[
                    {
                        "url":'src/assets/img/productAndService/product/DIThumbnail1.jpg'
                    },
                    {
                        "url":'src/assets/img/productAndService/product/DIThumbnail2.jpg'
                    },
                    {
                        "url":'src/assets/img/productAndService/product/DIThumbnail3.jpg'
                    },
                    {
                        "url":'src/assets/img/productAndService/product/DIThumbnail4.jpg'
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