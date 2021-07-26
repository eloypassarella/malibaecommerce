import React from 'react'
import '../styles/navBar.css';
import CartWidget from './CartWidget';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from "react-router-dom"
import image from '../assets/1.png';





function NavBar () {
   
      return (
      <nav class="topnav">
        <ul class="menu">
        <li><Link to= "/"><img src={image} alt="logo"class="logo"/></Link></li>
        <li><Link  to="/Productos" class="LinkO">Productos</Link></li>
        <li ><Link  to="/Trabajos" class="LinkO">Trabajos realizados </Link></li>
        <li ><Link  to="/Contacto" class="LinkO">Contacto</Link></li> 
        <li class="end"><Link ><CartWidget/></Link></li>
        </ul>

      </nav>

    );}

      export default NavBar;