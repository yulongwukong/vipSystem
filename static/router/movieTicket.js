let movieTicket = () => import('@/page/movieTicket/movieTicket.vue');

export default[
    {
        path:"/movieTicket",
        name:"movieTicket",
        component: movieTicket,
        meta:{
            title:"5折看电影",
            keepAlive:false
        }
    }
]