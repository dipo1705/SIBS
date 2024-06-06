import Blooddata from "./bloodData.json"
import axios from "axios";
import { useState, useEffect} from "react";
import { NavLink } from "react-router-dom";




function Stock(){

    // const Data = Blooddata.blood
    // console.log(Data);
    const [sang, setSang] = useState([]);
    console.log(sang);
  async function getBlood () {
    try {
      const response = await axios.get("src/pages/home-espace/bloodData.json");
      console.log(response.data);
      setSang(response.data);
      return response
    } catch (error) {
      return error
    }
  }

  getBlood();

//     const [sang, setSang] = useState([]);

//     useEffect( () => {
//       axios.get("src/pages/home-espace/bloodData.json")
//       .then(response => {
//         setSang(response.data)
//       } )
//       .catch(error => {
//         console.error(error )
//       });
//     },

//     [])
// console.log(sang);
    const Data = sang
    

    return(

      
<div className="pt-5 pb-20">

  <h2 className=" mb-10 bg-red-600 text-center text-white pb-10  text-2xl font-semibold leading-9 tracking-tight ">
                 Stock des produits sanguins disponible
  </h2>

      <table className="border-separate border-spacing-2 border border-slate-400 ...">
      
      <thead>
        <tr>
          <th className="border border-slate-300 ...">id</th>
          <th className="border border-slate-300 ...">Banque de sang</th>
          <th className="border border-slate-300 ...">Type_Produit </th>
          <th className="border border-slate-300 ...">Groupe_Sanguin</th>
          <th className="border border-slate-300 ...">Rhésus</th>
          <th className="border border-slate-300 ...">Quantité_Disponible</th>
          <th className="border border-slate-300 ...">Prix</th>
          <th className="border border-slate-300 ...">Commander</th>
          
        
        </tr>
      </thead>
      <tbody>
      
      {Data.blood && Data.blood.map(blood=>(
        <tr key={blood.id}>
              <td className="border border-slate-300 ..." >{blood.id} </td>
              <td className="border border-slate-300 ...">{blood.Banquedesang} </td>
              <td className="border border-slate-300 ...">{blood.Type_Produit} </td>
              <td className="border border-slate-300 ...">{blood.Groupe_Sanguin} </td>
              <td className="border border-slate-300 ...">{blood.Rhésus} </td>
              <td className="border border-slate-300 ...">{blood.Quantité_Disponible} </td>
              <td className="border border-slate-300 ...">{blood.Prix} </td>
              <td className="border border-slate-300 ..."><NavLink to = "/achatform"><button className="p-2 w-25 rounded-full bg-gray-400 hover:bg-red-600 text-white">Acheter</button></NavLink></td>

                        </tr>

               ))
            }
            
      </tbody>
    </table>
        </div>

    )
}

export default Stock;