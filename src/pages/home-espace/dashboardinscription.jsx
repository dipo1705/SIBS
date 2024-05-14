import { NavLink } from "react-router-dom";



function DashboardInscription(){

    return(

        <div class="flex gap-10 pt-10">
            
        <div class="max-w-sm rounded overflow-hidden shadow-lg">
  <img class="w-full" src="https://res.cloudinary.com/dz4hmepqo/image/upload/v1714760481/donneur_yf5g52.jpg" alt="donneur"/>
 <div class="px-6 py-4">
    <div class="font-bold text-xl mb-2">Donneur Bénévole</div>
   <p class="text-gray-700 text-base">
     Devenez Donneur bénévole en vous inscrivant
   </p>
  </div>
  <div class="px-6 pt-8 pb-2">
  <NavLink to = "/donneurform"><button className="p-2 w-32 rounded-full bg-gray-400 hover:bg-red-600 text-white">Inscription</button></NavLink>
 </div>
</div>

       <div><div class="max-w-sm rounded overflow-hidden shadow-lg">
  <img class="w-full h-62" src= "https://res.cloudinary.com/dz4hmepqo/image/upload/v1714759610/Banques-de-sang_fxdrez.jpg" alt="rdv"/>
 <div class="px-6 py-4">
    <div class="font-bold text-xl mb-2 pt-12 pb-3">Banque de sang</div>
   <p class="text-gray-700 text-base">
   Vous êtes une banque de sang, inscrivez-vous pour mettre vos produits sanguins en vente
   </p>
  </div>
  <div class="px-6 pt-4 pt-7 pb-10">
  <NavLink to = "/banqueform"><button className="p-2 w-32 rounded-full bg-gray-400 hover:bg-red-600 text-white">Inscription</button></NavLink>
 </div>
 </div>

       </div>

       <div><div class="max-w-sm rounded overflow-hidden shadow-lg">
  <img class="w-full" src="https://res.cloudinary.com/dz4hmepqo/image/upload/v1714760835/drees_etablissements_de_sante_enquete_2860620_Drupal_dioqtm.jpg" alt="don de sang"/>
 <div class="px-6 py-4">
    <div class="font-bold text-xl mb-2 pt-3 pb-6">Hopital</div>
   <p class="text-gray-700 text-base">
   Vous êtes un hôpital, inscrivez-vous pour pouvoir achèter vos produits sanguins en ligne
   </p>
  </div>
  <div class="px-6 pt-12 pb-12">
  <NavLink to = "/hopitalform"><button className="p-2 w-32 rounded-full bg-gray-400 hover:bg-red-600 text-white">Inscription</button></NavLink>
 </div>
 </div>      
       </div>
     </div>


    )
}

export default DashboardInscription