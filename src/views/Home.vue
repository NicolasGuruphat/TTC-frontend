<script lang="ts">
import Poster from "../components/Poster.vue";
import Sports from "../components/Sports.vue";


export default {
  components: {
    Poster,
    Sports
  }
}

</script>


<template>

    <div class="d-flex flex-column w-100 justify-content-center scroll-container">
        <Poster></Poster>
        <Sports></Sports>
        
    
    </div>

</template>

<style scoped>
.scroll-container {
  width: 350px;
  height: auto;
  overflow-y: scroll;
  scroll-behavior: smooth;
}

</style>