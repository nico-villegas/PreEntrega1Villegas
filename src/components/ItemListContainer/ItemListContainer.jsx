import React, { useEffect, useState } from 'react';
import './ItemListContainer.css'
import { getProductByCategory, getProducts } from '../../asyncMock';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';

const Itemlistcontainer = ({ greeting }) => {
    const [products, setProducts] = useState([])

    const { categoryId } = useParams()

    useEffect(() => {
        const asyncFunc = categoryId ? getProductByCategory : getProducts 

        asyncFunc(categoryId)
            .then(response => {
                setProducts(response)
            })
            .catch(error => {
                console.error(error)
            })
    }, [categoryId])


    return (
        <div className='item-list-container'>
           {/*  <h1>{greeting}</h1> */}
            <ItemList products={products}/>
        </div>
    );
};

export default Itemlistcontainer;