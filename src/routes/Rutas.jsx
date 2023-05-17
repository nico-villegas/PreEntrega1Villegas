import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Navbar from '../components/NavBar/NavBar'
import Footer from '../components/Footer/Footer'
import Itemlistcontainer from '../components/ItemListContainer/ItemListContainer'

const Rutas = () => {
    return (
        <BrowserRouter>
            <Navbar/>
            <Routes>
                <Route path='/' element={<Itemlistcontainer/>} />
                <Route path='/category/:categoryId' element={<Itemlistcontainer/>} />
                <Route path='/item/:itemId' element={<Itemlistcontainer/>} />
                <Route path='*' element={<h1>404 NOT FOUND</h1>} />
            </Routes>
            <Footer/>
        </BrowserRouter>
    )
}

export default Rutas
