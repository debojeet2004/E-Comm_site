import React from 'react'

function Card2({children,img}) {
    return (
        // home me category ke liye card
        <div className=" h-full w-[10%] flex flex-col justify-center gap-2 items-center p-2 font-semibold hover:bg-gray-200 rounded-md cursor-pointer">
            <img src={img}  className='border border-black w-[80%] h-[70%] bg-cover bg-center  rounded-md' />
            <div className=' w-full flex items-center justify-center gap-1 font-bold'>
                <p className=' flex justify-center items-center text-center text-[1.1rem]'>{children}</p>
                <div>⬇️</div>
            </div>
        </div>
    )
}

export default Card2