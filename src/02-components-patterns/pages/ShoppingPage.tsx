import { ProductButtons, ProductCard, ProductImage, ProductTitle } from "../components";
import '../styles/custom-styles.css'

const product = {
    id: '1',
    title: 'Cafe Con Pan',
    img: './coffee-mug.png'
}

export const ShoppingPage = () => {

    return (
        <div >
            <h1>Sopping Store</h1>
            <hr />
            <div style={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap'
            }}>
                <ProductCard 
                    product={ product }
                    className='bg-dark text-white'
                >
                    <ProductCard.Image className="custom-image" />
                    <ProductCard.Title title="coffe" />
                    <ProductCard.Buttons className="buttons"  />
                </ProductCard>

                <ProductCard 
                    product={ product }
                    style={{
                        backgroundColor : '#0B6A86'
                    }}
                >
                    <ProductImage style={{
                        padding: '10px',
                        width: 'calc(100% - 20px)',
                        borderRadius: '20px'
                    }}/>
                    <ProductTitle style={{
                        color: 'white',
                        fontSize: '20px',
                        fontWeight: 'bold'
                    }} />
                    <ProductButtons style={{
                        color: "white",
                        borderColor: '#FFFFFF'
                    }}/>
                </ProductCard>
                
            </div>
        </div>
    )
}