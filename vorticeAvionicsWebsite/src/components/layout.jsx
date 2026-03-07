import Navbar from './nav/nav';
import { Outlet } from "react-router-dom";

function Layout() {
    return(
        <div className="page-layout">
            <Navbar/>
            <main>
                <Outlet />
            </main>
        </div>
    )
}