<template>
	<transition name="fade">
		<div class="alertBox" ref="alertBox" v-if="visible">
			<div class="content">
				<div class="title">请输入图片验证码</div>
				<div class="body">
					<p>
						<input v-model="vCode" placeholder="请输入图片验证码" type="tel" maxlength="4">
						<img @touchstart.stop.prevent="refresh()" :src="imgUrl">
					</p>
					<span>点击图片可刷新</span>
				</div>
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
			width:5.4rem;
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
				font-family: "PingFangSC-Regular";
			}
			.body{
				font-size: 0.32rem;
				color: #3D4A5B;
				margin-top: 0.4rem;
				text-align: right;
				p{
					width: 100%;
					height: 1rem;
					background: #F5F8FF;
					border-radius: 0.06rem;
					margin: 0 auto;
					display: flex;
					align-items:center;
					position: relative;
					&:after{
						content:" ";
						border: 1px solid #ECF0F8;
						transform:scale(0.5,0.5);
						box-sizing: border-box;
						left: -50%;
						top: -50%;
						width: 200%;
						height: 200%;
						display: block;
						position: absolute;
						z-index: -1;
					}
					input{
						margin-left: 0.3rem;
						font-size: 0.28rem;
						color: #3D4A5B;
						flex:1;
						&::-webkit-input-placeholder{
							color: #3D4A5B;
							opacity: 0.15;
							font-size: 0.28rem;
						}
					}
					img{
						width: 1.58rem;
						height: 0.8rem;
						display: block;
						margin-right: 0.1rem;
					}
				}
				span{
					color: #3D4A5B;
					font-size: 0.24rem;
					opacity: 0.5;
					transform:scale(0.8,0.8);
				}
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

	import api from "@/api.config.js";
	import {Ajax,getCookie,toast,youmeng} from "@/libs/wyl.js";
	import JSEncrypt from "jsencrypt";

	export default{
		data(){
			return{
				imgUrl:"",
				content:"",
				cancelText:"",
				confirmText:"",
				vCode:""
			}
		},
		props:{
			visible:Boolean,
			confirmText: {
		      type: String,
		      default: '确认'
		    },
		    cancelText: {
		      type: String,
		      default: '取消'
		    },
		},
		watch:{
        	visible(){

        		youmeng("注册","弹出图片验证码");

       			this.imgUrl = api.KY_LOGIN+"creditUserCode/verificationCode?phoneNo="+getCookie("cellPhone")+"&code="+Math.random();
       			this.sign = this.verifiSign;
	        }
	    },
		methods:{
			comfirmSubmit(){

			  	let pk ="MFwwDQYJKoZIhvcNAQEBBQADSwAwSAJBAJzTYqDov+sggE/qOhYf3RQQ79bWLwA3e1dzQQbrXvwX5m5TU9q0+uGP6r8CLXELkLQShFXs1FnGPA5anBCV2uUCAwEAAQ==";

      			let encrypt=new JSEncrypt({default_key_size: 512});
　　      		encrypt.setPublicKey(pk);
　　      		let encryptPhone = encrypt.encrypt(getCookie("cellPhone"));

				//console.log( encryptPhone )
				if(!this.vCode){
					toast({
						"content":"请输入图形验证码"
					})
					return;
				}
				else if(this.vCode.length!==4){
					toast({
						"content":"请输入正确的图形验证码"
					})
					return;
				}

				youmeng("注册","确认图片验证码");
				
				Ajax({
					"url":api.KY_LOGIN+"user/sendVerificationCode",
					"data":{
						"phoneNo":encryptPhone.replace(/\+/g,'%2B'),
						"vCode":this.vCode
					},
					"isUser":true
				},(data)=>{

     				// alert(data.msg);
     				if(data.code=="0000"){
     					this.$emit('confirm', this);
						this.$emit('update:visible', false);
						this.vCode = "";

     				}
     				
				})
      		
			},
			refresh(){

				youmeng("注册","刷新图片验证码");

				this.imgUrl = api.KY_LOGIN+"creditUserCode/verificationCode?phoneNo="+getCookie("cellPhone")+"&code="+Math.random();
			},
			cancelBox(){

				youmeng("注册","取消图片验证码");

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