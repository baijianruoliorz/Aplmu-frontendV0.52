<template>
	<view class="news">
		<sa-hover-menu></sa-hover-menu>
	<!-- 用list数据的话,还要:list="newList" -->
	<!-- 不需要再新定义其他的了 -->
	<!-- 47 调用父组件方法 @itemClick="goDetail" -->
	<newsItem  @itemClick="goDetail"></newsItem>
	<view class="new_item">
	<image src="../../static/img/home.jpg"></image>	
	<view class="right">
		<view class="tit">
			到女娲但我啊大街上来得及萨拉的就撒劳动纪律受打击了djasdjaldja打架了大胜靠德
		</view>
		<view class="info">
			<text>发表时间:</text>
			<text>浏览次数:</text>
		</view>
	</view>
		
	</view>
	<view class="new_item">
	<image src="../../static/img/home.jpg"></image>	
	<view class="right">
		<view class="tit">
			到女娲但我啊大街上来得及萨拉的就撒劳动纪律受打击了djasdjaldja打架了大胜靠德
		</view>
		<view class="info">
			<text>发表时间:</text>
			<text>浏览次数:</text>
		</view>
	</view>
		
	</view>
	<view class="new_item">
	<image src="../../static/img/home.jpg"></image>	
	<view class="right">
		<view class="tit">
			到女娲但我啊大街上来得及萨拉的就撒劳动纪律受打击了djasdjaldja打架了大胜靠德
		</view>
		<view class="info">
			<text>发表时间:</text>
			<text>浏览次数:</text>
		</view>
	</view>
		
	</view>
	
	</view>
</template>

<script>
	import newsItem from '../../components/news_item/news_item.vue'
	export default {
		data() {
			return {
				// 保存资讯的数组
				newList:[]
			}
		},
		methods: {
			// 获取资讯的方法,就是文章的数据
		async getNews(){
		const res= await this.$myRequset({
				url: ''
			})
			//this.newList=res....
		},	
			// 跳转  id
			goDetail(){
				// 跳转到具体页码
				uni.navigateTo({
					// 这里写新闻详情
				url:'../new-detail/new-detail'			//?id='+id'	 	
				})
			}
		},
		// 已进入页面,就要调用数据获得
		onLoad() {
		//	this.getNews()
		},
		components:{
			newsItem
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
