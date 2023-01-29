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
        if(val){
          this.markers.forEach(marker=>{
            marker.remove(this.map);
          })      
          this.map.setView([this.store.currentSearch.latitude,this.store.currentSearch.longitude],13);
          const customIcon = leaflet.divIcon({
            className: 'custom-icon',
            html: `<span style="color: #709CA7; background-color:transparent;font-size:20px; font-weight: bold">X</span>`
          });
          let searchMarker=leaflet.marker([this.store.currentSearch.latitude,this.store.currentSearch.longitude], {icon: customIcon}).addTo(this.map);
          this.markers.push(searchMarker);
          val.data.forEach(element=> {
            let coords = element.location.coordinates;
            let marker = leaflet.marker([coords[1], coords[0]]);
            marker.addTo(this.map).on('click', ()=>{
              this.$emit("setClub", element);
              this.$emit("displayPopUp", true);
            });
            this.markers.push(marker);
          });
        }
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
