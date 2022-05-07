import { BrowserRouter, Routes, Route, NavLink, Navigate } from "react-router-dom"
import { LazyLoad1, LazyLoad2, LazyLoad3 } from "../01-LazyLoad/Pages"
import logo from '../logo.svg'

export const Navegation = () => {
    return (
        <BrowserRouter>
            <div className="main-layout">
                <nav>
                    <img src={logo} alt="React Logo" />
                    <ul>
                        <li>
                            <NavLink to='home' className={({ isActive }) => isActive ? 'nav-active' : ''}>Lazy Page 1</NavLink>
                        </li>
                        <li>
                            <NavLink to='about' className={({ isActive }) => isActive ? 'nav-active' : ''}>Lazy Page 2</NavLink>
                        </li>
                        <li>
                            <NavLink to='users' className={({ isActive }) => isActive ? 'nav-active' : ''}>Lazy Page 3</NavLink>
                        </li>
                    </ul>
                </nav>

                <Routes>
                    <Route path="about" element={ <LazyLoad1 />} />
                    <Route path="users" element={ <LazyLoad2 />} />
                    <Route path="home" element={ <LazyLoad3 />} />

                    <Route path="/*" element={ <Navigate to='/home' replace/>} />
                </Routes>
            </div>
        </BrowserRouter>
    )
}
