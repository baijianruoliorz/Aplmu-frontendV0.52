<template>
	<view>
		<mescroll-body-diy ref="mescrollRef" @init="mescrollInit" top="1" bottom="1" @down="downCallback" @up="upCallback">		
		<view class="contact">
			<image class="img" src="../../static/aplmuLogo.png"></image>
			<view class="info">
				<!-- <view @click="phone">联系电话:1873769**10~点击就能call哦~</view> -->
			
			
				
	<view class="user">
		
		<!-- 订单状态 -->
		<view class="order-status">
			<view class="status-wrap">
				<!-- 单元格 -->
				<view class="cell">
					<view @click="onClick" class="cell-left">
						<image  @click="onClick" class="cell-icon"></image>
						<view   @click="onClick">APLMU  our team~</view>
					</view>
					<view class="iconfont iconmore1"></view>
				</view>
				
			<view class="cell">
				<view @click="onClick" class="cell-left">
					<image  @click="onClick" class="cell-icon" mode="aspectFill"></image>
					<view   @click="onClick" class="cell-text">算法方面:</view>
				</view>
				<view class="iconfont iconmore1"></view>
			</view>
				<view class="cell">
					<view @click="onClick" class="cell-left">
						<image  @click="onClick" class="cell-icon" src="/static/images/user/icon-kefu.png" mode="aspectFill"></image>
						<view   @click="onClick" class="cell-text">s1</view>
					</view>
					<view class="iconfont iconmore1"></view>
				</view>
				<view class="cell">
					<view @click="onClick" class="cell-left">
						<image  @click="onClick" class="cell-icon" src="/static/images/user/icon-kefu.png" mode="aspectFill"></image>
						<view   @click="onClick" class="cell-text">s2</view>
					</view>
					<view class="iconfont iconmore1"></view>
				</view>
				<view class="cell">
					<view @click="onClick" class="cell-left">
						<image  @click="onClick" class="cell-icon" src="/static/images/user/icon-kefu.png" mode="aspectFill"></image>
						<view   @click="onClick" class="cell-text">s3</view>
					</view>
					<view class="iconfont iconmore1"></view>
				</view>
				<view class="cell">
					<view @click="onClick" class="cell-left">
						<image  @click="onClick" class="cell-icon"  mode="aspectFill"></image>
						<view   @click="onClick" class="cell-text">后端开发</view>
					</view>
					<view class="iconfont iconmore1"></view>
				</view>
				<view class="cell">
					<view @click="onClick" class="cell-left">
						<image  @click="onClick" class="cell-icon" src="/static/images/user/icon-kefu.png" mode="aspectFill"></image>
						
						
						<view   @click="onClick" class="cell-text">h1</view>
					</view>
					<view class="iconfont iconmore1"></view>
				</view>
				<view class="cell">
					<view @click="onClick" class="cell-left">
						<image  @click="onClick" class="cell-icon" src="/static/images/user/icon-kefu.png" mode="aspectFill"></image>
						<view   @click="onClick" class="cell-text">前端开发</view>
					</view>
					<view class="iconfont iconmore1"></view>
				</view>
				<view class="cell">
					<view @click="onClick" class="cell-left">
						<image  @click="onClick" class="cell-icon" src="/static/images/user/icon-kefu.png" mode="aspectFill"></image>
						<view   @click="onClick" class="cell-text">杨祥瑞</view>
					</view>
					<view class="iconfont iconmore1"></view>
				</view>
				<view class="cell">
					<view @click="onClick" class="cell-left">
						<image  @click="onClick" class="cell-icon" src="/static/images/user/icon-kefu.png" mode="aspectFill"></image>
						<view   @click="onClick" class="cell-text">q1</view>
					</view>
					<view class="iconfont iconmore1"></view>
				</view>
				<view class="cell">
					<view @click="onClick" class="cell-left">
						<image  @click="onClick" class="cell-icon" src="/static/images/user/icon-order.png" mode="aspectFill"></image>
						<view   @click="onClick" class="cell-text">全部订单</view>
					</view>
					<view class="iconfont iconmore1"></view>
				</view>
				<view class="cell">
					<view @click="onClick" class="cell-left">
						<image  @click="onClick" class="cell-icon" src="/static/images/user/icon-order.png" mode="aspectFill"></image>
						<view   @click="onClick" class="cell-text">全部订单</view>
					</view>
					<view class="iconfont iconmore1"></view>
				</view>
				</view>
				</view>
		
		</view>
				
