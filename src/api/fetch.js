const Api = {
   getProjectsData() {
      return fetch('./datas').then(res => {
         return res.json()
      })
         .then(projects => console.log("Données :: ", projects))
         .catch(error => console.log(error))
   }
}

export default Api;

// const api = {
//    getBallotData() {
//      return fetch('/api/getBallotData').then(res => {
//        return res.json();
//      });
//    }
//  };
 
//  export default api;