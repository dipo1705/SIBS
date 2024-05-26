function AddNewwProduct(){

    return(

        <section className="bg-white dark:bg-gray-900 pb-20">
  <div className="py-8 px-4 mx-auto max-w-2xl lg:py-16 ">
      <h2 className=" mb-10 bg-red-600 text-center text-white pb-10  text-2xl font-semibold leading-9 tracking-tight ">Ajouter un produit sanguin</h2>
      <form action="#">
          <div class="grid gap-4 sm:grid-cols-2 sm:gap-6">
              <div class="sm:col-span-2">
                  <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nom de la Banque de Sang</label>
                  <input type="text" name="name" id="name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Type product name" required=""/>
              </div>
              <div class="w-full">
              <label for="item-weight" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Quantité disponible</label>
                  <input type="number" name="item-weight" id="item-weight" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="12" required=""/>
              </div>
              <div class="w-full">
                  <label for="price" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Prix</label>
                  <input type="number" name="price" id="price" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="$2999" required=""/>
              </div>
              <div>
                  <label for="category" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Type de Produit</label>
                  <select id="category" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                      <option selected="">Choisir Type de Produit</option>
                      <option value="sang entier">Sang entier</option>
                      <option value="globule rouge">Globule rouge</option>
                      <option value="plaquette">Plaquette</option>
                      <option value="Plasma">Plasma</option>
                  </select>
              </div>
              <div>
              <label for="category" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Groupe Sanguin</label>
                  <select id="category" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                      <option selected="">Choisir Groupe sanguin</option>
                      <option value="AB+Ve">AB+Ve</option>
                      <option value="AB-Ve">AB-Ve</option>
                      <option value="A+Ve">A+Ve</option>
                      <option value="A-Ve">A-Ve</option>
                      <option value="B+Ve">B+Ve</option>
                      <option value="B-Ve">B-Ve</option>
                      <option value="O+Ve">O+Ve</option>
                      <option value="O-Ve">O-Ve</option>
                      <option value="Oh+Ve">Oh+Ve</option>
                      <option value="Oh-Ve">Oh-Ve</option>
                  </select>
              </div> 

              <div>
              <label for="category" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Rhesus</label>
                  <select id="category" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                      <option selected="">Choisir Rhesus</option>
                      <option value="AB+">AB+</option>
                      <option value="AB-">AB-</option>
                      <option value="A+">A+</option>
                      <option value="A-">A-</option>
                      <option value="B+">B+</option>
                      <option value="B-">B-</option>
                      <option value="O+">O+</option>
                      <option value="O-">O-</option>
                      <option value="Oh+">Oh+</option>
                      <option value="Oh-">Oh-</option>
                  </select>
              </div> 

              <div class="sm:col-span-2">
                  <label for="description" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description</label>
                  <textarea id="description" rows="8" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Your description here"></textarea>
              </div>
          </div>
          <button type="submit" class="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-gray-400 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-red-600">
              Ajouter produit
          </button>
      </form>
  </div>
</section>
    )
}

export default AddNewwProduct;