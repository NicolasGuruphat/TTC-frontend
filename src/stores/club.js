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
   async getClubByLocation(location) {
    try {
      const rdmlocation =  
      {
        "position": {
        "lat":1.478099, 
        "long":	88.442229}
      }
      this.clubs = await axios.post(
        "http://localhost:3001/api/clubs/search",
        rdmlocation
      ).then
      ((response)=>console.log(response))
      // JSON responses are automatically parsed.
    }
    catch (error) {
            return(error);
         
    }
  }
},
}
)


