import {React , useState ,useEffect} from 'react'
import {Button, Button2} from '../index'
import { addItem, decreaseItem, increaseItem, removeItem } from '../redux/CartSlice'
import { removeWishItem } from '../redux/WishSlice'
import { useDispatch } from 'react-redux'
// import { Link } from 'react-router-dom'
import { Product } from '../redux/ProductPageSlice'

function Card1(
    {
        id,
        title,
        description,
        rating, 
        category, 
        thumbnail, 
        price, 
        stock, // not used 
        quantity, 
        wishlistCard,
    }
) {
    const dispatch = useDispatch()
    const stockStatus = stock ? (<p className='text-green-500'>In Stock</p>) : (<p className='text-red-600'>Out of Stock</p>);
    

return (
    <div
        // NavigateTO={`/products`}
        className='w-full h-[20rem] p-4 flex flex-col justify-between items-center rounded-lg bg-zinc-200'
        // onclick={dispatch(Product({id,title,description,rating,category,thumbnail,price,stock,quantity,wishlistCard}))}
        // onclick={() => console.log("helo")}
        >

        <div className='p-2 flex w-full justify-between items-start h-[70%] rounded-md bg-gray-100'>
            <img src={thumbnail} alt="image :(" className=' w-[18%] h-[100%] bg-contain bg-center border border-gray-300' />
            
            <div className='w-[80%] h-[100%] flex flex-col justify-evenly items-center gap-2 '>
                <p className='w-full text-2xl font-semibold py-2'>{title}</p>
                <p className='w-full text-lg font-normal'>{description}</p>
                <div className=' w-full text-sm flex justify-between items-center py-2'>
                    <div className='flex  justify-start gap-3 items-center w-[60%]  '>
                        <p>Cataegory: <span>{category}</span></p>
                        <p>Rating: <span>{rating}</span></p>
                        <p className='text-green-500 font-semibold text-sm'>{stockStatus}</p>
                    </div>
                    <div className=' flex w-[50%] justify-end gap-10 items-center'>
                        <p className='font-normal text-xl'>Price: <span className='font-semibold'>₹{price}</span></p>
                        {
                        !wishlistCard && (
                            <p className='font-normal text-xl'>Total: <span className='font-bold'>₹{quantity*price}</span></p>
                        )
                        }
                    </div>
                </div>
            </div>
        </div>


        {wishlistCard ? (
            <div className='w-full p-2 flex justify-end items-center gap-10'>
            <Button
                classes={`h-[3.5rem] w-[16rem] text-lg bg-sky-500 hover:bg-sky-700 active:bg-sky-600`}
                onclick={() => dispatch(addItem({id,price,title,description,rating,category,thumbnail,stock}))}
            >
            Add to Cart
            </Button>
            <Button
                classes={`h-[3.5rem] w-[16rem] text-lg bg-sky-500 hover:bg-sky-700 active:bg-sky-600`}
                onclick={() => dispatch(removeWishItem(id))}
            >
            Remove
            </Button>
        </div>
        ) : (
            <div className='w-full h-[25%] p-2 flex  justify-between items-center'>
            <div className='flex justify-between items-center w-[20%] '>
                <Button 
                    classes={`h-[3rem] w-[3rem] text-2xl bg-gray-400 hover:bg-gray-600 active:bg-gray-500`}
                    onclick={() => dispatch(decreaseItem(id))}    
                >-</Button>
                <p className=' border-2 border-gray-500 rounded w-[3rem] h-[3rem] flex justify-center items-center'>{quantity}</p>
                <Button 
                    classes={`h-[3rem] w-[3rem] text-2xl bg-gray-400 hover:bg-gray-600 active:bg-gray-500`}
                    onclick={() => dispatch(increaseItem(id))}     
                >+</Button>
            </div>
            <div className=' flex justify-between items-center w-[45%] '>
                <Button 
                    classes={`h-[3rem] w-[12rem] text-lg bg-sky-500 hover:bg-sky-700 active:bg-sky-600`}
                    // onclick={() => dispatch()}    
                >Buy Now</Button>
                <Button 
                    classes={`h-[3rem] w-[12rem] text-lg bg-sky-500 hover:bg-sky-700 active:bg-sky-600`}
                    onclick={() => dispatch(removeItem(id))}    
                >Remove</Button>
            </div>
        </div>
        )}
    </div>
)
}

export default Card1