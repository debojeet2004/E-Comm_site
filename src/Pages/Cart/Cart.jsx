import { Card1, Container, Button } from "../../index";
import { Empty_Cart } from "../../Assets/assets";
import { useSelector } from "react-redux";
// import {React , useState ,useEffect} from 'react'



function Cart() {
  const Cart = useSelector(state => state.Cart)
  // console.log(Cart);
  const pricesArray = Cart.map(item => item.price);
  const total_items = Cart.map(item => item.quantity).reduce((sum, item) => sum + item,0);
  const totalPrice = Cart.reduce((total, item) => total + (item.price * item.quantity), 0) ;  // from chatgpt
  // const deliveryCharge = total_items * 10;  // not logical in ecom 
  const deliveryCharge = Cart.length * 20;
  const Total_Amount = totalPrice + deliveryCharge;


  const EmptyORnot = () =>{
    return Cart.length === 0 ? true : false;
  }
  const cartEmpty = EmptyORnot();
  return (
    <Container>
      {cartEmpty ? (
        
          <div className="flex justify-center items-center flex-col gap-4">
              <img src={Empty_Cart} alt="oops Empty Cart" className="h-[30rem]" />
              <h2 className="text-4xl">Your cart is empty!</h2>
              <p>Explore our wide selection and find something you like</p>
              <Button NavigateTO="/"  classes={'w-[8rem] h-[3rem] bg-sky-500 hover:bg-sky-700 active:bg-sky-600'}>Shop Now</Button>
          </div>
      ):(
        <div className="flex justify-between items-start p-8 ">
          <div className="w-[70%] flex flex-col gap-5">
            <div className="p-4 flex justify-center items-center font-bold text-4xl rounded-lg bg-gray-200">
              <p>ITEMS IN YOUR CART</p>
            </div>
            {
              Cart.map(
                (item) => {
                  return <Card1
                    key={item.id}
                    id={item.id}
                    title={item.title}
                    category={item.category}
                    description={item.description}
                    price={item.price}
                    rating={item.rating}
                    stock={item.stock}
                    thumbnail={item.thumbnail}
                    quantity={item.quantity}
                    // wishlistCard
                    />
                } )
            }
          </div>

          <div className="flex flex-col justify-center gap-4 sticky top-[5rem] right-[12.5rem]">
            <div className="flex flex-col w-[25rem] h-[20rem] justify-between rounded-lg bg-gray-200 font-semibold text-lg">
              <p className="w-full border-gray-400 border-b flex justify-start p-4 items-center">Price Details</p>
              <div className="w-full flex justify-between p-4">
                <p>ITEMS <span className="bg-orange-500 text-white px-2 py-1 rounded-full text-xs">{total_items}</span></p>
                <p>₹{totalPrice}</p>
              </div>
              <div className="w-full flex justify-between p-4">
                <p>Delivery Charges</p>
                <p>₹{deliveryCharge}</p>
              </div>
              <div className="w-full border-gray-400 border-t flex justify-between items-center p-4">
                <p>Total Amount :</p>
                <p className="font-bold text-3xl">₹{Total_Amount}</p>
              </div>
            </div>
            <Button classes={`h-[3rem] w-full text-xl font-semibold uppercase bg-sky-500 hover:bg-sky-700 active:bg-sky-600`}>Place Order</Button>
          </div>
        </div>
      )}
    </Container>
  );
}

export default Cart;
