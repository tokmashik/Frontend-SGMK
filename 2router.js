import Vue from "vue";
import Akcept from "@/components/Akcept";
import Zadachi from "@/components/Zadachi";
import Uvedomleniya from "@/components/Uvedomleniya";

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/akcept',
            name: 'Akcept',
            component: Akcept
        },
        {
            path: '/zadachi',
            name: 'Zadachi',
            component: Zadachi
        },
        {
            path: '/uvedomleniya',
            name: 'Uvedomleniya',
            component: Uvedomleniya
        }, 
        {
            path: '/uvedomleniya',
            name: 'Uvedomleniya',
            component: Uvedomleniya
        }, 
        {
            path: '/uvedomleniya',
            name: 'Uvedomleniya',
            component: Uvedomleniya
        },          
    ]
})