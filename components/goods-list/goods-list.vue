<template>
	<view class="goods_list">
				<!-- goods item 是v-for循环的,来渲染文章数据 -->
				<!-- 整合API之后这里可以写 v-for="item in goods :key="item.id" -->
	<view class="goods_item" v-for="item in goods" :key="item.id" @click="navigator(item.id)">
		<image :src="item.imageUrl"></image>
		<view class="price">
		<text>${{item.price}}</text>	
		<text>$199</text>
			 
		</view>
		<view class="name">
			{{item.name}}
		</view>
	</view>
				
	</view>
</template>

<script>
	export default{
		// 传入goods数据
		props:['goods'],
		
		// 这里也是父子组件联动触发
		methods:{
			navigator(id){
			this.$emit('goodsItemClick',id)	
			}
		}
	}
</script>

<style lang="scss">
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
				width: 90%;
				height: 280rpx;
				display: block;
				margin: auto;
			}
			.price{
				// 第一排字颜色
				color: #808080;
				font-size: 38rpx;
				margin: 20rpx 0 5rpx 0;
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
</style>
