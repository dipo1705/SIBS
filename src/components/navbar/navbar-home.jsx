import {NavLink} from "react-router-dom";






function NavbarHome(){

    return (
      
            <nav className="   flex  justify-around items-center   ">

            <img className="w-36 h-36   "  src="src\assets\SIBS_LOGO-removebg-preview.png" alt="logo" />

            <ul className="flex gap-10  justify-around  ">

                <li className="bg-gray-400 hover:bg-red-300 text-white p-2 ">
                    <NavLink to = "/home">Home</NavLink>
                </li>

                <li className="bg-gray-400 hover:bg-red-300 text-white p-2" >
                    
                    <NavLink to = "/banquedesang">Banque de Sang</NavLink>
                </li>
                

                <li className="bg-gray-400 hover:bg-red-300 text-white p-2">
                    <NavLink to = "/hopital">Hopital</NavLink>
                </li>

                <li className="bg-gray-400 hover:bg-red-300 text-white p-2">
                    <NavLink to = "/donneur">Donneur</NavLink>
                </li>

                <li className="bg-gray-400 hover:bg-red-300 text-white p-2">
                    <NavLink to = "/stock">Stock</NavLink>
                </li>

                <li className="bg-gray-400 hover:bg-red-300 text-white p-2">
                    <NavLink to = "/connexion">Connexion</NavLink>
                </li>

                
            </ul>
            <button className="p-2 w-36 rounded-full bg-red-600  hover:bg-gray-400 text-white">Connexion</button>
        </nav>


  );
}

        
export default NavbarHome;