function Event(){

return(

    <div class="bg-indigo-700 p-4">
    <h2 class="text-3xl text-white font-bold mb-12">Chronology</h2>
    <div class="flex flex-col grid-cols-9 p-2 mx-auto md:grid">
        <div class="flex md:contents flex-row-reverse">
            <div
                class="relative p-4 my-6 text-gray-800 bg-white rounded-xl col-start-1 col-end-5 mr-auto md:mr-0 md:ml-auto">
                <h3 class="text-lg font-semibold lg:text-xl">New Event 1</h3>
                <p class="mt-2 leading-6">Description of the first event.</p>
                <span class="absolute text-sm text-indigo-100/75 -top-5 left-2 whitespace-nowrap">Date 1</span>
            </div>
            <div class="relative col-start-5 col-end-6 mr-7 md:mx-auto">
                <div class="flex items-center justify-center w-6 h-full">
                    <div class="w-1 h-full bg-indigo-300 rounded-t-full bg-gradient-to-b from-indigo-400 to-indigo-300">
                    </div>
                </div>
                <div class="absolute w-6 h-6 -mt-3 bg-white border-4 border-indigo-400 rounded-full top-1/2"></div>
            </div>
        </div>

        <div class="flex md:contents">
            <div class="relative col-start-5 col-end-6 mr-7 md:mx-auto">
                <div class="flex items-center justify-center w-6 h-full">
                    <div class="w-1 h-full bg-indigo-300"></div>
                </div>
                <div class="absolute w-6 h-6 -mt-3 bg-white border-4 border-indigo-400 rounded-full top-1/2"></div>
            </div>
            <div class="relative p-4 my-6 text-gray-800 bg-white rounded-xl col-start-6 col-end-10 mr-auto">
                <h3 class="text-lg font-semibold lg:text-xl">New Event 2</h3>
                <p class="mt-2 leading-6">Description of the second event.</p>
                <span class="absolute text-sm text-indigo-100/75 -top-5 left-2 whitespace-nowrap">Date 2</span>
            </div>
        </div>

        <div class="flex md:contents flex-row-reverse">
            <div
                class="relative p-4 my-6 text-gray-800 bg-white rounded-xl col-start-1 col-end-5 mr-auto md:mr-0 md:ml-auto">
                <h3 class="text-lg font-semibold lg:text-xl">New Event 3</h3>
                <p class="mt-2 leading-6">Description of the first event.</p>
                <span class="absolute text-sm text-indigo-100/75 -top-5 left-2 whitespace-nowrap">Date 3</span>
            </div>
            <div class="relative col-start-5 col-end-6 mr-7 md:mx-auto">
                <div class="flex items-center justify-center w-6 h-full">
                    <div class="w-1 h-full bg-indigo-300 rounded-t-full bg-gradient-to-b from-indigo-400 to-indigo-300">
                    </div>
                </div>
                <div class="absolute w-6 h-6 -mt-3 bg-white border-4 border-indigo-400 rounded-full top-1/2"></div>
            </div>
        </div>

        <div class="flex md:contents">
            <div class="relative col-start-5 col-end-6 mr-7 md:mx-auto">
                <div class="flex items-center justify-center w-6 h-full">
                    <div class="w-1 h-full bg-indigo-300"></div>
                </div>
                <div class="absolute w-6 h-6 -mt-3 bg-white border-4 border-indigo-400 rounded-full top-1/2"></div>
            </div>
            <div class="relative p-4 my-6 text-gray-800 bg-white rounded-xl col-start-6 col-end-10 mr-auto">
                <h3 class="text-lg font-semibold lg:text-xl">New Event 4</h3>
                <p class="mt-2 leading-6">Description of the second event.</p>
                <span class="absolute text-sm text-indigo-100/75 -top-5 left-2 whitespace-nowrap">Date 4</span>
            </div>
        </div>

    </div>
</div>
)
}

export default Event