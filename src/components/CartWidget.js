import React , { Component } from "react";
import '../styles/cardWidget.css'
import image from '../assets/carrito.png';

class CardWidget extends Component {
    render (){
    return (
        <div>
            <img src={image} alt="carrito" class="carrito"/>
        </div>
    );
        
    }
}

export default CardWidget;