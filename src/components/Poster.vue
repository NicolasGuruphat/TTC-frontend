
<template>
    <div id="poster" class="d-flex flex-column justify-content-center align-items-center">
    <h1>Choisis ton activité préférée</h1>
    <h1>et trouve le club le plus adapté pour toi</h1>

    <a class="text-decoration-none mt-5" href="#sports"><h1  class="mt-5 text-warning">C'est parti !</h1></a> 

    </div>
</template>

<script lang = 'ts'>
import { defineComponent } from "vue";
export default defineComponent({});
</script>

<style>
#poster{
    color : white;
    width : 100%;
    height: calc(100vh - 56px);
    background-image : url('@/images/ezgif.com-gif-maker(2).gif');
    background-size: cover;
    
}
h1{
    font-size : 3rem;
    font-weight : 700;

}
#go:hover{
    cursor : pointer;
    color : #f5f5f5 important!;
    box-shadow: 2px 2px 10px rgba(0,0,0,0.5);
}


.scroll-container {
  width: 350px;
  height: 200px;
  overflow-y: scroll;
  scroll-behavior: smooth;
}
</style>