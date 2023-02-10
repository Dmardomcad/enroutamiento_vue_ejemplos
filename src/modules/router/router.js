import {createRouter, createWebHashHistory} from "vue-router";

const routes = [
    { path: '/', component: ()=> import('../pokemon/pages/ListPage.vue')},

    
    { path: '/about', component: ()=> import("../pokemon/pages/AboutPage.vue")
},
    { path: '/pokemon/:id',
     name: 'pokemonId',
     component: ()=>import('../pokemon/pages/PokemonPage.vue'),
     props:(route)=> {
       const id = Number(route.params.id)
       return isNaN(id) ? { id:1 } : {id}
       }
    },
    { path: '/:pathMatch(.*)*',
    redirect: '/',
    //component: ()=>import('../shared/NoPageFound.vue')
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes, // short for `routes: routes`
})

export default router