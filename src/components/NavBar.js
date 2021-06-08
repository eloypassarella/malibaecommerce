import React, { Component } from "react";
import '../styles/navBar.css';
import CartWidget from './CartWidget';


class NavBar extends Component {
    render(){
      return (
      <nav class="topnav">
        <div class="active padding" href= "#home">Maliba Shop</div>
        <div class="padding">Productos</div>
        <div class="padding">Trabajos realizados </div>
        <div class="padding" >Contacto</div> 
        <div class="end">
        <CartWidget/>
        </div>

      </nav>

    );}
      }

      export default NavBar;