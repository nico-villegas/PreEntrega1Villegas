import React from 'react'
import ItemCount from '../ItemCount/ItemCount'

const ItemDetail = ({ id, nombre, precio, descripcion, stock, img, alt, category }) => {
    return (
        <div className="card">
            <div className="card-body">
                <img src={img} className='img-detail' alt={alt} />
                <h5 className="card-title">{nombre}</h5>
                <div>
                    <p className="card-text">Categoria: {category}</p>
                    <p className="card-text"> {descripcion}</p>
                    <p className="card-text">Precio: ${precio}</p>
                </div>
                <div>
                    <ItemCount initial={1} stock={stock} />
                </div>
            </div>
        </div>
    )
}

export default ItemDetail
