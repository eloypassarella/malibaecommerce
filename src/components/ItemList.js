import React from 'react';
import { useParams } from 'react-router-dom';

import '../styles/contador.css';

import Item from './Item'



function ItemList (){
    const items = [
        { id:"A-01", producto: "mate imperial" , descripcion: "es un mate unico en su especie", stock: 0},
        { id:"A-02", producto: "mate Torpedo", descripcion: "es un mate que no se puede grabar", stock: 7},
        { id:"A-03", producto: "mate de Plástico", descripcion: "es un mate donde se lava la yerba rapido", stock: 0},
      ];


      
    return (
        <div class="estructura">
            
            {
                items.map((post, index)=>{return <div class="caja">
                    <p id={index}>{post.producto}</p>
                    <p id={index}>{post.stock}</p>
                    <Item id={useParams} />
                    
                   
                    
                </div>})
            }
            
        </div>
    )
    
    

}

export default ItemList;