</view>
	</view>
	</mescroll-body-diy>
	</view>
</template>

<script>
	import MescrollBodyDiy from "@/components/mescroll-diy/beibei/mescroll-body.vue";
	import MescrollMixin from "@/components/mescroll-uni/mescroll-mixins.js";
	import GoodList from "@/components/other/good-list.vue";
	import {apiGoods} from "@/api/mock.js"	
	export default {
		mixins: [MescrollMixin], // 使用mixin (在main.js注册全局组件)		
		data() {
			return {
				
				serverList: [
					{
						title: '客服中心',
						icon: '/static/images/user/icon-kefu.png',
						path: 'kefu'
					}]
			}
		},
		methods: {
			
		},
		components:{
		
			MescrollBodyDiy, // 避免与main.js注册的全局组件名称相同,否则注册组件失效(iOS真机 APP HBuilderX2.7.9)
				GoodList
		},
	}
</script>

<style lang="scss">
.contact{
		.img{
			width: 750rpx;		
			height: 320rpx;
		}
	}
	.info{
		// 上下左右
		padding: 10rpx 20rpx;
		font-size: 30rpx;
		view{
			// 行间距
			line-height: 80rpx;
			border-bottom: 1px soild #eee;
		}
	}
	.map{
		width: 750rpx;
		height: 750rpx;
	}
	
	
page {
	background: #f2f2f2;
}
.btn-hover {
	background: #f2f2f2 !important;
}
.user {
	.user-wrap {
		//	background: #F0F8FF;
		display: flex;
		justify-content: center;
		align-items: center;
		height: 50vw;
		padding: 30rpx;
		z-index: 9;
		border-radius: 0 0 20% 20%;
		// 这里是背景图片url
		background: url('https://edu-1014.oss-cn-beijing.aliyuncs.com/bizhi.jpg') no-repeat;
		background-size: cover;
		.setting {
				//background: #F0F8FF;
			color: #fff;
			position: absolute;
			top: 60rpx;
			left: 60rpx;
			font-size: 50rpx;
		}
		.info {
			position: absolute;
			text-align: center;
			//background: #F0F8FF;
			.avatar {
				width: 150rpx;
				height: 150rpx;
				border-radius: 50%;
			}
			.nickname {
				color: #fff;
				font-size: 28rpx;
			}
		}
	}
	.order-status {
		padding: 0 20rpx;
		margin-top: -10vw;
		.status-wrap {
			border-radius: 25rpx;
			overflow: hidden;
			.status-list {
				display: flex;
				justify-content: space-evenly;
				align-items: center;
				background: #fff;
				padding-top: 30rpx;
				padding-bottom: 30rpx;
				.status-item {
					flex: 1;
					display: flex;
					flex-direction: column;
					justify-content: center;
					align-items: center;
					.item-icon {
						line-height: 1;
						font-size: 65rpx;
						color: #bbb;
					}
					.item-text {
						font-size: 28rpx;
						color: #666;
						margin-top: 5rpx;
					}
				}
			}
		}
	}
	.com-item {
		padding-left: 20rpx;
		padding-right: 20rpx;
		margin-top: 20rpx;
		.com-wrap {
			border-radius: 25rpx;
			overflow: hidden;
		}
	}
	.cell {
		height: 80rpx;
		padding-left: 20rpx;
		padding-right: 20rpx;
		display: flex;
		justify-content: space-between;
		align-items: center;
		background: #fff;
		border-bottom: 1px solid #f8f8f8;
		&:active {
			background: #f2f2f2;
		}
		&:last-child {
			border-bottom: none !important;
		}
		.cell-left {
			display: flex;
			align-items: center;
			.cell-icon {
				width: 50rpx;
				height: 50rpx;
			}
			.cell-text {
				color: #666;
				font-size: 28rpx;
				margin-left: 20rpx;
			}
		}
		.iconfont {
			font-size: 40rpx;
			color: #999;
		}
	}
}	
</style>
