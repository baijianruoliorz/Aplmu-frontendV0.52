import Vue from 'vue'
import App from './App'
import {myRequset} from './util/api.js'   //自己封装的请求
import store from './store'  
import MescrollBody from "@/components/mescroll-uni/mescroll-body.vue"
import MescrollUni from "@/components/mescroll-uni/mescroll-uni.vue"


Vue.component('mescroll-body', MescrollBody)
Vue.component('mescroll-uni', MescrollUni)
3

Vue.prototype.$store = store

Vue.config.productionTip = false;
// 全局变量,用于保存用户登录状态
// 此处貌似有坑,只能把引入的文件放入特定的文件夹,比如common就不能识别...
// import Global from './util/GlobalVue/GlobalVue.vue'
  
// // 然后所有VUE就可以通过this.GLOBAL来访问模板提供的数据了
// // 引用方式token:this.GLOBAL.token
//  Vue.prototype.GLOBAL = Global//挂载到Vue实例上面
Vue.prototype.$myRequset=myRequset 
// 一个时间过滤器,使用的话就直接formatDate
// Vue.filters('formatDate',(date)=>{
// 	const ndate=new Date(date)
// 	// 获取年月日
// 	// 不满足两位加0
// 	const year=ndate.getFullYear()
// 	const month=ndate.getMonth().toString().padStart(2,0)
// 	const day=ndate.getDay().toString().padStart(2,0)
	
// 	return year+'-'+month+'-'+day
// })
// // 判断用户是否的登录             返回的页面  返回类型
// Vue.prototype.checkLogin=function(backpage,backtype){
// 	 // 获取用户的名称
//   var SNAME=uni.getStorageSync('SNAME');
//   if(SNAME==''){
// 	  // 用户名称为空,就返回登录页面
// 	  uni.redirectTo({
// 	  	url:'/pages/login/login?backage='+backpage+'&backtype='+backtype
// 	  });
// 	  return false;
//   }
//   return [SNAME];
	
// }

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
