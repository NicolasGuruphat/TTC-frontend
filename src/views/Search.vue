<template>
  <div class="d-flex flex-row w-75 justify-content-center">
    <SearchPanal @clubs="clubs = $event"></SearchPanal>
    <Map :latitude = 45.764043 :longtitude= 4.835659 @setClub="club = $event" :clubs="clubs" @displayPopUp = "displayPopUp = $event">
    </Map>
    <PopUpClub v-if="displayPopUp" @switchDisplay="displayPopUp = !displayPopUp" :club="club"/>
    <div> - </div>
  </div>
  <!-- bouton temporaire -->
  
</template>

<script lang="ts">
import Map from "../components/Map.vue";
import SearchPanal from "../components/SearchPanal.vue";
import PopUpClub from "@/components/PopUpClub.vue";
export default {
  components: {
    Map,
    SearchPanal,
    PopUpClub
  },
  data() {
    return {
      displayPopUp: false,
      clubs : ['first', 'second', 'third', 'fourth', 'five', 'six', 'seven', 'eight'],
      club_id : 0,
      club: null
    }
  }
}
</script>



<style>

.w-75
{
  width : 100% !important;
}

.justify-content-center {
  justify-content: left !important;
}
</style>
