import Navbar from './nav/nav';
import { TechBackground } from './techBackground';
import { Outlet } from "react-router-dom";
import './layout.css'

function Layout() {
    return(
        <div className="page-layout">
            <TechBackground />
            <Navbar/>
            <main>
                <Outlet />
            </main>
        </div>
    )
}

export default Layout;