<template>
    <div class="product1">
        <img class="banrimg" src="../assets/img/productAndService/product/banner3.png" alt="">
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
                    "text":"基于用户行为的大数据分析系统，同时提供了内容管理和AB测试，使得企业可以快速的提升用户转化率、留存率及运营自动化，实现数据驱动增长",
                    "img":'src/assets/img/productAndService/product/500461655.png'
                }
            
        },
        setproductAdData(){
            this.productAdData=
                {
                    "title":"产品优势",
                    "productAdList":[
                        {
                            "title":"提升转化率",
                            "text":"实现对用户的全周期管理，从意图、兴趣精准定向，再到用户沉淀、唤醒、推荐，提升转化率",
                            "img":'src/assets/img/productAndService/product/update.png'
                        },
                        {
                            "title":"提升留存率",
                            "text":"分别让相似的访客群组随机访问A/B版本，收集用户体验数据和业务数据进行分析，采用最佳版本以提高留存率",
                            "img":'src/assets/img/productAndService/product/navicon-chfl.png'
                        },
                        {
                            "title":"智能化运营",
                            "text":"原来运营工作执行环节费时低效，AIMO可以设置好运营方案，自动触发执行，有效提高了运营效率",
                            "img":'src/assets/img/productAndService/product/zhinenghuagongcheng-2.png'
                        }
                    ]
                    
                }
        },
        setproductTitleImgData(){
            this.productTitleImgData={
                "title":"适用场景",
                "imgList":[
                    {
                        "url":'src/assets/img/productAndService/product/neirongyunying.jpg'
                    },
                    {
                        "url":'src/assets/img/productAndService/product/kehuyunying.jpg'
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