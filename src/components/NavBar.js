import React, { Component } from "react";
import '../styles/navBar.css';
import CartWidget from './CartWidget';


class NavBar extends Component {
    render(){
      return (
      <nav class="topnav">
        <a class="active" href= "#home">Maliba Shop</a>
        <a href="#productos">Productos</a>
        <a href="#trabajos">Trabajos realizados </a>
        <a href="#contacto">Contacto</a> 
        <CartWidget/>      

      </nav>

    );}
      }

      export default NavBar;