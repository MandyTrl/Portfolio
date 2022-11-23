import profilPicture from '../ressources/mdy.jpg';
import iconLinkedIn from '../ressources/LinkIcon.png';
import iconMail from '../ressources/MailIcon.png';
import iconGit from '../ressources/GitIcon.png';
// import Contact from  './contact';

function Home() {
   return (
     <div className= "presentation_container">
      <div className= "presentation_head">
         <h1>Mandy Thorel</h1>
         <h2>Développeuse Frontend</h2>
      </div>
      <div className= "presentation">
         <div className= "presentation_groupImg">
         <img className= "presentation_photo" src= {profilPicture} alt= "profil developer mandy thorel" />
         <a href="https://www.linkedin.com/in/mandy-thorel/">
            <img className= "iconL" src= {iconLinkedIn} target= "_blank" alt= "icon social media linkedin pixel" />
         </a>
         <a href="mailto:tjorelmandy@gmail.com">
            <img className= "iconM" src= {iconMail} target= "_blank" alt= "icon contact mail pixel" />
         </a>
         <a href="https://github.com/MandyTrl">
            <img className= "iconG" src= {iconGit} target= "_blank" alt= "icon social media git pixel" />
         </a>
         </div>
         <div className= "presentation_description">
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
         <p style= {{fontSize: "1.3em", fontStyle: "italic", textAlign: "right"}}><span style={{color: "#CC00C1"}}>Bienvenue</span> sur mon site !</p>
      </div>
     </div>
   );
 }
 
 export default Home;
 