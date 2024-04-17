import {useState} from "react";
import { useNavigate } from "react-router-dom";


export default function Login({onLonginSubmit}) {

   const [pseudoInput, setPseudoInput] = useState("");
   const navigate = useNavigate();

   const handleLoginSubmit = () => {
    onLonginSubmit(pseudoInput);
    navigate("/home");
   };

   return (
       <>
           <header>
               <h1>Connecter</h1>
           </header>
           <main>
               <label>Pseudo : </label>
               <input type="text"
                      value={pseudoInput}
                      onChange={
                          (e) => setPseudoInput(e.target.value)
                      }/>
               <div>
                   <button onClick={handleLoginSubmit}
                   >CONNEXION
                   </button>
               </div>
           </main>
       </>
   );
}

