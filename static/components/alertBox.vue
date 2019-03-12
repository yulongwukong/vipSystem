<template>
	<transition name="fade">
		<div class="alertBox" ref="alertBox" v-if="visible">
			<div class="content">
				<div class="title">{{title}}</div>
				<div class="body" v-html="content"></div>
				<div class="footer">
					<a href="javascript:;" @touchstart.stop.prevent="cancelBox">{{cancelText}}</a>
					<a href="javascript:;" @touchstart.stop.prevent="comfirmSubmit">{{confirmText}}</a>
				</div>
			</div>
		</div>
	</transition>	
</template>

<style lang="less" scoped>
	.alertBox{
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: rgba(0,0,0,0.5);
		z-index: 200;
		.content{
			width:6.3-1.2rem;
			overflow: hidden;
			background: #fff;
			position: absolute;
			transform:translate(-50%,-50%);
			left: 50%;
			top: 50%;
			padding: 0.6rem;
			border-radius: 0.06rem;
			.title{
				font-size: 0.36rem;
				color: #3D4A5B;
				text-align: center;
				font-family: "PingFangSC-Semibold";
			}
			.body{
				font-size: 0.32rem;
				color: #3D4A5B;
				margin-top: 0.4rem;
				text-align: center;
			}
			.footer{
				width: 100%;
				display: flex;
				justify-content:space-between;
				margin-top: 0.6rem;
				a{
					display: block;
					width: 2.24rem;
					height: 0.8rem;
					color: #3F83FF;
					font-size: 0.32rem;
					position: relative;
					text-align: center;
					line-height: 0.8rem;
					&:first-child:after{
						content:" ";
						width: 200%;
						height: 200%;
						position: absolute;
						left: -50%;
						top: -50%;
						border: 1px solid #3F83FF;
						transform:scale(0.5,0.5);
						box-sizing: border-box;
						border-radius: 0.06rem;
					}
					&:last-child{
						background-image: linear-gradient(-214deg, #9373FF 0%, #3F83FF 100%);
						color: #fff;
						border-radius: 0.06rem;
					}
				}
			}
		}
	}
</style>

<script>

	export default{
		data(){
			return{
				title:"",
				content:"",
				cancelText:"取消",
				confirmText:"确认提交"
			}
		},
		props:{
			boxInfo:{
				type:Object
			},
			visible:Boolean,
			confirmText: {
		      type: String,
		      default: '确认提交'
		    },
		    cancelText: {
		      type: String,
		      default: '取消'
		    },
		},
		watch:{
			visible(){
				this.title = this.boxInfo.title;
				this.content = this.boxInfo.content;
				this.confirmText = this.boxInfo.confirmText;
				this.cancelText = this.boxInfo.cancelText;
			}
		},
		methods:{
			comfirmSubmit(){
				this.$emit('confirm', this);
      			this.$emit('update:visible', false)
				//document.body.addEventListener("touchmove",bodyScroll,false);
			},
			cancelBox(){
				this.$emit('cancel', this)
      			this.$emit('update:visible', false)
				document.body.removeEventListener("touchmove",bodyScroll,false);
			}
		}
	}

	function bodyScroll(event){
	    event.preventDefault();
	}

</script>