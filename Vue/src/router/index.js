import Vue from "vue"
import Router from "vue-router"
import HeaterList from "../components/HeaterList.vue"
import WindowList from "../components/WindowList.vue"
import RoomList from "../components/RoomList.vue"
import Main from "../views/Main"

Vue.use(Router);

export default new Router({
	routes:[
		{
			path:"/",
			name:"Main",
			component:Main,
			children:[
				{
					path:'/faircorp/heaters',
					name:"HeaterList",
					component:HeaterList
				},
				{
					path:'/faircorp/windows',
					name:"WindowList",
					component:WindowList
				},
				{
					path:'/faircorp/rooms',
					name:"RoomList",
					component:RoomList
				}
			]
		}
		
		
	]
})
