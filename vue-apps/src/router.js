import {createRouter, createWebHistory} from "vue-router"
import DcHeroes from "./pages/DcHeroes"
import Calendar from "./pages/Calendar"
import Home from "./pages/Home"

const routes = [
    {path:'/',component:Home},
    {path:'/dc-heroes',component:DcHeroes},
    {path:'/calendar', component:Calendar},
]

const router = createRouter({
    history:createWebHistory(),
    routes,
})

export default router;

