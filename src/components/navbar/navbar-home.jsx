import {NavLink} from "react-router-dom";

function NavbarHome(){

    return (
        <nav className="pb-10 flex  justify-between  ">

            <div className="w-10 h-10 ml-20  "><img   src="src\assets\SIBS_LOGO-removebg-preview.png" alt="logo" /></div>

            <ul className="flex gap-3 justify-center  ">
                <li className="bg-gray-400 p-3 mr-10 group/item hover:bg-red-300 text-white">
                    <NavLink to = "/home">Home</NavLink>
                </li>

                <li className="bg-gray-400 p-3 mr-10 group/item hover:bg-red-300 text-white" >
                    <NavLink to = "/banquedesang">Banque de Sang</NavLink>
                </li>

                <li className="bg-gray-400 p-3 mr-10 group/item hover:bg-red-300 text-white">
                    <NavLink to = "/hopital">Hopital</NavLink>
                </li>

                <li className="bg-gray-400 p-3 mr-10 group/item hover:bg-red-300 text-white">
                    <NavLink to = "/donneur">Donneur</NavLink>
                </li>

                <li className="bg-gray-400 p-3 mr-10 group/item hover:bg-red-300 text-white">
                    <NavLink to = "/connexion">Connexion</NavLink>
                </li>

                
            </ul>
            <button className="rounded-full bg-red-300 p-3 mr-20 hover:bg-gray-400 text-black">Connexion</button>
        </nav>
    )
}

export default NavbarHome;