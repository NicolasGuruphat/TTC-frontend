<script lang="ts">
import SportButton from "./SportButton.vue";

export default {
  components: {
    SportButton
  }
}
</script>

<template>
    <div id="sports" class="p-4">
        <h2 class="m-4 text-white">Choisis ton sport !</h2>
        <div class="d-flex flex-wrap">
        <SportButton icon="src\images\basketball-ball.png" text="Basketball"></SportButton>
        <SportButton icon="src\images\football.png" text="Football"></SportButton>
        <SportButton icon="src\images\handball.png" text="Handball"></SportButton>
        <SportButton icon="src\images\rugby.png" text="Rugby"></SportButton>
        <SportButton icon="src\images\tennis.png" text="Tennis"></SportButton>
        <SportButton icon="src\images\ping-pong.png" text="Ping pong"></SportButton>
        <SportButton icon="src\images\swim.png" text="Natation"></SportButton>
        <SportButton icon="src\images\archery.png" text="Tir à l'arc"></SportButton>
        <SportButton icon="src\images\horseshoe.png" text="Équitation"></SportButton>
        <SportButton icon="src\images\boxer.png" text="Boxe"></SportButton>
        <SportButton icon="src\images\judo.png" text="Judo"></SportButton>
        <SportButton icon="src\images\run.png" text="Athlétisme"></SportButton>

        </div>
        
    </div>
</template>



<style>
#sports{
    width : 100%;
    height : 100vh
}
</style>