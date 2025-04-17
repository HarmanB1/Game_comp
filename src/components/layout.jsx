import { Navbar } from "./navbar";
import { Outlet } from "react-router-dom";
import { Footer } from "../pages/footer";
export const Layout = ()=>{
    return (
      <>
        <Navbar />
        <Outlet />
        <Footer />
      </>
    );
}