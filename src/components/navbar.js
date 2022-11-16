import React from 'react';
import { Link } from "react-router-dom";

function Navbar() {
   return (
     <div className= "navbar_container">
      <li>
         <Link to= "/">Home</Link>
      </li>
      <li>
         <Link to= "/cv">CV</Link>
      </li>
      <li>
         <Link to= "/projects">Projects</Link>
      </li>
      <li>
         <Link to= "/contact">Contact</Link>
      </li>
     </div>
   );
 }
 
 export default Navbar;