
import { NavLink } from "react-router-dom";



function ContactForm(){

    return(

        <div class="max-w-md mx-auto mt-10 bg-white shadow-lg rounded-lg overflow-hidden">
    <h1 class="text-2xl py-4 px-6 bg-red-600 text-white text-center font-bold uppercase">Contactez-nous</h1>
    <form>
        <div class="p-2 w-full">
            <div class="relative">
                <label for="name" class="leading-7 py-4 text-lg text-gray-900">Name</label>
                <input type="text" id="name" name="name" required=""
                    class=" w-full bg-white rounded border border-gray-400 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-900 py-1 px-1 leading-8 transition-colors duration-200 ease-in-out "/>
            </div>
        </div>
        <div class="p-2 w-full">
            <div class="relative">
                <label for="email" class="leading-7 py-4 text-lg text-gray-900">Email</label>
                <input type="email" id="email" name="email" required=""
                    class=" w-full bg-white rounded border border-gray-400 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-900 py-1 px-1 leading-8 transition-colors duration-200 ease-in-out"/>
            </div>
        </div>
        <div class="p-2 w-full">
            <div class="relative">
                <label for="message" class="leading-7 py-4 text-lg text-gray-900">Message</label>
                <textarea id="message" name="message" required=""
                    class=" w-full bg-white rounded border border-gray-400 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 h-32 text-base outline-none text-gray-900 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
            </div>
        </div>
        <div class="flex items-center justify-center mb-4">
            <div>
                <button type="submit"
                    class="bg-red-600 text-white py-2 px-4 rounded hover:bg-gray-600 focus:outline-none focus:shadow-outline">
                    Soumettre
                </button>
            </div>
            </div>
    </form>
</div>
    )
}

export default ContactForm;