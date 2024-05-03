import React from 'react'
import {Button, Card3} from '../index'




function Card4({text}) {
    return (
        <div className="w-full h-fit border border-black flex flex-col justify-center items-center gap-6">
            <p className="w-full border-b border-gray-400 h-[4rem] flex justify-start items-center  p-2 text-2xl font-bold uppercase">{text}</p>
            <div className="w-full flex justify-between items-center">
                <Button classes={`w-[3rem] h-[5rem] bg-gray-300 hover:bg-gray-400 active:bg-gray-300`}>l</Button>
                <div className="flex gap-10 justify-center items-center border border-black w-[80%] ">
                    <Card3/> 
                    <Card3/>
                    <Card3/>
                </div> 
                <Button classes={`w-[3rem] h-[5rem] bg-gray-300 hover:bg-gray-400 active:bg-gray-300`}>r</Button>
            </div>
            <Button classes={`w-[40%] h-[3rem] text-xl bg-amber-500 hover:bg-amber-600 active:bg-amber-500`}>Show More</Button>
        </div>
    )
}

export default Card4