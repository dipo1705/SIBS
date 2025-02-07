import React from "react";
import Blooddata from "./bloodData.json";
import { NavLink } from "react-router-dom";



function Bloodcard({blood}){

 

    return(
      <div className="pt-5 pb-20">

      <h2 className=" mb-10 bg-red-600 text-center text-white pb-10  text-2xl font-semibold leading-9 tracking-tight ">
                     Stock des produits sanguins disponible
      </h2>
    
          <table class="border-separate border-spacing-2 border border-slate-400 ...">
          {/* <thead>
            <tr>
              <th class="border border-slate-300 ...">id</th>
              <th class="border border-slate-300 ...">Banque de sang</th>
              <th class="border border-slate-300 ...">Type_Produit </th>
              <th class="border border-slate-300 ...">Groupe_Sanguin</th>
              <th class="border border-slate-300 ...">Rhésus</th>
              <th class="border border-slate-300 ...">Quantité_Disponible</th>
              <th class="border border-slate-300 ...">Prix</th>
              <th class="border border-slate-300 ...">Commander</th>
              
            
              
            </tr>
          </thead> */}
          <tbody>
            <tr>
              <td class="border border-slate-300 ..."> {blood.id} </td>
              <td class="border border-slate-300 ...">{blood.Banquedesang} </td>
              <td class="border border-slate-300 ...">{blood.Type_Produit} </td>
              <td class="border border-slate-300 ...">{blood.Groupe_Sanguin} </td>
              <td class="border border-slate-300 ...">{blood.Rhésus} </td>
              <td class="border border-slate-300 ...">{blood.Quantité_Disponible} </td>
              <td class="border border-slate-300 ...">{blood.Prix} </td>
              <td class="border border-slate-300 ..."><button className="p-2 w-25 rounded-full bg-gray-400 hover:bg-red-600 text-white">Acheter</button></td>
            </tr>
            {/* <tr>
            <td class="border border-slate-300 ...">2</td>
              <td class="border border-slate-300 ...">Mabanga</td>
              <td class="border border-slate-300 ...">Globule rouge</td>
              <td class="border border-slate-300 ...">A+</td>
              <td class="border border-slate-300 ...">A+</td>
              <td class="border border-slate-300 ...">30</td>
              <td class="border border-slate-300 ...">45$</td>
              <td class="border border-slate-300 ..."><button className="p-2 w-25 rounded-full bg-gray-400 hover:bg-red-600 text-white">Acheter</button></td>
            </tr>
            <tr>
            <td class="border border-slate-300 ...">3</td>
              <td class="border border-slate-300 ...">Bandalungwa</td>
              <td class="border border-slate-300 ...">Plaquette</td>
              <td class="border border-slate-300 ...">AB+</td>
              <td class="border border-slate-300 ...">AB+</td>
              <td class="border border-slate-300 ...">50</td>
              <td class="border border-slate-300 ...">40$</td>
              <td class="border border-slate-300 ..."><button className="p-2 w-25 rounded-full bg-gray-400 hover:bg-red-600 text-white">Acheter</button></td>
            </tr> */}
          </tbody>
        </table>
            </div>
    
    )

}

export default Bloodcard