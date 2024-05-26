import {NavLink} from "react-router-dom";


function DashboardBanque(){

    return(

        <div class="flex gap-10 pt-10">
            
         <div class="max-w-sm rounded overflow-hidden shadow-lg">
   <img class="w-full" src="https://res.cloudinary.com/dz4hmepqo/image/upload/v1714759610/Banques-de-sang_fxdrez.jpg" alt="donneur"/>
  <div class="px-6 py-4">
     <div class="font-bold text-xl mb-2">Banque de sang</div>
    <p class="text-gray-700 text-base">
      Vous êtes une banque de sang, inscrivez-vous pour mettre vos produits sanguins en vente
    </p>
   </div>
   <div class="px-6 pt-8 pb-2">
   <NavLink to = "/banqueform"><button className="p-2 w-32 rounded-full bg-gray-400 hover:bg-red-600 text-white">Inscription</button></NavLink>
  </div>
</div>

        <div><div class="max-w-sm rounded overflow-hidden shadow-lg">
   <img class="w-full h-62" src= "https://res.cloudinary.com/dz4hmepqo/image/upload/v1714760187/banque_de_sang_stock_wlozmh.jpg" alt="rdv"/>
  <div class="px-6 py-4">
     <div class="font-bold text-xl mb-2 pt-2 pb-3">Ajouter un produit sanguin</div>
    <p class="text-gray-700 text-base">
    Utilisez ce formulaire pour Ajouter, Modifier, Supprimer vos produits sanguins
    </p>
   </div>
   <div class="px-6 pt-11  pb-16">
   <NavLink to = "/addnewproduct"><button className="p-2 w-46 rounded-full bg-gray-400 hover:bg-red-600 text-white">Ajouter un produit</button></NavLink>
  </div>
  </div>

        </div>

        <div><div class="max-w-sm rounded overflow-hidden shadow-lg">
   <img class="w-full" src="https://res.cloudinary.com/dz4hmepqo/image/upload/v1714760297/Dondusang_actu_szdguz.jpg" alt="don de sang"/>
  <div class="px-6 py-4">
     <div class="font-bold text-xl mb-2 pt-2 pb-6">Evénements</div>
    <p class="text-gray-700 text-base pt-2">
     voir les différents événements de don de sang
    </p>
   </div>
   <div class="px-6 pt-10 pb-16">
   <NavLink to = "/eventcard"><button className="p-2 w-46 rounded-full bg-gray-400 hover:bg-red-600 text-white">Regardez les événements</button></NavLink>
  </div>
  </div>      
        </div>
      </div>

    )
}

export default DashboardBanque;