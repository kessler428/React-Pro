import { lazy, LazyExoticComponent } from "react";
import { NoLazy } from "../01-LazyLoad/Pages/NoLazy";

type JSXComponent = () => JSX.Element

interface Routes {
    path: string;
    to: string;
    Component: LazyExoticComponent<JSXComponent> | JSXComponent;
    name: string;
}

const LazyLoad = lazy(() => import(/* webpackChunkName: "LazyLayout"*/ '../01-LazyLoad/layout/LazyLayout'))

export const routes: Routes[] = [
    {
        path: '/lazyload/*',
        to: '/lazyload',
        Component: LazyLoad,
        name: 'LazyLoad'
    },
    {
        path: '/no-lazy',
        to: 'no-lazy',
        Component: NoLazy,
        name: 'No Lazy Load'
    },
]