import { Props as ProductCardProps } from "../components/ProductCard";
import { PropsButtons }      from "../components/ProductButtons";
import { PropsProductImage } from "../components/ProductImage";
import { PropsProductTitle } from "../components/ProductTitle";

export interface Product {
    id:    string;
    img?:  string;
    title: string;
}

export interface ProductContextProps {
    counter: number;
    product: Product;
    increaseBy: ( value: number ) => void;
}

export interface ProductCardHocProps {
    ({ children, product }: ProductCardProps): JSX.Element,
    Title:   (Props: PropsProductTitle) => JSX.Element;
    Image:   (Props: PropsProductImage) => JSX.Element;
    Buttons: (Props: PropsButtons)      => JSX.Element;
}

 