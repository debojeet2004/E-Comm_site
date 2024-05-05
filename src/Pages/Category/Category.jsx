import React from 'react'
import { useSelector } from 'react-redux'
import {Card3, Container} from '../../index'



function Category() {
    const category = useSelector(state => state.category)
    const products = useSelector(state => state.Products)

    const check_catagory = (category) => {
        if(category === 'Mens'){
            return Mens
        }else if(category === 'Womens'){
            return Womens
        }else if(category === 'Lifestyle'){
            return Lifestyle
        }else if(category === 'Home'){
            return Home
        }else if(category === 'Automotive'){
            return Automotive
        }else if(category === 'Groceries'){
            return Groceries
        }else if(category === 'Laptop_Mobile'){
            return Laptop_Mobile
        }
    }

    const Mens = ["mens-shirts","mens-shoes","mens-watches"]
    const Womens = ["womens-dresses","womens-shoes","womens-watches","womens-bags","womens-jewellery"]
    const Lifestyle = ["fragrances","skincare","sunglasses"]
    const Home = ["home-decoration","furniture","lighting"]
    const Automotive = ["automotive","motorcycle"]
    const Groceries = ["groceries"]
    const Laptop_Mobile = ["laptops","smartphones"]

    const filteredItems = products.filter(product => check_catagory(category).includes(product.category));
    // console.log(filteredItems);
  return (
    <Container>
      <div className='w-full p-4 flex flex-col gap-10'>
        <p className='bg-gray-200 p-4 flex items-center justify-start text-2xl font-semibold rounded-md uppercase'>category: {category}</p>
        <div className='w-full flex justify-start gap-[4.5rem] flex-wrap'>
          {
          filteredItems.map((itms) => {
            return <Card3
            key={itms.id}
            id={itms.id}
            title={itms.title}
            price={itms.price}
            thumbnail={itms.thumbnail}
            rating={itms.rating}
            brand={itms.brand}
            description= {itms.description}
            stock={itms.stock}
            category={itms.category}
            images={itms.images}
            discountPercentage ={itms.discountPercentage}
            showbtn
            />
          })
        }
      </div>
    </div>
    </Container>
  )
}

export default Category