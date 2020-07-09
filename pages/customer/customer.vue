<template>
	<view class="contact">
		<image class="img" src="../../static/img/_search.jpg"></image>
		<view class="info">
			<view @click="phone">联系电话:1873769**10~点击就能call哦~</view>
			<view>联系地址:西安电子可基大学XX公寓</view>
		</view>
		<map class="map" :longitude="longitude" :scale="scale" :latitude="latitude" :markers="markers"></map>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				longitude:108.925118,
				latitude:34.23913,
				scale:13,
				markers:[
					{
					longitude:108.925118,
					latitude:34.23913,	
					iconPath:'../../static/aplmuLogo.png',
					width:30,
					height:30
					}
				]
			}
		},
		methods: {
			phone(){
				uni.makePhoneCall({
					phoneNumber:"18737699710"
				})
			}
		}
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

</style>
