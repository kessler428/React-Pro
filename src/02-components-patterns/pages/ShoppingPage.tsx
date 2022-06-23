import { ProductButtons, ProductCard, ProductImage, ProductTitle } from "../components";
import { products } from "../data/products";
import { useShoppingCart } from "../hooks/useShoppingCart";
import '../styles/custom-styles.css'


export const ShoppingPage = () => {

    const { shoppingCart, onProductCountChange} = useShoppingCart();

    return (
        <div >
            <h1>Sopping Store</h1>
            <hr />
            
            <div 
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    flexWrap: 'wrap'
                }}
            >
                {
                    products.map( product => (
                        <ProductCard
                            key={ product.id }
                            product={ product }
                            className='bg-dark text-white'
                            value={ shoppingCart[product.id]?.count || 0 }
                            onChange={ onProductCountChange }
                        >
                            <ProductImage className="custom-image" />
                            <ProductTitle />
                            <ProductButtons className="buttons" />
                        </ProductCard>
                    ))
                }

                <div className="shopping-cart">
                {
                    Object.entries( shoppingCart ).map( ([key, product]) => (
                        <ProductCard
                            key={key}
                            product={ product }
                            className='bg-dark text-white'
                            style={{ width: '100px'}}
                            value={ product.count }
                            onChange={ onProductCountChange }
                        >
                            <ProductImage className="custom-image" />
                            <ProductButtons 
                                className="buttons" 
                                style={{
                                    display: 'flex',
                                    justifyContent: 'center'
                                }}
                            />
                        </ProductCard>
                    ))
                }
                </div>
            </div>
        </div>
    )
}