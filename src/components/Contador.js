import React from 'react';
import '../styles/contador.css'

const Contador = ()=>{

    function aumentarProducto() {
        setClicks (clicks+ 1);
        
    };

    function quitarProductos(){
        setClicks (clicks- 1)
    };


    const [clicks, setClicks]= React.useState(0);

    if (clicks<0){
        alert ("no se pueden quitar productos")
    }

    return (
        <div class="caja">
            <h3>MATE IMPERIAL</h3>
            <button class="agregar" onClick={aumentarProducto}>+</button>
            <p class="clicks">{`${clicks}`}</p>
            <button class="quitar" onClick={quitarProductos}>-</button>
        </div>
    )
}


export default Contador;