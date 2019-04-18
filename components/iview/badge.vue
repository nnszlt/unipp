<template>
	<view class="i-badge">
		<slot></slot>
		<view class="i-badge-dot" v-if="dot"></view>
		<view :class="[iClass,'i-badge-count' ,'i-class-alone']" v-else-if="count !== 0 ">{{ finalCount }}</view>
	</view>
</template>

<script>
	export default {
		props: {
			iClass:{
				default:""
			},
			count: {
				default: 0
			},
			overflowCount: {
				default: 99
			},
			dot: {
				default: false
			}
		},
		data() {
			return {
				
			}
		},
		computed:{
			finalCount:function(){
				return parseInt(this.count) >= parseInt(this.overflowCount) ? `${this.overflowCount}+` : this.count
			}
		}
	}
	
</script>

<style lang="less" scoped="">
	.i-badge {
		position: relative;
		display: inline-block;
		line-height: 1;
		vertical-align: middle
	}

	.i-badge-count {
		position: absolute;
		transform: translateX(50%);
		top: -6px;
		right: 0;
		height: 18px;
		border-radius: 9px;
		min-width: 18px;
		background: #ed3f14;
		border: 1px solid transparent;
		color: #fff;
		line-height: 18px;
		text-align: center;
		padding: 0 5px;
		font-size: 12px;
		white-space: nowrap;
		transform-origin: -10% center;
		z-index: 10;
		box-shadow: 0 0 0 1px #fff;
		box-sizing: border-box;
		text-rendering: optimizeLegibility
	}

	.i-badge-count-alone {
		top: auto;
		display: block;
		position: relative;
		transform: translateX(0)
	}

	.i-badge-dot {
		position: absolute;
		transform: translateX(-50%);
		transform-origin: 0 center;
		top: -4px;
		right: -8px;
		height: 8px;
		width: 8px;
		border-radius: 100%;
		background: #ed3f14;
		z-index: 10;
		box-shadow: 0 0 0 1px #fff
	}
</style>
