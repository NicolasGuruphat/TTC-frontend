import axios from 'axios';
import { defineStore } from 'pinia'

export const useClubStore = defineStore('counter', {
  state: () => {
    return {
      clubs: {
      },
      currentSearch:{
        longitude:45.764043,
        latitude:4.835659,
      },
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
   async getClubByLocation(longitude, latitude, distance, categories, genre) {
    try {
      const baseURL="http://localhost:3001/api/search"
      const parameters = "?max_distance="+distance+"&lat="+latitude+"&lng="+longitude+"&genre="+genre+"&categories="+categories/*+"&adresse="+adresse*/;
      const request = baseURL+parameters;
      console.log(request)
      console.log(categories)
      this.clubs= await axios.get(request);
      // this.clubs = await axios.get(
      //   "http://localhost:3001/api/search/",
      //   requestBody
      // ).then
      // ((response)=>console.log(response))
      // JSON responses are automatically parsed.
    }
    catch (error) {
      console.log(error);
      return(error);
         
    }
  }
},
}
)

//       this.clubs=[{
//           "nom": "CD01 - HORS ASSOCIATION - AIN - ARA0001001 - Club",
//           "adresse": "29 Bis Avenue de Bad Kreuznach",
//           "ville": "BOURG-EN-BRESSE",
//           "telephone": "Fax : T\u00e9l bureau : 0474236296",
//           "location":{
//             "type": "Point",
//             "coordinates": [4.835659,45.764043]
//           },
//           "email": "Email : basket-ain@wanadoo.fr",
//           "site": "Site web : http://www.basketain.com",
//           "salle": [
//               "SALLE JEUNESSE LAIQUE / Mercier",
//               "plan",
//               "42 RUE CHARLES ROBIN",
//               "01000 BOURG-EN-BRESSE",
//               "T\u00e9l : 0474247893 Fax : ",
//               "Couleur des maillots VERT"
//           ],
//           "direction": {
//               "Pr\u00e9sident(e)": [
//                   "BRUN Christophe",
//                   "01000 BOURG-EN-BRESSE",
//                   "T\u00e9l 1 : 0474236296",
//                   "T\u00e9l 2 : 0629999317",
//                   "email : basket-ain-president@orange.fr"
//               ],
//               "Correspondant(e)": [
//                   "DEBIESSE-TIXIER Karine",
//                   "39160 CHAZELLES",
//                   "T\u00e9l 2 : 0648483362",
//                   "email : basket-ain-secretairegeneral@orange.fr"
//               ]
//           },
//           "equipes": [
//               "TIC U13 Masculin 2022 (PIERRE BENITE)",
//               "TIC U13 F\u00e9minin 2022 (PIERRE BENITE)"
//           ]
//     },{
//       "nom": "CD02 - HORS ASSOCIATION - AIN - ARA0001001 - Club",
//       "adresse": "29 Bis Avenue de Bad Kreuznach",
//       "ville": "BOURG-EN-BRESSE",
//       "telephone": "Fax : T\u00e9l bureau : 0474236296",
//       "location":{
//         "type": "Point",
//         "coordinates": [4.845778,45.764143]
//       },
//       "email": "Email : basket-ain@wanadoo.fr",
//       "site": "Site web : http://www.basketain.com",
//       "salle": [
//           "SALLE JEUNESSE LAIQUE / Mercier",
//           "plan",
//           "42 RUE CHARLES ROBIN",
//           "01000 BOURG-EN-BRESSE",
//           "T\u00e9l : 0474247893 Fax : ",
//           "Couleur des maillots VERT"
//       ],
//       "direction": {
//           "Pr\u00e9sident(e)": [
//               "BRUN Christophe",
//               "01000 BOURG-EN-BRESSE",
//               "T\u00e9l 1 : 0474236296",
//               "T\u00e9l 2 : 0629999317",
//               "email : basket-ain-president@orange.fr"
//           ],
//           "Correspondant(e)": [
//               "DEBIESSE-TIXIER Karine",
//               "39160 CHAZELLES",
//               "T\u00e9l 2 : 0648483362",
//               "email : basket-ain-secretairegeneral@orange.fr"
//           ]
//       },
//       "equipes": [
//           "TIC U13 Masculin 2022 (PIERRE BENITE)",
//           "TIC U13 F\u00e9minin 2022 (PIERRE BENITE)"
//       ]
// }]

