<template>
	<transition name="fade">
		<div class="noData" v-show="isNoData">
			<img src="./image/icon_no.png" alt="">
			<p>没有数据啦！</p>
		</div>
	</transition>
</template>

<script>

	import "./bus.js";

	export default{
		data(){
			return{
				"isNoData":false
			}
		},
		mounted(){

		}
	}
</script>

<style lang="less" scoped>
	.noData{
		width: 100%;
		overflow: hidden;
		img{
			width: 2.34rem;
			height: 2.14rem;
			display: block;
			margin: 1.5rem auto 0.2rem;
		}
		p{
			font-size: 0.28rem;
			color: #333;
			text-align: center;
		}
	}
</style>