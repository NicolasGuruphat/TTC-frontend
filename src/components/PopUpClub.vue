<template>
  <section>
    <details v-on:click="closeOtherDetails()">
      <summary>Information du club</summary>
      <label id="titre">{{ club.nom }}</label>
      <div>
        <img class="imageclub" src="../images/basketball-ball.png" alt="Impossible de charger l'image">
        <div class="adresse">
          <div class="contact">
            <label id="adresse"> Adresse :</label><label id="adresse_club"> {{ club.adresse }} </label><br>
            <label>Email : </label><a id="mail_club" :href="'mailto:'+club.email">{{ club.email }}</a><br>
            <label id="fax_club"> {{ club.telephone }}</label> <br>
            <label id="site"> Site Web : </label>
            <a id="siteWeb_club" :href="club.site"> {{ club.site }}</a> <br>
            <label id="ville"> Ville : </label> <label id="ville_club"> {{ club.ville }}</label><br>
          </div>
        </div>
      </div>
    </details>
    <details v-on:click="closeOtherDetails()">
      <summary>Direction</summary>
      <div>
        <div class="direction">
          <div class="ligne1" v-for="direction, key in club.direction">
            <label id="direction_name">{{ key }} :</label>
            <div v-for="item in direction">
              <label id="item"> {{ item }} </label>
            </div>
          </div>
        </div>
      </div>
    </details>
    <details v-on:click="closeOtherDetails()">
      <summary>Salle et Equipes</summary>
      <div>
        <div class="salle_equipe">
          <label id="titre">Salle : </label><br>
          <div class="ligne2" v-for="infoSalle, key in club.salle">
            <label id="infoSalle"> {{ infoSalle }} </label>
          </div>
          <br>
          <div class="equipe">
            <label id="titre">Equipe : </label><br>
            <div class="ligne2" v-for="equipe, key in club.equipes">
             <ul><li id="equipe_club"> {{ equipe }} </li></ul>
            </div>
          </div>
        </div>
      </div>
    </details>
  </section>
</template>

<script lang="ts">

import { defineComponent, onMounted } from "vue";
import { mapActions, mapGetters } from "pinia";


export default defineComponent({

  props: {
    club: { default: {} }
  },
  methods:
  {
    closeOtherDetails() {
     // Fetch all the details element.
const details = document.querySelectorAll("details");

// Add the onclick listeners.
details.forEach((targetDetail) => {
  targetDetail.addEventListener("click", () => {
    // Close all the details that are not targetDetail.
    details.forEach((detail) => {
      if (detail !== targetDetail) {
        detail.removeAttribute("open");
      }
    });
  });
});

    }

  }
})


</script>
<style scoped>
#main-wrapper {
  position: absolute;
  top: 10%;
  left: 5%;
  z-index: 1000;
  background: #dee7fa;
  width: 90%;
  height: 100%;
  border-radius: 20px;
  opacity: initial;
  ;
}

#information-wrapper {
  padding-left: 5%;
  padding-top: 2.5%;
  color: white;
  font-size: 150%;
  text-align: center;
  font-family: Calibri;
  font-weight: bold;
}

@import url("https://fonts.googleapis.com/css?family=Karla|Space+Mono"); 

:root {
  --contentHeight: 30vh;
  --sectionWidth: 700px;
}

* {
  outline: 0;
  box-sizing: border-box;
}

body {
  background-color: #000;
}

section {
  max-width: var(--sectionWidth);
  margin: 40px auto;
  width: 30%;
  color: #fff;
}

ul
{
  margin-top: 0;
  margin-bottom: 1px;
}

li
{
  font-size: 13px;
}

a{
  color:#709CA7;
}
summary {
  display: block;
  cursor: pointer;
  padding: 10px;
  font-family: "Space Mono", monospace;
  font-size: 22px;
  transition: .3s;
  border-bottom: 2px solid;
  user-select: none;
}

details>div {
  display: flex;
  flex-wrap: wrap;
  overflow: auto;
  height: 100%;
  user-select: none;
  padding: 0 20px;
  font-family: "Karla", sans-serif;
  line-height: 1.5;
}

details>div>img {
  align-self: flex-start;
  max-width: 50%;
  margin-top: 20px;
}

details>div>p {
  flex: 1;
}

#titre
{
  font-weight: bold;
}

details[open]>summary {
  color: white;
}

@media (min-width: 768px) {
  details[open]>div>p {
    opacity: 0;
    animation-name: showContent;
    animation-duration: 0.6s;
    animation-delay: 0.2s;
    animation-fill-mode: forwards;
    margin: 0;
    padding-left: 20px;
  }

  details[open]>div {
    animation-name: slideDown;
    animation-duration: 0.3s;
    animation-fill-mode: forwards;
  }

  details[open]>div>img {
    opacity: 0;
    height: 100%;
    margin: 0;
    padding-left: 20%;
    margin-bottom: 10%;
    animation-name: showImage;
    animation-duration: 0.3s;
    animation-delay: 0.15s;
    animation-fill-mode: forwards;
  }
}

@keyframes slideDown {
  from {
    opacity: 0;
    height: 0;
    padding: 0;
  }

  to {
    opacity: 1;
    height: var(--contentHeight);
    padding: 20px;
  }
}

@keyframes showImage {
  from {
    opacity: 0;
    clip-path: inset(50% 0 50% 0);
    transform: scale(0.4);
  }

  to {
    opacity: 1;
    clip-path: inset(0 0 0 0);
  }
}

@keyframes showContent {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

</style> -->
