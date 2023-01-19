<template>
    <div id="main-wrapper">
        <button id="close" @click="$emit('switchDisplay')">X</button>
        <div id="information-wrapper">
           <!-- {{store.mesClubs}} -->
           <label id="nom_club">{{ club.nom }}</label><br>
           
        </div>

        <div class="wrapper">
          <div class = "gauche">
            <img  class= "imageclub" src="../images/logo_fond_blanc_viuz_basket.png"  alt="Impossible de charger l'image">

            <div v-for="direction,key in club.direction" >
              <label id="direction_name">{{ key }} :</label>
              <div v-for="item in direction">
                    <label id="item">  {{ item }} </label>   
              </div>  
              </div>
           
          </div>


          <!-- CETTE CLASS CONTIENT TOUTE LES INFO IMPORTANTE DU CLUB -->
          <div class = "droite"> 
           
            
            <label id="adresse"> Adresse</label><label id="adresse_club"> : {{ club.adresse }} </label><br>
            <label id="mail_club">{{ club.email }}</label><br>
            <label id="fax_club"> {{  club.telephone }}</label> <br>
            <label id="siteWeb_club"> {{ club.site }}</label> <br>
            <label id="ville"> Ville : </label> <label id="ville_club"> {{ club.ville }}</label><br>
            <label id="salle">Salle : </label><br>
            <div v-for="infoSalle,key in club.salle">
                    
                    <label id="infoSalle">  {{ infoSalle }} </label>   
            </div> 

            <label id="equipe">Equipe : </label><br>
            <div v-for="equipe,key in club.equipes">
                    
                    <label id="equipe_club">  {{ equipe }} </label>   
            </div> 


          </div>


        </div>  
    </div>
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
      "nom": "CD01 - HORS ASSOCIATION - AIN - ARA0001001 - Club",
      "adresse": "29 Bis Avenue de Bad Kreuznach",
      "ville": "BOURG-EN-BRESSE",
      "telephone": "Fax : T\u00e9l bureau : 0474236296",
      "email": "Email : basket-ain@wanadoo.fr",
      "site": "Site web : http://www.basketain.com",
      "salle": [
          "SALLE JEUNESSE LAIQUE / Mercier",
          "plan",
          "42 RUE CHARLES ROBIN",
          "01000 BOURG-EN-BRESSE",
          "T\u00e9l : 0474247893 Fax : ",
          "Couleur des maillots VERT"
      ],
      "direction": {
          "Pr\u00e9sident(e)": [
              "BRUN Christophe",
              "01000 BOURG-EN-BRESSE",
              "T\u00e9l 1 : 0474236296",
              "T\u00e9l 2 : 0629999317",
              "email : basket-ain-president@orange.fr"
          ],
          "Correspondant(e)": [
              "DEBIESSE-TIXIER Karine",
              "39160 CHAZELLES",
              "T\u00e9l 2 : 0648483362",
              "email : basket-ain-secretairegeneral@orange.fr"
          ]
      },
      "equipes": [
          "TIC U13 Masculin 2022 (PIERRE BENITE)",
          "TIC U13 F\u00e9minin 2022 (PIERRE BENITE)"
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
    position: absolute;
    top: 10%;
    left: 5%;
    z-index: 1000;
   
    background: #d4d7df;
    width: 90%;
    height: 85%;
    border-radius: 20px;
    opacity: initial;
}

#information-wrapper {
    padding-left: 5%;
    padding-top: 2.5%;
    color:#4f6b93;
    font-size: 150%;
    text-align: center;
    font-family: Calibri;
    font-weight: bold;
}

#direction_name,#salle,#equipe
{
  margin-bottom: 1%;
  margin-top: 2%;
}


#close {
    position: absolute;
    right: 1.5%;
    top: 2.5%;
    width:30px;
    height:30px;
    font-weight: bolder;
    text-align: center;
    border-radius: 100%;
    color: white;
    border: none;
    background-color: red;
}
.wrapper {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-auto-rows: auto;
  grid-auto-columns: auto;
  grid-gap: 20px;

}

.gauche
{
  color: #4f6b93;
  margin-left: 10%;
}

.droite
{
  color:#4f6b93;
  margin-top: 10%;

}
.imageclub
{
  width: 30%;
}

</style>
