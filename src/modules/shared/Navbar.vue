<template>
    <div>
        <router-link :to="{name: 'pokemon-home'}">Pokemon List</router-link>
        <router-link :to="{ name: 'pokemonId',params: { id:1 } }">Pokemon por id's</router-link>
        <router-link :to="{name: 'pokemon-about'}">About</router-link>
        
        <!-- Spiderman menu -->
        <router-link :to="{name: 'spiderman-home'}">Characters</router-link>
        <router-link :to="{name: 'spiderman-about'}">Spiderman About</router-link>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
div {
    padding: 0 40px;

}
div a {
    padding: 0 20px;
    font-weight: bold;
    color: #2c3e50;
    
}
div a:hover{
    color:rgb(195, 0, 255)
}
.router-link-exact-active {
    color: red;
}

</style>