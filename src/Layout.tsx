import { Outlet } from "react-router-dom";
import Sidebar from "./Navbar";

export const Layout = () => {
    return (
        <div >
            <Sidebar />
            <div >
                <Outlet />
            </div>
        </div>
    );
};