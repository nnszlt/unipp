<template>
	<view :class="['iClass', 'i-progress', progressStatus  ,hideInfo ? 'i-progress-show-info' : '' ]">
		<view class="i-progress-outer">
			<view class="i-progress-inner">
				<view class="i-progress-bg" :style="{width: width,height:height}"></view>
			</view>
		</view>
		<view class="i-progress-text" v-if=" !hideInfo ">
			<view class="i-progress-text-inner">{{ percent }}%</view>
		</view>
	</view>
</template>

<script>
	export default {
	
		props: {
			percent: {
			
				default: 0
			},
			// normal || active || wrong || success
			status: {
				
				default: 'normal'
			},
			strokeWidth: {
				
				default: 20
			},
			hideInfo: {
				
				default: false
			}
		},computed: {
			progressStatus() {
				return 'i-progress-'+ this.status;
			},
			height(){
				var px=uni.upx2px(this.strokeWidth)
				return px+"px"
			},
			width(){
				return this.percent+"%"
			}
			
		},
	}
</script>

<style lang="less" scoped="scoped">
	.i-progress {
		display: inline-block;
		width: 100%;
		font-size: 12px;
		position: relative
	}

	.i-progress-outer {
		display: inline-block;
		width: 100%;
		margin-right: 0;
		padding-right: 0;
		box-sizing: border-box
	}

	.i-progress-show-info .i-progress-outer {
		padding-right: 55px;
		margin-right: -55px
	}

	.i-progress-inner {
		display: inline-block;
		width: 100%;
		background-color: #f3f3f3;
		border-radius: 100px;
		vertical-align: middle
	}

	.i-progress-bg {
		border-radius: 100px;
		background-color: #2db7f5;
		transition: all .2s linear;
		position: relative
	}

	.i-progress-text {
		display: inline-block;
		margin-left: 5px;
		text-align: left;
		font-size: 1em;
		vertical-align: middle
	}

	.i-progress-active .i-progress-bg:before {
		content: '';
		opacity: 0;
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background: #fff;
		border-radius: 10px;
		animation: i-progress-active 2s ease-in-out infinite
	}

	.i-progress-wrong .i-progress-bg {
		background-color: #ed3f14
	}

	.i-progress-wrong .i-progress-text {
		color: #ed3f14
	}

	.i-progress-success .i-progress-bg {
		background-color: #19be6b
	}

	.i-progress-success .i-progress-text {
		color: #19be6b
	}

	@keyframes i-progress-active {
		0% {
			opacity: .3;
			width: 0
		}

		100% {
			opacity: 0;
			width: 100%
		}
	}
</style>
