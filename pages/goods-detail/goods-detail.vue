<template>
		
	<view class="goods_detail">
		<mescroll-body-diy ref="mescrollRef" @init="mescrollInit" top="1" bottom="1" @down="downCallback" @up="upCallback">	
		 <sa-hover-menu></sa-hover-menu>
	
	<swiper indicator-dots>
		<!-- v-for="(item,index) in swipers" :key="index" -->
		<swiper-item>
		<image src="../../static/img/_my.jpg"></image>	
		</swiper-item>
		<swiper-item>
			<image src="../../static/img/_img.jpg"></image>
		</swiper-item>
	</swiper>	 
		 
	<view class="box1">
		<view class="price">
			<!-- info.sell_price -->
		<text>${{info.price}}</text>	
		<!-- info.market_price -->
		<text>$199</text>
		</view>
		
		            <!-- info.goods_title -->
		<view class="goods_name">{{info.name}}</view>
	</view>
	<view class="line"></view>
	<view class="box2">
		
		<!-- 服务-规则选择 -->
		<view class="info-box spec">
			<view class="row" @tap="showService">
				<view class="text">服务</view>
				<view class="content"><view class="serviceitem" v-for="(item,index) in goodsData.service" :key="index">{{item.name}}</view></view>
				<view class="arrow"><view class="icon xiangyou"></view></view>
			</view>
			<!-- <view class="row" @tap="showSpec(false)">
				<view class="text">选择</view>
				<view class="content">
					<view>选择规格：</view>
					<view class="sp">
						<view v-for="(item,index) in goodsData.spec" :key="index" :class="[index==selectSpec?'on':'']">{{item}}</view>
					</view>
					
				</view>
				<view class="arrow"><view class="icon xiangyou"></view></view>
			</view> -->
		</view>
		
	
		<!-- 评价 -->
		<view class="info-box comments" id="comments">
			<view class="row">
				<view class="text">商品评价({{goodsData.comment.number}})</view>
				<view class="arrow" @tap="toRatings">
					<view class="show" @tap="showComments(goodsData.id)">
						>查看全部
						<view class="icon xiangyou"></view>
					</view>
				</view>
			</view>
			<view class="comment" @tap="toRatings">
				<view class="user-info">
					<view class="face"><image :src="goodsData.comment.userface"></image></view>
					<view class="username">{{goodsData.comment.username}}</view>
				</view>
				<view class="content">
					{{goodsData.comment.content}}
				</view>
			</view>
		</view>
		
	
		
		<!-- 详情 -->
		<view class="description">
			<view class="title">———— 商品详情 ————</view>
			<view class="content"><rich-text :nodes="descriptionStr"></rich-text></view>
		</view>
		
		
		
		<!-- info.goods_no -->
		<view>创建时间:{{info.createTime}}</view>
		<!-- info.goods_quantity -->
		<view>概述:{{info.summary}}</view>
		
	
		
		
		
	</view>
		<view class="line"></view>
		<view class="box3">
		<view class="tit">详情介绍:是答案说法是分散</view>
		<view class="content">
		<!-- 渲染富文本的 ,绑定要渲染的数据-->
		<!-- <rich-text:nodes="content"></rich-text> -->
		<view>sadasnlafnksalfmaklkdalsdna阿拉山口凡妮莎福利卡死灵法师开发杀了你放大卡是否能离开</view>
		</view>
		</view>
		<view class="goods_nav">
	<uni-goods-nav :fill="true"  :options="options" :buttonGroup="buttonGroup"  @click="onClick" @buttonClick="buttonClick" />	
	
	 
	 
	 
	
	</view>
		</mescroll-body-diy>
	</view>
</template>

