<template>
	<view>
		<view style="margin: 16px">默认</view>
		<i-card title="卡片标题" extra="额外内容" thumb="https://i.loli.net/2017/08/21/599a521472424.jpg">
			<view slot="content">内容不错</view>
			<view slot="footer">尾部内容</view>
		</i-card>

		<view style="margin: 16px">通栏</view>
		<i-card full title="卡片标题" extra="额外内容" thumb="https://i.loli.net/2017/08/21/599a521472424.jpg">
			<view slot="content">内容不错</view>
			<view slot="footer">尾部内容</view>
		</i-card>

		<view style="margin: 16px">自定义图片样式</view>
		<i-card full title="卡片标题" extra="额实打实外内容" thumb="https://i.loli.net/2017/08/21/599a521472424.jpg" i-class="card-demo">
			<view slot="content">内容不尾部内容尾部内容尾部内容尾部内容尾部内容尾部内容尾部内容错</view>
			<view slot="footer">尾部内容as尾部内容as尾部内容尾部内容尾部内容尾部内容尾部内容尾部内容尾部内容尾部内容as尾部内容as</view>
		</i-card>

	</view>
</template>

<script>
	import iCard from '@/components/iview/card.vue';
	export default {
		data() {
			return {

			};
		},
		components: {
			iCard
		}
	}
</script>

<style>

</style>
