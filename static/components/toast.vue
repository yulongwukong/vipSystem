<template>
	<transition name="fade">
		<div class="toast" v-if="showToast">
			<slot></slot>
		</div>
	</transition>	
</template>

<script>

	import Bus from "./bus.js";

	export default{
		data(){
			return{
				showToast:false,
				timer:null
			}
		},
		mounted(){
			Bus.$on("showToast",(e)=>{
				this.showToast = e;
				clearTimeout(this.timer);
				this.timer = setTimeout(()=>{
					this.showToast = false;
				},2000)

			})
		}
	}
</script>

<style lang="less" scoped>
	.toast{
		padding: 0.2rem 0.38rem;
		background: rgba(0,0,0,0.80);
		border-radius: 0.16rem;
		font-size: 0.28rem;
		position: absolute;
		top: 50%;
		color: #fff;
		left: 50%;
		transform:translate(-50%,-50%);
	}

	.fade-enter-active,.fade-leave-active{
		transition:opacity 0.5s;
	}
	.fade-enter,.fade-leave{
		opacity:0;
	}
</style>