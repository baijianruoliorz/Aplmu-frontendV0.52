<template>
	<view class="zai-box">
		<image class="img" src="../../static/aplmuLogo.png"></image>
	
		<view class="zai-form">		 	
			
			
			<view class="zai-label">记得妥善保管您的密码</view>
			<input v-model="user.name" class="zai-input" placeholder-class placeholder="请输入用户名" />
			
			<input v-model="user.password" class="zai-input" placeholder-class password placeholder="请输入密码"/>
			<!-- <view class="zai-label">忘记密码？</view> -->

			 <view class="zai-label" v-if="user.password.length<8&&user.password.length!=0">智能检测账号可靠性:建议增加复杂度!</view> 
			  <view class="zai-label" v-if="user.password.length>8&&user.password.length<11">智能检测账号可靠性:较可靠</view> 
			    <view class="zai-label" v-if="user.password.length>11">智能检测账号可靠性:perfect!</view> 
			
			<button  @click="login" class="zai-btn">立即登录</button>
			<!-- 点这个跳转 -->
			<navigator url="../zaizai-register/index" hover-class="none" class="zai-label">还没有账号？点此注册.</navigator>
		</view>
	</view>
</template>

<!-- // <! 	getApp().globalData.text = 'test' 赋值	 -->
<!-- 	// <! console.log(getApp().globalData.text) // 'test' 取值 -->
<!-- 	// 如果需要把globalData的数据绑定到页面上，
	//可在页面的onshow声明周期里进行变量重赋值。
	//HBuilderX 2.0.3起，nvue页面在uni-app编译模式下，也支持onshow。 --> -->
	 
<script>
	export default{
	data(){
		return{
		a:'/api/login',
		uri:'foreregister',
		result: [],
		user:{name:'', password:'', repeatpassword:''}	
		}
	},
	methods: {
		async login(){
			const res=await this.$myRequset({
				url:this.a,
				method:'POST',
				header:{
					 'content-type':'application/json'
				// 'content-type':	'text/plain;charset=UTF-8'
				},
				data:{
					 // 记住不要括号
					
					  "password": this.user.password,
					  "remeberMe":true,
					  "username": this.user.name					
				},
			// success:(res)=>{
			// 	console.log('+ASDSAdsadsa')
			// 	console.log(res)
			// 	getApp().globalData.onlyYourToken=res.id_token
			// 	}
			}) 
			console.log(res)
			if(res.data.id_token!=''){
				console.log(res.data.id_token)
				getApp().globalData.onlyYourToken=res.data.id_token
				getApp().globalData.onlyYourId=res.data.userId		
			console.log('++++++++++++++++++++++++++')			
			console.log()
			uni.showToast({
					icon:'loading',
				    title: '正在前往程序哦~',
				    duration: 1500 
				}); 
			setTimeout(function(){		
						uni.switchTab({
							url: '/pages/index/index',
						});
				},2000)	
				
			}
		}
		},
		// 记住这个生命周期函数,,试了好几个 
		onUnload(){
			
			getApp().globalData.onlyYourname=this.user.name
		}
	}
</script>

<style lang="scss"> 
	.zai-box{	
		.img{
			align-items: center;
			justify-content: center;
			text-align:center;
				align:center;
				margin: 0 auto
		}
		align:center;
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
		background:	#7FFFAA;
		color: #fff;
		border: 0;
		border-radius: 100upx;
		font-size: 36upx;
	}
	.zai-btn:after{
		border: 0;
	}
	/*按钮点击效果*/
	.zai-btn.button-hover{
		transform: translate(1upx, 1upx);
	}
</style>
