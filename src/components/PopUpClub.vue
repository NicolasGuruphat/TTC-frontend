<template>
    <div id="main-wrapper">
        <button id="close" @click="$emit('switchDisplay')">X</button>
        <div id="information-wrapper">
           <!-- {{store.mesClubs}} -->
           <label id="nom_club">{{ club.nom }}</label><br>
           
        </div>

        <div class="wrapper">



          <!--Image-->
          <div class = "image">
            <img  class= "imageclub" src="../images/logo_fond_blanc_viuz_basket.png"  alt="Impossible de charger l'image">
          </div>

        <!-- ADRESSE-->
        <div class = "adresse"> 
            <div class = "contact">
              <label id="adresse"> Adresse</label><label id="adresse_club"> : {{ club.adresse }} </label><br>
                <label id="mail_club">{{ club.email }}</label><br>
                <label id="fax_club"> {{  club.telephone }}</label> <br>
                <label id="siteWeb_club"> {{ club.site }}</label> <br>
                <label id="ville"> Ville : </label> <label id="ville_club"> {{ club.ville }}</label><br>
            </div>
          </div>

        <!--DIRECTION-->
        <div class = "direction"> 
            <div class = "ligne1" v-for="direction,key in club.direction" >
               <label id="direction_name">{{ key }} :</label>
               <div v-for="item in direction">
                    <label id="item">  {{ item }} </label>   
              </div>  
          </div>
        </div>

        <!--SALLE-->
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
    position:absolute;
    top: 10%;
    left: 5%;
    z-index: 1000;
    background: #dee7fa;
    width: 90%;
    height: 85%;
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

#direction_name,#salle,#equipe
{
  margin-bottom: 2%;
  margin-top: 1%;
}

#titre
{
  margin-top: 2%;
  margin-bottom: 2%;
  float: left;
}
.ligne1
{
  margin-top: 2%;
  margin-left: 2%;
  float: left;
  
}

.ligne2
{
  margin-left: 2%;
  float: left;
  
}

.equipe
{
  float :left;
}
.direction
{
  padding-left: 10%;
  margin-top: 10%;
  padding-top: 5%;
  background-color: #7f7f7f;
  padding-bottom: 5%;
  height: auto;
  grid-row: 2;
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
  color : white;
  size: 100%;
  
}
.adresse
{
  margin-top: 15%;
  padding-top: 2%;
  padding-left: 10%;
  background-color: #7f7f7f;
  height: auto;
  border-radius: 20px;
  color : white;

}
.salle_equipe
{
  padding-top: 5%;
  padding-left: 10%;
  margin-top: 15%;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
  background-color: #7f7f7f;
  padding-bottom: 5%;
  height: auto;
  grid-row: 2;
  color : white;
  size: 100%;
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
  grid-template-columns: 60% 40%;
  grid-template-rows: 40% 60%;
  position: relative;
  width: 90%;
  height: 85%;
  padding-left: 5%;
}
.imageclub
{
  width: 40%;
  columns: 1;
  grid-row: 1;
}
#nom_club
{
  color:#7f7f7f;
}

</style>
