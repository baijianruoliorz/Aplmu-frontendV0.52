<template>
	<!-- 要有根组件哦 -->
	<view>
		<!-- 函数47 -->
		<!-- <view @click="navigator(item.id)" class="new_item" v-for="item in list" :key="item.id"></view> -->
		<!-- 跳转之后,我们想获得ID来跳转到具体页面 --> 
  <view class="new_item" @click="navigator(item.id)" v-for="item in list" :key='item.id'>
  
   <image :src='item.titleImage'></image>	
  <view class="right">
  	<view class="tit">
  		<!-- 标题 -->
  		{{item.title}}
  	</view>
  	<view class="info">
  		<text>发表时间:{{happenTimeFun(item.createdTimeStamp)}}</text>
  		<text>浏览次数:{{item.pageView}}</text>
  	</view>
  </view>
  	
  </view>
	 </view>
</template>

<script>
	export default{
		// 通过list接受外界传来的数据
		props:['list'],
		// v-for list,不能叫其他名字
		
		// 过滤时间的函数
		filters:{
			formDate(date){
				console.log(date)
				const ndate=new Date(date)
				// 获取年月日
				// 不满足两位加0
				const year=ndate.getFullYear()
				const month=ndate.getMonth().toString().padStart(2,0)
				const day=ndate.getDay().toString().padStart(2,0)
				
				return year+'-'+month+'-'+day
			// 用法 发表时间{{item.time|formDate}}
			}
		},
		methods:{
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
			//        id
			navigator(id){
				// 调用父组件goDetail (news.vue) ,这里父组件要定义相应方法
				this.$emit('itemClick',id)
				// this.$emit('itemClick',id) 触发这个事件的同时,传入ID参数,在父组件使用时,直接接受
			}
		}
	}
</script>

<style lang="scss">
	.new_item{
		display: flex;
		padding: 10rpx 20rpx;
		border-bottom: 1px solid #F0F8FF;
		image{
			min-width: 200rpx;
			max-width: 200rpx;
			height: 150rpx;				
		}
		
		.right{
			margin-left: 15rpx;
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			.tit{
				font-size:30rpx;
			}
		.info{
			font-size: 24rpx;
			text:nth-child(2){
				margin-left: 30rpx;
			}
		}	
		}
	}
</style>
