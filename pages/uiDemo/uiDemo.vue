<template>
	<div class="page">
		<i-panel title="布局"></i-panel>
		<i-group>
			<i-cell title="Layout 栅格布局" is-link="true" url="./layout/layout"></i-cell>
			<i-cell title="Panel 面板" is-link="true" url="./panel/panel"></i-cell>
			<i-cell title="List 列表" is-link="true" url="./list/list"></i-cell>
			<i-cell title="Card 卡片" is-link="true" url="./card/card"></i-cell>
		</i-group>

		<i-panel title="基础组件">
			<i-cell title="Button 按钮" is-link="true" url="./button/button"></i-cell>
			<i-cell title="Icon 图标" is-link="true" url="./icon/icon"></i-cell>
			<i-cell title="Badge 徽章" is-link="true" url="./badge/badge"></i-cell>
			<i-cell title="Progress 进度条" is-link="true" url="./progress/progress"></i-cell>
			<i-cell title="Avatar 头像" is-link="true" url="/pages/avatar/index"></i-cell>
			<i-cell title="CountDown 倒计时" is-link="true" url="/pages/count-down/index"></i-cell>
			<i-cell title="Divider 分隔符" is-link="true" url="/pages/divider/index"></i-cell>
			<i-cell title="Collapse 折叠面板" is-link="true" url="/pages/collapse/index"></i-cell>
			<i-cell title="LoadMore 页底提示" is-link="true" url="/pages/load-more/index"></i-cell>
		</i-panel>
		

	</div>
</template>

<script>
	import iPanel from '@/components/iview/panel.vue';
	import iGroup from '@/components/iview/cellGroup.vue';
	import iCell from '@/components/iview/cell.vue';
	export default {
		data() {
			return {

			};
		},
		components: {
			iCell,
			iGroup,
			iPanel
		}
	}
</script>

<style>
	.page {
		background: #f9f9f9;
	}
</style>
