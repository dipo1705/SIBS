import { useNavigate } from "react-router-dom";
import UserContext from "../../context/UserContext";


function Accueil(){
    return(
        <>
            <div>
               
            <h2>A propos de nous</h2>
            <div><img src="\src\assets\blood-bank-management-system-project-using-java-and-database.jpeg" /></div>
            <div>Ceci est une application de gestion des produits sanguins</div>

            </div>
        </>
    )
}

export default Accueil;