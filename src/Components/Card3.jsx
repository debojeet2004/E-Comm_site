import {Button , Button2} from "../index"
import { useDispatch } from "react-redux"
import { addItem } from "../redux/CartSlice"
import { addWishItem } from "../redux/WishSlice";
import { Link } from "react-router-dom";
import { Product } from "../redux/ProductPageSlice";




function Card3({ id, title, price, thumbnail, rating,brand,description,stock,category,images,discountPercentage}) {
    const dispatch =  useDispatch()
    const somthing = true;
    return (
        <Link 
            className="border-zinc-300 hover:border-zinc-400 hover:scale-[1.04] border-2 text-black bg-white min-w-[20rem] min-h-[33rem] max-w-[20rem] max-h-[33rem] rounded-lg p-3 flex flex-col justify-between items-center"
            onClick={() => dispatch(Product({id, title, price, thumbnail, rating,brand,description,stock,category,discountPercentage,images}))}
            to="products"
            // onclick={() => console.log("hmm")}
            >
            <img className='w-full bg-contain bg-center h-[17rem] border border-gray-200' src={thumbnail} alt="image" />
            <div className=" w-full flex justify-between items-center p-1 ">
                <div className="w-[85%]  font-bold text-xl line-clamp-2" >{title}</div>
                <Button 
                    classes='text-2xl border-2 border-gray-300 bg-gray-300 px-2 rounded-lg hover:bg-neutral-300 hover:text-zinc-600 active:bg-neutral-400 active:text-white' 
                    onclick={() => dispatch(addWishItem({id, title, price, thumbnail, rating, brand, description, stock,category}))}
                >♥</Button>
            </div>
            <div className=" w-full flex flex-col gap-1 justify-between items-center ">
                <div className="w-full ">
                    <p className="text-sm text-gray-500 line-clamp-2 py-1  ">{description}</p>
                </div>
                <div className="flex w-full items-center justify-between">
                    <div className=" flex flex-col  gap-1  w-full text-xs font-semibold items-start ">
                        <p className="text-sm text-gray-600 line-clamp-1">Brand: {brand}</p>      
                        <p>Rating: {rating} </p>
                    </div>
                    <div className="font-bold w-full h-full flex justify-end text-3xl">₹{price}</div>
                </div>
            </div>
            <div className="w-full flex justify-between items-center">

            {somthing ? (
                <div className="w-full flex justify-center items-center">
                    <Button
                        NavigateTO="/products"
                        classes={'w-[100%] h-[3rem] bg-sky-500 hover:bg-sky-700 active:bg-sky-600'} 
                    >Show more</Button>
                </div>
            ) : (
                <div className="w-full flex justify-between items-center">
                    <Button 
                        classes={'w-[45%] h-[3rem] bg-sky-500 hover:bg-sky-700 active:bg-sky-600'} 
                        onclick={() => dispatch(addItem({id, title, price, thumbnail, rating, brand, description, stock,category}))}>
                    Add to Cart
                    </Button>

                    <Button 
                        classes={'w-[45%] h-[3rem] bg-sky-500 hover:bg-sky-700 active:bg-sky-600'} 
                        // onclick={() => dispatch()}
                    >
                    Buy Now
                    </Button>
                </div>
            )}
            </div>
            
        </Link>
    )
}

export default Card3