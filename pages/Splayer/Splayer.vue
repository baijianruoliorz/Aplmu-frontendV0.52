<template>
	<view>
		<!-- 播放组件 -->
		  <sa-hover-menu></sa-hover-menu>
		<view class="">
			player
		</view>
		<web-view 
		src="https://outin-f6a354529d8d11ea98ee00163e1c9256.oss-cn-shanghai.aliyuncs.com/sv/576fd6dd-172634dd003/576fd6dd-172634dd003.mp4?Expires=1594200051&OSSAccessKeyId=LTAIwkKSLcUfI2u4&Signature=3096Dhrhi9r1k%2FhR9u4HPMZpRoc%3D"
		></web-view>
	</view>
</template>

<script>
	import saHoverMenu from '../../components/sa-hover-menu/sa-hover-menu.vue';
	export default {
		
		  
		  components: {
		    saHoverMenu
		  },
		
		
		data() {
			return {
				videoUrl: ''
			}
		},
		onLoad() {
			this.videoUrl=getApp().globalData.justCourseId
			var that = this;
			uni.getStorage({
				key: 'video-name',
				success(res){
					that.videoUrl = res.data;
				} 
			}),
			uni.removeStorage({
				key: 'video-name',
				success() {
					console.log('success');
				}
			}),
			console.log(this.videoUrl);
		},
		onReady() {
			this.videoUrl=getApp().globalData.justCourseId	
			// #ifdef APP-PLUS
			
			var currentWebview = this.$mp.page.$getAppWebview();
			currentWebview.setStyle({videoFullscreen: 'auto'})
			// #endif
		},
		methods: {
			
		}
	}
</script>

<style>

</style>
