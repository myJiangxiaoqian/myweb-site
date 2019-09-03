<template>
    <div class="contentbox">
             <h1>{{aitextandimg.title}}</h1>
            <div class="dllist">
                <dl v-for="(item,index) in aitextandimg.textList" :key="index">
                    <dd>
                        <h2>{{item.title}}</h2>
                        <p>{{item.content}}</p>
                    </dd>
                    <dt>
                        <aiImgboost :imgbox="item"></aiImgboost>
                    </dt>
                </dl>
            </div> 
        </div>  
</template>
<script>
import aiImgboost from './ai-imgboost'
export default {
    name:"contentbox",
    data(){
        return {
            titleFlag:false
        }
    },
    props:["aitextandimg"],
    components:{
       aiImgboost 
    },
    mounted(){
        // this.titleisshow();
    },
    methods:{
        // titleisshow(){
        //     if(this.aitextandimg.title!=''){
        //         this.titleFlag = true;
        //     }
        // }
    }
}
</script>
<style lang="scss" scoped>
.contentbox{
    width:100%;
    background-color: #F5F5F5;
    text-align: center;
    padding-bottom: 100px;
    h1{
        height:250px;
        line-height: 250px;
        font-size:36px;
        color:#333;
    }
    .dllist{
        width:90%;
        background-color: #fff;
        margin: auto;
        dl{
            width:100%;
            height:430px;
            &:nth-of-type(odd){
                dt{float: right}
                dd{float: left}
            }
            &:nth-of-type(even){
                dt{float: left}
                dd{float: right}
            }
            dd{
                width:40%;
                float: left;
                line-height: 38px;
                margin-top:60px;
                margin-left:40px;
                text-align: left;
                h2{
                    font-size: 22px;
                }
                p{
                    font-size:16px;
                    color:#444444;
                }
            }
            dt{
                width:50%;
                height:430px;
                overflow: hidden;
                float: right;
                img{
                    width:100%px;
                    height:100%;
                }
            }
        }
        
    }
}
</style>