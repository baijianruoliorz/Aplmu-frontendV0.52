<!-- 资讯详情页 -->
<template>
<view class="just">
	<view>
	<button class="loginBtn" type="primary" @click="putArticle" plain>修改文章</button>
		<button class="registerBtn" type="warn" @click="deleteArticle" plain>删除文章</button>
		<navigator url="../historyArticle/historyArticle" hover-class="none" class="zai-label">这里目前支持修改文章(〃'▽'〃)</navigator>	
			<navigator url="../historyArticle/historyArticle" hover-class="none" class="zai-label">这里目前支持删除文章(*^▽^*)</navigator>	
		</view>
	<view>	
		<view class="news_detail">
		
			<text class="title">{{detail.title}}</text>	
			<view class="info">
			<text>发表时间:{{happenTimeFun(detail.createdTimeStamp)}}</text>	
			<text>浏览:{{detail.pageView}}</text>	
			</view>
		<view class="content">  
			<!-- 内容:解析html nodes写具体的内容 -->
			<rich-text :nodes="detail.content"></rich-text>
		</view>
	</view>
		 <sa-hover-menu></sa-hover-menu>				
		</view>		
</view>
</template>

<script>
		import saHoverMenu from '../../components/sa-hover-menu/sa-hover-menu.vue';
	export default {
		data() {
			return {
			id:0,
			detail:{}
			}
		},
		methods: {
		   putArticle(){
			   uni.navigateTo({
			   	url:"/pages/changingArticle/changingArticle"
			   })
		   },
			
			deleteArticle(){
				uni.request({
						url:'https://aplmu.backend.117503445.top/api/article/'+this.id,
						method:'DELETE',
						header:{
							'content-type': 'application/json',
							'Authorization':'Bearer '+getApp().globalData.onlyYourToken						
						},
						// 获取成功的数据
						// 注意这里接受数据必须用箭头函数,因为函数会改变this指向,不能获取data里定义的数据
						success:res=>{
							console.log(res)
						uni.showModal({
						    title: '删除结果',
						    content: '删除成功,嘤嘤嘤~',
						    success: function (res) {
						        if (res.confirm) {
						            console.log('用户点击确定');
						uni.showToast({
								icon:'loading',
							    title: '正在刷新文章~',
							    duration: 700
							}); 
						setTimeout(function(){		
									uni.switchTab({
										url: '/pages/news/news',
									});
							},1300)
						        } else if (res.cancel) {
						          uni.switchTab({
						          	url:'/pages/news/news'
						          })	
						        }
						    }
						}); 	
					
					
							
						if(res.statusCode!==200){
							return uni.showToast({
								title:'~~~'
							})
						}	
						//这个数据不确定是这个
					
						}
						});				
				},
		happenTimeFun(num){//时间戳数据处理
		
		let date = new Date(num);
		
		//时间戳为10位需*1000，时间戳为13位的话不需乘1000
		
		        let y = date.getFullYear();
		
		        let MM = date.getMonth() + 1;
		
		        MM = MM < 10 ? ('0' + MM) : MM;//月补0
		
		        let d = date.getDate();
		
		        d = d < 10 ? ('0' + d) : d;//天补0
		
		        let h = date.getHours();
		
		        h = h < 10 ? ('0' + h) : h;//小时补0
		
		        let m = date.getMinutes();
		
		        m = m < 10 ? ('0' + m) : m;//分钟补0
		
		        let s = date.getSeconds();
		
		        s = s < 10 ? ('0' + s) : s;//秒补0
		
		        return y + '-' + MM + '-' + d + ' ' + h + ':' + m+ ':' + s;
		
		},	
			
			// 后续补充获取ID的方法
		async getNesDetail(){
		  const res=await this.$myRequset({
					url:'/api/article/'+this.id    //api/sada/+this.id
				})
				// 这里可以获取数据了
				console.log(this.id)
				
				this.detail=res.data
			}
		},
		
		// 这里是获取ID,页面进来就会使用,并不是固定值哦
		onLoad(options) {
		console.log(options.id)
		this.id=options.id
		getApp().globalData.notOnlyArticleId=options.id
		this.getNesDetail()	
		},
		components:{
			saHoverMenu
		}
		
	}
</script>

<style lang="scss">
	.just{
		.zai-label {
			padding: 10upx 0;
			text-align: center;
			font-size: 30upx;
			color: #a7b6d0;
		}
		.loginBtn { 
		 width: 35%; 
		 margin-top: 35px; 
		 margin-left:10px;
		 float:left;
		}
		.registerBtn { 
		 width: 35%; 
		 margin-top: 35px; 
		 margin-right:10px;
		 float:right;
		}
	.news_detail{
		font-size: 30rpx;
		padding: 0 20rpx;
		
		.title{
			text-align: center;
			width: 710rpx;
			display: block;
			margin:20rpx 0;
		}
		.info{
		display: flex;	
		justify-content: space-between;
		}
	}
	
	
	
	}

</style>
