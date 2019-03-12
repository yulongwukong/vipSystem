import "../css/feedBack.less";
import Vue from "vue";
import {siblingElem,useAxios,toast} from "@/libs/wyl.js";
// import bigImage from "@/components/bigImage.vue";
import lrz from "lrz";
import Bus from "@/components/bus.js";
// import "babel-polyfill";

const vm = new Vue({
	el:"#root",
	components:{
		// bigImage
	},
	data:{
		vaule:"",
		maxLength:500,
		imgs: [],
		imgData: {
            accept: 'image/gif, image/jpeg, image/png, image/jpg',
        },
        uploadList:
        [
        	{
        		imgLoaded:false,
        		imgSrc:"",
        		showInput:true
        	}
        ]
	},
	mounted(){
		let rootEl = document.getElementById('functionColumn');
		let win_h = document.documentElement.clientHeight||document.body.clientHeight;

		rootEl.style.height = win_h+"px";

	},
	methods:{
		checkLength(){
			this.vaule = this.vaule.length>=this.maxLength?
						 this.vaule.substring(0,this.maxLength):
						 this.vaule;
		},
		deleteImg(event,i,index){

			let imageLength = 0;

			console.log( vm.uploadList.length );

			vm.uploadList.forEach((el)=>{
				if(el.imgSrc){
					imageLength+=1;
				}
			});

			vm.uploadList.splice(index,1);

			if(imageLength==3){
				vm.uploadList.push({
        			imgLoaded:false,
        			imgSrc:"",
        			showInput:true
        		})
			}
		},
		showBigImg(i){

			Bus.$emit("showImage",{
				"showImage":true,
				"imageSrc":i.imgSrc
			});
		},
		uploadImg(event,i){
			let reader =new FileReader();
			let inputDom = event.target;
			let imgObject = event.target.files[0];

			if(!imgObject) {
				return;
			}

            let type=imgObject.type;//文件的类型，判断是否是图片
            let size=imgObject.size;//文件的大小，判断图片的大小

            if(this.imgData.accept.indexOf(type) == -1){
                toast({
                	"message":"请选择我们支持的图片格式！"
                });
                return;
            }

            siblingElem(inputDom)[0].style.display = "block";
            reader.readAsDataURL(imgObject);

            reader.onload = function(e){
            	let url = e.target.result;
            	let image = new Image();
	            image.src = reader.result;
	            image.onload = function(){

	            	console.log( image.width );
	            	let resizeWidth = image.width<1100?"":1100;

	            	lrz(imgObject, {
		        		width: resizeWidth
		        	}).
		        	then((result)=>{

		        		let sourceSize = (imgObject.size/1024).toFixed(2);
		                let resultSize = (result.fileLen/1024).toFixed(2);
		                let url = result.base64;

		        		console.log( resultSize+"kb" );
		        		console.log( sourceSize+"kb" );
		        		siblingElem(inputDom)[0].style.display = "none";
		        		i.imgSrc = url;
		        		i.imgLoaded = true;
		        		i.showInput = false;

		        		if(vm.uploadList.length==3){
		        			return;
		        		}

		        		vm.uploadList.push({
		        			imgLoaded:false,
		        			imgSrc:"",
		        			showInput:true
		        		})

		        	});
	            }
            }

		},
		submit(){

			let image1 = this.uploadList[0].imgSrc||"";
			let image2 = this.uploadList[1]?this.uploadList[1].imgSrc:'';
			let image3 = this.uploadList[2]?this.uploadList[2].imgSrc:'';

			useAxios({
				"url":"problem/feedBack",
				"data":{
					"content":this.vaule,
					"source":"H5",
					"functional":"H5",
					"image1":image1,
					"image2":image2,
					"image3":image3
				}
			},(res)=>{
				window.location.href = "./helpCenter.html"
			})
		}
	}
})