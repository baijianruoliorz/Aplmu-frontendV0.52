<template>
	<view>
		<view class="sliverLoginPage">
				<image class="img" src="../../static/aplmuLogo.png"></image>	
		            <form @submit="formSubmit" class="sliverLogin">
		                <view class="uni-form-item uni-column">
		                    <input class="uni-input" name="username" placeholder="请输入用户名……" />
							<view style="color:	#87CEFA">-----------------------------------------</view>
							 <input class="uni-input" password="true" name="userpwd" placeholder="请输入登录密码……" />
							 <view style="color:#87CEFA">-----------------------------------------</view>
		                </view>
		                <view class="uni-btn-v">
				
		                    <button formType="submit" type="primary" plain>登录</button>
							<button type="warn" plain>注册</button>
		                </view>
		            </form>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		onLoad:function(options){
			console.log(options);
			// 在APP平台登录的情况
			//  #ifdef APP-PLUS
			uni.login({
				success:(res)=> {
					uni.getUserInfo({
						success:function(info){		
							
						},
						fail:function(){
							uni.showToast({
							title:"微信登录授权失败"	,icon:"none"
							});
						}
					})
								
				},
				fail:()=>{
					uni.showToast({
						title:'微信授权登录失败',icon:"none"
					});
				}
			})
			//#endif
		},
		methods: {
			
		}
	}
</script>

<style lang="scss">
.sliverLoginPage {

    padding: 20px 15px;
}
.sliverLogin uni-input {
	letter-spacing: 20px;
    background: #d8d8d8;
    margin-bottom: 1rem;
    padding: 0.5rem;
    font-size: 0.8rem;
    border-radius: 5px;
	color: #424242;
	view{
		color:#F0F8FF; 
	}
}
.sliverLogin .uni-btn-v button{
	letter-spacing: 20px;
	margin-bottom: .5rem;
}	

</style>
