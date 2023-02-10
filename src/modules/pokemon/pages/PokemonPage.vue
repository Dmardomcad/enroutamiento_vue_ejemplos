<template>
    <h1>Pokemon Page</h1>
    <span>{{ id }}</span>
    <div v-if="pokemon">
        <img :src="pokemon.sprites.front_default" alt="pokemon.name"/>


    </div>
</template>

<script>
export default{
    props: {
        id:{
            type: Number,
            required: true
        }
    },
/// DATA ////
    data(){
        return{
            pokemon: null,
        }
    },
    created(){
        this.getPokemon()
    },
//// METHODS /////
    methods: {
    async getPokemon(){
    try {
            const pokemon = await fetch(
            `https://pokeapi.co/api/v2/pokemon/${this.id}`
            ).then((res) => res.json())
            console.log(pokemon)
            this.pokemon = pokemon
         
        } catch (error) {
            console.log(error)
            this.$router.push('/')
        }
    },
},
///// ^^^^ WATCHES ^^^^ ///
watch:{
    id(){
        this.getPokemon()
    }
}
}





</script>