
function BanqueDesang(){
    return(
        
      <form class="w-full max-w-lg pt-10 pb-10">
      <h1 class=" pt-3 pb-10 bg-gray-300 text-black" >FORMULAIRE D'INSCRPTION</h1>
  <div class="flex flex-wrap -mx-3 mb-6 pt-10">
    <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <label class="block capitalize tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
        Nom de la Banque de sang
      </label>
      <input class="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder=""/>
    </div>

    <div class="w-full md:w-1/2 px-3">
      <label class="block capitalize tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
        Nom du responsable
      </label>
      <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder=""/>
    </div>
  </div>

  <div class="flex flex-wrap -mx-3 mb-6">
    <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <label class="block capitalize tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
        Province
      </label>
      <input class="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder=""/>
    </div>

    <div class="w-full md:w-1/2 px-3">
      <label class="block capitalize tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
        Commune
      </label>
      <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder=""/>
    </div>
  </div>
  
  <div class="flex flex-wrap -mx-3 mb-6">
    <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <label class="block capitalize tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
        Adresse
      </label>
      <input class="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="176 Flamboyant"/>
    </div>

    <div class="w-full md:w-1/2 px-3">
      <label class="block capitalize tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
        telephone
      </label>
      <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="243 822142901"/>
    </div>
  </div>

  <div class="flex flex-wrap -mx-3 mb-6">
    <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <label class="block capitalize tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
        Email
      </label>
      <input class="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="jane@gmail.com"/>
    </div>

    <div class="w-full md:w-1/2 px-3">
      <label class="block capitalize tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
        Site Web
      </label>
      <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="www.sms.cd"/>
    </div>
  </div>
  
    <div className="pt-10 mx-auto my-auto"><button className=" bg-red-600 p-3 mr-20 hover:bg-gray-400 text-white">Soumettre</button></div>
  
</form>
    )
}

export default BanqueDesang;