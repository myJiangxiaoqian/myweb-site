<template>
  <div id="app">
    <Home></Home>
  </div>
</template>

<script>
// import router from './routers/index'
import Home from './components/home/home'
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components:{
    Home
  }
  // router
}
</script>

<style>
body{
  margin:0;
  padding:0;
  border: 0;
  position: relative;
}
</style>
