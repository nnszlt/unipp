<template>
	<view>
		<i-panel title="标题" >
			<view style="padding: 15px;">头部距离为 0 12312123的 Panel头部距离为 0 12312123的 Panel头部距离为 0 12312123的 Panel头部距离为 0 12312123的
				Panel</view>
		</i-panel>

		<i-panel title="标题" hide-top>
			<view style="padding: 15px;">带有标题的 Panel</view>
		</i-panel>

		<i-panel title="标题" hide-border="true">
			<view style="padding: 15px;">无边框的 Panel</view>
		</i-panel>

	</view>
</template>

<script>
	import iPanel from '@/components/iview/panel.vue';
	export default {
		data() {
			return {
			};
		},
		components: {
			iPanel
		}
	}
</script>

<style lang="less">

</style>
