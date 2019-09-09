import Vue from 'vue';
import App from './App.vue';
import $ from 'jquery'
import {
  Menu,
  Submenu,
  MenuItem,
  MenuItemGroup,
  Button,
  Carousel,
  CarouselItem,
  Icon
} from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
//NavMenu 导航菜单
Vue.use(Menu)
Vue.use(Submenu)
Vue.use(MenuItem)
Vue.use(MenuItemGroup)
//按钮
Vue.use(Button)
//走马灯
Vue.use(Carousel)
Vue.use(CarouselItem)
//图标
Vue.use(Icon)
new Vue({
  el: '#app',
  render: h => h(App)
})