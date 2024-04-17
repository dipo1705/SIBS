import Home from "../../pages/home-espace/home";
import NavbarHome from "../navbar/navbar-home";
import{ Outlet} from "react-router-dom";

function LayoutHome(){
    return(
        <>
        <nav>
            <NavbarHome/>
            

        </nav>

       
        <main>
            <Outlet/>
        </main>
        
        </>
    )
}

export default LayoutHome;