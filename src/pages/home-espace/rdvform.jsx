

function Rendezvous(){
    return(

<div class="max-w-md mx-auto mt-10 bg-white shadow-lg rounded-lg overflow-hidden">
    <div class="text-2xl py-4 px-6 bg-red-600 text-white text-center font-bold uppercase">
        Prendre un Rendez-vous
    </div>
    <form class="py-4 px-6" action="" method="POST">
        <div class="mb-4">
            <label class="block text-gray-700 font-bold mb-2" for="name">
                Nom
            </label>
            <input
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="name" type="text" placeholder="Entrer votre nom"/>
        </div>
        <div class="mb-4">
            <label class="block text-gray-700 font-bold mb-2" for="email">
                Email
            </label>
            <input
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email" type="email" placeholder="Enter your email"/>
        </div>
        <div class="mb-4">
            <label class="block text-gray-700 font-bold mb-2" for="phone">
                Telephone
            </label>
            <input
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="phone" type="tel" placeholder="+243 82 21 34 550"/>
        </div>
        <div class="mb-4">
            <label class="block text-gray-700 font-bold mb-2" for="date">
                Date
            </label>
            <input
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="date" type="date" placeholder="Select a date"/>
        </div>
        <div class="mb-4">
            <label class="block text-gray-700 font-bold mb-2" for="time">
                Heure
            </label>
            <input
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="time" type="time" placeholder="Préciser l'heure"/>
        </div>
        <div class="mb-4">
            <label class="block text-gray-700 font-bold mb-2" for="service">
                Banques de sang
            </label>
            <select
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="service" name="service">
                <option value="">choisissez une Banque de sang</option>
                <option value="haircut">Maman Yemo</option>
                <option value="coloring">Mabanga</option>
                <option value="styling">Bandalungwa</option>
                <option value="facial">Maman Mobokoli</option>
            </select>
        </div>
        <div class="mb-4">
            <label class="block text-gray-700 font-bold mb-2" for="message">
                Message
            </label>
            <textarea
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="message" rows="4" placeholder="Enter any additional information"></textarea>
        </div>
        <div class="flex items-center justify-center mb-4">
            <button
                class="bg-red-600 text-white py-2 px-4 rounded hover:bg-gray-800 focus:outline-none focus:shadow-outline"
                type="submit">
                Prenez rendez-vous
            </button>
        </div>

    </form>
</div>
    )
}

export default Rendezvous