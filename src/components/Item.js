import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Item (){   

const items = [
    { id:"A-01", producto: "mate imperial" , descripcion: "es un mate unico en su especie", stock: 0},
    { id:"A-02", producto: "mate Torpedo", descripcion: "es un mate que no se puede grabar", stock: 7},
    { id:"A-03", producto: "mate de Plástico", descripcion: "es un mate donde se lava la yerba rapido", stock: 0},
  ];

    return (
        <div id="btnmas">
            
            <button onClick=
            {
                    items.map((post, index)=>{return <div>
                    <p id={index}>{post.descripcion}</p>                   
                    </div>})
            }> ver mas </button>          

        </div>
    )
}


export default Item;
