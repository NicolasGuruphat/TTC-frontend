import axios from 'axios';
import { defineStore } from 'pinia'

export const useClubStore = defineStore('counter', {
  state: () => {
    return {
      clubs: {
      }
    }
  },
  getters:
  {
    mesClubs() 
    {
      return this.clubs;
    }
    
  },
  actions: {
    getClubByLocation(location) {
      console.log(location)
      if(this.clubs.location == location)
      return this.clubs
        const response = axios.get(
          "http://localhost:3001/api/clubs/"
        ).then(response =>{
           (this.clubs = response.data)
           console.log(this.clubs)
        }
        )
       
        // JSON responses are automatically parsed.
      
       
      // call API
      // fill the clubs json
      }
        // async getAllClub() {
    //     try {
    //       const response = await this.$http.get(
    //         "http://localhost:3001/api/clubs/"
    //       );
    //       // JSON responses are automatically parsed.
    //       this.posts = response.data;
    //       return(posts);
    //     } catch (error) {
    //       return(error);
    //     }
    //   },
  },

},)


