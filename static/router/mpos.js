let mpos = () => import('@/page/mpos/mpos.vue');

export default[
    {
        path:"/mpos",
        name:"mpos",
        component: mpos,
        meta:{
            title:"mpos",
            keepAlive:false
        }
    }
]