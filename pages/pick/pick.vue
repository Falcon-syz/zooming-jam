<template>
	<view>
		<view class="">
			<view class="">
				<u-input v-model="content" type="text" :border="true" />
				<u-row>
					<u-col :span="3">
						<view class="" v-for="(item, index) in catList" :key="index">{{ item.name }}</view>
					</u-col>
					<u-col :span="9"></u-col>
				</u-row>
				<view class="">{{ error }}</view>
			</view>
			<view class="input_box" :style="'bottom:' + keyHeight + 'px;'" v-show="keyHeight">
				<view class="input-icon"><image src="../../static/pick/red.png" mode="widthFix" style="width:55rpx"></image></view>
				<view class="input-desc">REASONS WHY I LOVE U.</view>
				<view class="input-textarea">
					<u-row>
						<u-col :span="9">
							<textarea class="r-top" :adjust-position="false" placeholder-style="color:rgba(153,153,153,1);" v-model="content" :placeholder="pl" />
						</u-col>
						<u-col :span="2" :offset="1"><image src="@/static/pick/save.png" mode="widthFix" style="width: 100%;"></image></u-col>
					</u-row>
				</view>
				<view class="bottom_actions">
					<text style="font-size: 55rpx;margin-right: 10rpx;">365</text>
					<text style="font-size: 20rpx;">DAYS LATER</text>
					<u-icon name="clock" size="50" style="float:right;transform: translateY(10rpx);"></u-icon>
				</view>
			</view>
		</view>

		<u-tabbar :list="tabbar" :icon-size="115"></u-tabbar>
	</view>
</template>

<script>
export default {
	data() {
		return {
			catList: [],
			content: '',
			keyHeight: 0,
			error: '',
			pl: '我说今晚月光那么美，你说是的'
		};
	},
	methods: {
		loadFontLocal() {
			uni.loadFontFace({
				family: 'pick-font', // 这里是字体的名字
				// 本地字体路径需转换为平台绝对路径
				source: `url('https://momoko-web.oss-cn-beijing.aliyuncs.com/SigmarOne.ttf')`,
				success() {
					console.log('success');
				},
				fail(e) {
					console.log('fail');
				}
			});
		},
		async getCat() {
			try {
				const res = await this.$db.collection('categories').get();
				console.log(res.result.data);
				uni.showToast({
					title: res.result.data[0].color
				});
				this.catList = res.result.data;
			} catch (e) {
				console.log(e);
				this.error = JSON.stringify(e);
			}
		}
	},

	onLoad() {
		this.getCat();
		uni.onKeyboardHeightChange(res => {
			this.keyHeight = res.height;
		});
		this.loadFontLocal();
	},
	computed: {
		contentLength() {
			return this.content.length;
		},
		tabbar() {
			return this.$store.state.vuex_tabbar;
		}
	}
};
</script>

<style scoped lang="less">
.input_box {
	z-index: 999;
	background-color: #fff;
	position: fixed;
	bottom: 0;
	left: 0;
	width: 100%;
	box-shadow: -10rpx 0 10rpx rgba(0, 0, 0, 0.05);
	.input-icon {
		padding-left: 24rpx;
		margin-top: 10rpx;
		width: 100%;
		height: 48rpx;
	}
	.input-desc {
		color: rgb(233, 118, 113);
		font-size: 20rpx;
		padding-left: 35rpx;
		width: 100%;
		font-family: 'pick-font' !important;
	}
	.input-textarea {
		padding: 15rpx 20rpx;
		padding-bottom: 30rpx;
	}
	.bottom_actions {
		height: 75rpx;
		line-height: 75rpx;
		font-family: 'pick-font' !important;
		padding: 0 20rpx;
		background-color: rgb(233, 118, 113);
		width: 100%;
	}
}
.r-top {
	padding: 20rpx;
	background: rgb(242, 243, 245);
	border-radius: 20rpx;
	height: 100rpx;
	width: 100%;
}
</style>
