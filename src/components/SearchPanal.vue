<template>
  <form id="searsh" class="w-50 bg-white rounded-left p-4 m-5 rounded">
    <!-- ... -->
    <div class="mb-3">
      <label for="exampleInputEmail1" class="form-label">Genre</label>
      <select class="form-select" aria-label="Disabled select example">
        <option value="1">Masculine</option>
        <option value="2">Feminine</option>
        <option value="3">Mixte</option>
      </select>
    </div>
    <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Catégorie d'âge</label>
      <select class="form-select" aria-label="Disabled select example">
        <option value="1">U10-U11 (Poussins)</option>
        <option value="2">U12-U13 (Benjamins)</option>
        <option value="3">U14-U15 (Minimes)</option>
        <option value="4">U16-U17 (Cadets)</option>
        <option value="5">U18-U19-U20 (Junior)</option>
        <option value="5">Seniors</option>
      </select>
    </div>
    <div class="mb-3">
      <label for="adresse" class="form-label" >Adresse</label>
      <br>
      <input type="text" id="autocomplete" class="form-control" :placeholder="adressePlaceHolder" v-model="adresse" @focus="(adresseIsEmpty=false)" :class="{redInput:adresseIsEmpty}"/>
    </div>
    <label for="distance">Distance : {{distance}} km</label>
    <br>
    <input type="range" id="distance" min="0" max="100" v-model="distance"> 
    <div class="mb-3 form-check">
      <input type="checkbox" class="form-check-input" id="exampleCheck1">
      <label class="form-check-label" for="exampleCheck1">...</label>
    </div>
    <button type="button" @click="getClubs()" class="btn btn-primary">Trouve les clubs!</button>
    <!-- ... -->
  </form>
</template>

<script>
import { defineComponent, onMounted } from "vue";
import { useClubStore } from '@/stores/club';
import { mapGetters } from "pinia";

export default defineComponent({
  data() {
    return {
      club: useClubStore(),
      adresse: "",
      adresseIsEmpty: false,
      adressePlaceHolder: " 451 Cr Emile Zola",
      distance: 0,
      latitude: null,
      longitude: null
    }
  },
  mounted() {
    this.loadMapApi()
      .then(() => {
        this.initAutocomplete();
      })
      .catch(error => {
        console.error(error);
      });
  },
  methods: {
    loadMapApi() {
      return new Promise((resolve, reject) => {
        if (document.querySelector('#google-maps')) {
          resolve();
          return;
        }
        const script = document.createElement('script');
        script.setAttribute('id', 'google-maps');
        script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyDGFtE26t46CuEjj-3flBaUx4IaMx9e9K4&libraries=places`;
        script.onload = resolve;
        script.onerror = reject;
        document.querySelector('head').appendChild(script);
      });
    },
    initAutocomplete() { //
      const input = document.getElementById('autocomplete');
      const autocomplete = new google.maps.places.Autocomplete(input);
      autocomplete.addListener('place_changed', () => {
        const place = autocomplete.getPlace();
        this.latitude = place.geometry.location.lat();
        this.longitude = place.geometry.location.lng();
      });
    },
    getClubs() {
      //console.log(this.latitude, this.longitude);
      if(this.adresse === null || this.adresse.trim() === ""){
        this.adresseIsEmpty=true;
        this.adressePlaceHolder="Adresse doit contenir une valeur"
      }else{
        this.club.getClubByLocation(this.adresse);
      }
    }
  }
})
</script>
