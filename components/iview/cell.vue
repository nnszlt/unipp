<template>
	<view @tap="handleTap" :class="['i-class',' i-cell', isLink=='true' ? 'i-cell-access' : '',iClass ]">
		<view class="i-cell-icon">
			<slot name="icon"></slot>
		</view>
		<view class="i-cell-bd">
			<view v-if="title" class="i-cell-text">{{ title }}</view>
			<view v-if="label" class="i-cell-desc">{{ label }}</view>
			<slot></slot>
		</view>
		<view catchtap="navigateTo" class="i-cell-ft">
			<block v-if="value">{{ value }}</block>
			<block v-else>
				<slot name="footer"></slot>
			</block>
		</view>
	</view>
</template>

<script>
	import tool from "@/utils/tool.js"
	export default {
		props: {
			iClass: {
				default: ""
			},
			// 左侧标题
			title: {
				type: String
			},
			// 标题下方的描述信息
			label: {
				type: String
			},
			// 右侧内容
			value: {
				type: String
			},
			// 只有点击 footer 区域才触发 tab 事件
			onlyTapFooter: {
				type: Boolean
			},
			// 是否展示右侧箭头并开启尝试以 url 跳转
			isLink: {
				type: null,
				value: '',
				default: false
			},
			// 链接类型，可选值为 navigateTo，redirectTo，switchTab，reLaunch
			linkType: {
				type: String,
				value: '',
				default:'navigateTo'
			},
			url: {
				type: String,
				value: ''
			}
		},
		data() {
			return {

			}
		},
		mounted: function() {},
		methods: {
			navigateTo() {
				let url = this.url;
				let linkType = this.linkType;
				console.log(linkType)
				if (tool.isNull(url)) {
					console.warn('url:为跳转地址');
					return;
				}
				
				
				uni[linkType]({
					url:url
				})
			},
			handleTap() {
				if (this.isLink) {
					this.navigateTo();
				}
			},

			updateIsLastCell(isLastCell) {
				this.isLastCell = isLastCell;
			}
		}
	}
</script>

<style lang="css" scoped="scoped">
	.i-cell {
		position: relative;
		padding: 12px 15px;
		display: flex;
		background: #fff;
		align-items: center;
		line-height: 1.4;
		font-size: 14px;
		overflow: hidden
	}

	.i-cell::after {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		width: 200%;
		height: 200%;
		transform: scale(.5);
		transform-origin: 0 0;
		pointer-events: none;
		box-sizing: border-box;
		border: 0 solid #e9eaec;
		border-bottom-width: 1px;
		left: 15px;
		right: 0
	}

	.i-cell-last::after {
		display: none
	}

	.i-cell-icon {
		margin-right: 5px
	}

	.i-cell-icon:empty {
		display: none
	}

	.i-cell-bd {
		flex: 1
	}

	.i-cell-text {
		line-height: 24px;
		font-size: 14px
	}

	.i-cell-desc {
		line-height: 1.2;
		font-size: 12px;
		color: #80848f
	}

	.i-cell-ft {
		position: relative;
		text-align: right;
		color: #495060
	}

	.i-cell-access .i-cell-ft {
		padding-right: 13px
	}

	.i-cell-access .i-cell-ft::after {
		content: " ";
		display: inline-block;
		width: 6px;
		height: 6px;
		position: absolute;
		top: 50%;
		right: 2px;
		border-width: 2px 2px 0 0;
		border-color: #dddee1;
		border-style: solid;
		transform: translateY(-50%) matrix(.71, .71, -.71, .71, 0, 0)
	}
</style>
