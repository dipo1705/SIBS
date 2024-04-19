import Home from "../../pages/home-espace/home";
import NavbarHome from "../navbar/navbar-home";
import{ Outlet} from "react-router-dom";
import FooterHome from "./footer-home";

function LayoutHome(){
    return(
        <>
        <nav>
            <NavbarHome/>
            

        </nav>

        <main className="flex justify-center">
            <Outlet/>
        </main>

        <FooterHome/>
        
        </>
    )
}

export default LayoutHome;