<script>
	import MescrollBodyDiy from "@/components/mescroll-diy/beibei/mescroll-body.vue";
	import MescrollMixin from "@/components/mescroll-uni/mescroll-mixins.js";
	import GoodList from "@/components/other/good-list.vue";
	import {apiGoods} from "@/api/mock.js"
	
	
	
	import saHoverMenu from '../../components/sa-hover-menu/sa-hover-menu.vue';
	import uniGoodsNav from '@/components/uni-goods-nav/uni-goods-nav.vue'
	export default {
	mixins: [MescrollMixin], // 使用mixin (在main.js注册全局组件)	
		data() {
			return {
				goodsData:{
					id:1,
					name:"商品标题商品标题商品标题商品标题商品标题商品标题商品标题商品标题商品标题",
					price:"127.00",
					number:1,
					service:[
						{name:"正品保证",description:"此商品官方保证为正品"},
						{name:"极速退款",description:"此商品享受退货极速退款服务"},
						{name:"7天退换",description:"此商品享受7天无理由退换服务"}
					],
					spec:["XS","S","M","L","XL","XXL"],
					comment:{
						number:102,
						userface:'../../static/img/face.jpg',
						username:'liqiqiorz',
						content:'老师讲的特别详细,AI教授乐器课程真的在变为可能!!!整个人都在感叹AI的强大~'
					}
				},
				
				id:0,
				swipers:[],
				goods:[1,2],
				info:{					
				},
				content:'',
				  options: [{
				            icon: 'headphones',
				            text: '客服'
				        }, {
				            icon: 'shop',
				            text: '店铺',
				            info: 2,
				            infoBackgroundColor:'#007aff',
				            infoColor:"red"
				        }, {
				            icon: 'cart',
				            text: '观看次数',
				            info: 0
				        }],
				        buttonGroup: [{
						  id:0,
				          text: '试看课程',
				          backgroundColor: '#FFD700',
				          color: '#fff'
				        },
				        {
						  id:1,
				          text: '立即购买',
				          backgroundColor: '#ffa200',
				          color: '#fff'
				        }
				        ]
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
			},
			//商品评论
			toRatings(){
				uni.navigateTo({
					url:'ratings/ratings'
				})
			},
			
			// 商品详情页轮播图
		async	getSwipers(){
		const res=await this.$myRequset({
			//		url: '' +this.id
				})
				//this.swipers=
			},
			// 获取商品详情
		async getDetailInfo(){
		 const res=await this.$myRequset({
				url:'/api/course/'+this.id
			}) 
		console.log(res)	
		this.info=res.data
		this.goodsData.price=this.info.price
		this.goodsData.name=this.info.name
		getApp().globalData.justCourseId=res.data.videoUrl
		console.log(res.data.videoUrl)
		
		console.log("杨祥瑞")
		console.log(getApp().globalData.justCourseId)
		},
		// 获取详情介绍
		async getDetailContent(){
		const res=await	this.$myRequset({
				//url:''
			})
		},
			  onClick (e) {
			        uni.showToast({
			          title: `测试功能,不会跳转到${e.content.text}`,
			          icon: 'none'
			        })
			      },
			      buttonClick (e) {
			        console.log(e) 
					console.log("杨祥瑞哈哈哈哈哈哈")
			        this.options[2].info++
					if(e.index===0){
					uni.showToast({
							icon:'loading',
						    title: '获取视频数据~',
						    duration: 1500 
						}); 
					setTimeout(function(){		
								uni.switchTab({
									url: '/pages/video/video?id='+this.id,
								});
						},2000)	
						}else{
						this.toConfirmation();	
						}
						
				
					
			      },
		toConfirmation(){
		let tmpList=[];
		// 后期图片也可以在这里改
		let goods = {id:this.goodsData.id,img:'../../static/img/goods/p1.jpg',name:this.goodsData.name,spec:'规格:'+"完整课时",price:this.goodsData.price,number:this.goodsData.number};
		tmpList.push(goods);
		uni.setStorage({
			key:'buylist',
			data:tmpList,
			success: () => {
				uni.navigateTo({
					url:'../order/confirmation'
				}) 
			}
		})
		},
		
		
		//跳转评论列表
		showComments(goodsid){
			
		},
			
		},
		// 获取详情页的ID
		onLoad(options) {
			console.log(options)
			this.id=options.id
			//this.getSwipers()
			this.getDetailInfo()
			//this.getDetailContent()
		},
		components:{uniGoodsNav,saHoverMenu,MescrollBodyDiy, // 避免与main.js注册的全局组件名称相同,否则注册组件失效(iOS真机 APP HBuilderX2.7.9)
			GoodList }
	}
</script>

