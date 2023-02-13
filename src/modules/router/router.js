import {createRouter, createWebHashHistory} from "vue-router";

const routes = [
    {
        path:'/',
        redirect: '/pokemon',
    },
    { 
    path: '/pokemon',
    component: ()=> import('../pokemon/layouts/PokemonLayout.vue'),
    children: [
        { 
        path: '',
        name: 'pokemon-home',
        component: ()=> import('../pokemon/pages/ListPage.vue')
        },
        { path: 'about',
        name:'pokemon-about',
        component: ()=> import("../pokemon/pages/AboutPage.vue")
        },

        { path: 'pokemon/:id',
         name: 'pokemonId',
         component: ()=>import('../pokemon/pages/PokemonPage.vue'),
         props:(route)=> {
           const id = Number(route.params.id)
           return isNaN(id) ? { id:1 } : {id}
                }
            },
        
        ],
    },
// Spiderman layout

    {
        path: "/spiderman",
        name: "spiderman",
        component:()=> import('../spiderman/layouts/SpidermanLayout.vue'),
        children: [
            {
                path: '',
                name: "spiderman-home",
                component:()=> import('../spiderman/pages/Characters.vue'),
            },
            {
                path: 'about',
                name: "spiderman-about",
                component:()=> import('../spiderman/pages/About.vue')
            }
        ]
    },



    { path: '/:pathMatch(.*)*',
    //redirect: '/',
    component: ()=>import('../shared/NoPageFound.vue')
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes, // short for `routes: routes`
})

export default router