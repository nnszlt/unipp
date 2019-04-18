<template>
		<view :class="['i-class','i-row',iClass]"><slot></slot></view>
</template>

<script>
	export default{
		props: {
			iClass: {
				
				default: ""
			},
		},
		
	}
</script>

<style lang="css" scoped="scoped">
	.i-row:after{content:"";display:table;clear:both}
</style>
