<template>
    <img v-if="showLogo" class="team-logo" src="../images/wejdene.jpeg" alt="Team logo">
  </template>
  
  <script lang="ts">
  export default {
    data() {
      return {
        showLogo: true
      }
    }
  }
  </script>
  
  <style>
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }
  .fade-enter, .fade-leave-to {
    opacity: 0;
  }
  .team-logo {
    width: 200px;
    margin-right: 20px;
  }
  </style>
  