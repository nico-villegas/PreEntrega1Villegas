import React from 'react'
import Navbaritem from './Navbaritem'
import { GrCart } from "react-icons/gr";

const Navbar = (props) => {
    const item = ['Inicio','Productos','Nosotros','Contacto']

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-secondary">
            <div className="container-fluid">
                <p className="navbar-brand" >{props.navbarLogo}</p>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        {item.map((texto,index) =>(
                            <Navbaritem texto={texto} key={index}/>
                        ))}
                        <Navbaritem texto={<GrCart></GrCart>}/>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar