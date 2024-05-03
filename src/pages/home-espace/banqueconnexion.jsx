






function BanqueConnexion(){

    return(

        <div class="flex gap-10 pt-10">
            
         <div class="max-w-sm rounded overflow-hidden shadow-lg">
   <img class="w-full" src="src\assets\donneur.jpg" alt="donneur"/>
  <div class="px-6 py-4">
     <div class="font-bold text-xl mb-2">Ajouter vos produits</div>
    <p class="text-gray-700 text-base">
   Ajouter, Supprimer, Modifier vos produits
    </p>
   </div>
   <div class="px-6 pt-8 pb-2">
   <button className="p-2 w-32 rounded-full bg-gray-400 hover:bg-red-600 text-white">Ajouter Prduits</button>
  </div>
</div>

        <div><div class="max-w-sm rounded overflow-hidden shadow-lg">
   <img class="w-full h-62" src= "src\assets\rdv_bleu-removebg-preview.png" alt="rdv"/>
  <div class="px-6 py-4">
     <div class="font-bold text-xl mb-2 pt-12 pb-3">Vos produits sanguins</div>
    <p class="text-gray-700 text-base">
    Liste de vos produits sanguins
    </p>
   </div>
   <div class="px-6 pt-4 pt-7 pb-10">
   <button className="p-2 w-46 rounded-full bg-gray-400 hover:bg-red-600 text-white">Affichez mes produits</button>
  </div>
  </div>

        </div>

        <div><div class="max-w-sm rounded overflow-hidden shadow-lg">
   <img class="w-full" src="src\assets\Dondusang_actu.jpg" alt="don de sang"/>
  <div class="px-6 py-4">
     <div class="font-bold text-xl mb-2 pt-3 pb-6">Vos ventes</div>
    <p class="text-gray-700 text-base">
    liste des ventes réalisées
    </p>
   </div>
   <div class="px-6 pt-5 pb-11">
   <button className="p-2 w-46 rounded-full bg-gray-400 hover:bg-red-600 text-white">Voir mes ventes</button>
  </div>
  </div>      
        </div>
      </div>

    )
}

export default BanqueConnexion;