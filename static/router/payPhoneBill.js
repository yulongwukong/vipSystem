let payPhoneBill = () => import('@/page/payPhoneBill/payPhoneBill.vue');

export default[
    {
        path:"/payPhoneBill",
        name:"payPhoneBill",
        component: payPhoneBill,
        meta:{
            title:"8折话费",
            keepAlive:false
        }
    }
]