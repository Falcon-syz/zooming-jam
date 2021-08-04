<template>
	<view>
		<view class="">
			<u-row>
				<u-col :span="3">
					<view class="" v-for="(item,index) in catList" :key="index">
						{{item.name}}
					</view>
				</u-col>
				<u-col :span="9"></u-col>
			</u-row>
		</view>
		<u-tabbar :list="tabbar" :icon-size="115"></u-tabbar>
	</view>
</template>

<script>
export default {
	data() {
		return {
			catList:[]
		};
	},
	methods: {
		async getCat() {
			try {
				const res = await this.$db.collection('categories').get();
				console.log(res.result.data);
				this.catList = res.result.data
			} catch (e) {
				console.log(e);
			}
		}
	},
	onLoad() {
		this.getCat();
	},
	computed: {
		tabbar() {
			return this.$store.state.vuex_tabbar;
		}
	}
};
</script>

<style></style>
