import TRex from '../ressources/TRex.png'

function Contact () {
   return (
      <div className= "contact">
         <form method= "post">
            <input type= "text" 
            name= "name" 
            placeholder= "Nom" 
            autoComplete= "on"
            required />
            <input type= "email" 
            name= "email" 
            placeholder= "Email" 
            autoComplete= "on"
            required />
            <textarea name= "message" 
            placeholder= "Message" 
            autoCorrect= "on"
            required />
            <img className= "Trex" src= {TRex} alt= "trex" />
            <button type= "submit" value="Contactez-moi">Contactez-moi</button>
         </form>
      </div>
   );
  }

export default Contact;