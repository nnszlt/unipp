<template>
	<view>
		<!-- 状态栏 -->
		<view class="status" :style="{position:headerPosition}"></view>
		<!-- 漂浮头部 -->
		<view class="header" :style="{position:headerPosition}">
			<view class="scan">
				<view class="icon scan" @tap="scan"></view>
			</view>
			<view class="input">
				<view class="icon search"></view>
				<input disabled="disabled" placeholder="睫毛膏" @tap="toSearch()" />
			</view>
			<navigator url="../me/index/index" open-type="switchTab">
			<view class="menu">
				<image mode="widthFix" src="../../static/HM-shophome/face.png"></image>
			</view>
			</navigator>
		</view>
		<!-- 占位 -->
		<view class="place"></view>
		<!-- 轮播图 -->
		<view class="swiper-view">
			<swiper class="swiper" indicator-dots="true" autoplay="true" circular="true" indicator-active-color="#ffffff">
				<swiper-item v-for="swiper in swiperList" :key="swiper.sid" @tap="toSwiper(swiper)">
					<image mode="aspectFill" :src="swiper.img"></image>
				</swiper-item>
			</swiper>
			<view class="keep-out"></view>
		</view>
		
		<!-- 分类轮播 -->
		<view class="category">
			<view class="box">
				<swiper class="swiper" duration="300" :style="{ height: categoryHeight }" @change="categoryChange">
					<swiper-item v-for="(page, pageindex) in categoryList" :key="pageindex">
						<view class="category-list">
							<view class="icon" v-for="category in page" :key="category.cat_id" @tap="toCategory(category)">
								<image mode="widthFix" :src="category.img" @load="categoryImgLoad"></image>
								<view>{{ category.title }}</view>
							</view>
						</view>
					</swiper-item>
				</swiper>
				<view class="dots">
					<view v-for="(page, pageindex) in categoryList" :key="pageindex" :class="{ active: pageindex == currentPageindex }"></view>
				</view>
			</view>
		</view>
		<!-- 推荐商品 -->
		<view class="pick">
			<view class="box">
				<view class="title">
					<view class="big">推荐商品</view>
					<view class="small">好货推荐 低价精选</view>
				</view>
				<view class="product-list">
					<view v-for="product in pickList" :key="product.goods_id" @tap="toPick(product)">
						<image mode="widthFix" :src="product.img"></image>
						<view class="price">{{product.price}}</view>
						<view class="slogan">{{product.slogan}}</view>
					</view>
				</view>
			</view>
		</view>
		<!-- 广告横幅 -->
		<view class="banner">
			<image mode="widthFix" src="../../static/HM-shophome/banner.jpg"></image>
		</view>
		<!-- 商品列表 -->
		<view class="goods-list">
			<view class="title">— 猜你喜欢 —</view>
			<waterfall-flow :list="list"></waterfall-flow>
			<view class="loading-text">{{loadingText}}</view>
		</view>
		
	</view>
