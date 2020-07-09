<template>
<view class="home">
	
	
		<mescroll-body-diy ref="mescrollRef" @init="mescrollInit" top="1" bottom="1" @down="downCallback" @up="upCallback">		
<swiper indicator-dots circular autoplay>
			<!-- 上面是显示指示点 ,衔接滑动,自动播放-->
			<!-- 轮播图,正式对接后端要用动态图片 -->
			<!-- TODO: v-for :src... -->
		
			<swiper-item>
				<image src="../../static/img/my.jpg"></image>
			</swiper-item>
			<swiper-item>
				<image src="../../static/img/home.jpg"></image>
			</swiper-item>
			<swiper-item>
				<image src="../../static/img/_img.jpg"></image>
			</swiper-item>
		</swiper>		
		   <sa-hover-menu></sa-hover-menu>
		<!-- 导航区域                                                                   -->
		<view class="nav">
		
			<view class="nav_item" v-for="(item,index) in navs" :key="index" @click="navItemClick(item.path)">
			<!-- 样式待写 -->
			<view :class="item.icon">
			</view>
			<text>{{item.title}}</text>
			</view>
				</view>
			<!-- 推荐区,可以是商品 -->
			<view class="hot_goods"> 
	
			<view class="tit">~~推荐课程~~</view>
				
		
			<!-- 自定义以下组件,大大减少代码量,整合API之后加上 :goods="goods" -->
			<!--   <goodsList :goods="goods"></goodsList>-->
			<!-- 这里是引用子组件,进行页面的跳转,实际场景记得加上goods="goods" -->
		 <goodsList @goodsItemClick='goGoodsDetail' :goods="goods"></goodsList>
		
		
	</view>
	</mescroll-body-diy>
</view>

</template> 

<script>
	import MescrollBodyDiy from "@/components/mescroll-diy/beibei/mescroll-body.vue";
	import MescrollMixin from "@/components/mescroll-uni/mescroll-mixins.js";
	import GoodList from "@/components/other/good-list.vue";
	import {apiGoods} from "@/api/mock.js"
	
	// 这里有坑,IDE会提示你填入路径,但是还是要加@,不然找不到
	import goodsList from '@/components/goods-list/goods-list.vue'
	import saHoverMenu from '../../components/sa-hover-menu/sa-hover-menu.vue';
	export default {
		mixins: [MescrollMixin], // 使用mixin (在main.js注册全局组件)
		
		data() {
			return {
				url1:'https://aplmu.backend.117503445.top',
				a:'/api/login',
				// 轮播图数组
				swipers: [],
				// 获取文章数据
				goods:[],
				// 定义数组,跳转
				navs:[{
					icon:'iconfont icon-ziyuan',
					title:'相关资源',
					//点击相关资源会跳转的页面
					path:'/pages/goods/goods'
				},
				{
					icon:'iconfont icon-guanyuwomen',
					title:'联系我们',
					//点击相关资源会跳转的页面
					path:'/pages/contact/contact'
				},
				{
					icon:'iconfont icon-tupian',
					title:'社区图片',
					//点击相关资源会跳转的页面
					path:'/pages/pics/pics'
				}
				]
			}
		},
		// 在这里获取轮播图数据,这个生命周期函数只要一进页面就会执行
		onLoad() {
			//this.getSwipers()
			//this.login()
			//this.getSwipers()
			this.getHodGoods()
			},
	onShow() {
		this.getHodGoods()
	},
		
	
			// 获取文章数据 
			//this.getHodGoods() 
	  
		components:{
		goodsList,
		 saHoverMenu,
		 
			MescrollBodyDiy, // 避免与main.js注册的全局组件名称相同,否则注册组件失效(iOS真机 APP HBuilderX2.7.9)
			GoodList 
		},
		methods: {
			downCallback() {
				// 这里加载你想下拉刷新的数据, 比如刷新轮播数据
				// loadSwiper();
				// 下拉刷新的回调,默认重置上拉加载列表为第一页 (自动执行 page.num=1, 再触发upCallback方法 )
				this.mescroll.resetUpScroll()
			},
			/*上拉加载的回调: 其中page.num:当前页 从1开始, page.size:每页数据条数,默认10 */
			upCallback(page) {
				//联网加载数据
				apiGoods(page.num, page.size).then(curPageData=>{
					//联网成功的回调,隐藏下拉刷新和上拉加载的状态;
					this.mescroll.endSuccess(curPageData.length);
			
					//设置列表数据
					if(page.num == 1) this.goods = []; //如果是第一页需手动制空列表
					this.goods=this.goods.concat(curPageData); //追加新数据
				}).catch(()=>{
					//联网失败, 结束加载
					this.mescroll.endErr();
				})
			}
			,
			
			 
			// 登录方法
			async login(){
				const res=await this.$myRequset({
					url:this.a,
					method:'POST',
					data:{
						 // 记住不要括号
						
						  "password": "stringwe",
						  "remeberMe":true,
						  "username": "stringwewe"
						
						
					}
				}) 
				console.log(res)
			},
			
			async getProjectInfo(){
				const res = await this.$myRequset({
					url: '/ver'
				}) 
				console.log(res)
			},
			
			//获取轮播图数据
			async getSwipers() {
				/*	console.log('获取轮播图数据')
						// 这里就是发送请求获取数据渲染了
					uni.request({
						//https://aplmu.backend.117503445.top/
						// 请求地址,假装是轮播图的数据
						url:'https://aplmu.backend.117503445.top/api/authorities',
						//method:'POST',
						// 获取成功的数据
						// 注意这里接受数据必须用箭头函数,因为函数会改变this指向,不能获取data里定义的数据
						success:res=>{
							console.log(res)
							// 请求失败
						if(res.statusCode!==200){
							return uni.showToast({
								title:'获取数据失败,说不定是后端的锅呢~(doge'
							})
						}	
						//这个数据不确定是这个
						this.swipers=res.data.message	
						}
						});
						//关于上面的请求还有如下简单方法
						 //  async getSwipers(){
						//	const res=await uni.request({
						//	url:'你的API'
						//})
						// console.log(res)
						 //}
						 // 
						 // 
					})	
					*/
				   

				// 测试封装的方法,返回res(promise)
				// 当做一个封装方法的模板
				// 以后再有请求,调用await this.$myrequest,即可
				const res = await this.$myRequset({
					url: '/api/authorities'
				})  
				console.log(res)
				//this.swipers=res.data.message
			},
		// 获取热门列表课程数据(课程数据)
	 getHodGoods(){
	 	uni.request({
	 		//https://aplmu.backend.117503445.top/
	 		// 请求地址,假装是轮播图的数据
	 		url:this.url1+'/api/course',
	 		method:'GET',
	 		header:{
	 			'content-type': 'application/json',
	 			'Authorization':'Bearer '+getApp().globalData.onlyYourToken					
	 		},
	 		// 获取成功的数据
	 		// 注意这里接受数据必须用箭头函数,因为函数会改变this指向,不能获取data里定义的数据
	 		success:res=>{
			console.log("YXR")
			console.log(res)
			console.log("YXR")
	 		this.goods=res.data.content
	 			
	 			
	 		if(res.statusCode!==200){
	 			return uni.showToast({
	 				title:'获取数据失败,说不定是后端的锅呢~(doge'
	 			})
	 		}	
	 		//这个数据不确定是这个
	 	
	 		}
	 		});
	 	
	 	
	 },
			
			
			
			
			
			
           // 导航点击的处理,记住接受参数
		   navItemClick(url){
			   // 跳转的业务逻辑
			   uni.navigateTo({
				   // 这种写法就直接表示url:url了
			   	url
			   })
		   },
		   
		   //跳转到商品详情页
		  goGoodsDetail(id){
			  uni.navigateTo({
			  	url:'/pages/goods-detail/goods-detail?id='+id
			  })
		  } 
		   
		}
	}
