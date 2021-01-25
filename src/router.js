




import { createRouter, createWebHistory } from 'vue-router';
import Calendar from "./components/Calendar";
import Company from "./components/Company";
import Slider from "./components/Slider";
import Calculator from "./components/Calculator";
const routerHistory = createWebHistory()


const router = createRouter({
  history: routerHistory,
  routes:
  [{path: '/companys', component:Company},
  {path: '/calendar', component:Calendar},
{path: '/slider', component:Slider},
{path: '/calculator', component:Calculator}]
})

export default router
