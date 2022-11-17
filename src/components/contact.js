import TRex from '../ressources/trex.png';

function Contact () {
   return (
      <div className= "contact">
         <form method= "post">
            <input type= "text" name= "name" placeholder= "Nom" required />
            <input type= "email" name= "email" placeholder= "Email" required />
            <textarea name= "message" placeholder= "Message" required />
            <img className= "Trex" src= {TRex} alt= "trex" />
            <button type= "submit" value="Contactez-moi">Contactez-moi</button>
         </form>
      </div>
   );
  }

export default Contact;