</template>
<script>
	import WaterfallFlow from '@/components/all/waterfall-flow.vue';
	export default {
		data() {
			return {
				isload: true,
				pageNum: 1,
				list: [], // 列表
				//轮播
				swiperList: [{
						sid: 0,
						src: '自定义src0',
						img: '../../static/HM-shophome/swiper-img/0.jpg'
					},
					{
						sid: 1,
						src: '自定义src1',
						img: '../../static/HM-shophome/swiper-img/1.jpg'
					},
					{
						sid: 2,
						src: '自定义src2',
						img: '../../static/HM-shophome/swiper-img/2.jpg'
					},
					{
						sid: 3,
						src: '自定义src3',
						img: '../../static/HM-shophome/swiper-img/3.jpg'
					}
				],
				//分类
				categoryList: [
					[ //第一页
						{
							cat_id: 0,
							img: 'https://user-gold-cdn.xitu.io/2019/2/25/16922d6d22ff1458?w=1950&h=2730&f=png&s=1115662',
							title: 'WebGL'
						},
						{
							cat_id: 1,
							img: 'https://user-gold-cdn.xitu.io/2019/2/27/1692d9b999203c38?w=1300&h=1820&f=png&s=2121517',
							title: 'MySql'
						}, {
							cat_id: 2,
							img: 'https://user-gold-cdn.xitu.io/2019/2/25/16922d6d22ff1458?w=1950&h=2730&f=png&s=1115662',
							title: 'WebGL'
						},
						{
							cat_id: 3,
							img: 'https://user-gold-cdn.xitu.io/2019/2/27/1692d9b999203c38?w=1300&h=1820&f=png&s=2121517',
							title: 'MySql'
						}, {
							cat_id: 4,
							img: 'https://user-gold-cdn.xitu.io/2019/2/25/16922d6d22ff1458?w=1950&h=2730&f=png&s=1115662',
							title: 'WebGL'
						},
						{
							cat_id: 5,
							img: 'https://user-gold-cdn.xitu.io/2019/2/27/1692d9b999203c38?w=1300&h=1820&f=png&s=2121517',
							title: 'MySql'
						}, {
							cat_id: 6,
							img: 'https://user-gold-cdn.xitu.io/2019/2/25/16922d6d22ff1458?w=1950&h=2730&f=png&s=1115662',
							title: 'WebGL'
						},
						{
							cat_id: 7,
							img: 'https://user-gold-cdn.xitu.io/2019/2/27/1692d9b999203c38?w=1300&h=1820&f=png&s=2121517',
							title: 'MySql'
						}, {
							cat_id: 8,
							img: 'https://user-gold-cdn.xitu.io/2019/2/25/16922d6d22ff1458?w=1950&h=2730&f=png&s=1115662',
							title: 'WebGL'
						},
						{
							cat_id: 9,
							img: 'https://user-gold-cdn.xitu.io/2019/2/27/1692d9b999203c38?w=1300&h=1820&f=png&s=2121517',
							title: 'MySql'
						},

					],
					[ //第二页
						{
							cat_id: 10,
							img: 'https://user-gold-cdn.xitu.io/2019/2/25/16922d6d22ff1458?w=1950&h=2730&f=png&s=1115662',
							title: 'WebGL'
						},
						{
							cat_id: 11,
							img: 'https://user-gold-cdn.xitu.io/2019/2/27/1692d9b999203c38?w=1300&h=1820&f=png&s=2121517',
							title: 'MySql'
						}
					]
				],
				//推荐商品 3个
				pickList: [{
						goods_id: 0,
						img: '../../static/HM-shophome/pick-img/p1.jpg',
						price: '￥168',
						slogan: '限时抢购'
					},
					{
						goods_id: 1,
						img: '../../static/HM-shophome/pick-img/p2.jpg',
						price: '￥168',
						slogan: '精选商品'
					},
					{
						goods_id: 2,
						img: '../../static/HM-shophome/pick-img/p3.jpg',
						price: '￥168',
						slogan: '今日疯抢'
					}
				],
				categoryHeight: '150px',
				currentPageindex: 0,
				headerPosition: "fixed",
				loadingText: "正在加载..."

			};
		},
		onReady() {
			this.getList();
		},
		onPageScroll(e) {
			//兼容iOS端下拉时顶部漂移
			if (e.scrollTop >= 0) {
				this.headerPosition = "fixed";
			} else {
				this.headerPosition = "absolute";
			}
		},
		//下拉刷新，需要自己在page.json文件中配置开启页面下拉刷新 "enablePullDownRefresh": true
		onPullDownRefresh() {
			setTimeout(function() {
				uni.stopPullDownRefresh();
			}, 1000);
		},
		//上拉加载，需要自己在page.json文件中配置"onReachBottomDistance"
		onReachBottom() {
			if (this.isload == false) {
				this.pageNum++;
				this.getList();
			}
		},
		onLoad() {},
		methods: {

			getList() {
				uni.showLoading({
					title: '加载中'
				});
				uni.request({
					url: "https://xiaoce-timeline-api-ms.juejin.im/v1/getListByLastTime",
					"method": "GET",
					"data": {
						pageNum: this.pageNum
					},
					success: (res) => {
						if (res.data.d.length != 0) {
							this.list = this.list.concat(res.data.d)
							this.isload = false
						} else {
							this.isload = true
						}
						uni.hideLoading()
					}
				})
			},

			//扫一扫
			scan() {
				uni.scanCode({
					success: (res) => {
						uni.showToast({
							title: '条码内容：' + res.result
						});
					}
				});
			},
			//搜索跳转
			toSearch() {
				uni.navigateTo({
					url:"../search/search"
				})
			},
			//轮播图跳转
			toSwiper(e) {
				uni.showToast({
					title: e.src
				});
			},
			//分类跳转
			toCategory(e) {
				uni.showToast({
					title: e.title
				});
			},
			//推荐商品跳转
			toPick(e) {
				uni.showToast({
					title: '推荐商品' + e.goods_id
				});
			},
			//商品跳转
			toGoods(e) {
				uni.showToast({
					title: '商品' + e.goods_id
				});
			},
			//更新分类指示器
			categoryChange(event) {
				this.currentPageindex = event.detail.current;
			},
			//分类图片加载完毕
			categoryImgLoad(e) {
				this.categoryImg = this.categoryImg ? this.categoryImg + 1 : 1;
				//完成加载11个分类图片开始计算分类高度，若分类图片不足10个则修改此处的10。
				if (this.categoryImg == 10) {
					this.getCategoryHeight();
				}
			},
			//更新分类高度
			getCategoryHeight() {
				let view = uni.createSelectorQuery().select('.category-list');
				view.fields({
						size: true
					},
					data => {
						this.categoryHeight = data.height + 'px';
					}
				).exec();
			}
		},
		components: {
			WaterfallFlow
		}
	};
