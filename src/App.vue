<template>
  <Navbar/>
  <router-view/>
</template>


<script>
  import Navbar from "./modules/shared/Navbar.vue"
  export default {
    components: { Navbar }
}
</script>


<style>

</style>