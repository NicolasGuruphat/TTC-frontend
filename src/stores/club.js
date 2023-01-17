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
      async getAllClub() {
        try {
          const response = await this.$http.get(
            "http://localhost:3001/api/clubs/"
          );
          // JSON responses are automatically parsed.
          this.posts = response.data;
          console.log(posts);
        } catch (error) {
          console.log(error);
        }
      },
  },
})


