<template>
	<view>
		<view class="contact">
			<view class="info">
				<!-- <view @click="phone">联系电话:1873769**10~点击就能call哦~</view> -->
			
			
				
	<view class="user">
		 
		<!-- 订单状态 -->
		<view class="order-status">
			<view class="status-wrap">
				<!-- 单元格 -->
					<navigator url="/pages/information/information" hover-class="none" class="zai-label">下方填入您要修改的ID</navigator>	
				<view class="cell">
					<!-- @click="onClick" -->
					<view  class="cell-left">
					<image  class="cell-icon" src="/static/images/user/icon-kefu.png" mode="aspectFill"></image>
				
						<view class="cell-text">您的用户名</view>
						<input v-model="user.userName" class="zai-input" placeholder-class :placeholder="user1.userName" />
					</view>
					<view class="iconfont iconmore1"></view>
				</view>
				<navigator url="/pages/information/information" hover-class="none" class="zai-label">下方填入您要修改头像url</navigator>
				
				<view class="cell">
					<!-- @click="onClick" -->
					<view  class="cell-left">
					<image  class="cell-icon" src="/static/images/user/icon-kefu.png" mode="aspectFill"></image>
				
						<view class="cell-text">您的头像url</view>
						<input v-model="user.userAvator" class="zai-input" placeholder-class :placeholder="user1.userAvator" />
					</view>
					<view class="iconfont iconmore1"></view>
				</view>
				
				
					<navigator url="/pages/information/information" hover-class="none" class="zai-label">下方填入您要修改的email</navigator>	
				<view class="cell">

					<view class="cell-left">
						<image  class="cell-icon" src="/static/images/user/icon-kefu.png" mode="aspectFill"></image>
						<!-- 这个地方写input最好 -->
						<view class="cell-text">您上传email的地址</view>
						
						<input v-model="user.userEmail" class="zai-input" placeholder-class :placeholder="user1.userEmail" />
					</view>
					<view class="iconfont iconmore1"></view>
				</view>
				
				<navigator url="/pages/information/information" hover-class="none" class="zai-label">下方填入您要修改的密码</navigator>
				<view class="cell">
				
					<view class="cell-left">
						<image  class="cell-icon" src="/static/images/user/icon-kefu.png" mode="aspectFill"></image>
						<!-- 这个地方写input最好 -->
						<view class="cell-text">密码</view>
						
						<input v-model="user.password" class="zai-input" placeholder-class placeholder="XXX" />
					</view>
					<view class="iconfont iconmore1"></view>
				</view>
				
							
				
			
				</view>
				</view>
		
		</view>
		
			
 				
</view>
	</view>
	<navigator url="/pages/information/information" hover-class="none" class="zai-label">戳按钮上传(*^▽^*)</navigator>
	  <button type="primary" @click="changesomeInfo" plain>修改个人信息</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			user:{userAvator:'',userName:'',userId:0,userEmail:'',password:0},
			user1:{userAvator:'',userName:'爸爸',userId:0,userEmail:''}		
			}
		},
		methods: {
		async changeInformation(){
			const res = await this.$myRequset({
				url: '/api/user/'+this.user.userId,
				methods:'PUT',
				header:{
				 'content-type':'application/json',
				 'Authorization': getApp().globalData.onlyYourToken
				},
				
				data:{
					
				
				  "avatar": this.user.userAvator,
				  "email": this.user.userEmail,
				  "password": this.user.password,
				  "lastname":"猛男喵喵",
				  "username": this.user.userName
					
					
				}
			}) 
			  getApp().globalData.onlyYourAvator =this.user.userAvator
			if(res.statusCode===200){
				uni.switchTab({					
					url:'/pages/user/user'
				})
			}
		},
		
		changesomeInfo(){
			uni.request({
				//https://aplmu.backend.117503445.top/
				// 请求地址,假装是轮播图的数据
				url:'https://aplmu.backend.117503445.top/api/user/'+getApp().globalData.onlyYourId,
				method:'PUT',
				data:{ 
				"avatar": this.user.userAvator,
				"email": this.user.userEmail,
				"password": 'admin',
				"lastname":'喵喵', 
				"username": this.user.userName
				}, 
				header:{
					'content-type': 'application/json',
					'Authorization':'Bearer '+getApp().globalData.onlyYourToken					
				},
				// 获取成功的数据
				// 注意这里接受数据必须用箭头函数,因为函数会改变this指向,不能获取data里定义的数据
				success:res=>{
					console.log(res)
					// 请求失败
				uni.showToast({
						icon:'loading',
					    title: '修改成功miu~',
					    duration: 1500 
					}); 
				setTimeout(function(){		
							uni.switchTab({
								url: '/pages/user/user',
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
					this.user1.userName=getApp().globalData.onlyYourname
					this.user1.userAvator=res.data.avatar
					this.user1.userEmail=res.data.email	
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
		
		
		async getInfo(){
			const res = await this.$myRequset({
				url: '/api/user/'+getApp().globalData.onlyYourId,
				header:{
				 'content-type':'application/json',
				 'Authorization': getApp().globalData.onlyYourToken
				},
				// getapp.id
			}) 
			console.log(res)
			this.user1.userName=getApp().globalData.onlyYourname
			this.user1.userAvator=res.data.avatar
			this.user1.userEmail=res.data.userEmail			
		},
		
		
		},
		// 此时开始获取个人信息
		onLoad() {
			this.user1.userName=getApp().globalData.onlyYourname
			//this.user.userId=getApp().globalData.onlyYourId
		},
		// 根据ID来渲染初始数据
		onShow() {
			this.user.userId=getApp().globalData.onlyYourId
			this.getsome()
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
			
			.zai-label{
				padding: 60upx 0;
				text-align: center;
				font-size: 30upx;
				color: #a7b6d0;
			}
			
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
			
			
			.zai-label{
				padding: 60upx 0;
				text-align: center;
				font-size: 30upx;
				color: #a7b6d0;
			}
			
			
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
	.zai-label{
		padding: 60upx 0;
		text-align: center;
		font-size: 30upx;
		color: #a7b6d0;
	}
</style>
