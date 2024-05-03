import { useDispatch } from "react-redux"
import { Brand, Delivery, Replacement, Setup, Warranty } from "../Assets/assets"
import {Button, Card5,} from "../index"
import { addItem } from "../redux/CartSlice"

function Card6({id,title,category,description,brand,rating,stock,discount,price,images,thumbnail}) {
    const  dispatch = useDispatch()
    return (
        <div className="p-2 flex justify-between gap-2">
                <div className=" w-fit h-fit p-4">
                    <div className="w-[40rem] h-[40rem] p-4 flex gap-2">
                        <div className="border border-gray-200 w-[20%] h-full flex flex-col">
                            <img src={images[0]} alt="" className="w-full h-[8rem] " />
                            <img src={images[1]} alt="" className="w-full h-[8rem] " />
                            <img src={images[2]} alt="" className="w-full h-[8rem] " />
                            <img src={images[3]} alt="" className="w-full h-[8rem] " />
                            <img src={images[4]} alt="" className="w-full h-[8rem] " />
                        </div>
                        <div className="border border-gray-300 w-full h-full ">
                            <img src={thumbnail} alt="" className="bg-cover bg-center w-full h-full"/>
                        </div>
                    </div>
                    <div className="flex justify-center gap-10  py-4">
                        <Button 
                            classes={`w-[50%] h-[3rem] bg-amber-500 hover:bg-amber-600 active:bg-amber-700`}
                            onclick={() => dispatch(addItem({id,title,category,description,brand,rating,stock,discount,price,images,thumbnail}))}
                            >Add to Cart</Button>
                        <Button classes={`w-[50%] h-[3rem] bg-amber-700 hover:bg-amber-800 active:bg-amber-600`}>Buy Now</Button>
                    </div>
                </div>

                <div className=" w-[60%] p-4 flex flex-col justify-around gap-10">
                    <div className=" flex flex-col gap-8">
                        <p  className=" uppercase text-sm">Catagoery : <span>{category}</span></p>
                        <div className=" text-4xl">
                            <p className="font-semibold">{title}</p>
                        </div>
                        <div className="">
                            <p>{description}</p>
                        </div>
                        <p>Brand: <span>{brand}</span></p>
                        <div className=" ">
                            <div className="flex gap-5 items-center">
                                <p>Rating : <span>{rating}</span></p>
                                <p className="text-green-600 font-bold text-sm">In Stock 
                                    <span className="text-gray-300"> | </span>
                                        <span className="text-amber-700 font-semibold">{stock} items left</span>
                                </p>
                            </div>
                        </div>
                        <div className="flex items-center gap-2 text-2xl">
                            <p className="  text-lg"><span>{discount}</span>% discount</p>
                            <p className="  flex justify-center font-bold">₹{price}</p>
                        </div>
                    </div>
                    <div className=" w-full flex justify-between p-2 ">
                        <Card5  img={Replacement}>Service & Replacement</Card5>
                        <Card5  img={Delivery}>Free Delivery</Card5>
                        <Card5  img={Warranty}>Year Warranty</Card5>
                        <Card5  img={Brand}>Top Brand</Card5>
                        <Card5  img={Setup}>Device Setup available</Card5>
                    </div>
                </div>
            </div>
    )
}

export default Card6