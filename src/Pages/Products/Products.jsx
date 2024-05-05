
import { useSelector } from "react-redux"
import { Card6, Container} from "../../index"


function Products() {
    const productpage = useSelector(state => state.productPage)
    // console.log(productpage);
    return (
        <Container>
            {productpage.map(p => {
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

        </Container>
    )
}

export default Products