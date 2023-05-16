import React from 'react'
import ImgProductos, {img} from '../../img/ImgProductos'
/* import { NavLink } from 'react-router-dom' */


const Item = ({ id, nombre, precio, stock, alt }) => {
    return (
        <div className="card">
            <img src={img} className="card-img-top" alt={alt} />
            <div className="card-body">
                <h5 className="card-title">{nombre}</h5>
                <p className="card-text">Precio: ${precio}</p>
                <p className="card-text">Cantidad disponible: {stock}</p>
                <button type='button' className="btn btn-primary btn-sm">Ver mas</button>
            </div>
        </div>
    )
}

export default Item
