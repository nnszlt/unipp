<template>
	<view class="">
		<i-panel title="一般用法"></i-panel>
		<i-button bind:click="handleClick" inline>行内按钮</i-button>
		<i-button @buttonCallBack="consoleVal" inline type="primary">点击我有回调</i-button>
		<i-button bind:click="handleClick" inline type="success">行内按钮</i-button>
<view @click="handleClick" class="">asddas </view>
		<i-button @click="handleClick">默认12按钮</i-button>
		<i-button bind:click="handleClick" type="error" long="true">联通两边按钮</i-button>
		<i-button bind:click="handleClick" type="primary">Primary</i-button>
		<i-button bind:click="handleClick" type="ghost">Ghost</i-button>
		<i-button bind:click="handleClick" type="info">Info</i-button>
		<i-button bind:click="handleClick" type="success">Success</i-button>
		<i-button bind:click="handleClick" type="warning">Warning</i-button>
		<i-button bind:click="handleClick" type="error">Error</i-button>

		<i-panel title="不同尺寸"></i-panel>

		<i-button bind:click="handleClick" type="primary" size="large">大尺寸</i-button>
		<i-button bind:click="handleClick" type="primary" size="default">默认尺寸</i-button>
		<i-button bind:click="handleClick" type="primary" size="small">小尺寸</i-button>

		<i-panel title="圆角的不同尺寸"></i-panel>

		<i-button bind:click="handleClick" type="success" shape="circle" size="large">大尺寸</i-button>
		<i-button bind:click="handleClick" type="success" shape="circle">默认尺寸</i-button>
		<i-button bind:click="handleClick" type="success" shape="circle" size="small">小尺寸</i-button>

		<i-button bind:click="handleClick" type="primary" loading="true">加载中按钮</i-button>

		<i-button @buttonCallBack="consoleVal" bind:click="handleClick" type="primary" disabled>禁用按钮</i-button>
	</view>
</template>

<script>
	import iPanel from '@/components/iview/panel.vue';
	import iButton from '@/components/iview/button.vue';
	export default {
		data() {
			return {

			};
		},
		methods: {

			consoleVal: function(val) {
				console.log(val)
			},
			handleClick(e){
				console.log("zltttt")
			}
		},

		components: {
			iButton,
			iPanel
		}
	}
</script>

<style>
	.page {
		background: #f9f9f9;
	}
</style>
