import {NavLink} from "react-router-dom";


function NavbarDashboard(){

    return (
        <nav className="navbar">
            <ul className="menunav">
                <li>
                    <NavLink to = "/all-sang">Poches de Sang</NavLink>
                </li>

                <li>
                    <NavLink to = "/create-sang">Créer Produits  Sanguins</NavLink>
                </li>

                <li>
                    <NavLink to = "/update-sang">Update Sang</NavLink>
                </li>

                <li>
                    <NavLink to = "/delete-sang">Supprimer Produits Sanguins</NavLink>
                </li>


                <li>
                    <NavLink to = "/">Deconnexion</NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default NavbarDashboard;