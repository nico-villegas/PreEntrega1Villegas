import React, { useEffect, useState } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import { getProductById } from '../../asyncMock';
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null)

    const { itemId } = useParams()

    useEffect(() => {
        getProductById(parseInt(itemId))
        .then(response => {
            setProduct(response)
        })
        .catch(error => {
            console.error(error)
        })
    }, [])


    return (
        <section className='container-detail'>
            <ItemDetail {...product} />
        </section>
    )
}

export default ItemDetailContainer
