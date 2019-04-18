<template>
	<view class="page">
		<i-panel class="cell-panel-demo">
			<i-cell title="单行列表"></i-cell>
		</i-panel>

		<i-panel class="cell-panel-demo">
			<i-cell title="单行列表" is-link="true" value="详细信息"></i-cell>
		</i-panel>

		<i-panel class="cell-panel-demo">
			<i-cell title="单行列表" label="附加描述" value="详细信息"></i-cell>
		</i-panel>

		<i-panel class="cell-panel-demo" title="带 icon 的 Cell">
			<i-cell title="单行列表" value="详细信息">
				
				<i-icon type="accessory" slot="icon"  size="28" color="#80848f"></i-icon>
			</i-cell>
		</i-panel>

		<i-panel class="cell-panel-demo" title="带箭头的 cell">
			<i-cell title="只显示箭头" is-link="true"></i-cell>
		</i-panel>

		<i-panel class="cell-panel-demo">
			<i-cell title="跳转到首页" is-link="true" url="/pages/index/index"></i-cell>
		</i-panel>

		<i-panel class="cell-panel-demo" title="cell 组">
			<cell-group>
				<i-cell title="只显示箭头" is-link="true"></i-cell>
				<i-cell title="跳转到首页" is-link="true" url="/pages/index/index"></i-cell>
				<block v-if="true">
					<i-cell title="单行列表" label="附加描述" value="详细信息"></i-cell>
					<i-cell title="表单">
						<input slot="footer" type="digit" placeholder="带小数点的数字键盘" />
					</i-cell>
				</block>

			</cell-group>
		</i-panel>

		<i-panel class="cell-panel-demo">
			<i-cell title="单行列表" label="附加描述" value="详细信息"></i-cell>
		</i-panel>

	</view>
</template>

<script>
	import iIcon from '@/components/iview/icon.vue';
	import iPanel from '@/components/iview/panel.vue';
	import cellGroup from '@/components/iview/cellGroup.vue';
	import iCell from '@/components/iview/cell.vue';
	export default {
		data() {
			return {

			};
		},
		components: {
			iCell,
			cellGroup,
			iPanel,iIcon
		}
	}
</script>

<style lang="less" scoped="scoped">
	.page {
		    overflow: hidden;
	}

	.cell-panel-demo {
		display: block;
		margin-top: 15px;
	}
</style>
