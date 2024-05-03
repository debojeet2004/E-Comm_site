import React from 'react'

function Card5({children, img}) {
    return (
        <div className=" w-[8rem] h-[8rem] flex flex-col justify-between items-center rounded bg-gray-200 p-2 hover:bg-gray-300 group cursor-pointer">
            <img src={img} alt="img" className="border border-gray-300 bg-white rounded w-full h-[70%]" />
            <p className="text-xs flex justify-center items-center text-center  font-bold w-full h-[30%] text-gray-600 group-hover:text-black">{children}</p>
        </div>
    )
}

export default Card5