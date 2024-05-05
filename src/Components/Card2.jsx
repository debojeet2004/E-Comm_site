import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { fetchItems } from '../redux/category'


function Card2({children,img}) {
    const dispatch = useDispatch()
    return (
        // home me category ke liye card
        <Link 
            className=" border-2 border-gray-300 h-full w-[10%] flex flex-col justify-center gap-2 items-center p-2 font-semibold hover:bg-gray-200 rounded-md cursor-pointer"
            onClick={() => dispatch(fetchItems(children))}
            to="test"
        >
            <img src={img}   className='outline-none w-[80%] h-[70%] bg-cover bg-center  ' />
            <div className=' w-full flex items-center justify-center gap-1 font-bold'>
                <p className=' flex justify-center items-center text-center text-[1.1rem]'>{children}</p>
            </div>
        </Link>
    )
}

export default Card2