import { useState } from 'react'
import { ProcuctInCart, Product } from '../interfaces/interfaces';

export const useShoppingCart = () => {
    const [shoppingCart, setShoppingCart] = useState<{ [key:string]: ProcuctInCart }>({});

    const onProductCountChange = ( { count, product}: { count: number, product: Product} ) =>{

        setShoppingCart( oldShoppingInCart => {

            const productInCart: ProcuctInCart = oldShoppingInCart[product.id] || {...product, count: 0 };

            if ( Math.max(productInCart.count + count, 0) > 0 ) {
                productInCart.count += count;
                return{
                    ...oldShoppingInCart,
                    [product.id]: productInCart
                }
            }

            // Borrar el producto
            
            const { [product.id]: toDelete, ...rest } = oldShoppingInCart;
            return {...rest}

            // if ( count === 0) {
            //     const { [product.id] : toDelete, ...rest } = oldProductInCart;
            //     return rest
            // }

            // return{
            //     ...oldProductInCart,
            //     [ product.id ]: { ...product, count }
            // }

        })
    }

    return{
        shoppingCart,
        onProductCountChange
    }
}
