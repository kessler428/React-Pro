import styles from '../styles/styles.module.css'
import { useProduct }  from '../hooks/useProduct'; 
import { createContext, ReactElement } from 'react';
import { Product, ProductContextProps } from '../interfaces/interfaces';

export const ProductContext = createContext({} as ProductContextProps)
const { Provider } = ProductContext;

export interface ProductCardProps {
    product: Product;
    children?: ReactElement| ReactElement[];
    clasName?: string;
}

export const ProductCard = ({ children, product, className }: ProductCardProps) => {
    
    const { counter, increaseBy } = useProduct();

    return (
        <Provider value={{
                counter,
                increaseBy,
                product
            }}
        >
            <div className={ styles.productCard} >

                { children }
                
                {/* <ProductImage img={ product.img } /> */}
                {/* <ProductTitle title={ product.title } /> */}
                {/* <ProductButtons counter={ counter } increaseBy={ increaseBy } /> */}                
            </div>
        </Provider>
    )
}