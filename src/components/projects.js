import Footer from './footer';
import iconGit from '../ressources/GitIcon.png';
import Api from '../api/datas'
import React, { useEffect, useState } from 'react';

function Projects () {
   const [datas, setDatas] = useState([]);
   
   useEffect(() => {
      async function fetchData(){
        let rawResponse = await fetch(Api)
        let response = await rawResponse.json();
        setDatas(response);
      }
    fetchData();
    }, []);

   console.log("données:: ", datas);

   return (
      <div className= "projects">
         <div className= "project_groupImg">
            <img alt= "img projet" />
            <img className= "iconG" src= {iconGit} target= "_blank" alt= "icon social media git pixel" />
         </div>
         <div className= "project_txt">
            <h3>Projet 1</h3>
            <div className= "project_desc">
               <p>Description</p>
            </div>
            <div className= "project_groupLabels">
               <p className= "label">Techno 1</p>
               <p className= "label">Techno 2</p>
            </div>
         </div>
         <footer>
            <Footer />
         </footer>
      </div>
   );
  }

export default Projects;