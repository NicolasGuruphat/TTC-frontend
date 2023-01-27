<template>
  <div class="about-page">
    <div class="top-section"></div>
    <div class="bottom-section">
        <div class="container d-flex flex-column align-items-center">
            <h1>Notre équipe TTC</h1>
            <Logo />
            <Description />
        </div>
    </div>
  </div>
</template>

<script lang="ts">
import Description from "@/components/Description.vue";
import Logo from "@/components/Logo.vue";

export default {
  components: {
    Description,
    Logo
  }
}
</script>

<style scoped>
.about-page {
  height: 100%;
}

.top-section {
  height: 25%;
  
}

.h1{
  margin-top: 10%;
  margin-bottom: 10%;
}

.bottom-section {
  padding-top: 3%;
  height: 75%;
  background-color: #5FC2BA;
  border-radius: 10px;
}

.container {
  
  margin: 1rem 0;
  
}

</style>
