<template>
	<view class="pics">
	<!-- 这是可以滚动的区域 -->
	<scroll-view class="left" scroll-y>
		<!-- 这部分整合API之后会变成V-FOR的格式 -->
		<!-- 有一点要说的是,实现点哪里亮哪里的逻辑 active===index?active:'' -->
		<!-- 这里还要实现一个函数,暂且不提了 -->
		
		 
		<!-- 下面是v-for例子 -->
		<!-- 相等就有这个样式,反之为空 这个函数是来让这些view具有可点击-->
		<!-- <view @click="leftClickHandle(index,item.id)" :class="active===index?'active:'' v-for="(item,index) in cates" :key="item.sss">APLMU</view> -->
		<view @click="leftClickHandle(index,item.id)" :class="active===index?'active':''" v-for="(item,index) in cates" :key="item.id">{{item.name}}
		
		
		</view>
	</scroll-view>
	<!-- 为什么不会渲染到右边 -->
	<scroll-view class="right" scroll-y>
	<!-- view clall=item v-for="item in seconddata" :key="item.id"-->	
	<view class="item"> 
	<!-- :src item.imageurl -->
		<image :src='detail.titleImage'></image>
		<!-- 点击图片实先预览功能 -->
		<!-- priviewImg(item.img_url) -->
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
	</view>	
   

   
   
	<!-- 没有数据显示这个,比如第一项 -->
	<text v-if="secondData.length===0">暂无数据</text>
	</scroll-view>
	</view>
	
</template>

<script>
	export default { 
		data() {
			return {
				detail:{},
          cates:[
			  { id:0, name:'文章列表' },
			  { id:1, name:'吉他学习' },
			  { id:2, name:'名篇乐谱' },
			  { id:3, name:'教学交流群' },
			  { id:4, name:'近期活动' },
			  { id:5, name:'未来计划' },			 
		  ],
		  // 点哪里亮哪里
		  active:0,
		secondData:[]		
			}
		},
		methods: {
			
			
		// async getNesDetail(){
		//   const res=await this.$myRequset({
		// 			url:'/api/article/'+this.id    //api/sada/+this.id
		// 		})
		// 		// 这里可以获取数据了
				
		// 		this.detail=res.data
		// 	}	
			
			// 获取具体图片的
		// async getPicsCate(){
		// const res =await this.$myRequset({
		// 		url:''
		// 	})
		// this.cates=res.data.message
		
		// 表示第一格高亮,获取它的数据,数组第零项ID
		//this.leftClickHandle(0,this.cates[0].id)
		// console.log(res)	
		// }	
		
		// 点击函数
	  	async leftClickHandle(index,id){
			this.active=index
			console.log(id)
			console.log('+++++++++++++++')
			console.log('+++++++++++++++')
			console.log('+++++++++++++++')
			// 	//下面就是获取右侧的数据了
			const res= await this.$myRequset({
					url:'/api/article/'+6
				})
				console.log(res)
			// this.secondData=res.data.message	
			 	this.detail=res.data
			},
			
			
		previewImg(current){
			// 官方组件功能
		const urls=this.secondData.map(item=>{
			return item.img_url
		})
		uni.previewImage({
			current,
			urls
		})
		// },
	}
	},
	 onLoad() {
		// 调用这个方法
		this.leftClickHandle()
	// 	this.getPicsCate()
	 }
		 }
</script>

<style lang="scss">
	page{
		height: 100%;
		}
		.pics{
			height: 100%;
		// 解决上面的数据不再一行问题只需加如下代码,左侧和右侧会在一排显示
		display: flex;
		.left{
			width: 200rpx;
			height: 100%;
			border-right: solid #F0F8FF;
			view{
			height: 60px;	
			line-height: 60px;
			// 文字颜色
			color: #333;
			// 文字居中
			text-align: center;
			font-size: 30rpx;
			// 边框:拉动条那里
			border: 1px solid #F0F8FF;
			}	
		.active{
			// 被选中边框的
			background:	#C0C0C0;
		}		
		}
		.right{
			height: 100%; 
			width:520rpx;
			//上下左右
			margin: 10rpx auto;
			.item{
				image{
					width: 520rpx;
					height: 520rpx;
					border-radius: 5px;
				}
				text{
					font-size: 30rpx;
					// 行高
					line-height: 60rpx;
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
		}
	}


</style>
