<!-- 
	name: 悬浮菜单
	version: v0.0.1
	update_time: 2020-6-25 
 -->
<template>
	<view>
		<!-- 遮罩 -->
		<view class="mask" v-if="show" @tap="show = false" @touchmove.stop.prevent></view>
		<!-- 按钮 -->
		<view class="major-box" :class="{show: show}" :style="{top: top }" >
			<view class="click-btn" @tap="show = !show" draggable="true" @touchmove.stop.prevent="touchmove">
				<view>快捷</view>
				<view>导航</view>
			</view>
			<view class="nav-box">
				<view class="nav-btn" v-for="(btn, index) in btnList" :key="index" @tap="clickBtn(btn)">
					<view class="nav-icon" :style="{backgroundColor: btn.bgcolor}">{{btn.icon}}</view>
					<view class="nav-text">{{btn.text}}</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			show: false ,// 是否显示
			top: '600rpx',	// 顶端距离 
			windowHeight: uni.getSystemInfoSync().windowHeight,	// 视图高度 
			btnList: [		// 所有按钮 
				{
					icon: '首',
					text: '平台首页',
					bgcolor: '#FE7A7D',
					url:'pages/index/index',
					id:0
				},
				{
					icon: '坛',
					text: '在线论坛',
					bgcolor: '#CAB493',
					url:'pages/QQgroup/QQgroup',
					id:1
				},
				{
					icon: '工',
					text: '平台工具',
					bgcolor: '#91B3B2',
					id:2
					
				},
				{
					icon: '发',
					text: '我的发布',
					bgcolor: '#959AB3',
					id:3
				},
				{
					icon: '个',
					text: '个人资料',
					bgcolor: '#73B3C7',
					id:4
				},
				{
					icon: '软',
					text: '关于软件',
					bgcolor: '#66B26A',
					id:5
				},
			]
		};
	},
	methods: {
		// 点击按钮 
		clickBtn: function(btn) {
			console.log('点击了：' + btn.text);
			if(btn.id===0){
			uni.switchTab({
				url:'../../pages/index/index'
			})
			}else if(btn.id===1){
				uni.navigateTo({
					url:"../goods-list/goods-list"
				})
			}else if(btn.id===2){
				uni.showModal({
				    title: '提示',
				    content: '该功能暂时不开放',
				    success: function (res) {
				        if (res.confirm) {
				            console.log('用户点击确定');
				        } else if (res.cancel) {
				            console.log('用户点击取消');
				        }
				    }
				});
			}else if(btn.id===3){
				uni.showModal({
				    title: '提示',
				    content: '该功能暂时不开放',
				    success: function (res) {
				        if (res.confirm) {
				            console.log('用户点击确定');
				        } else if (res.cancel) { 
				            console.log('用户点击取消');
				        }
				    }
				});
			}else if(btn.id===4){
				uni.switchTab({
					url:'../../pages/user/user'
				})
			}else{
				uni.showModal({
				    title: '版本',
				    content: 'V0.3',
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
		// 上下滑动 
		touchmove: function(e) {
			var touch = e.touches[0] || e.changedTouches[0];
			var top = touch.clientY;
			if (top < 0) {
				top = 0;
			}
			if (top > this.windowHeight - 40) {
				top = this.windowHeight - 40;
			}
			this.top = top + 'px';
			return false;
		},
	}
};
</script>

<style>
	/* 遮罩 */
	.mask {
		position: fixed;
		width: 100%;
		height: 100%;
		top: 0;
		left: 0;
		z-index: 10000;
		background: rgba(0, 0, 0, 0.4);
	}
	/* 总盒子 */
	.major-box {
		border: 1px 0 solid;
		z-index: 10001;
		position: fixed;
		width: 100%;
		/* height: 0px; */
		left: 650rpx;
		transition: left 0.5s;
		overflow: hidden;
	}
	/* 展开时 */
	.major-box.show{left: 110rpx;}
	
	.click-btn,
	.nav-box {
		float: left;
	}
	/* 按钮样式 */ 
	.nav-box{
		background-color: #FFF;
		border-radius: 0 0 0 5px;
	}
	.click-btn {
		width: 100rpx;
		background-color:#87CEFA;
		color: #fff;
		font-size: 10px;
		text-align: center;
		border-radius: 100rpx 0 0 100rpx;
		line-height: 12px;
		padding: 5px 0;
	}
	.click-btn view {
		padding-left: 15rpx;
	}

	/* 按钮盒子 */
	.nav-box {
		width: 500rpx;
		padding: 30rpx 20rpx 20rpx 20rpx;
		display: flex;
		flex-wrap: wrap;
		text-align: center;
		justify-content: center;
	}
	.nav-btn {
		flex: 1;
		border: 0px #000 solid;
		min-width: 150rpx;
		padding: 12rpx 0;
		padding-bottom: 20rpx;
	}
	.nav-icon {
		width: 80rpx;
		height: 80rpx;
		line-height: 80rpx;
		display: inline-block;
		font-size: 15px;
		border-radius: 50%;
		background-color: #666;
		color: #fff;
	}
	.nav-text {
		font-size: 12px;
		font-weight: bold;
		margin-top: 8rpx;
	}
</style>
