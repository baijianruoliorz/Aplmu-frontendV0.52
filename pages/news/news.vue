<template>
	<view class="news">
	
		
				
	<mescroll-body-diy ref="mescrollRef" @init="mescrollInit" top="1" bottom="1" @down="downCallback" @up="upCallback">		
	
	<!-- 用list数据的话,还要:list="newList" -->
	<!-- 不需要再新定义其他的了 -->
	<!-- 47 调用父组件方法 @itemClick="goDetail" -->
	
	<!-- 导航栏 -->
	<view class="headNav">
		<view class="headNavBox">
			<scroll-view scroll-x="true" scroll-top>
				<view class="headNavLt" v-for="(item,index) in headTabList" :key="index" :class="{activeNav:index == headTabIdx}" @click="IsHeadTabClick(index,item)">
					{{ item.name }}
				</view>
			</scroll-view>
		</view>
	</view>
		<!-- 导航栏结束 -->
		<!-- 导航栏貌似会遮住第一篇文章,加两个换行就完美解决啦! -->
	<view>A</view>		
	<view>A</view>	
	<newsItem :list="newList"  @itemClick="goDetail"></newsItem>
	 <sa-hover-menu></sa-hover-menu>
	</mescroll-body-diy>
	</view>
</template>

<script>
	import MescrollBodyDiy from "@/components/mescroll-diy/beibei/mescroll-body.vue";
	import MescrollMixin from "@/components/mescroll-uni/mescroll-mixins.js";
	import GoodList from "@/components/other/good-list.vue";
	import {apiGoods} from "@/api/mock.js"
	
	
	import newsItem from '../../components/news_item/news_item.vue'
	import saHoverMenu from '../../components/sa-hover-menu/sa-hover-menu.vue';
	export default {
			mixins: [MescrollMixin], // 使用mixin (在main.js注册全局组件)	 
		data() {
			return {
			headTabList:[
				{ id:0, name:'文章列表' },
				{ id:1, name:'写文章' },
				{ id:2, name:'吉他学习' },
				{ id:3, name:'教学交流群' },
				{ id:4, name:'近期活动' },
				{ id:5, name:'未来计划' },
			
			
			],//头部导航
			headTabIdx:0,
			
			bannerList:[
				{ id:1, imgs:'../../static/banner.jpg' },
				{ id:2, imgs:'../../static/banner.jpg' }
			],//轮播图
			
			contOneList:[
				{ id:1, title:'啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊', author:'平台', updateTime:'2019-7-30', imgs:'../../static/banner.jpg' },
				{ id:2, title:'啊啊啊啊啊啊', author:'平台', updateTime:'2019-7-30', imgs:'../../static/banner.jpg' },
			],//内容1
			
			contTwoList:[
				{ id:1, imgs:'../../static/banner.jpg', name:'商品商品商品商品', money:'50', yu:'50' },
				{ id:2, imgs:'../../static/banner.jpg', name:'商品商品商品商品', money:'50', yu:'50' },
			],//内容2
			
			/*图片轮播*/
			indicatorDots: true,
			autoplay: true,
			interval: 2000,
			duration: 500,						
				
				d:'/api/article?pageNum=1&pageSize=199',
				// 保存资讯的数组
				newList:[],
				 goods:[1,2,3,4,5]
				
			}	
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
		happenTimeFun(num){//时间戳数据处理
		
		let date = new Date(num);
		
		//时间戳为10位需*1000，时间戳为13位的话不需乘1000
		
		        let y = date.getFullYear();
		
		        let MM = date.getMonth() + 1;
		
		        MM = MM < 10 ? ('0' + MM) : MM;//月补0
		
		        let d = date.getDate();
		
		        d = d < 10 ? ('0' + d) : d;//天补0
		
		        let h = date.getHours();
		
		        h = h < 10 ? ('0' + h) : h;//小时补0
		
		        let m = date.getMinutes();
		
		        m = m < 10 ? ('0' + m) : m;//分钟补0
		
		        let s = date.getSeconds();
		
		        s = s < 10 ? ('0' + s) : s;//秒补0
		
		        return y + '-' + MM + '-' + d + ' ' + h + ':' + m+ ':' + s;
		
		},
		
		//首页头部tab点击切换
		IsHeadTabClick: function(index,item){
			this.headTabIdx = index;
			if(index===3){
				uni.navigateTo({
					url:'/pages/group/group'
				})
			}else if(index===1){
				uni.navigateTo({
					url:'/pages/markdown/markdown'
				})
			}else if(index===2){
				uni.navigateTo({
					url:'/pages/guitarLearn/guitarLearn'
				})
			}
			else if(index===4){
				uni.showModal({
				    title: '近期活动',
				    content: '完成Aplmu开发!',
				    success: function (res) {
				        if (res.confirm) {
				            console.log('用户点击确定');
				        } else if (res.cancel) {
				            console.log('用户点击取消');
				        }
				    }
				}); 
			}
			else if(index===5){
				uni.showModal({
				    title: '未来计划',
				    content: '敬请期待!',
				    success: function (res) {
				        if (res.confirm) {
				            console.log('用户点击确定');
				        } else if (res.cancel) {
				            console.log('用户点击取消');
				        }
				    }
				}); 
			}
		},
		
		
			
			// 获取资讯的方法,就是文章的数据
		async getNews(){
		const res= await this.$myRequset({
				url:this.d
			})
			console.log(res)
			this.newList=res.data.content
		},	 
			// 跳转  id 在子组件绑定时间
			goDetail(id){
				// 跳转到具体页码
				console.log(id)
				uni.navigateTo({
					// 这里写新闻详情
				url:'../new-detail/new-detail?id='+id			//?id='+id'	 	
				})
			}
		},
		// 已进入页面,就要调用数据获得
		onLoad() {
			this.getNews()
		},
		onShow() {
			this.getNews()
		},
		components:{
			newsItem,
			saHoverMenu,
			MescrollBodyDiy, // 避免与main.js注册的全局组件名称相同,否则注册组件失效(iOS真机 APP HBuilderX2.7.9)
			GoodList 
		}
	}
