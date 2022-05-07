import { lazy, LazyExoticComponent } from "react";

type JSXComponent = () => JSX.Element

interface Routes {
    path: string;
    to: string;
    Component: LazyExoticComponent<JSXComponent> | JSXComponent;
    name: string;
}

const Lazy1 = lazy(() => import(/* webpackChunkName: "LazyPage1"*/'../01-LazyLoad/Pages/LazyLoad1'))
const Lazy2 = lazy(() => import(/* webpackChunkName: "LazyPage2"*/'../01-LazyLoad/Pages/LazyLoad2'))
const Lazy3 = lazy(() => import(/* webpackChunkName: "LazyPage3"*/'../01-LazyLoad/Pages/LazyLoad3'))

export const routes: Routes[] = [
    {
        path: '/Lazy1',
        to: 'Lazy1',
        Component: Lazy1,
        name: 'Lazy Load 1'
    },
    {
        path: '/Lazy2',
        to: 'Lazy2',
        Component: Lazy2,
        name: 'Lazy Load 2'
    },
    {
        path: '/Lazy3',
        to: 'Lazy3',
        Component: Lazy3,
        name: 'Lazy Load 3'
    }
]