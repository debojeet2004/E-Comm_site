import React from 'react'
import { Link } from "react-router-dom"
function Button2({children,NavigateTO,classes,onclick}) {
    return (
    <Link 
    to={NavigateTO}
    onClick={onclick}
    className={`
    ${classes}
    `}
    >{children}</Link>
    )
}

export default Button2