</script>

<style lang="scss">
	page{ background: #F5F5F5;
	 width: 100%;
	 }
	// .headNav{
	// 	width: 100%;
	// 	background: #FFFFFF;
	// 	white-space: nowrap; 
	// 	position: fixed;
	// 	top: 0;
	// 	left: 0;
	// 	z-index: 15;
	// 	border-bottom: 1px #F2F2F2 solid;
	
	// }
	// 	.headNavBox{ width: 92%;margin: 0 auto; }
	
	
	.news{
		
		.headNav{
			width: 100%;
			background: #FFFFFF;
			white-space: nowrap; 
			position: fixed;
			top: 0;
			left: 0;
			z-index: 15;
			border-bottom: 1px solid #87CEFA;
			
		}
		.headNavBox{ width: 75%;margin: 0 auto; }
		.headNavLt{	display: inline-block;height: 100upx;line-height: 100upx;font-size: 30upx;margin-right: 30upx; }
		.headNavLt:last-child{ margin-right: 0; }
		.activeNav{ color: #3B7ED5; }
		.swiper{  height: 307rpx; }
		.swiper-item image{ width: 100%;height: 307rpx;display: block; }
		
		.idxMain{ width: 100%;padding-top: 100upx; }
		.idxMainBox{ width: 92%;margin: 0 auto; }
		.contBg{ background: #FFFFFF;overflow: hidden;margin-bottom: 30upx; }
		
		.contOver{ border-bottom: 1px #EDEDED solid;overflow: hidden;transition: all 0.4s; }
		.contOver:active{ background: #E2E2E2; }
		.contOver:last-child{ border-bottom: none; }
		.contOverLt{ float: left;width: 60%; }
		.contTxt{
			color: #333333;
			font-size: 30upx;
			width: 100%;
			text-overflow: ellipsis;
			display: -webkit-box;
			-webkit-line-clamp:2;
			-webkit-box-orient:vertical;
			overflow: hidden;
			padding-top: 30upx;
		}
		.contTime{ color: #888888;font-size: 24upx;margin-top: 30upx; }
		.contRtImg{ float: right;width: 35%;height: 155upx;margin: 30upx 0; }
		.contRtImg image{ width: 100%;height: 100%;display: block;border-radius: 6upx; }
		
		.contTitle{ background: #FFFFFF;font-size: 30upx;color: #3B7ED5;height: 80upx;line-height: 80upx;border-bottom: 1px #F5F5F5 solid; }
		.shopOver{ overflow: hidden;margin-bottom: 30upx; }
		.shopLt{ 
			float: left;
			width: 48.5%;
			background: #FFFFFF;
			height: 360upx;
			border: 1px #F2F2F2 solid;
			border-radius: 12upx;
			transition: all 0.4s;
			margin-top: 15upx;
		}
		.shopLt:nth-child(2n){ float: right; }
		.shopLt:active{ background: #E2E2E2; }
		.shopImg{ height: 220upx; }
		.shopImg image{ width: 100%;height: 100%;display: block;border-radius: 12upx 12upx 0 0; }
		.shopTxt{ font-size: 28upx;color: #333333;padding: 20upx 20upx 0 20upx;display:block;white-space:nowrap; overflow:hidden; text-overflow:ellipsis; }
		.shopMoney{ padding: 0 20upx; }
		.shopMoney text{ font-size: 26upx;color: red; }
		.shopMoney text:last-child{ color: #aaaaaa; }
		
		.newsOver{ border-bottom: 1px #F5F5F5 solid;transition: all 0.4s; }
		.newsOver:active{ background: #E2E2E2; }
		.newsOver:last-child{ border-bottom: none; }
		.newsTitle{ 
			font-size: 30upx;
			color: #333333;
			text-overflow: ellipsis;
			display: -webkit-box;
			-webkit-line-clamp:3;
			-webkit-box-orient:vertical;
			overflow: hidden;
			padding: 30upx 0 20upx 0;
			text-align: justify;
		}
		.newsImg{ height: 360upx;border: 1px #F5F5F5 solid; }
		.newsImg image{ width: 100%;height: 100%;display: block; }
		.newsTime{ overflow: hidden;padding: 20upx 0 30upx 0; }
		.newsTime text{ font-size: 26upx;color: #AAAAAA;float: left; }
		.newsTime text:last-child{ float: right; }
		.pics{
			width: 100%;
		.left{
		width: 100%;
			
		}
		}
		
		
		.new_item{
			display: flex;
			padding: 10rpx 20rpx;
			border-bottom: 1px solid #F0F8FF;
			image{
				min-width: 200rpx;
				max-width: 200rpx;
				height: 150rpx;				
			}
			
			.right{
				margin-left: 15rpx;
				display: flex;
				flex-direction: column;
				justify-content: space-between;
				.tit{
					font-size:30rpx;
				}
			.info{
				font-size: 24rpx;
				text:nth-child(2){
					margin-left: 30rpx;
				}
			}	
			}
		}
	}
	
</style>
