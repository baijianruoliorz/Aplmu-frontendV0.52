<template>
	<view class="user">
	<mescroll-body-diy ref="mescrollRef" @init="mescrollInit" top="1" bottom="1" @down="downCallback" @up="upCallback">			
		 <sa-hover-menu></sa-hover-menu>
		<!-- 头部 -->
		<view class="user-wrap">
			<view @click="loginOut" class="setting iconfont icon31shezhi"></view>
			<view class="info">
				<image @click="postInformation" class="avatar" mode="aspectFill" :src='userInfo.avatar'></image>
				<view class="nickname">{{ userInfo.nickName }}</view>
			</view>,
		</view>

		<!-- 订单状态 -->
		<view class="order-status">
			<view class="status-wrap">
				<!-- 单元格 -->
				<view class="cell">
					<view @click="onClick" class="cell-left">
						<image  @click="onClick" class="cell-icon" src="/static/images/user/icon-order.png" mode="aspectFill"></image>
						<view   @click="onClick" class="cell-text">全部订单</view>
					</view>
					<view class="iconfont iconmore1"></view>
				</view>

				<!-- 订单状态 -->
				<view class="status-list">
					<view  @click="onClick" class="status-item" hover-class="btn-hover" v-for="(item, index) in orderStatusList" :key="index">
						<view class="item-icon" :class="item.icon"></view>
						<view class="item-text">{{ item.name }}</view>
					</view>
				</view>
			</view>
		</view>

		<!-- 滑动导航 -->
		<view style="border-radius: 20rpx; overflow: hidden; margin: 0 20rpx;">
			<com-nav :list="list" :col="4"></com-nav>
		</view>

		<!-- 用户功能 -->
		<view class="com-item">
			<view  @click="onClick" class="com-wrap">
				<view  @click="onClick" class="cell" v-for="(item, index) in userList" :key="index">
					<view class="cell-left">
						<image class="cell-icon" :src="item.icon" mode="aspectFill"></image>
						<view class="cell-text">{{ item.title }}</view>
					</view>
					<view class="iconfont iconmore1"></view>
				</view>
			</view>
		</view>

		<!-- 用户服务 -->
		<view class="com-item">`
			<view class="com-wrap">
				<view @click="onClick1(index)" class="cell" v-for="(item, index) in serverList" :key="index">
					<view class="cell-left">
						<image class="cell-icon" :src="item.icon" mode="aspectFill"></image>
						<view @click="onClick1(index)" class="cell-text">{{ item.title }}</view>
					</view> 
					<view class="iconfont iconmore1"></view>
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
	
	
import comNav from './components/com-nav.vue'
import saHoverMenu from '../../components/sa-hover-menu/sa-hover-menu.vue';	
export default {
		mixins: [MescrollMixin], // 使用mixin (在main.js注册全局组件)	 
	
	methods:{
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
		
		
		
		
		getsome(){
			uni.request({
				url:'https://aplmu.backend.117503445.top/api/user/me',
				method:'GET',
				header:{
					'content-type': 'application/json',
					'Authorization':'Bearer '+getApp().globalData.onlyYourToken						
				},
				// 获取成功的数据
				// 注意这里接受数据必须用箭头函数,因为函数会改变this指向,不能获取data里定义的数据
				success:res=>{
					console.log(res)
					this.userInfo.avatar=res.data.avatar
					console.log('wyyyyyyyyyyyyyyyyyyyyyyyyyyyyy')
					// 请求失败
			
					
				if(res.statusCode!==200){
					return uni.showToast({
						title:'获取数据失败'
					})
				}	
				//这个数据不确定是这个
			
				}
				});
			
		},
		
		
		
		onClick1 (index){
			console.log(index)
			if(index===1){
		     uni.showModal({
		         title: 'HELP',
		         content: '有什么问题,欢迎联系前端开发人员,QQ:1099462011',
		         success: function (res) {
		             if (res.confirm) {
		                 console.log('用户点击确定');
		             } else if (res.cancel) {
		                 console.log('用户点击取消');
		             }
		         }
		     });
			 }else if(index===0){
				 uni.navigateTo({
				 	url:'/pages/customer/customer'
				 });
			 }else{
				uni.showModal({
				    title: '版本',
				    content: '目前版本为:V0.2,出现BUG欢迎联系APLMU团队,QQ:1099462011',
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
		
		onClick (){
		     uni.showModal({
		         title: '提示',
		         content: '测试功能,不会真的跳转哦~',
		         success: function (res) {
		             if (res.confirm) {
		                 console.log('用户点击确定');
		             } else if (res.cancel) {
		                 console.log('用户点击取消');
		             }
		         }
		     });
		    },
		onClick3(){
		     uni.showModal({
		         title: '友情提示',
		         content: '您现在处于未登录状态,是否登录?',
		         success: function (res) {
		             if (res.confirm) {
		                 console.log('用户点击确定');
					uni.navigateTo({
						url:'/pages/zaizai-login/index'
					});	 
		             } else if (res.cancel) {
		                 console.log('用户点击取消');
		             }
		         }
		     });
		    },	
			
		loginOut(){
			getApp().globalData.onlyYourname=''
			this.userInfo.nickName=''
			uni.switchTab({
				url:'pages/user/user'
			});
			// 返回到登录页面,自我感觉这里应该增加一个更友好的提示框
			uni.showToast({ 
				icon:'loading',
			    title: '正在登出哦~',
			    duration: 1500
			}); 
		setTimeout(function(){		
					uni.navigateTo({
						url: '/pages/zaizai-login/index',
					});
			},2000)
		}, 
		postInformation(){
			// getApp().globalData.onlyYourname=''
			// this.userInfo.nickName=''
			// 返回到登录页面,自我感觉这里应该增加一个更友好的提示框
			uni.showToast({ 
				icon:'loading',
			    title: '正在向个人资料出发~',
			    duration: 1500
			}); 
		setTimeout(function(){		
					uni.navigateTo({
						url: '/pages/information/information',
					});
			},2000)
		}
	},

	components: {
		comNav,
		saHoverMenu,
		MescrollBodyDiy, // 避免与main.js注册的全局组件名称相同,否则注册组件失效(iOS真机 APP HBuilderX2.7.9)
				GoodList 
	},
	onReady(){
		
	},
	onShow() {
		console.log(getApp().globalData.onlyYourname )
		   this.userInfo.nickName=getApp().globalData.onlyYourname 
		   this.getsome()
		  if(getApp().globalData.onlyYourId===''){
			this.onClick3()
		  } 
		   
		   
		   
	},
	data() {
		return {
			goods:[1,2],
			userInfo: {
				headPicUrl: '/static/images/user/avatar.jpg',
				nickName: '史蒂芬.林',
				avatar:''
			},
			orderStatusList: [
				{ name: '待付款', icon: 'iconfont icon31daifukuan', status: 10 },
				{ name: '待发货', icon: 'iconfont icon31daifahuo', status: 30 },
				{ name: '待收货', icon: 'iconfont icon31daishouhuo', status: 40 },
				{ name: '待评价', icon: 'iconfont icon31daipingjia', status: 50 },
				{ name: '已完成', icon: 'iconfont icon31yiguanzhudianpu', status: 55 }
			],
			currentIndex: 0,
			list: [
				{
					icon: '/static/images/user/class-01.png',
					text: '我的电子券'
				},
				{
					icon: '/static/images/user/class-02.png',
					text: '退换/售后'
				},
				{
					icon: '/static/images/user/class-03.png',
					text: '我的积分'
				},
				{
					icon: '/static/images/user/class-04.png',
					text: '送礼提醒'
				}
			],
			userList: [
				{
					title: '收货地址',
					icon: '/static/images/user/icon-address.png',
					path: 'address-list'
				},
				{
					title: '我的收藏',
					icon: '/static/images/user/icon-collect.png',
					path: 'collect-list'
				},
				{
					title: '我的足迹',
					icon: '/static/images/user/icon-foot.png',
					path: 'browse-list'
				}
			],
			serverList: [
				{
					title: '客服中心',
					icon: '/static/images/user/icon-kefu.png',
					path: 'kefu'
				},
				{
					title: '帮助中心',
					icon: '/static/images/user/icon-help.png',
					path: 'help'
				},
				{
					title: '版本',
					icon: '/static/images/user/icon-about.png',
					text: '1.0.0'
				}
			]
		};
	}
};
</script>

<style lang="scss">
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
