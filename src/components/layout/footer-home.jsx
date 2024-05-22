import { NavLink } from "react-router-dom";


function FooterHome(){
    return(
        <>
            <div className="text-center mt-10 bg-gray-400">
               
            
            <div className="flex justify-center gap-20">© 2024 SIBS . Tous droits réservés  <NavLink to="/contactform"> <a href="#" class=" bg-gray-400  hover:underline">Contactez-nous</a></NavLink></div>

            

            </div>
        </>
    )
}

export default FooterHome;