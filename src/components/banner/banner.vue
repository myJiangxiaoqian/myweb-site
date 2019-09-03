<template>
    <div id="banner">
        <div class="block">
            <el-carousel height="710px">
                <el-carousel-item v-for="item in imgList" :key="item">
                    <img class="imgwidth" :src="item" />
                </el-carousel-item>
            </el-carousel>
        </div>
    </div>
</template>
<script>
export default {
    name:"banner",
    data(){
        return {
            imgList:[
                'src/assets/img/banner/ban/1.png',
                'src/assets/img/banner/ban/2.png',
                'src/assets/img/banner/ban/3.png',
                'src/assets/img/banner/ban/4.png'
            ]
        }
    }
}
</script>
<style>
.imgwidth{
    width:100%;
    height:100%;
}
.el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
     background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
     background-color: #d3dce6;
  }
  .el-carousel__indicators--horizontal{
      bottom:100px;
  }
</style>
