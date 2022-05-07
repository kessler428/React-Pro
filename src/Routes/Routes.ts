import { lazy, LazyExoticComponent } from "react";
import { Nolazy } from '../01-Lazyload/Pages/Nolazy'

type JSXComponent = () => JSX.Element;

interface Route {
    to: string;
    path: string;
    Component: LazyExoticComponent<JSXComponent> | JSXComponent;
    name: String;
}

const LazyLayout = lazy(() => import(/* webpackChunkName: "LazyLayout" */ '../01-Lazyload/layout/LazyLayout'))

export const routes: Route[] = [
    {
        path: '/lazyload/*',
        to: '/lazyload',
        Component: LazyLayout,
        name: 'Lazy Layout '
    },
    {
        to: '/no-lazy',
        path: 'no-lazy',
        Component: Nolazy,
        name: 'No Lazy'
    },
]