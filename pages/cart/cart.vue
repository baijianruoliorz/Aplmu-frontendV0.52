<template>
		
	<view>
		<mescroll-body-diy ref="mescrollRef" @init="mescrollInit" top="1" bottom="1" @down="downCallback" @up="upCallback">		
		AI相关
 <sa-hover-menu></sa-hover-menu>	
	 </mescroll-body-diy>
	</view>
</template>

<script> 
	import MescrollBodyDiy from "@/components/mescroll-diy/beibei/mescroll-body.vue";
	import MescrollMixin from "@/components/mescroll-uni/mescroll-mixins.js";
	import GoodList from "@/components/other/good-list.vue";
	import {apiGoods} from "@/api/mock.js"
	
	
	
	import saHoverMenu from '../../components/sa-hover-menu/sa-hover-menu.vue';
	export default {
	mixins: [MescrollMixin], // 使用mixin (在main.js注册全局组件)			
		data() {
			return {
				 goods:[1,2,3,4,5]
			}
		},
		 components: {
		    saHoverMenu,
			MescrollBodyDiy, // 避免与main.js注册的全局组件名称相同,否则注册组件失效(iOS真机 APP HBuilderX2.7.9)
			GoodList 
		  },
		methods: {
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
			
			
		}
	}
</script>

<style>

</style>
