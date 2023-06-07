import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from '../components/NavBar/NavBar'
import Itemlistcontainer from '../components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from '../components/ItemDetailContainer/ItemDetailContainer'
import { CartProvider } from '../context/CartContext'
import Cart from '../components/Cart/Cart'

const Rutas = () => {
    return (
        <BrowserRouter>
            <CartProvider>
                <Navbar/>
                <Routes>
                    <Route path='/' element={<Itemlistcontainer/>} />
                    <Route path='/category/:categoryId' element={<Itemlistcontainer/>} />
                    <Route path='/item/:itemId' element={<ItemDetailContainer/>} />
                    <Route path='/cart' element={<Cart/>} />
                    <Route path='*' element={<h1>404 NOT FOUND</h1>} />
                </Routes>
            </CartProvider>
        </BrowserRouter>
    )
}

export default Rutas
