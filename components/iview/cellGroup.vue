<template>
	<view class="i-class cell-group">
		<slot></slot>
	</view>
</template>
<script>
	export default {

	}
</script>

<style lang="less" scoped="scoped">
	.cell-group /deep/ .i-cell:last-child::after {
		border: none;
	}
</style>
