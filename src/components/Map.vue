<template>
  <div id="map" class="m-5"></div>
</template>

<script lang="ts">
import { onMounted } from "vue";
import { useClubStore } from '@/stores/club';
import leaflet from "leaflet";  

export default {

  watch: {
    "store.clubs": {
      handler: function (val, oldVal) {
        //Centrer la carte 
        //Placer un point rouge au centre de la recherche
        console.log(val)
        this.markers.forEach(marker=>{
          marker.remove(this.map);
        })      
        this.map.setView([this.store.currentSearch.latitude,this.store.currentSearch.longitude],13);
        // leaflet.marker([this.store.currentSearch.latitude,this.store.currentSearch.longitude]).addTo(this.map)
        val.data.forEach(element=> {
          console.log(element);
          console.log(element.location.coordinates);
          let coords = element.location.coordinates;
          let marker = leaflet.marker([coords[1], coords[0]]);
          marker.addTo(this.map).on('click', ()=>{
            this.$emit("setClub", element);
            this.$emit("displayPopUp", true);
          });
          this.markers.push(marker);
        });
      },
      deep: true,
    },
  },
  props: {
    latitude: Number,
    longtitude: Number,
  
    },
    data(){
      return {
        map: null,
        store: useClubStore(),
        markers:[]
      }
    },
    mounted(){
      this.map=leaflet.map("map").setView([this.latitude, this.longtitude], 13);
      leaflet
        .tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
          maxZoom: 19,
          attribution:
            '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
        }).addTo(this.map);
    },
  // setup(props : any, context : any){
    
    // onMounted(() => {
    //   context.map = leaflet.map("map").setView([props.latitude, props.longtitude], 13);
    //   leaflet
    //     .tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    //       maxZoom: 19,
    //       attribution:
    //         '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    //     })
    //     .addTo(context.map);
    //     leaflet.marker([props.latitude, props.longtitude]).addTo(context.map).on('click', ()=>{
    //       context.emit("club_id", 4);
    //       context.emit("displayPopUp", true);
    //     });
    //     leaflet.marker([props.latitude + 0.01, props.longtitude+ 0.01]).addTo(context.map);
    //   console.log(context.map);
    //   });
  // },

  methods:{}
}
</script>

<style second>
#map {
  height: 600px;
  width : 1100px;
  border-radius: .40rem
}
</style>
