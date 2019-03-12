import Vue from "vue";
import VueRouter from "vue-router";
import Right from "../Rights.vue";
import "../css/rightsProfile.less";

import Bus from "@/components/bus.js";

import mpos from "@/router/mpos";
import movieTicket from "@/router/movieTicket";
import payPhoneBill from "@/router/payPhoneBill";

global.beforeRouteName = "";

const routes = [
    ...mpos,
    ...movieTicket,
    ...payPhoneBill
]

Vue.use(VueRouter);
const router = new VueRouter({
  base: __dirname,
  routes
}); //这里可以带有路由器的配置参数

router.beforeEach((to, from, next) => {

    let toPath = to.name;
    Bus.$emit('isLoading',true);

    document.title = to.meta.title;
    next();

});

router.afterEach((to, from) => {
    Bus.$emit('isLoading',false);
})

const app = new Vue({
    router,
    // store,
    render: h => h(Right)
}).$mount('#root');