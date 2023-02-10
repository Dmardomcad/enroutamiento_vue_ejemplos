<template>
    <h1>About Page</h1>
    <h2>{{ name }}</h2>
    <button @click="changeName">Change Name</button>
</template>

<script>
    export default {
    data(){
        return{
            name: "IES Rafael Alberti"
        }
    },
    methods: {
    changeName(){
        this.name="Segundo de DAW"
        }
    },
    
    beforeCreate(){
        console.log("beforeCreate")
    },
    created(){
        this.name="Hola" // Aquí el mejor lugar para llamar a la api si necesito renderizar antes de que se muestre la página
    },
    beforeMount(){
        console.log("beforeMount")
    },
    mounted(){
        console.log("mounted")
    },
    beforeUpdate(){
        console.log("beforeUpdate")
    },
    updated(){
        console.log("updated")
    },
    beforeUnmount(){
        console.log("beforeUnmount")
    },
    unmounted(){
        console.log("unmounted")
    },
    errorCaptured(){
        console.log("errorCaptured")
    },
    renderTracked(){
        console.log("renderTracked")
    },
    renderTriggered(){
        console.log("renderTriggered")
    },
    activated(){
        console.log("activated")
    },
    deactivated(){
        console.log("deactivated")
        }
    }
</script>

<style scoped>

</style>