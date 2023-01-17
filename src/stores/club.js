import { defineStore } from 'pinia'

export const useClubStore = defineStore('counter', {
  state: () => {
    return {
      clubs: {
        10:{
          nom:"ASVEL"
        },
        10:{
          location : "ici"
        }
      }
    }
  },
  actions: {
    getClub(id) {
      return this.clubs[id];
    },
    getClubByLocation(location) {
      console.log(location)
      if(this.clubs.location == location)
      return this.clubs
      // call API
      // fill the clubs json
    },
    getAllClub() {
        try {
          const response = this.$http.get(
            "http://localhost:3001/api/clubs/"
          );
          // JSON responses are automatically parsed.
          this.posts = response.data;
          return(posts);
        } catch (error) {
          return(error);
        }
      },
  },
})


