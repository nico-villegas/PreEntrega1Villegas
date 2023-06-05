import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Navbar from '../components/NavBar/NavBar'


import Itemlistcontainer from '../components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from '../components/ItemDetailContainer/ItemDetailContainer'

const Rutas = () => {
    return (
        <BrowserRouter>
            <Navbar/>
            <Routes>
                <Route path='/' element={<Itemlistcontainer/>} />
                <Route path='/category/:categoryId' element={<Itemlistcontainer/>} />
                <Route path='/item/:itemId' element={<ItemDetailContainer/>} />
                <Route path='*' element={<h1>404 NOT FOUND</h1>} />
            </Routes>
        </BrowserRouter>
    )
}

export default Rutas
