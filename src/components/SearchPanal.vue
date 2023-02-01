<template>
  <form id="searsh" class="w-50 rounded-left bg p-4 m-5 rounded">
    <!-- ... -->
    <div class="mb-3">
      <label for="exampleInputEmail1" class="form-label">Genre</label>
      <select class="form-select" model="genre" aria-label="Disabled select example">
        <option value="f">Masculine</option>
        <option value="m">Feminine</option>
        <option value="a">Mixte</option>
      </select>
    </div>
    <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Catégorie d'âge</label>
      <select class="form-select" model="categories" aria-label="Disabled select example">
        <option value="U10-U11">U10-U11 (Poussins)</option>
        <option value="U12-U13">U12-U13 (Benjamins)</option>
        <option value="U14-U15">U14-U15 (Minimes)</option>
        <option value="U16-U17">U16-U17 (Cadets)</option>
        <option value="U18-U19-U20">U18-U19-U20 (Junior)</option>
        <option value="Seniors">Seniors</option>
      </select>
    </div>
    <div class="mb-3">
      <label for="adresse" class="form-label" >Adresse</label>
      <br>
      <input type="text" id="autocomplete" class="form-control" :placeholder="adressePlaceHolder" v-model="adresse" @focus="(adresseIsEmpty=false)" :class="{redInput:adresseIsEmpty}"/>
    </div>
    <label for="distance" model="distance">Distance : {{distance}} km</label>
    <br>
    <input type="range" id="distance" min="0" max="100" v-model="distance"> 
    <br>
    <button type="button" @click="getClubs()" class="btn">Trouve les clubs!</button>
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
      store: useClubStore(),
      adresse: "",
      adresseIsEmpty: false,
      adressePlaceHolder: " 451 Cr Emile Zola",
      distance: 0,
      latitude: null,
      longitude: null,
      categories: "U10-U11",
      genre: "m"
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
        this.adresse=place.formatted_address;
        this.store.currentSearch.latitude=place.geometry.location.lat();
        this.store.currentSearch.longitude=place.geometry.location.lng();
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
        this.store.getClubByLocation(this.longitude, this.latitude,this.distance, this.categories, this.genre);
      }
    }
  }
})
</script>


<style>
.bg
{
  background-color: #709CA7;
}

.form-select
{
  background-color: #B8CBD0;
}
#autocomplete{
  background-color:#B8CBD0 ;
}

.w-50
{
  width : 30% !important;
  height: 100%;
}


.btn
{
  background-color: #B8CBD0;
}
#distance
{
  margin-top: 5%;
  margin-bottom: 10%;
  width : 100%;  
  background-color: #137C8B;
}

.redInput::placeholder{
  color:rgb(148, 71, 71) ;
  font-weight: bold;
}
</style>
