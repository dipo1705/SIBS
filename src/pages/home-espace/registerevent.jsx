



function Registerevent(){

    return(

        <div class="max-w-md mx-auto mt-10 bg-white shadow-lg rounded-lg overflow-hidden">
    <div class="text-2xl py-4 px-6 bg-red-600 text-white text-center font-bold uppercase">
       Enregistrez-vous
    </div>
  
  <form action="#" class="py-4 px-6">
    <div class="mb-4">
      <label for="firstName" class="text-sm text-gray-700 dark:text-gray-200 mr-2">Nom:</label>
      <input type="text" id="firstName" name="firstName" class="w-full px-3 dark:text-gray-200 dark:bg-gray-900 py-2 rounded-md border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500"/>
    </div>

    <div class="mb-4">
      <label for="lastName" class="text-sm text-gray-700 dark:text-gray-200 mr-2">Postnom:</label>
      <input type="text" id="lastName" name="lastName" class="w-full px-3 dark:text-gray-200 dark:bg-gray-900 py-2 rounded-md border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500"/>
    </div>

    <div class="mb-4">
      <label for="username" class="text-sm text-gray-700 dark:text-gray-200 mr-2">Prenom:</label>
      <input type="text" id="username" name="username" class="w-full px-3 dark:text-gray-200 dark:bg-gray-900 py-2 rounded-md border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500"/>
    </div>

    <div class="mb-4">
      <label for="email" class="text-sm text-gray-700 dark:text-gray-200 mr-2">Email:</label>
      <input type="email" id="email" name="email" class="w-full px-3 dark:text-gray-200 dark:bg-gray-900 py-2 rounded-md border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500"/>
    </div>

    <div class="mb-4">
      <label for="firstName" class="text-sm text-gray-700 dark:text-gray-200 mr-2">Telephone:</label>
      <input type="text" id="firstName" name="firstName" class="w-full px-3 dark:text-gray-200 dark:bg-gray-900 py-2 rounded-md border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500"/>
    </div>

    
    <div class="flex items-center justify-center mb-4">
    <button type="submit" class="bg-red-600 text-white py-2 px-4 rounded hover:bg-gray-600 focus:outline-none focus:shadow-outline">S'enregistrer</button>
    </div>
  </form>
  
 
</div>


    )
}

export default Registerevent;