</script>

<style lang="scss">
	.home {
		swiper {
			width: 750rpx;
			height: 410rpx;	
		    image {
			width: 100%;
			height: 100%;
		}
	}
	
	.nav{
		// 把上面四个调成一行
		color: #808080;
		display: flex;
		.nav_item{
			//一排3个,每个3分之一
			width: 33%;
			//居中
			text-align: center;
			view{
				width: 120rpx;
				height: 120rpx;
				background:	#00BFFF;
				// 圆形
				border-radius: 60rpx;
				// 居中
				margin: 10px auto;
				line-height: 120rpx;
				color: #FFFFFF;
				font-size: 50rpx;
			}
			.icon-tupian{
				font-size: 45rpx;
			}
			// 控制字大小
			text{
				font-size: 30rpx;
			}
		
		}
		}
		.hot_goods {
			background-color:#eee;
			overflow: hidden;
			// 往下一些..
			margin-top:5rpx;
			.tit{			
				height: 50px;
				line-height: 50px;
				// 文字颜色
				color:#808080;
				// 文本居中
				text-align: center;
				// 文本之间的空隙
				letter-spacing: 20px;
				background:#F0F8FF;
				margin: 7rpx 1rpx;
			}
			.goods_list{
				padding: 0 15rpx;
				// 在一行显示
				display: flex;
				flex-wrap: wrap;//换行
				//间距
				justify-content: space-between;
				.goods_item{
					
					background: #FFFFFF;
					width: 355rpx;
					margin: 10rpx 0;
					padding: 15rpx;
					box-sizing: border-box;
					image{
						width: 80%;
						height: 150rpx;
						display: block;
						margin: auto;
					}
					.price{
						// 第一排字颜色
						color: #808080;
						font-size: 30rpx;
						text:nth-child(2){
							color: #C0C0C0;
							font-size: 28rpx;
							margin-left: 7rpx;
							text-decoration: line-through;
						}
					}
				.name{
					font-size: 32rpx;
					line-height: 50rpx;
					padding-bottom: 15rpx;
					padding-top: 10rpx;
				}	
				}
			}
		}
		}
	
</style>