<style lang="scss">
	.goods_detail{
	swiper{
		height: 700rpx;
		image{
			width: 100%;
			height: 100%;
		}
	}
	.box1{
		padding: 10px;
		.price{
			font-size: 35rpx;
			color:#FF0000;
			line-height: 80rpx;
			// 给原价加样式
			text:nth-child(2){
				color: #C0C0C0;
				font-size: 28rpx;
				// 删除线
				text-decoration: line-through;
				// 两者间隔
				margin-left: 20rpx;
			}
		}
		.goods_name{
			font-size: 32rpx;
			line-height: 60rpx;
		}
	}
	.box2{
		padding: 0 10px;
		font-size: 32rpx;
		line-height: 70rpx;
	}
	.box3{
		padding-bottom: 50px;
		.tit{
			font-size: 32rpx;
			padding-left: 10rpx;
			// 边框
			border-bottom: 1px solid #eee;
			// 行高
			line-height:70rpx ;
		}
		.content{
			padding: 10px;
			font-size: 28rpx;
			color: #333;
			line-height: 50rpx;
			
		}
	}
}
.goods_nav{
	position: fixed;
	bottom: 0;
	width: 100%;
	
  .footer {
  	position: fixed;
  	bottom: 0upx;
  	width: 92%;
  	padding: 0 4%;
  	height: 99upx;
  	border-top: solid 1upx #eee;
  	background-color: #fff;
  	z-index: 2;
  	display: flex;
  	justify-content: space-between;
  	align-items: center;
  	.icons {
  		display: flex;
  		height: 80upx;
  		margin-left: -4%;
  		.box {
  			width: 80upx;
  			height: 80upx;
  			display: flex;
  			justify-content: center;
  			flex-wrap: wrap;
  			.icon {
  				font-size: 40upx;
  				color: #828282;
  			}
  			.text {
  				display: flex;
  				justify-content: center;
  				width: 100%;
  				font-size: 22upx;
  				color: #666;
  			}
  		}
  	}
  	.btn {
  		height: 80upx;
  		border-radius: 40upx;
  		overflow: hidden;
  		display: flex;
  		margin-right: -2%;
  		.joinCart,
  		.buy {
  			height: 80upx;
  			padding: 0 40upx;
  			color: #fff;
  			display: flex;
  			align-items: center;
  			font-size: 28upx;
  		}
  		.joinCart {
  			background-color: #f0b46c;
  		}
  		.buy {
  			background-color: #f06c7a;
  		}
  	}
  }
	
}
.line{
	// 分割线
	height: 10rpx;
	width: 750rpx;
	background: #eee;
}




.icon {
	font-size: 26upx;
}
.status {
	width: 100%;
	height: 0;
	position: fixed;
	z-index: 10;
	top: 0;
	/*  #ifdef  APP-PLUS  */
	height: var(--status-bar-height); //覆盖样式
	/*  #endif  */
	background-color: #f1f1f1;
	transition: opacity 0.05s linear;
}
.header {
	width: 100%;

	height: 100upx;
	display: flex;
	align-items: center;
	position: fixed;
	top: 0;
	z-index: 10;
	/*  #ifdef  APP-PLUS  */
	top: var(--status-bar-height);
	/*  #endif  */
	.before,
	.after {
		width: 92%;
		padding: 0 4%;
		height: 100upx;
		display: flex;
		align-items: center;
		position: fixed;
		top: 0;
		/*  #ifdef  APP-PLUS  */
			top: var(--status-bar-height);
		/*  #endif  */
		transition: opacity 0.05s linear;
		.back {
			width: 125upx;
			height: 60upx;
			flex-shrink: 0;
			.icon {
				margin-left: -10%;
				width: 60upx;
				height: 60upx;
				display: flex;
				align-items: center;
				justify-content: center;
				font-size: 42upx;
			}
		}
		.middle {
			width: 100%;
		}
		.icon-btn {
			width: 125upx;
			height: 60upx;
			flex-shrink: 0;
			display: flex;
			.icon {
				&:first-child{
					margin-right: 5upx;
				}
				width: 60upx;
				height: 60upx;
				display: flex;
				justify-content: center;
				align-items: center;
				font-size: 42upx;
			}
		}
	}
	.before {
		.back {
			.icon {
				color: #fff;
				background-color: rgba(0, 0, 0, 0.2);
				border-radius: 100%;
			}
		}
		.icon-btn {
			.icon {
				color: #fff;
				background-color: rgba(0, 0, 0, 0.2);
				border-radius: 100%;
				
			}
		}
	}
	.after {
		background-color: #f1f1f1;
		.back {
			.icon {
				color: #666;
			}
		}
		.icon-btn {
			.icon {
				color: #666;
			}
		}
		.middle {
			font-size: 32upx;
			height: 90upx;
			display: flex;
			justify-content: center;
			align-items: center;
			padding: 0 7%;
			view {
				width: (100%/3);
				padding: 0 3%;
				margin: 0 3%;
				display: flex;
				justify-content: center;
				align-items: center;
				&.on {
					margin-bottom: -4upx;
					color: #f47952;
					border-bottom: solid 4upx #f47952;
				}
			}
		}
	}
}
.swiper-box {
	position: relative;
	width: 100%;
	height: 100vw;
	swiper {
		width: 100%;
		height: 100vw;
		swiper-item {
			image {
				width: 100%;
				height: 100vw;
			}
		}
	}
	.indicator{
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 0 25upx;
		height: 40upx;
		border-radius: 40upx;
		font-size: 22upx;
		position: absolute;
		bottom: 20upx;
		right: 20upx;
		color: #fff;
		background-color: rgba(0, 0, 0, 0.2);
	}
}
.info-box {
	width: 92%;
	padding: 20upx 4%;
	background-color: #fff;
	margin-bottom: 20upx;
}

