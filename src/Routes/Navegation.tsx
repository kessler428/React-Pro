import { Suspense } from "react"
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom"
import { ShoppingPage } from "../02-components-patterns/pages/ShoppingPage"
import logo from '../logo.svg'

export const Navegation = () => {
    return (
        <Suspense fallback={ <span>Loading</span>}>
            <BrowserRouter>
            <div className="main-layout">
                <nav>
                    <img src={logo} alt="React Logo" />
                    <ul>
                        <li>
                            <NavLink 
                                className={ ({isActive}) => isActive ? 'nav-active' : ''} to='shopping'                  
                            >
                                Shopping
                            </NavLink>
                        </li>
                        <li>
                            <NavLink 
                                className={ ({isActive}) => isActive ? 'nav-active' : ''} to='users'                  
                            >
                                Users
                            </NavLink>
                        </li>
                        <li>
                            <NavLink 
                                className={ ({isActive}) => isActive ? 'nav-active' : ''} to='about'                  
                            >
                                About
                            </NavLink>
                        </li>
                    </ul>
                </nav>

                <Routes>
                    <Route path='/about' element={ <h1>About</h1> }/>
                    <Route path='/users' element={ <h1>Users</h1> }/>
                    <Route path='/shopping' element={ <ShoppingPage /> }/>

                    <Route path="/*" element={<span>Page Not Found</span>}/>
                </Routes>
            </div>
            </BrowserRouter>
        </Suspense>
    )
}
