import Blooddata from "./bloodData.json"
import Bloodcard from "./bloodcard";



function Stock(){

    const Data = Blooddata.blood


    return(
        
       <div className="sm:mx-auto sm:w-full sm:max-w-sm p-70 ">
            
                 <h2 className=" pt-3 pb-3 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                   Votre stock ici
                 </h2>
               
               {Data.map(blood=>(
                        <Bloodcard key={blood.id} blood={blood}/>

               ))
            }
            </div>
    )
}

export default Stock;