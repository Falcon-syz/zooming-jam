<template>
	<view>
		make
		<u-tabbar :list="tabbar"  :icon-size="115"></u-tabbar>
	</view>
</template>

<script>
	export default {
		data() {
			return {
			}
		},
		methods: {
			
		},
		computed:{
			tabbar(){
				return this.$store.state.vuex_tabbar
			}
		},
		onLoad() {
		}
	}
</script>

<style>

</style>
