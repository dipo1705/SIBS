import {NavLink} from "react-router-dom";






function NavbarHome(){

    return (
      
            <nav className="   flex  justify-around items-center   ">

            <img className="w-36 h-36   "  src="src\assets\SIBS_LOGO-removebg-preview.png" alt="logo" />

            <ul className="flex gap-10  justify-around  ">

                <li className=" w-25 hover:bg-gray-300 text-black p-2 text-center font-semibold ">
                    <NavLink to = "/home">Home</NavLink>
                </li>

                <li className=" w-25 hover:bg-gray-300 text-black p-2 text-center font-semibold" >
                    
                    <NavLink to = "/banquedesang">Banque de Sang</NavLink>
                </li>
                

                <li className=" w-25 hover:bg-gray-300 text-black p-2 text-center font-semibold">
                    <NavLink to = "/hopital">Hopital</NavLink>
                </li>

                <li className=" w-25 hover:bg-gray-300 text-black p-2 text-center font-semibold">
                    <NavLink to = "/donneur">Donneur</NavLink>
                </li>

                <li className="w-25 hover:bg-gray-300 text-black p-2 text-center font-semibold">
                    <NavLink to = "/stock">Stock</NavLink>
                </li>

                
            </ul>
            <NavLink to = "/connexion"><button className="p-2 w-36 rounded-full bg-red-600  hover:bg-gray-400 text-white">Connexion</button></NavLink>
        </nav>


  );
}

        
export default NavbarHome;