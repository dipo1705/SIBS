import {NavLink} from "react-router-dom";


function DashboardBanque(){

    return(

        <div class="flex gap-10 pt-10">
            
         <div class="max-w-sm rounded overflow-hidden shadow-lg">
   <img class="w-full" src="src\assets\Banques-de-sang.jpg" alt="donneur"/>
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
   <img class="w-full h-62" src= "src\assets\banque de sang stock.jpg" alt="rdv"/>
  <div class="px-6 py-4">
     <div class="font-bold text-xl mb-2 pt-2 pb-3">Voir le stock</div>
    <p class="text-gray-700 text-base">
    Parcourez ce lien pour voir le stock,vous pouvez ajouter vos produits sanguin aussi
    </p>
   </div>
   <div class="px-6 pt-11  pb-16">
   <NavLink to = "/stock"><button className="p-2 w-46 rounded-full bg-gray-400 hover:bg-red-600 text-white">Regarder le Stock</button></NavLink>
  </div>
  </div>

        </div>

        <div><div class="max-w-sm rounded overflow-hidden shadow-lg">
   <img class="w-full" src="src\assets\Dondusang_actu.jpg" alt="don de sang"/>
  <div class="px-6 py-4">
     <div class="font-bold text-xl mb-2 pt-2 pb-6">Evénements</div>
    <p class="text-gray-700 text-base pt-2">
     voir les différents événements de don de sang
    </p>
   </div>
   <div class="px-6 pt-10 pb-16">
   <button className="p-2 w-46 rounded-full bg-gray-400 hover:bg-red-600 text-white">Regardez les événements</button>
  </div>
  </div>      
        </div>
      </div>

    )
}

export default DashboardBanque;