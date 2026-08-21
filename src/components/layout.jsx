import { TechBackground } from './techBackground';
import { Outlet } from "react-router-dom";
import Footer from './footer/footer'
import './layout.css'

function Layout() {
    return(
        <div className="page-layout">
            <main>
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}

export default Layout;