<template>
  <div id="page">

  		<Loading :isLoading="isLoading"></Loading>
		  
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