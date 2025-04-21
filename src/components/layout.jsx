import { Navbar } from "./navbar";
import { Outlet } from "react-router-dom";
import { Footer } from "../pages/footer";
import './layout.css'
export const Layout = ()=>{
    return (
      <>
        <Navbar />
        <Outlet />
        <Footer />
      </>
    );
}