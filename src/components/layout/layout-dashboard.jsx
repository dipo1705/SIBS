
import NavbarDashboard from "../navbar/navbar-dashboard";
import{ Outlet} from "react-router-dom";

function LayoutDashboard(){
    return(
        <>
        <nav>
            <NavbarDashboard/>
        </nav>
        <main>
            <Outlet/>
        </main>
        </>
    )
}

export default LayoutDashboard;