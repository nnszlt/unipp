<script>
	export default {
		data() {
			return {}
		},
		onLaunch: function() {
			// #ifdef MP-WEIXIN
			uni.getStorage({
				key: 'code',
				success: function(res) {
					uni.switchTab({
						url: '/pages/index/index'
					});
				},
				fail: function(res) {
// 					uni.navigateTo({
// 						url:"/pages/logins/login/login"
// 					})
				}
			});
			// #endif
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */
	/* #ifdef H5 */
	uni-page-head {
		display: none;
	}
	uni-app{
		background: #f9f9f9; 	
	}
	/* #endif */
/* #ifdef MP-WEIXIN */
	page{
		background: #f9f9f9;
	}
	/* #endif */
</style>
