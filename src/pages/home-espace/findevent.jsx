import axios from "axios";
import { useState, useEffect} from "react";
import { NavLink } from "react-router-dom";



function Findevent(){

    const [event, setEvent] = useState([]);
    console.log(event);
  async function getEvent () {
    try {
      const response = await axios.get("src/pages/home-espace/eventData.json");
      console.log(response.data);
      setEvent(response.data);
      return response
    } catch (error) {
      return error
    }
  }

  getEvent();


  const Data = event

    return(

        

        
<div className="pt-5 pb-20">

<h2 className=" mb-10 bg-red-600 text-center text-white pb-10  text-2xl font-semibold leading-9 tracking-tight ">
               Evénements à venir
</h2>

    <table className="border-separate border-spacing-2 border border-slate-400 ...">
    
    <thead>
      <tr>
        <th className="border border-slate-300 ...">id</th>
        <th className="border border-slate-300 ...">Nom de l'événement</th>
        <th className="border border-slate-300 ...">Lieu </th>
        <th className="border border-slate-300 ...">Date</th>
        <th className="border border-slate-300 ...">Heure</th>
        <th className="border border-slate-300 ...">Message</th>
        <th className="border border-slate-300 ...">Enregistrement</th>
        
      
      </tr>
    </thead>
    <tbody>
    
    {Data.event && Data.event.map(event=>(
      <tr key={event.id}>
            <td className="border border-slate-300 ..." >{event.id} </td>
            <td className="border border-slate-300 ...">{event.Nom_evenement} </td>
            <td className="border border-slate-300 ...">{event.Lieu} </td>
            <td className="border border-slate-300 ...">{event.Date} </td>
            <td className="border border-slate-300 ...">{event.Heure} </td>
            <td className="border border-slate-300 ...">{event.Message} </td>
            <td className="border border-slate-300 ..."><NavLink to = "/achatform"><button className="p-2 w-25 rounded-full bg-gray-400 hover:bg-red-600 text-white">S'enregistrer</button></NavLink></td>

                      </tr>

             ))
          }
          
    </tbody>
  </table>
      </div>
    )
}
export default Findevent;