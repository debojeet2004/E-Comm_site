import { Link } from "react-router-dom"
function Button({children, classes,onclick, NavigateTO}) {
    return <Link 
    to={NavigateTO}
    onClick={onclick}
    className={`
    flex
    justify-center
    items-center
    font-bold 
    rounded
    text-white 
    ${classes}
    `}
    >{children}</Link>
}

export default Button