<template>
    <div class="product1">
        <img class="banrimg" src="../assets/img/productAndService/product/banner4.png" alt="">
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
                    "text":"通过整合企业内部和外部的数据，建立起多维度多层次报表，为管理人员提供市场、销售、用户等多角度的宏观洞察，辅助其进行重要战略决策。",
                    "img":'src/assets/img/productAndService/product/analysis-analytics-application.png'
                }
            
        },
        setproductAdData(){
            this.productAdData=
                {
                    "title":"产品优势",
                    "productAdList":[
                        {
                            "title":"多维分层",
                            "text":"通过完善的用户权限控制，可以让不同的业务部门或角色查看不同维度不同层级的分析报表",
                            "img":'src/assets/img/productAndService/product/duoweiduyingshoufenxi.png'
                        },
                        {
                            "title":"便捷查看",
                            "text":"在前端展示上支持PC、Pad、手机等终端设备，方便业务人员随时随地查看企业的运营状况",
                            "img":'src/assets/img/productAndService/product/icon-shortcut.png'
                        },
                        {
                            "title":"灵活扩展",
                            "text":"本系统灵活扩展的架构设计可以轻松支撑未来提出的新的大数据分析需求",
                            "img":'src/assets/img/productAndService/product/duoqudaojicheng.png'
                        }
                    ]
                    
                }
        },
        setproductTitleImgData(){
            this.productTitleImgData={
                "title":"适用场景",
                "imgList":[
                    {
                        "url":'src/assets/img/productAndService/product/DITtezheng.jpg'
                    },
                    {
                        "url":'src/assets/img/productAndService/product/DITtezheng1.jpg'
                    },
                    {
                        "url":'src/assets/img/productAndService/product/DITtezheng2.jpg'
                    },
                    {
                        "url":'src/assets/img/productAndService/product/DITtezheng3.jpg'
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