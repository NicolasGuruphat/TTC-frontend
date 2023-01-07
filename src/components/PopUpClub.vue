<template>
    <div id="main-wrapper">
        <button id="close" @click="$emit('switchDisplay')">X</button>
        <div id="information-wrapper">
           <!-- {{club}} -->
           <label id="nomClub"> nom du club</label>
        </div>

        <div class="wrapper">
          <div class = "colonne1">

            <div class = "ligne1">
              <label id="ville"> Ville : </label> 
              <label id="ville_value"> METTRE VILLE</label>
            </div>

            <div class = "ligne2">
            <label id="Fax">Fax : </label>
            <label id="Fax_value">METTRE NUMERO </label>
            </div>

          </div>
          <div class = "colonne2">
            <label id="ville"> Ville : </label> <label id="ville_value"> METTRE VILLE</label><br>
            <label id="Fax">Fax : </label>  <label id="Fax_value">METTRE NUMERO </label><br>
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

</script>
<style scoped>
#main-wrapper {
    position: absolute;
    top: 10%;
    left: 5%;
    z-index: 1000;
    background: rgba(141, 134, 134, 0.925);
    width: 90%;
    height: 85%;
    border-radius: 20px;
}

#information-wrapper {
    padding-left: 5%;
    padding-top: 2.5%;
    color: black;
    font-size: 150%;
    height: 120px;
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
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-auto-rows: auto;
  grid-gap: 20px;
}

/* .ligne1 {
  grid-row: 1;
}
.ligne2 {
  grid-row: 2;
} */

</style>