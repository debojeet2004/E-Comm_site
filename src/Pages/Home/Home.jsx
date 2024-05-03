import { Card2, Card3, Card4, Container } from "../../index"
import { useSelector, useDispatch } from 'react-redux'


function Home() {
  const All_Products = useSelector((state) => state.Products)
  return (
    <Container>
        <div className="flex flex-col gap-6  p-4">
          {/* <div className="CATEGORY w-full  flex justify-around items-center h-[10rem] border-b border-black">
            <Card2>Men's</Card2>
            <Card2>Womens's</Card2>
            <Card2>Lifestyle</Card2>
            <Card2>Appliances</Card2>
            <Card2>Automotive</Card2>
          </div> */}

          {/* <div className="flex flex-col gap-6  p-4">
            <Card4 text={`Best of Men's`}/>
            <Card4 text={`Best of Women's`}/>
            <Card4 text={`Groceries you may need`}/>
            <Card4 text={`Home Appliances and more`}/>
            <Card4 text={`Skincare, Fragrances, Sunglasses and more`}/>
          </div> */}

          <div className=" flex flex-col  items-center justify-center  flex-wrap gap-6  p-4">
            <p className="text-5xl font-bold uppercase w-full h-[5rem] rounded-lg bg-gray-200 flex justify-center items-center">All Products</p>
            <div className="w-full flex items-center justify-between gap-10 flex-wrap"> 
              {All_Products.map(product => {
                return <Card3
                key={product.id}
                id={product.id}
                title={product.title}
                price={product.price}
                thumbnail={product.thumbnail}
                rating={product.rating}
                brand={product.brand}
                description= {product.description} 
                stock={product.stock}
                category={product.category}
                images={product.images}
                discountPercentage ={product.discountPercentage}
                />
              })}
            </div>
          </div>
          
        </div>
    </Container>
  )
}

export default Home