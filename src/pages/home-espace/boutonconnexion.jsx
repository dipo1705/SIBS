

function BoutonConnexion() {
  
    return (

 <div>    
<NavbarHome/>
       
<div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 pt-5 pb-5 ">
       
       <div className="sm:mx-auto sm:w-full sm:max-w-sm p-70 ">
            
                 <h2 className=" pt-3 pb-3 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                   Connectez-vous à votre Compte
                 </h2>
               </div>
       
               <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm pt-5 pb-10">
                 <form className="space-y-6 " action="#" method="POST">
                   <div>
                     <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                       Email address
                     </label>
                     <div className="mt-2">
                       <input
                         id="email"
                         name="email"
                         type="email"
                         autoComplete="email"
                         required
                         className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                       />
                     </div>
                   </div>
       
                   <div>
                     <div className="flex items-center justify-between">
                       <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                         Mot de Passe
                       </label>
                       <div className="text-sm">
                         <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                           Mot de Passe oublié?
                         </a>
                       </div>
                     </div>
                     <div className="mt-2">
                       <input
                         id="password"
                         name="password"
                         type="password"
                         autoComplete="current-password"
                         required
                         className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                       />
                     </div>
                   </div>
       
                   <div>
                     <button
                       type="submit"
                       className="flex w-full justify-center rounded-md bg-red-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                     >
                       Se connecter
                     </button>
                   </div>
                 </form>
       
                 <p className="mt-10 text-center text-sm text-gray-500">
                   Vous n'avez pas de compte?{' '}
                   <a href="#" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                     Commencez par vous inscrire
                   </a>
                 </p>
               </div>
             </div>
             </div> 
        
  )
}


export default BoutonConnexion;