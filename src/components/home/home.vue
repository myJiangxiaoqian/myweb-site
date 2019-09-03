<template>
    <div id="home">
        <Header></Header>
        <section class="section">
            <router-view></router-view>     
        </section>
        <!-- <Banner></Banner>
        <Content></Content> -->
        <Footer></Footer>
    </div>
</template>
<script>
import Header from '../header/header'
import Footer from '../footer/footer'
// import Banner from '../banner/banner'
// import Content from '../content/content'
import router from '../../routers/index'
export default {
    name:"home",
    components:{
        Header,
        // Banner,
        // Content,
        Footer
    },
    router
}
</script>
<style>
#home{
    width:100%px;
    overflow: hidden;
}
*{
    margin:0;
    padding:0;
}
li{
    list-style: none;
}
</style>
