<template>
	<view class="zai-box">
	  	<image style="margin: 0 auto" src="../../static/aplmuLogo.png"></image>
		<view class="zai-form">
			<input  v-model="user.firstname" class="zai-input" placeholder-class placeholder="请输入您的姓" />
				<input  v-model="user.lastname" class="zai-input" placeholder-class placeholder="请输入您的名" />
			<input  v-model="user.username" class="zai-input" placeholder-class placeholder="请输入用户名" />
			<input v-model="user.password" class="zai-input" placeholder-class password placeholder="请输入密码"/>
			<input v-model="user.email" class="zai-input" placeholder-class password placeholder="你的邮箱"/>
			<button class="zai-btn" @click="register">立即注册</button>
			<navigator @click="toLogin" open-type='navigateBack' hover-class="none" class="zai-label">已有账号?戳这里登录(*^▽^*)</navigator>
		</view>
	</view>
</template>

<script>
	
	export default{
	data(){
		return{
			     b:'​/api/register',
			     uri:'foreregister',
			     result: [],
			     user:{username:'', password:'',email:'',firstname:'',lastname:''} 
		}
	},
	// <!-- 	getApp().globalData.text = 'test' 赋值	 -->
	// <!-- console.log(getApp().globalData.text) // 'test' 取值 -->
	// 如果需要把globalData的数据绑定到页面上，
	//可在页面的onshow声明周期里进行变量重赋值。
	//HBuilderX 2.0.3起，nvue页面在uni-app编译模式下，也支持onshow。
	
	
	
	methods: {
		// 登录方法,目前有问题
		async register(){
			const res=await this.$myRequset({
				url:this.b,
				method:'POST',
				data:{
					 // 记住不要括号
					 "email":this.user.email,
					 "firstname":this.user.firstname,
					  "lastname":this.user.lastname,
					  "password": this.user.password,
					  
					  "username": this.user.username
					
				},
			}) 
			console.log(res)
			
				uni.showToast({
						icon:'loading',
					    title: '正在前往登录页面哦~',
					    duration: 1500
					});  
				setTimeout(function(){		
							uni.navigateTo({
								url: '/pages/zaizai-login/index',
							});
					},2000)
			
		},
		toLogin(){
			uni.navigateTo({
				url:'../zaizai-login/index'
			})
		}
		}
		}
</script>

<style lang="scss">
	.zai-box{
		// .img{
		// 	align-items: center;
		// 	justify-content: center;
		// 	text-align:center;
		// 	margin: 0 auto
		// }
		padding: 0 100upx;
		position: relative;
		align-items: center;
		justify-content: center;
		text-align:center;
	
		
		
	}
	.zai-logo{
		width: 100%;
		width: 100%;
		height: 310upx;
	}
	.zai-title{
		position: absolute;
		top: 0;
		line-height: 360upx;
		font-size: 68upx;
		color: #fff;
		text-align: center;
		width: 100%;
		margin-left: -100upx;
	}
	.zai-form{
		margin-top: 300upx;
	}
	.zai-input{
		background: #e2f5fc;
		margin-top: 30upx;
		border-radius: 100upx;
		padding: 20upx 40upx;
		font-size: 36upx;
	}
	.input-placeholder, .zai-input{
		color: #94afce;
	}
	.zai-label{
		padding: 60upx 0;
		text-align: center;
		font-size: 30upx;
		color: #a7b6d0;
	}
	.zai-btn{
		background: #7FFFAA;
		color: #fff;
		border: 0;
		border-radius: 100upx;
		font-size: 36upx;
		margin-top: 60upx;
	}
	.zai-btn:after{
		border: 0;
	}
	/*按钮点击效果*/
	.zai-btn.button-hover{
		transform: translate(1upx, 1upx);
	}
</style>
