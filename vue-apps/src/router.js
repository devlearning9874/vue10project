import {createRouter, createWebHashHistory} from "vue-router"
import DcHeroes from "./components/DcHeroes"
import Calendar from "./components/Calendar"

const routes = [
    {path:'/dc-heroes',component:DcHeroes},
    {path:'/calendar', component:Calendar},
]

const router = createRouter({
    history:createWebHashHistory(),
    routes,
})

export default router;

