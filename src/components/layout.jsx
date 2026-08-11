import { TechBackground } from './techBackground';
import { Outlet } from "react-router-dom";
import './layout.css'

function Layout() {
    return(
        <div className="page-layout">
            <TechBackground />
            <main>
                <Outlet />
            </main>
        </div>
    )
}

export default Layout;