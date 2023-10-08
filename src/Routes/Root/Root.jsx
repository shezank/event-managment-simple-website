import { Outlet } from "react-router-dom";
import Navbar from "../../Sharde/Navbar/Navbar";
import Footer from "../../Sharde/Footer/Footer";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

const Root = () => {
    useEffect(() => {
        AOS.init();
      }, [])
    return (
        <div className="font-rubik max-w-7xl mx-auto">
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;