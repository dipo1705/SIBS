

function DonneurForm(){

    return(

  <form class="w-full max-w-lg pt-2 pb-10">
            <h1 class=" pt-3 pb-0 bg-gray-300 bg-red-600 text-center text-white" >Vous êtes un Donneur Volontaire, </h1>
        <h1 class=" pt-0 pb-10 bg-gray-300 bg-red-600 text-center text-white" >inscrivez-vous, pour faire un don de sang</h1>
      <h1 class=" pt-1 pb-3 bg-gray-300 text-center bg-red-600 text-white" >FORMULAIRE D'INSCRIPTION</h1>
        <div class="flex flex-wrap -mx-3 mb-6 pt-10">
          <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label class="block capitalize tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
              Prenom
            </label>
            <input class="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Jane"/>
          </div>

          <div class="w-full md:w-1/2 px-3">
            <label class="block capitalize tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
              Noms
            </label>
            <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Doe"/>
          </div>
        </div>

        <div class="flex flex-wrap -mx-3 mb-6">
          <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label class="block capitalize tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
              Date
            </label>
            <input class="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="27/10/1984"/>
          </div>

          <div class="w-full md:w-1/2 px-3">
            <label class="block capitalize tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
              Sexe
            </label>
            <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="M ou F"/>
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
              Mot de Passe
            </label>
            <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="password" type="password" name="password" required="required" autocomplete="new-password" placeholder="xxxxxxxxxxx"/>
          </div>
        </div>

        <div class="flex flex-wrap -mx-3 mb-6">
          <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label class="block capitalize tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
              Groupe Saguin
            </label>
            <input class="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="O+"/>
          </div>

          <div class="w-full md:w-1/2 px-3">
            <label class="block capitalize tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
              Rhesus
            </label>
            <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Rh+"/>
          </div>
        </div>
        
          <div className="pt-10 "><button className=" flex w-full justify-center rounded-md bg-red-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Soumettre</button></div>
        
      </form>

    )
}

export default DonneurForm;