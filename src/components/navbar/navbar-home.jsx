import {NavLink} from "react-router-dom";

function NavbarHome(){

    return (
        <nav className="navbarhome">
            <ul className="menunavhome">
                <li>
                    <NavLink to = "/home">Home</NavLink>
                </li>

                <li>
                    <NavLink to = "/banquedesang">Banque de Sang</NavLink>
                </li>

                <li>
                    <NavLink to = "/hopital">Hopital</NavLink>
                </li>

                <li>
                    <NavLink to = "/donneur">Donneur</NavLink>
                </li>

                <li>
                    <NavLink to = "/">Connexion</NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default NavbarHome;