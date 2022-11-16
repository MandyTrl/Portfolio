function Footer () {
   
//       [ STYLES ]        //
   const style = {
      fontSize: "0.8em",
      fontStyle: "italic",
      fontFamily:" Anonymous Pro, monospace",
      textTransform: "capitalize",
      letterSpacing: "0",
  }
   const stylePoint = {
      fontSize: "4em",
      margin: "0 0.2em 0.6em 0.2em",
  }

   return (
      <div className= "footer">
         <p>Coded by Mandy Thorel</p>
         <p style= {stylePoint} >.</p>
         <p style= {style} >Merci de votre viste</p>
      </div>
   );
  }

export default Footer;