<script lang="ts">
import Nav from "./components/base/Nav.vue";

export default {
  components: {
    Nav
  }
}
</script>

<template>
  <div id="app">
  <Nav></Nav>

  <main class="d-flex justify-content-center align-items-center">
    <router-view></router-view>

    

  </main>
</div>
</template>

<style scoped>
#app {
    min-height: 100vh;
}
main{
  min-height: 90vh;
  background-color: #344D59;
}
</style>
