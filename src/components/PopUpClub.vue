<template>
    <div id="main-wrapper">
        <button id="close" @click="$emit('switchDisplay')">X</button>
        <div id="information-wrapper">
           <!-- {{store.mesClubs}} -->
           <label id="nom_club">{{ club.nom }}</label><br>
           
        </div>

        <div class="wrapper">
          <div class = "colonne1">
            <img  class= "imageclub" src="../images/logo_fond_blanc_viuz_basket.png"  alt="Impossible de charger l'image">
            <div class ="direction">
            <div class = "ligne" v-for="direction,key in club.direction" >
              <label id="direction_name">{{ key }} :</label>
              <div v-for="item in direction">
                    <label id="item">  {{ item }} </label>   
              </div>  
              </div>
            </div>
          </div>


          <!-- CETTE CLASS CONTIENT TOUTE LES INFO IMPORTANTE DU CLUB -->
          <div class = "colonne2"> 
            <div class = "contact">
              <label id="adresse"> Adresse</label><label id="adresse_club"> : {{ club.adresse }} </label><br>
                <label id="mail_club">{{ club.email }}</label><br>
                <label id="fax_club"> {{  club.telephone }}</label> <br>
                <label id="siteWeb_club"> {{ club.site }}</label> <br>
                <label id="ville"> Ville : </label> <label id="ville_club"> {{ club.ville }}</label><br>
            </div>
            <div class="salle_equipe">
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
    </div>
</template>

<script lang="ts">


import { defineComponent, onMounted } from "vue";
import { mapActions, mapGetters } from "pinia";


export default defineComponent({
  props:{
    club: {default:{}}
  },
})

</script>
<style scoped>
#main-wrapper {
    position:fixed;
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
  margin-bottom: 1%;
  margin-top: 1%;
}

.ligne
{
  float: left;
  margin-left : 4%;
}
.direction
{
 
  margin-top: 10%;
  background-color: #7f7f7f;
  padding-left: 2%;
  height: auto;
  grid-row: 2;
  columns: 1;
  border-radius: 20px;
  color : white;
}
.contact
{
  margin-top: 10%;
  background-color: #7f7f7f;
  height: auto;
  grid-row: 2;
  border-radius: 20px;
  color : white;

}
.salle_equipe
{
  margin-top: 10%;
  background-color: #7f7f7f;
  height: auto;
  grid-row: 2;
  border-radius: 20px;
  color : white;
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
  grid-template-columns: repeat(2, 60%);
  grid-template-rows: repeat(2, 1fr);
  position: relative;
  width: 90%;
  height: 85%;
  padding-left: 5%;
}
/* 
.colonne1
{
  color: white ;
  margin-left: 10%;
  height: auto;
}

.colonne2
{
  align-content: center;
  color:white;
  margin-top: 10%;
  margin-left: 10%;
}
.colonne3
{
  align-content: center;
  color:white;
  margin-top: 10%;
  margin-left: 10%;
}

*/
.imageclub
{
  width: 40%;
  columns: 1;
  grid-row: 1;
} 

</style>
