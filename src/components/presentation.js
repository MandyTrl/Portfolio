
import profilPicture from '../ressources/mdy.jpg';

function Presentation() {
   return (
     <div className= "profil">
      <div className= "head">
         <h1>Mandy Thorel</h1>
         <h2>Développeuse Frontend</h2>
      </div>
      <div className= "group-presentation">
         <div className= "group-icon+photo">
            <img className= "img-photo" src= {profilPicture} alt= "profil developer mandy thorel" />
            <p>1</p>
            <p>2</p>
            <p>3</p>
         </div>
         <div className= "presentation">
            <p>1. import <span style={{color: "#CC00C1"}}>Présentation</span> from <span style={{color: "#FF4E07"}}>'Mandy.Thorel'</span>;
            <br></br>2.<br></br>
            3. &lt;Présentation&gt; <br></br>
                  4.  &nbsp;&nbsp;&nbsp;&nbsp;“Après une riche expérience dans le service client où <br></br>
                  5.  &nbsp;&nbsp;&nbsp;&nbsp;l’adage est : <span style={{color: "#FF880D"}}>“Chaque problème a sa solution”</span>, j’ai <br></br>
                  6.  &nbsp;&nbsp;&nbsp;&nbsp;voulu renouer avec ma <span style={{color: "#FF880D"}}>créativité</span> en la mêlant à ma vie <br></br>
                  7.  &nbsp;&nbsp;&nbsp;&nbsp;professionnelle. <br></br>
                  8   <br></br>
                  9.  &nbsp;&nbsp;&nbsp;&nbsp;C’est donc naturellement qu’en 2022 je me suis <br></br>
                  10. &nbsp;&nbsp;&nbsp;reconvertie dans le développement !” <br></br>
            11. &lt;/Présentation&gt;
            </p>
         </div>
      </div>
      <div>
         <p style= {{fontSize: "1.3em", textTransform: "italic"}}><span style={{color: "#CC00C1"}}>Bienvenue</span> sur mon site !</p>
      </div>
     </div>
   );
 }
 
 export default Presentation;
 