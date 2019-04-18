<template>
	<view class="container">
		<view class="demo">
			<i-badge dot="true">
				<view class="demo-badge"></view>
			</i-badge>
		</view>
		<view class="demo">
			<i-badge count="3">
				<view class="demo-badge"></view>
			</i-badge>
		</view>
		<view class="demo">
			<i-badge count="123" overflow-count="100">
				<view class="demo-badge"></view>
			</i-badge>
		</view>
		<view class="demo">
			<i-badge count="66">
			</i-badge>
		</view>
		<view class="demo">
			<i-badge count="66" iClass="demo-badge-alone">
			</i-badge>
		</view>
	</view>

</template>

<script>
	import iBadge  from '@/components/iview/badge.vue';
	export default {
		data() {
			return {

			};
		},components: {
			
			iBadge
		}
	}
</script>

<style lang="less" scoped="scoped">
		@deep: /deep/;
	.container {
		margin: 10px;
	}

	.demo {
		margin: 20px;
	}

	.demo-badge {
		width: 42px;
		height: 42px;
		background: #eee;
		border-radius: 6px;
		display: inline-block;
	}

	@{deep} .demo-badge-alone {
		background: #5cb85c !important;
	}
</style>
