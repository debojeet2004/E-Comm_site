import {Container, Button} from "../index"
import { Link,NavLink } from "react-router-dom"
import  {Sample_ECom_Dark} from "../Assets/assets"

function Header() {
    return (
        <Container>
            <div className="flex justify-around items-center py-4 font-semibold text-xl  z-10 bg-slate-50">

                <NavLink
                    to="/"
                    className={`flex items-center justify-center gap-3`}
                >
                <div className=" overflow-hidden flex justify-center items-center">
                    <img src={Sample_ECom_Dark} alt="Logo" className=" w-[3rem] bg-contain scale-[3]" />
                </div>
                <p className=" text-2xl">Sample-Ecom</p>
                </NavLink>

                <input type="text" placeholder="Searchbar" className="w-[50%] border border-black p-2" />

                <NavLink
                    to="cart"
                    className={
                        ({isActive}) => `${isActive ? "text-orange-700" : "text-gray-700"}   
                        duration-200 cursor-pointer transition-all `}
                >
                Cart
                </NavLink>

                <NavLink
                    to="wishlist"
                    className={
                        ({isActive}) => `${isActive ? "text-orange-700" : "text-gray-700"}   
                        duration-200 cursor-pointer transition-all `}
                >
                Wishlist
                </NavLink>

                <div>
                <Button
                    // NavigateTO={`/login`}
                    classes={`border-4 border-sky-200 px-6 py-2 bg-sky-500 hover:bg-sky-700  active:bg-sky-600 rounded-md  `}
                >Login</Button>
                </div>

            </div>
        </Container>
    )
}

export default Header