<template>
	<div class="loadPage" v-show="isLoading">
		<div class="loading">
			<img src="image/icon_loading.png">
			<p>数据加载中</p>
		</div>
	</div>
</template>

<style lang="less" scoped>
	/*loading加载*/
	.loadPage{
	  width: 100%;
	  height: 100%;
	  position: fixed;
	  z-index: 99999;
	  left: 0;
	  top: 0;
	  background: rgba(0,0,0,0.5);
	  .loading{
		  width: 3.2rem;
		  padding: 0.52rem 0 0.54rem;
		  //padding-top: 0.52rem;
		  background: rgba(255,255,255,0.9);
		  position: relative;
		  left: 50%;
		  top: 50%;
		  -webkit-transform:translate(-50%,-50%);
		  border-radius: 0.15rem;
		  text-align: center;
		  img{
			  width: 1.0rem;
			  height: 1.0rem;
			  display: block;
			  margin: 0 auto;
			  -webkit-animation: loading 0.8s linear infinite;
			  animation: loading 0.8s linear infinite;
		  }
		   p{
			  color: #3D4A5B;
			  opacity: 0.9;
			  font-size: 0.28rem;
			  margin-top: 0.34rem;
			}
		}
	}

	@keyframes loading
	  {
	    from {transform: rotate(0deg);}
	    to {transform: rotate(360deg);}
	  }
	/*loading加载*/
</style>

<script>
	
	import Bus from "@/components/bus.js";
	export default{
		data(){
			return{
				isLoading:false
			}
		},
		mounted(){
			Bus.$on('isLoading', content => { 
		      	this.isLoading = content;
		    });
		}
	}
</script>