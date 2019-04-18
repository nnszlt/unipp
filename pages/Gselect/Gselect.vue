<template>
	<view class="app">
		<waterfall-flow :list="list"></waterfall-flow>
	</view>
</template>

<script>
	import WaterfallFlow from '@/components/all/waterfall-flow.vue';
	export default {
		data() {
			return {
				isload: true,
				pageNum: 1,
				list: [] // 列表
			}
		},
		mounted() {
			this.getList();
		},
		// 触底加载更多
		onReachBottom() {
			if (this.isload == false) {
				this.pageNum++;
				this.getList();
			}
		},
		enablePullDownRefresh(){
			console.log(1)
			
		},
		methods: {
			// 模拟数据加载
			getList() {
				uni.showLoading({
					title: '加载中'
				});
				uni.request({
					url: "https://xiaoce-timeline-api-ms.juejin.im/v1/getListByLastTime",
					"method": "GET",
					"data": {
						pageNum: this.pageNum
					},
					success: (res) => {
						if (res.data.d.length != 0) {
							this.list = this.list.concat(res.data.d)
							this.isload = false
						} else {
							this.isload = true
						}
						uni.hideLoading()
					}
				})
			}
		},
		components: {
			WaterfallFlow
		}
	}
</script>

<style>

</style>
