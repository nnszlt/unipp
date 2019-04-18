<template>
	<view>
		<view class="progress-item">
			<i-progress percent="25"></i-progress>
			<i-progress percent="45" status="active"></i-progress>
			<i-progress percent="65" status="wrong"></i-progress>
			<i-progress percent="100" status="success"></i-progress>
			<i-progress percent="25" hide-info></i-progress>
		</view>
		<view class="progress-item">
			<i-progress :percent="percent" :status="status"></i-progress>
			<i-button @tap="handleAdd" type="ghost">增加</i-button>
			<i-button @tap="handleReduce" type="ghost">减少</i-button>
		</view>
	</view>
</template>

<script>
	import iProgress from '@/components/iview/progress.vue';
	import iButton from '@/components/iview/button.vue';
	export default {
		data() {
			return {
				percent: 0,
				status: 'normal'
			};
		},
		methods: {
			handleAdd() {
				console.log(1)
				if (this.data.percent === 100) return;
				this.setData({
					percent: this.data.percent + 10
				});
				if (this.data.percent === 100) {
					this.setData({
						status: 'success'
					});
				}
			},
			handleReduce() {
				if (this.data.percent === 0) return;
				this.setData({
					percent: this.data.percent - 10,
					status: 'normal'
				});
			}
		},
		components: {
			iProgress,
			iButton
		}
	}
</script>

<style lang="less" scoped="scoped">
	.progress-item {
		padding: 12px;
	}
</style>
