<template>
	<view style="background:#FFFAF0">
		<mescroll-body-diy ref="mescrollRef" @init="mescrollInit" top="1" bottom="1" @down="downCallback" @up="upCallback">	
		 <sa-hover-menu></sa-hover-menu>
		<view>
			<view class="zai-label">您现在的身份是:{{userName}}</view>
			<view>
				<navigator url="../historyArticle/historyArticle" hover-class="none" class="zai-label">戳这里查看您的历史文章(*^▽^*)</navigator>
			</view>
	
			<input  v-model="article.title" class="zai-input" placeholder-class placeholder="请输入文章标题" />
			<input  v-model="article.titleImage" class="zai-input" placeholder-class placeholder="请输入文章图片URL" />
				<input  v-model="article.content" style="text-align:center;" class="zai-input" placeholder-class placeholder="请在这里输入文章内容:" />
			
			<view class="container">
				<editor  id="editor" class="ql-container" :placeholder="placeholder" @ready="onEditorReady"></editor>
				<button type="warn" @tap="undo" plain>撤销</button>
				<button type="primary" @click="getsome" plain>发布文章</button>
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
	import saHoverMenu from '../../components/sa-hover-menu/sa-hover-menu.vue';
	import uniGoodsNav from '@/components/uni-goods-nav/uni-goods-nav.vue'
	


	export default {
		 components: {
		  
		uniGoodsNav,saHoverMenu,MescrollBodyDiy, // 避免与main.js注册的全局组件名称相同,否则注册组件失效(iOS真机 APP HBuilderX2.7.9)
				GoodList 
			
		  },
		 	mixins: [MescrollMixin], // 使用mixin (在main.js注册全局组件)	 
		data() {
			return {
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
				            text: '购物车',
				            info: 2
				        }],
				        buttonGroup: [{
				          text: '加入购物车',
				          backgroundColor: '#ff0000',
				          color: '#fff'
				        },
				        {
				          text: '立即购买',
				          backgroundColor: '#ffa200',
				          color: '#fff'
				        }
				        ],
			


                token:'',
				placeholder: '开始输入...',
				userName: '',
				article: {
					content: '',
					title: '',
					titleImage: ''
				}
			}
		},
		methods: {
			
			
			
			getsome(){
				uni.request({
					//https://aplmu.backend.117503445.top/
					// 请求地址,假装是轮播图的数据
					url:'https://aplmu.backend.117503445.top/api/article',
					method:'POST',
					data:{
						"content": this.placeholder,
						"title": this.article.title,
						"titleImage": this.article.titleImage,
					},
					header:{
						'content-type': 'application/json',
						'Authorization':'Bearer '+this.token						
					},
					// 获取成功的数据
					// 注意这里接受数据必须用箭头函数,因为函数会改变this指向,不能获取data里定义的数据
					success:res=>{
						console.log(res)
						// getApp().globalData.currentTime=res.data.createdTimeStamp
						// 请求失败
					uni.showToast({
							icon:'loading',
						    title: '发布成功!正在跳转至文章列表~',
						    duration: 1500 
						}); 
					setTimeout(function(){		
								uni.switchTab({
									url: '/pages/news/news',
								});
						},2000)		
						
						
					if(res.statusCode!==200){
						return uni.showToast({
							title:'获取数据失败,说不定是后端的锅呢~(doge'
						})
					}	
					//这个数据不确定是这个
				
					}
					});
				
			},
			
			
			
			
			
			
			
			
			onEditorReady() {

				uni.createSelectorQuery().select('#editor').context((res) => {
					this.editorCtx = res.context
				}).exec()
			},
			undo() {
				this.editorCtx.undo()
			},
			async postArticle() { 
				const res = await this.$myRequset({
					// let param = new URLSearchParams(), 
					// param.append('content',this.article.content),
					// param.append('title',this.article.title),
					// param.append('titleImage',this.article.titleImage), 
					url: '/api/article',
					method: 'POST',
					
					data: {
						// 记住不要括号					
						"content": this.article.content,
						"title": this.article.title,
						"titleImage": this.article.titleImage,
					},
					header: {
						// 'content-type':'application/x-www-form-urlencoded'
						// 'content-type':	'text/plain;charset=UTF-8'
						'content-type': 'application/x-www-form-urlencoded',
						'Authorization': this.token
					},
				})
			}

		},
		// onLoad() {			
		// 	console.log(this.userName)
		// 	console.log('sdadsa')
		// },
		// onReady() {
		// 	this.userName=getApp().globalData.onlyYourname 
		// },
		// 这里可以实现赋值哦.
		onShow() {
			this.userName = getApp().globalData.onlyYourname
			this.token=getApp().globalData.onlyYourToken
		},
		onHide() {
			this.article.title=''
			this.article.content=''
			this.article.titleImage=''
		},
		onUnload() {
			this.article.title=''
			this.article.content=''
			this.article.titleImage=''
		}
		
	}
</script>

<style lang="scss">
	.container {
		padding: 10px;
	}

	#editor {
		width: 100%;
		height: 300px;
		background-color: #FFFAF0;
	}

	button {
		margin-top: 10px;
	}



	.contact {
		.img {
			width: 750rpx;
			height: 320rpx;
		}
	}

	.info {
		// 上下左右
		padding: 10rpx 20rpx;
		font-size: 30rpx;

		view {
			// 行间距
			line-height: 80rpx;
			border-bottom: 1px soild #eee;
		}
	}

	.map {
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

	.zai-label {
		padding: 10upx 0;
		text-align: center;
		font-size: 30upx;
		color: #a7b6d0;
	}

	.zai-input {
		background: #e2f5fc;
		margin-top: 30upx;
		border-radius: 60upx;
		padding: 20upx 40upx;
		font-size: 36upx;
         
	
		position: relative;
		align-items: center;
		justify-content: center;
		text-align: center;

		font-family:Arial,Helvetica,sans-serif;
			background:none repeat scroll 0 0 #F5F7FD;
			border:1px solid #B8BFE9;
			
			width:375rpx;
			vertical-align:middle;
			height:25rpx;
			margin:0;
			list-style:none outside none;

	}
</style>