</script>
<style lang="less">
	@font-face {
		font-family: "HMfont-home";
		src: url('data:application/x-font-woff2;charset=utf-8;base64,d09GMgABAAAAAAP8AAsAAAAACFwAAAOwAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHEIGVgCDHAqEEINSATYCJAMQCwoABCAFhG0HTxtLBxHVmzvJfhS4scOeC1v4zNNRK/hO5b0IHqg/8838ye5XsIDanmAkhZ1NSZygm4SsbYYkp17ICsOUxIP/ZZm9xejtQAD8zzX10geY387mEtXapUd7A5xF6oAi2pJoE8YNY1dexGkIwCSZQoiq1es2RUdhTBKA6N2jWwf0lAlVky3QEYSUrFSIOTjQ5VR5GZjt/168obDQQeLQMGY27FqtMxWf5z5fpgWCgdYugng8B8DWgQYUAhSI7qWujmhhqBAaptJfURzQ0ZEwVkfB58uCQSTZi0o3//JAItBAhGBk2gAURUrtxMQ2BQnPC1IQ8HyZmpvE1XgdMIDtwHVEJt4qkThsZwFPVHiEFTHKtWBBYGGUe/HmsZu6TluCStw+fXGMY9GyUb4b133Xrze9etV77VqzxcuXbYq8bF6/7rtxo5lY6A1cLcuCQJS3oXHswOYKUSaI71xkXr3ayZy2SIix0YumRS6AwEnLmr58WS9z2pKlYcJCCGzcXOU81Xuhp1osIWbBiUQWehda7lTvaNeCJX0WbYgksMA0hdlLo6zDp1PEomIdVu7YE4wN7nH7uGPdHXz2R3uHnX68tcP6SPE5ZSdObNpN/9dybtfmr6tHoy6+rN+DqdvnW9lUbkHTdcUWfKp1yzVr5Ag5HCqGU0Hca3jpAt2GiWFRwxYvdpYFo2b3tN/HvLeFd+BAr5Bu7CXnzKFlJb8dtP3ucx1djc+589Pep+W7X706stfvml+7i8fsWunxp7/f/uzsrgzj9Sv3p+6T7yqwvrfdy3nk/J6eZ84fnHp2lSvf/m/7H7569dDvuY/fTX+Mwdog+QVAGyB/IHmGyK8/exQrX13Maucu+y23rrbi5tQ1T3yTor3oj4kV8a8VtyxSqtQwKyXLbJF2kaI5DgAkYGICPzQG4dwfQxPVOhMEOlExSEJJAg2dTFSRhcCBRVEIQacCmBSkxnqLCAaiIZQBFGAiAIGH3SBxcRo0PFxBFXkPHETzDkLwCA1MfCJiR4tswStWxeEccIPlAbXSxS1rYEH2G0U8ZpeU+sw/Oq+80JR1NjrghW6MOT6JNgQO3NEJPTgPj4PAONK4hlKGYLqq4mVvKlc6M0YVh3PADZYH1EoXd8sHlvv+G0U8ZldDq/D+0XnVPTRl3QIdVFcr2rX090m0IXA8jjs6oYcOPMwQgSkfpnENpewRMF2FSvG2qnJ+zfmE6wATY6YSUmhCCQehg9V8advwun0+nHuJ0VP0kYrcz/Qox5hl') format('woff2');
	}

	/* #ifdef H5 */
	uni-page-head {
		display: none;
	}

	/* #endif */
	.icon {
		font-family: "HMfont-home" !important;
		font-size: 60upx;
		font-style: normal;
		color: #ffffff;

		&.scan {
			&:before {
				content: "\e69a";
			}
		}

		&.menu {
			&:before {
				content: "\e62b";
			}
		}

		&.search {
			&:before {
				content: "\e628";
			}
		}
	}

	page {
		background-color: #fff;
	}

	.status {
		width: 100%;
		height: 0;
		/*  #ifdef  APP-PLUS  */
		height: var(--status-bar-height);
		/*  #endif  */
		background-color: #ff570a;
		position: fixed;
		top: 0;
		z-index: 999;
	}

	.header {
		width: 100%;
		height: 100upx;
		background-color: #ff570a;
		display: flex;
		position: fixed;
		top: 0;
		/*  #ifdef  APP-PLUS  */
		top: var(--status-bar-height);
		/*  #endif  */

		z-index: 996;

		.scan {
			width: 100upx;
			height: 100upx;
			flex-shrink: 1;
			display: flex;
			justify-content: center;
			align-items: center;
		}

		.input {
			width: calc(100% - 200upx);
			display: flex;
			justify-content: center;
			align-items: center;
			position: relative;

			input {
				width: calc(100% - 60upx);
				height: 60upx;
				background-color: #ffffff;
				border-radius: 60upx;
				padding-left: 60upx;
				font-size: 30upx;

			}

			.icon {
				width: 60upx;
				height: 60upx;
				position: absolute;
				color: #a18090;
				z-index: 996;
				top: 20upx;
				left: 0;
				font-size: 40upx;
				display: flex;
				justify-content: center;
				align-items: center;
			}
		}

		.menu {
			width: 100upx;
			height: 100upx;
			flex-shrink: 1;
			display: flex;
			justify-content: center;
			align-items: center;

			image {
				width: 60upx;
				height: 60upx;
				border-radius: 60upx;
			}
		}
	}

	.place {
		/*  #ifdef  APP-PLUS  */
		margin-top: var(--status-bar-height);
		/*  #endif  */
		background-color: #ff570a;
		height: 100upx;
	}

	.swiper-view {
		.swiper {
			width: 100%;
			height: 280upx;

			image {
				width: 100%;
				height: 280upx;
			}
		}

		.keep-out {
			width: 100%;
			height: 30upx;
			border-radius: 100% 100% 0 0;
			background-color: #ff570a;
			margin-top: -15upx;
			position: absolute;
		}
	}

	.category {
		width: 95%;
		padding: 2.5vw 2.5vw;
		background-color: #ff570a;

		.box {
			width: 100%;
			border-radius: 20upx;
			background-color: #ffffff;

			.dots {
				display: flex;
				justify-content: center;
				height: 15upx;
				width: 100%;

				view {
					width: 30upx;
					height: 5upx;
					background-color: rgba(0, 0, 0, 0.2);

					&.active {
						background-color: #ff570a;
					}
				}
			}

			.swiper {
				width: 100%;
				padding: 10upx 0;

				.uni-swiper-dot {
					width: 20upx;
				}

				.category-list {
					width: 100%;
					height: auto;
					display: flex;
					justify-content: flex-start;
					padding: 10upx 0;
					flex-flow: wrap;

					.icon {
						width: 20%;
						display: flex;
						flex-flow: wrap;
						justify-content: center;
						font-size: 22upx;
						color: #666;

						image {
							width: 70%;
							height: 13.3vw;
						}

						view {
							width: 100%;
							display: flex;
							justify-content: center;
						}
					}
				}
			}
		}
	}

	.pick {
		width: 95%;
		padding: 0 2.5vw 2.5vw 2.5vw;
		background: linear-gradient(to bottom, #ff570a 0%, #ffffff 105%);

		.box {
			width: 100%;
			border-radius: 20upx;
			background-color: #ffffff;

			.title {
				display: flex;
				justify-content: flex-start;
				align-items: flex-end;
				height: 60upx;
				border-bottom: solid 1upx #eee;
				padding-bottom: 10upx;

				.big {
					font-size: 34upx;
					padding-left: 20upx;
					color: #46434f;
				}

				.small {
					font-size: 24upx;
					padding-left: 20upx;
					color: #827f8b;
				}
			}

			.product-list {
				padding: 15upx 20upx 15upx 20upx;
				column-count: 2;
				column-width: 50%;
				column-gap: 10upx;

				>view {
					display: flex;
					background-color: #f8f8f8;
					position: relative;

					&:nth-child(1) {
						.price {
							color: #e65339;
							font-size: 30upx;
							position: absolute;
							bottom: 8upx;
							left: 8upx;
						}

						.slogan {
							color: #807c87;
							font-size: 30upx;
							position: absolute;
							bottom: 8upx;
							right: 8upx;
						}

						image {
							width: 100%;
							height: 0;
						}
					}

					&:nth-child(2),
					&:nth-child(3) {
						image {
							width: calc(50% - 5upx);
							height: 0;
						}

						.price {
							position: absolute;
							top: 25%;
							left: 55%;
							color: #e65339;
							font-size: 30upx;
						}

						.slogan {
							position: absolute;
							top: 60%;
							left: 55%;
							color: #807c87;
							font-size: 20upx;
						}
					}

					&:nth-child(2) {
						margin-bottom: 10upx;
					}
				}
			}
		}
	}

	.banner {
		image {
			width: 100%;
		}
	}

	.goods-list {
		background-color: #f4f4f4;

		.title {
			width: 100%;
			display: flex;
			justify-content: center;
			align-items: center;
			height: 60upx;
			color: #979797;
			font-size: 24upx;
		}

		.loading-text {
			width: 100%;
			display: flex;
			justify-content: center;
			align-items: center;
			height: 60upx;
			color: #979797;
			font-size: 24upx;
		}

		.product-list {
			width: 95%;
			padding: 0 2.5% 2.5vw 2.5%;
			display: flex;
			justify-content: space-between;
			flex-wrap: wrap;

			.product {
				width: 48.75%;
				border-radius: 20upx;
				background-color: #fff;
				margin: 0 0 15upx 0;

				image {
					width: 100%;
					border-radius: 20upx 20upx 0 0;
				}

				.name {
					width: 92%;
					padding: 10upx 4%;
					display: -webkit-box;
					-webkit-box-orient: vertical;
					-webkit-line-clamp: 2;
					text-align: justify;
					overflow: hidden;
					font-size: 30upx;
				}

				.info {
					display: flex;
					justify-content: space-between;
					align-items: flex-end;
					width: 92%;
					padding: 10upx 4% 10upx 4%;

					.price {
						color: #e65339;
						font-size: 30upx;
						font-weight: 600;
					}

					.slogan {
						color: #807c87;
						font-size: 24upx;
					}
				}
			}

		}
	}
</style>
