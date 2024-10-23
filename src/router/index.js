import { createRouter, createWebHistory } from "vue-router";
import UserLocation from "../pages/UserLocation.vue"
import VueDirivative from "../pages/VueDirivative.vue";
const routes = [
  { path:"/",
  component:UserLocation,
},
{ path:"/vue-dirivative",
  component:VueDirivative,
}
];

export default createRouter({routes,
  history:createWebHistory(),
})