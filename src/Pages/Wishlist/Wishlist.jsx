import { Card1, Container } from '../../index';
import { Empty_Wishlist } from '../../Assets/assets';
import { useSelector } from 'react-redux';

function Wishlist() {
  const Wishlist = useSelector(state => state.Wishlist)

  // console.log(Wishlist);
  
  const EmptyORnot = () =>{
    return Wishlist.length === 0 ? true : false;
  }

  const WishlistEmpty = EmptyORnot();
  // const WishlistEmpty = false;

  return (
    <Container>
      {WishlistEmpty ? (
        <div className=" flex justify-center items-center flex-col gap-4">
        <img src={Empty_Wishlist} alt="oops Empty Cart" className="h-[30rem]" />
        <h2 className="text-4xl">Empty Wishlist :(</h2>
        <p>Explore our wide selection and find something you like</p>
      </div>
      ) : (
        <div className='border p-4 flex flex-col gap-10'>
          <div className='flex justify-center items-center text-4xl uppercase font-bold bg-gray-200 p-4 rounded-lg'>
            <h1>Items in your Wishlist</h1>
          </div>
            {
              Wishlist.map(
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
                    wishlistCard
                    />
                } )
            }
        </div>
      ) }

    </Container>
  );
}

export default Wishlist;
