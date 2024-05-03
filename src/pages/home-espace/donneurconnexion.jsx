




function DonneurConnexion(){

    return(

        <div class="flex gap-10 pt-10">
            
         <div class="max-w-sm rounded overflow-hidden shadow-lg">
   <img class="w-full" src="src\assets\donneur.jpg" alt="donneur"/>
  <div class="px-6 py-4">
     <div class="font-bold text-xl mb-2">Donneur Bénévole</div>
    <p class="text-gray-700 text-base">
    Vos informations personnelles
    </p>
   </div>
   <div class="px-6 pt-8 pb-2">
   <button className="p-2 w-32 rounded-full bg-gray-400 hover:bg-red-600 text-white">Afficher mes informations</button>
  </div>
</div>

        <div><div class="max-w-sm rounded overflow-hidden shadow-lg">
   <img class="w-full h-62" src= "src\assets\rdv_bleu-removebg-preview.png" alt="rdv"/>
  <div class="px-6 py-4">
     <div class="font-bold text-xl mb-2 pt-12 pb-3">Vos Rendez-vous</div>
    <p class="text-gray-700 text-base">
    Liste de vos rendez-vous
    </p>
   </div>
   <div class="px-6 pt-4 pt-7 pb-10">
   <button className="p-2 w-46 rounded-full bg-gray-400 hover:bg-red-600 text-white">Afficher mes Rendez-vous</button>
  </div>
  </div>

        </div>

        <div><div class="max-w-sm rounded overflow-hidden shadow-lg">
   <img class="w-full" src="src\assets\Dondusang_actu.jpg" alt="don de sang"/>
  <div class="px-6 py-4">
     <div class="font-bold text-xl mb-2 pt-3 pb-6">Vos alertes</div>
    <p class="text-gray-700 text-base">
    liste de vos alertes 
    </p>
   </div>
   <div class="px-6 pt-5 pb-11">
   <button className="p-2 w-46 rounded-full bg-gray-400 hover:bg-red-600 text-white">Afficher les événements</button>
  </div>
  </div>      
        </div>
      </div>

    )
}

export default DonneurConnexion;