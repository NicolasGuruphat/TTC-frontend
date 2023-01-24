<template>
<section>
  <details open>
    <summary>Adresse</summary>
    <div>
      <img  class= "imageclub" src="../images/logo_fond_blanc_viuz_basket.png"  alt="Impossible de charger l'image">
      <div class = "adresse"> 
            <div class = "contact">
              <label id="adresse"> Adresse</label><label id="adresse_club"> : {{ club.adresse }} </label><br>
                <label id="mail_club">{{ club.email }}</label><br>
                <label id="fax_club"> {{  club.telephone }}</label> <br>
                <label id="siteWeb_club"> {{ club.site }}</label> <br>
                <label id="ville"> Ville : </label> <label id="ville_club"> {{ club.ville }}</label><br>
            </div>
        </div>
    </div>
  </details>
  <details>
    <summary>Direction</summary>
    <div>
      <div class = "direction"> 
            <div class = "ligne1" v-for="direction,key in club.direction" >
               <label id="direction_name">{{ key }} :</label>
               <div v-for="item in direction">
                    <label id="item">  {{ item }} </label>   
              </div>  
          </div>
        </div>
    </div>
  </details>
  <details>
    <summary>Salle et Equipes</summary>
    <div>
      <div class = "salle_equipe"> 
                <label id="titre">Salle : </label><br>
                <div class="ligne2" v-for="infoSalle,key in club.salle">
                      <label id="infoSalle">  {{ infoSalle }} </label>
                </div>
                <br>
              <div class="equipe">
                <label id="titre">Equipe : </label><br>
                  <div class="ligne2" v-for="equipe,key in club.equipes">
                        <label id="equipe_club">  {{ equipe }} </label>   
                  </div> 
                </div>
            </div>
    </div>
  </details>
</section>
</template>

<script lang="ts">


import { defineComponent, onMounted } from "vue";
import { useClubStore } from '@/stores/club';
import { mapActions, mapGetters } from "pinia";


export default defineComponent({
  data() {

    return {
      club : 
      {
  "_id": {
    "$oid": "63ce501582967f6220b34d2f"
  },
  "nom": "CD01 - HORS ASSOCIATION - AIN - ARA0001001 - Club",
  "adresse": "29 Bis Avenue de Bad Kreuznach",
  "ville": "BOURG-EN-BRESSE",
  "telephone": "Fax : Tél bureau : 0474236296",
  "email": "Email : basket-ain@wanadoo.fr",
  "site": "Site web : http://www.basketain.com",
  "location": {
    "type": "Point",
    "coordinates": [
      5.242828,
      46.214477
    ]
  },
  "salle": [
    "SALLE JEUNESSE LAIQUE / Mercier",
    "plan",
    "42 RUE CHARLES ROBIN",
    "01000 BOURG-EN-BRESSE",
    "Tél : 0474247893 Fax : ",
    "Couleur des maillots VERT"
  ],
  "direction": {
    "Président(e)": [
      "BRUN Christophe",
      "01000 BOURG-EN-BRESSE",
      "Tél 1 : 0474236296",
      "Tél 2 : 0629999317",
      "email : basket-ain-president@orange.fr"
    ],
    "Correspondant(e)": [
      "DEBIESSE-TIXIER Karine",
      "39160 CHAZELLES",
      "Tél 2 : 0648483362",
      "email : basket-ain-secretairegeneral@orange.fr"
    ]
  },
  "equipes": [
    "TIC U13 Masculin 2022 (PIERRE BENITE)",
    "TIC U13 Féminin 2022 (PIERRE BENITE)"
  ]
}
    }
  },
  setup() {

    const store = useClubStore()
    return {store}
    // onMounted(()=>{

    // })
  }

})

</script>
<style scoped>
#main-wrapper {
    position:absolute;
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
    color:white;
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
  width: 97%;
  color: #fff;
}

.imageClub
{
  size: 40%;
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

details > div {
  display: flex;
  flex-wrap: wrap;
  overflow: auto;
  height: 100%;
  user-select: none;
  padding: 0 20px;
  font-family: "Karla", sans-serif;
  line-height: 1.5;
}

details > div > img {
  align-self: flex-start;
  max-width: 100%;
  margin-top: 20px;
}

details > div > p {
  flex: 1;
}

details[open] > summary {
   color: red;
}

@media (min-width: 768px) {
  details[open] > div > p {
    opacity: 0;
    animation-name: showContent;
    animation-duration: 0.6s;
    animation-delay: 0.2s;
    animation-fill-mode: forwards;
    margin: 0;
    padding-left: 20px;
  }

  details[open] > div {
    animation-name: slideDown;
    animation-duration: 0.3s;
    animation-fill-mode: forwards;
  }

  details[open] > div > img {
    opacity: 0;
    height: 100%;
    margin: 0;
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

</style>
