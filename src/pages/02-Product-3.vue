<template>
    <div class="product1">
        <img class="banrimg" src="../assets/img/productAndService/product/banner1.png" alt="">
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
                    "text":"基于AI技术提供语音互动、视频互动、H5互动广告等创意以及短信、微信、邮件、官网、APP等多维度的深层次触达",
                    "img":'src/assets/img/productAndService/product/img.png'
                }
            
        },
        setproductAdData(){
            this.productAdData=
                {
                    "title":"产品优势",
                    "productAdList":[
                        {
                            "title":"分层触达",
                            "text":"不同层级的客户互动积极性及传播意愿不同，制定不同的营销内容提升用户黏度与活跃度",
                            "img":'src/assets/img/productAndService/product/leidatu.png'
                        },
                        {
                            "title":"有效互动",
                            "text":"针对不同层级用户的兴趣、特点形成多触点互动，将营销效力尽可能维系得更长",
                            "img":'src/assets/img/productAndService/product/quanjing-m.png'
                        },
                        {
                            "title":"实时监测",
                            "text":"实时监控互动触达方式的投放数据，评估转化效果，调整营销策略",
                            "img":'src/assets/img/productAndService/product/saomiaojiancechazhao.png'
                        }
                    ]
                    
                }
        },
        setproductTitleImgData(){
            this.productTitleImgData={
                "title":"适用场景",
                "imgList":[
                    {
                        "url":'src/assets/img/productAndService/product/huodong.jpg'
                    },
                    {
                        "url":'src/assets/img/productAndService/product/guanggao.jpg'
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