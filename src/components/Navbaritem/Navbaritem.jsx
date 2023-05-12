import React from 'react'
import { NavLink } from 'react-router-dom';

const Navbaritem = (props) => {
    return (
            <li className="nav-item">
                <NavLink className={"nav-link active m-1"} aria-current={"page"} to={props.path} >{props.name}</NavLink>
            </li>
    )
}

export default Navbaritem
