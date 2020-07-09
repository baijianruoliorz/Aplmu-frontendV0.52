<template>
	<view class="goods_list">
	
		<!-- 记得绑定数据啊  :goods="goods"-->
		<!-- 在这里直接@goodItemClick="goDeatial" -->
		<goodsList @goodsItemClick="goGoodsDetail" :goods="goods"></goodsList> 
		<!-- 我们希望页面没有数据的时候再出来这个所以可以v-if="flag" -->
		<view class="isOver">-----人家可是有底线的QAQ-----</view>
		
	</view>
</template>

<script>
	import MescrollBodyDiy from "@/components/mescroll-diy/beibei/mescroll-body.vue";
	import MescrollMixin from "@/components/mescroll-uni/mescroll-mixins.js";
	import GoodList from "@/components/other/good-list.vue";
	import {apiGoods} from "@/api/mock.js"
	
	
	
	import goodsList from '../../components/goods-list/goods-list.vue'
	export default {
			mixins: [MescrollMixin], // 使用mixin (在main.js注册全局组件)	
		data() {
			return {
				// 查询页码
			pageIndex:1,
			goods:[],
			flag:false
			}
		},
		components:{
			goodsList,
			MescrollBodyDiy, // 避免与main.js注册的全局组件名称相同,否则注册组件失效(iOS真机 APP HBuilderX2.7.9)
				GoodList
		},
		methods: {
			// 这个方法是为了获取goodsList的数据,而且页面一进来就要调用,callBAck下拉刷新
		async getGoodsList(callBack){
			const res=await this.$myRequset({
				//示例url: '/api/authorites?pageIndex='+this.pageIndex
				url: '/api/course?pageNum=1&pageSize=199'
			})
		this.goods=res.data.content        //......你的接口返回值V1.0,被废弃
		
		//这里是请求之前数据也能保留原来数据的代码
	//	this.goods=[...this.goods,...res.data.message] V2.0
		//有的话调用下拉刷新,没有就不调用
		callBack()&&callBack
		//这里是下拉刷新请求成功后,还会有小圆圈一直转的解决
		//只能写在方法里面
		uni.stopPullDownRefresh()
		
		console.log(res)	
			},
	//跳转到商品详情页
	goGoodsDetail(id){
				  uni.navigateTo({
				  	url:'/pages/goods-detail/goods-detail?id='+id
				  })		
		
		} 
		},
		onLoad(){
			// 页面一进来就获取数据
			this.getGoodsList()
		},
		
		// 这里配置下拉刷新这个生命周期函数触底就会执行
		onReachBottom() {
			//为了判断是否还存在数据,这里要判断,具体怎么实现,待我整理API文档...,
			 // 实在想不出来就 if(this.good.length<this.PageInDex*一页多少数据) return flag=true
			
			//this.pageIndex++
			//this.getGoodList()
			//如何请求第二页数据之后保留原来的数据,请看上面
			
			// 下面是完整思路
			// if(this.good.length<...) return flag=true
			//this.pageIndex++
			//this.getGoodList()
		},
		// 监听下拉刷新
		onPullDownRefresh() {
			console.log('下拉刷新了')
			this.pageIndex=1
			this.goods=[] 
			this.flag=false
			// 延迟个1秒再下拉刷新
			setTimeout(()=>{
				// this.getGoodList() 这里重新获取数据
				//uni.stopPullDownRefresh()
			},1000)
		}
	}
</script>

<style lang="scss">
.goods_list{
	// 这个页面的背景色,选择与首页一致
	background: #eee;
}
.isOver{
	width: 100%;
	height: 50px;
	line-height: 50px;
	text-align: center;
	background: #F0F8FF;
	font-size: 28rpx;
}
</style>
