


function AchatForm(){

    return(

        <div class="container mx-auto p4-10">
    <div class="max-w-md mx-auto bg-white rounded-lg overflow-hidden md:max-w-xl">
        <div class="md:flex">
            <div class="w-full px-6 py-8 md:p-8">
                <h2 class="text-2xl font-bold text-bg-gray-300 bg-red-600 text-center text-white">Achéter Maintenant</h2>
                <p class="mt-4 text-gray-600 text-center">Compléter ce formulaire pour finaliser votre achat.</p>
                <form class="mt-6">
                    <div class="mb-6">
                        <label class="block text-gray-800 font-bold mb-2" for="name">
                            Nom
                        </label>
                        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="John Doe"/>
                    </div>
                    <div class="mb-6">
                        <label class="block text-gray-800 font-bold mb-2" for="email">
                            Email
                        </label>
                        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="johndoe@example.com"/>
                    </div>
                    <div class="mb-6">
                        <label class="block text-gray-800 font-bold mb-2" for="card_number">
                            Numéro de la carte
                        </label>
                        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="card_number" type="text" placeholder="**** **** **** 1234"/>
                    </div>
                    <div class="mb-6">
                        <label class="block text-gray-800 font-bold mb-2" for="expiration_date">
                            Date d'expiration
                        </label>
                        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="expiration_date" type="text" placeholder="MM / YY"/>
                    </div>
                    <div class="mb-6">
                        <label class="block text-gray-800 font-bold mb-2" for="cvv">
                            CVV
                        </label>
                        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="cvv" type="text" placeholder="***"/>
                    </div>
                    <button class="flex w-full justify-center rounded-md bg-red-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" type="button">
                        Soumettre
                    </button>
                </form>
            </div>
        </div>
    </div>
</div>
    )
}

export default AchatForm;