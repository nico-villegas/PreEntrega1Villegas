import React from 'react'


const Navbaritem = (props) => {
    return (
        <div>
            <li className="nav-item">
                <p className="nav-link active m-1" aria-current="page" >
                    {props.texto}
                </p>
            </li>
        </div>
    )
}

export default Navbaritem
