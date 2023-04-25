import React from 'react'
import { GrCart } from "react-icons/gr";

const Cartwidget = () => {
    return (
        <div class="btn-group d-flex align-items-center" role="group" aria-label="Basic example">
            <button type="button" class="btn btn-secondary">0<GrCart /></button>
        </div>
    )
}

export default Cartwidget