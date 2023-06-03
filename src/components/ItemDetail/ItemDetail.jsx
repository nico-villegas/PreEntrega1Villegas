import React from 'react'
import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'

const ItemDetail = ({ id, nombre, precio, descripcion, stock, img, alt, category }) => {
    return (
        <div className="card-detail card">
            <div className="card-body">
                <div className='card-img'>
                    <img src={img} className='img-detail' alt={alt} />
                </div>
                <div className='card-content'>
                    <h5>{nombre}</h5>
                    <p className="card-text">Categoria: {category}</p>
                    <p className="card-text"> {descripcion}</p>
                    <p className="card-text">Precio: ${precio}</p>
                </div>
                <div className='card-count'>
                    <ItemCount initial={1} stock={stock} />
                </div>
            </div>
        </div>
    )
}

export default ItemDetail
