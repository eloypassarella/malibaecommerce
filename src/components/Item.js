import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom';

function Item (){   


    return (
        <div id="btnmas">
            
            <button > <Link to="/Productos/ItemDetail/:id"> ver mas</Link> </button>          

        </div>
    )
}


export default Item;
