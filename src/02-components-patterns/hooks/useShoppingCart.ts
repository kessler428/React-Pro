import { useState } from 'react'
import { ProcuctInCart, Product } from '../interfaces/interfaces';

export const useShoppingCart = () => {
    const [shoppingCart, setShoppingCart] = useState<{ [key:string]: ProcuctInCart }>({});

    const onProductCountChange = ( { count, product}: { count: number, product: Product} ) =>{

        setShoppingCart( oldShoppingInCart => {

            if ( count === 0) {
                const { [product.id] : toDelete, ...rest } = oldShoppingInCart;
                return rest
            }

            return{
                ...oldShoppingInCart,
                [ product.id ]: { ...product, count }
            }

        })
    }

    return{
        shoppingCart,
        onProductCountChange
    }
}
