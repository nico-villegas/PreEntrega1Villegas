import React from 'react'
import Navbaritem from '../NavBaritem/NavBaritem'
import Cartwidget from '../CartWidget/CartWidget'



const Navbar = (props) => {
    const item = ['Inicio', 'Productos', 'Nosotros', 'Contacto']

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-secondary">
            <div className="container-fluid"> 
                <p className="navbar-brand" >{props.navbarLogo}</p>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse d-flex justify-content-end" id="navbarNav">
                    <ul className="navbar-nav">
                        {item.map((texto, index) => (
                            <Navbaritem texto={texto} key={index} />
                        ))}
                        <Cartwidget />
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar