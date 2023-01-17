<template>
    <div id="main-wrapper">
        <button id="close" @click="$emit('switchDisplay')">X</button>
        <div id="information-wrapper">
           <!-- {{club}} -->
           <label id="nomClub"> ALBARINE FC</label>
        </div>

        <div class="wrapper">
          <div class = "gauche">
            <img  class= "imageclub" src="../images/logo_fond_blanc_viuz_basket.png"  alt="Impossible de charger l'image">
          </div>


          <!-- CETTE CLASS CONTIENT TOUTE LES INFO IMPORTANTE DU CLUB -->
          <div class = "droite"> 
            <label id="ville"> President(e) : </label> <label id="ville_value"> RECHEUR MARYLIN</label><br>
            <label id="Fax">Fax : </label>  <label id="Fax_value">07 80 40 60 78 </label><br>
            <label id="email">Email : </label>  <label id="Fax_value">frr@gmail.com</label><br>
            
            <label id="Fax">Site du club : </label>  <a id="s" href="https://www.albarinebc.com/">https://www.albarinebc.com/ </a><br>
            <label id="ville"> Ville : </label> <label id="ville_value"> METTRE VILLE</label><br>

          </div>


        </div>  
    </div>
</template>

<script lang="ts">

export default {
    props: {
      club: {
        required: true
      }
    }
  };

{}
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
  margin-top: 40px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-auto-rows: auto;
  grid-auto-columns: auto;
  grid-gap: 20px;

}

.gauche
{
  margin-left: 25%;
  color: #4f6b93;
}

.droite
{
  color:#4f6b93;
  margin-top: 25%;

}
.imageclub
{
  width: 70%;
}

</style>
