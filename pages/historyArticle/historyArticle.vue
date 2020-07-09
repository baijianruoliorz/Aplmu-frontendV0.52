<template>
	<view class="news">
		<mescroll-body-diy ref="mescrollRef" @init="mescrollInit" top="1" bottom="1" @down="downCallback" @up="upCallback">	
	<!-- 用list数据的话,还要:list="newList" -->
	<!-- 不需要再新定义其他的了 -->
	<!-- 47 调用父组件方法 @itemClick="goDetail" -->
	<newsItem :list="newList"  @itemClick="goDetail"></newsItem>
	</mescroll-body-diy>
	</view>
</template>

<script>
	import MescrollBodyDiy from "@/components/mescroll-diy/beibei/mescroll-body.vue";
	import MescrollMixin from "@/components/mescroll-uni/mescroll-mixins.js";
	import GoodList from "@/components/other/good-list.vue";
	import {apiGoods} from "@/api/mock.js"
	
	
	
	import newsItem from '../../components/news_item/news_item.vue'
	export default {
		data() {
			
			return {
				 goods:[1,2,3,4,5],
				d:'/api/article?authorId='+getApp().globalData.onlyYourId+'&pageNum=1&pageSiez=199',
				// 保存资讯的数组
				newList:[]
				
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
					// 这里写查询历史文章接口
				url:'../new-detail/new-detail?id='+id			//?id='+id'	 	
				})
			}
		},
		// 已进入页面,就要调用数据获得
		onLoad() {
			this.getNews()
		},
		components:{
			newsItem,
			MescrollBodyDiy, // 避免与main.js注册的全局组件名称相同,否则注册组件失效(iOS真机 APP HBuilderX2.7.9)
			GoodList 
		}
	}
</script>

<style lang="scss">
	.news{
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
