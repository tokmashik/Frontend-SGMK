import Vue from "vue";
import Akcept from "@/components/Akcept";
import Zadachi from "@/components/Zadachi";
import Uvedomleniya from "@/components/Uvedomleniya";
import Dokumentooborot from "@/components/Dokumentooborot";
import Tehpodderzhka from "@/components/Tehpodderzhka";
import ZhurnalDeystviy from "@/components/ZhurnalDeystviy";

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
            path: '/dokumentooborot',
            name: 'Dokumentooborot',
            component: Dokumentooborot
        }, 
        {
            path: '/tehpodderzhka',
            name: 'Tehpodderzhka',
            component: Tehpodderzhka
        },
        {
            path: '/zhurnal_deystviy',
            name: 'ZhurnalDeystviy',
            component: ZhurnalDeystviy
        },          
    ]
})