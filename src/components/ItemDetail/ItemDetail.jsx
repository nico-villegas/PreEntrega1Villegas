import React from 'react'
import ItemCount from '../ItemCount/ItemCount'

const ItemDetail = ({ id, nombre, precio, descripcion, stock, img, alt, category }) => {
    return (
        <div className="card">
            <img src={img} className="card-img-top" alt={alt} />
            <div className="card-body">
                <h5 className="card-title">{nombre}</h5>
                <div>
                    <p className="card-text">Categoria: {category}</p>
                    <p className="card-text"> {descripcion}</p>
                    <p className="card-text">Precio: ${precio}</p>
                </div>
                <div>
                    <ItemCount initial={1} stock={stock}/>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail
