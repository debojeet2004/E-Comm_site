
import { useSelector } from "react-redux"
import { Card6, Container} from "../../index"


function Products() {
    const productpage = useSelector(state => state.productPage)


    const product = productpage.map(p => {
        return {
            id:  p.id,
            title:  p.title,
            brand:  p.brand,
            stock:  p.stock,
            description:  p.description,
            category:  p.category,
            discountPercentage:  p.discountPercentage,
            price:  p.price,
            rating:  p.rating,
            images:  p.images,
            thumbnail: p.thumbnail,
        }
    })
    return (
        <Container>
            {product.map(p => {
                return <Card6
                key={p.id}
                id={p.id}
                title={p.title}
                brand={p.brand}
                stock={p.stock}
                description={p.description}
                category={p.category}
                discount={p.discountPercentage}
                price={p.price}
                rating={p.rating}
                images={p.images}
                thumbnail ={p.thumbnail}
            />
            })}

            {/* <Card6
                key={'hmm'}
                title={'hmm'}
                brand={'hmm'}
                Stock={'hmm'}
                description={'hmm'}
                catagoery={'hmm'}
                discount={'hmm'}
                price={'hmm'}
                rating={'hmm'}
                images={'hmm'}
            /> */}
        </Container>
    )
}

export default Products