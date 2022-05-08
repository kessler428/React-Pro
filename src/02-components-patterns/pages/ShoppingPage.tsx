import { ProductButtons, ProductCard, ProductImage, ProductTitle } from "../components";
import '../styles/custom-styles.css'

const product = {
    id: '1',
    title: 'Cafe Con Pan',
    img: './coffee-mug.png'
}

export const ShoppingPage = () => {

    return (
        <div>
            <h1>Sopping Store</h1>
            <hr />
            <div style={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap'
            }}>
                <ProductCard product={ product }>

                    <ProductImage />

                    <ProductTitle />

                    <ProductButtons />

                </ProductCard>
                
            </div>
        </div>
    )
}