.goods-info {
	.price {
		font-size: 46upx;
		font-weight: 600;
		color: #f47925;
	}
	.title {
		font-size: 30upx;
	}
}
.spec {
	.row {
		width: 100%;
		display: flex;
		align-items: center;
		margin: 0 0 30upx 0;
		.text {
			font-size: 24upx;
			color: #a2a2a2;
			margin-right: 20upx;
		}
		.content {
			font-size: 28upx;
			display: flex;
			flex-wrap: wrap;
			.serviceitem{
				margin-right: 10upx;
			}
			.sp {
				width: 100%;
				display: flex;
				view {
					background-color: #f6f6f6;
					padding: 5upx 10upx;
					color: #999;
					margin-right: 10upx;
					font-size: 20upx;
					border-radius: 5upx;
					&.on{
						border: solid 1upx #f47952;
						padding: 4upx 8upx;
					}
				}
			}
		}
		.arrow {
			position: absolute;
			right: 4%;
			.icon {
				color: #ccc;
			}
		}
	}
}
.comments {
	.row {
		width: 100%;
		height: 40upx;
		display: flex;
		align-items: center;
		margin: 0 0 30upx 0;
		.text {
			font-size: 30upx;
		}
		.arrow {
			font-size: 28upx;
			position: absolute;
			right: 4%;
			color: #17e6a1;
			.show {
				display: flex;
				align-items: center;
				.icon {
					color: #17e6a1;
				}
			}
		}
	}
	.comment {
		width: 100%;
		.user-info {
			width: 100%;
			height: 40upx;
			display: flex;
			align-items: center;
			.face {
				width: 40upx;
				height: 40upx;
				margin-right: 8upx;
				image {
					width: 40upx;
					height: 40upx;
					border-radius: 100%;
				}
			}
			.username {
				font-size: 24upx;
				color: #999;
			}
		}
		.content {
			margin-top: 10upx;
			font-size: 26upx;
		}
	}
}
.description {
	.title {
		width: 100%;
		height: 80upx;
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: 26upx;
		color: #999;
	}
}
.footer {
	position: fixed;
	bottom: 0upx;
	width: 92%;
	padding: 0 4%;
	height: 99upx;
	border-top: solid 1upx #eee;
	background-color: #fff;
	z-index: 2;
	display: flex;
	justify-content: space-between;
	align-items: center;
	.icons {
		display: flex;
		height: 80upx;
		margin-left: -4%;
		.box {
			width: 80upx;
			height: 80upx;
			display: flex;
			justify-content: center;
			flex-wrap: wrap;
			.icon {
				font-size: 40upx;
				color: #828282;
			}
			.text {
				display: flex;
				justify-content: center;
				width: 100%;
				font-size: 22upx;
				color: #666;
			}
		}
	}
	.btn {
		height: 80upx;
		border-radius: 40upx;
		overflow: hidden;
		display: flex;
		margin-right: -2%;
		.joinCart,
		.buy {
			height: 80upx;
			padding: 0 40upx;
			color: #fff;
			display: flex;
			align-items: center;
			font-size: 28upx;
		}
		.joinCart {
			background-color: #f0b46c;
		}
		.buy {
			background-color: #f06c7a;
		}
	}
}
.popup {
	position: fixed;
	top: 0;
	width: 100%;
	height: 100%;
	z-index: 20;
	display: none;
	.mask{
		position: fixed;
		top: 0;
		width: 100%;
		height: 100%;
		z-index: 21;
		background-color: rgba(0, 0, 0, 0.6);
	}
	.layer {
		position: fixed;
		z-index: 22;
		bottom: -70%;
		width: 92%;
		padding: 0 4%;
		height: 70%;
		border-radius: 20upx 20upx 0 0;
		background-color: #fff;
		display: flex;
		flex-wrap: wrap;
		align-content: space-between;
		.content {
			width: 100%;
			padding: 20upx 0;
		}
		.btn {
			width: 100%;
			height: 100upx;
			.button {
				width: 100%;
				height: 80upx;
				border-radius: 40upx;
				color: #fff;
				display: flex;
				align-items: center;
				justify-content: center;
				background-color: #f47952;
				font-size: 28upx;
			}
		}
	}
	
	&.show {
		display: block;
		.mask{
			animation: showPopup 0.2s linear both;
		}
		.layer {
			animation: showLayer 0.2s linear both;
		}
	}
	&.hide {
		display: block;
		.mask{
			animation: hidePopup 0.2s linear both;
		}
		
		.layer {
			animation: hideLayer 0.2s linear both;
		}
	}
	&.none {
		display: none;
	}
	&.service {
		.row {
			margin: 30upx 0;
			.title {
				font-size: 30upx;
				margin: 10upx 0;
			}
			.description {
				font-size: 28upx;
				color: #999;
			}
		}
	}
	&.spec {
		.title {
			font-size: 30upx;
			margin: 30upx 0;
		}
		.sp {
			display: flex;
			view {
				font-size: 28upx;
				padding: 5upx 20upx;
				border-radius: 8upx;
				margin: 0 30upx 20upx 0;
				background-color: #f6f6f6;
				&.on {
					padding: 3upx 18upx;
					border: solid 1upx #f47925;
				}
			}
		}
		.length{
			margin-top: 30upx;
			border-top: solid 1upx #aaa;
			display: flex;
			justify-content: space-between;
			align-items: center;
			padding-top: 20upx;
			.text{
				font-size: 30upx;
			}
			.number{
				display: flex;
				justify-content: center;
				align-items: center;
				.input{
					width: 80upx;
					height: 60upx;
					margin: 0 10upx;
					background-color: #f3f3f3;
					display: flex;
					justify-content: center;
					align-items: center;
					text-align: center;
					input{
						width: 80upx;
						height: 60upx;
						display: flex;
						justify-content: center;
						align-items: center;
						text-align: center;
						font-size: 26upx;
					}
				}
				
				.sub ,.add{
					width: 60upx;
					height: 60upx;
					background-color: #f3f3f3;
					border-radius: 5upx;
					.icon{
						font-size: 30upx;
						width: 60upx;
						height: 60upx;
						display: flex;
						justify-content: center;
						align-items: center;
						
					}
				}
			}
		}
		
	}
}
.share{
	display: none;
	&.show {
		display: block;
		.mask{
			animation: showPopup 0.15s linear both;
		}
		.layer {
			animation: showLayer 0.15s linear both;
		}
	}
	&.hide {
		display: block;
		.mask{
			animation: hidePopup 0.15s linear both;
		}
		
		.layer {
			animation: hideLayer 0.15s linear both;
		}
	}
	&.none {
		display: none;
	}
	.mask{
		background-color: rgba(0,0,0,.5);
		position: fixed;
		width: 100%;
		height: 100%;
		top:0;
		z-index: 11;
	}
	.layer{
		width: 92%;
		position: fixed;
		z-index: 12;
		padding: 0 4%;
		top: 100%;
		background-color: rgba(255,255,255,0.9);
		.list{
			width: 100%;
			display: flex;
			padding:10upx 0 30upx 0;
			.box{
				width: 25%;
				display: flex;
				justify-content: center;
				flex-wrap: wrap;
				image{
					width: 13.8vw;
					height: 13.8vw;
				}
				.title{
					margin-top: 10upx;
					display: flex;
					justify-content: center;
					width: 100%;
					font-size: 26upx;
				}
			}
		}
		.btn{
			width: 100%;
			height: 100upx;
			display: flex;
			justify-content: center;
			align-items: center;
			font-size: 28upx;
			border-top: solid 1upx #666666;
		}
		.h1{
			width: 100%;
			height: 80upx;
			display: flex;
			justify-content: center;
			align-items: center;
			font-size: 34upx;
		}
	}
}


</style>
