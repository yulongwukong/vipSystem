<template>
  <div id="page">

  		<Loading :isLoading="isLoading"></Loading>

		<div class="rightsProfile">
            <div class="rightsProfile_head">
                <div id="nav" class="swiper-container">
                    <ul class="swiper-wrapper">
                        <li :key="i" v-for="i in myNavBar" :class="{'active-nav':i.active}" class="swiper-slide">
                            {{i.title}}
                        </li>
                    </ul>
                </div>
            </div>
        </div>

    	<keep-alive>
		    <router-view v-if="$route.meta.keepAlive">
		        <!-- 这里是会被缓存的视图组件，比如 page1,page2 -->
		    </router-view>
		</keep-alive>

		<router-view v-if="!$route.meta.keepAlive">
		    <!-- 这里是不被缓存的视图组件，比如 page3 -->
		</router-view>
  </div>
</template>

<style lang="less">
	#nav{
		height: 100%;
		.swiper-wrapper{
			height: 100%;
			li{
				text-align: center;
				height: 100%;
				display: flex;
				align-items: center;
				justify-content: center;
				&.active-nav{
					color:#fff;
					background:#ddd !important;
				}
				&.active-nav a{
					color:#fff;
					background:#ddd !important;
				}
			}
		}
	}
	
</style>

<script>
	import Loading from "@/components/loading";
	export default{
		data(){
			return{
				myNavBar:[{
						title:"移动机具",
						active:true,
						mark:"mpos"
					},{
						title:"8折话费",
						active:false,
						mark:"payPhoneBill"
					},{
						title:"5折看电影",
						active:false,
						mark:"movieTicket"
					},{
						title:"家用",
						active:false
					},{
						title:"家用电器",
						active:false
					},{
						title:"家用",
						active:false
					}],
				routerName:""
			}
		},
		components:{
			Loading
		},
		watch: {
			$route(to, from) {
				// console.log(this.$route.name);
				let routerName = this.$route.name;
				this.myNavBar.map((el)=>{
					el.active = false;
					if(el.mark==routerName){
						el.active = true;
					}
				});
			}
		},	
		mounted(){

			this.$nextTick(()=>{

				let that = this;
				var myNav = new Swiper('#nav', {
					freeMode: true,
					freeModeMomentumRatio: 0.5,
					slidesPerView: '3',
				});
				let swiperWidth = myNav.container[0].clientWidth
				let maxTranslate = myNav.maxTranslate();
				let maxWidth = -maxTranslate + swiperWidth / 2

				myNav.on("tap",function(swiper,e){
					
					let slide = swiper.slides[swiper.clickedIndex]
					let slideLeft = slide.offsetLeft
					let slideWidth = slide.clientWidth
					let slideCenter = slideLeft + slideWidth / 2;

					// 被点击slide的中心点
					myNav.setWrapperTransition(300)
					if (slideCenter < swiperWidth / 2) {
						myNav.setWrapperTranslate(0)
					} else if (slideCenter > maxWidth) {
						myNav.setWrapperTranslate(maxTranslate)
					} else {
						let nowTlanslate = slideCenter - swiperWidth / 2
						myNav.setWrapperTranslate(-nowTlanslate)
					}

					that.myNavBar.map((el)=>{
						el.active = false;
					});
					that.myNavBar[swiper.clickedIndex].active = true;
					that.$router.push({
						path:that.myNavBar[swiper.clickedIndex].mark
					})

				})
			})	
		}
	}
</script>