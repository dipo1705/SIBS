import {NavLink} from "react-router-dom";



function DashboardDonneur(){

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
   <img class="w-full h-62" src= "https://res.cloudinary.com/dz4hmepqo/image/upload/v1714760554/rdv_bleu-removebg-preview_kk3xbw.png" alt="rdv"/>
  <div class="px-6 py-4">
     <div class="font-bold text-xl mb-2 pt-12 pb-3">Prendre Rendez-vous</div>
    <p class="text-gray-700 text-base">
    Pour faire un don de sang, prenez rendez-vous
    </p>
   </div>
   <div class="px-6 pt-4 pt-7 pb-10">
   <button className="p-2 w-46 rounded-full bg-gray-400 hover:bg-red-600 text-white">Prendre Rendez-vous</button>
  </div>
  </div>

        </div>

        <div><div class="max-w-sm rounded overflow-hidden shadow-lg">
   <img class="w-full" src="https://res.cloudinary.com/dz4hmepqo/image/upload/v1714760297/Dondusang_actu_szdguz.jpg" alt="don de sang"/>
  <div class="px-6 py-4">
     <div class="font-bold text-xl mb-2 pt-3 pb-6">Evénements</div>
    <p class="text-gray-700 text-base">
    Participez aux événements de don de sang
    </p>
   </div>
   <div class="px-6 pt-5 pb-11">
   <button className="p-2 w-46 rounded-full bg-gray-400 hover:bg-red-600 text-white">Trouvez un événement</button>
  </div>
  </div>      
        </div>
      </div>

    )
}

export default DashboardDonneur;