import React from 'react'
import Navbaritem from '../NavBaritem/NavBaritem'
import Cartwidget from '../CartWidget/CartWidget'




const Navbar = (props) => {

    const nav_item = [
        {
            path: "/category/imperial",
            name: "Imperiales",
        },
        {
            path: "/category/camioneros",
            name: "Camioneros"
        },
        {
            path: "/category/torpedos",
            name: "Torpedos"
        }
    ]


    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-secondary">
            <div className="container-fluid">
                <p className="navbar-brand" >{props.navbarLogo}</p>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse d-flex justify-content-end" id="navbarNav">
                    <ul className="navbar-nav">
                        {
                            nav_item.map(({ path, name }, index) => (
                                <Navbaritem path={path} name={name} key={index} />
                            ))
                        }
                        <Cartwidget />
                    </ul>
                    {/*  <ul>
                        <NavLink to={`/category/imperial`} className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'} />
                        <NavLink to={`/category/camioneros`} className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'} />
                        <NavLink to={`/category/torpedos`} className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'} />

                    </ul> */}
                </div>
            </div>
        </nav>
    )
}

export default Navbar