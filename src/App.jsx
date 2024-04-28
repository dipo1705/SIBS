import { useState } from 'react'
import './App.css'
import { BrowserRouter } from 'react-router-dom';
import Home from "./pages/home-espace/home";
import BanqueDesang from './pages/home-espace/banquedesang';
import Login from './pages/home-espace/login';
import Hopital from "./pages/home-espace/hopital";
import Donneur from './pages/home-espace/donneur';
import LayoutHome from './components/layout/layout-home';
import { Routes} from 'react-router-dom';
import { Route } from 'react-router-dom';
import UserContext from './context/UserContext';
import Cover from './pages/home-espace/cover';
//import AllProduct from './pages/admin-espace/all-products';
//import CreateProduct from './pages/admin-espace/create-product';
//import DeleteProduct from './pages/admin-espace/delete-product';
//import UpdateProduct from './pages/admin-espace/update-product';



export default function App() {

  const [pseudo, setPseudo] = useState(null);

  const handleLoginSubmit = (userName) => {
    setPseudo(userName);
  }

  return (

        <UserContext.Provider value={{isLogged: true, pseudo: pseudo}}>
          <BrowserRouter>
          <main>
                        <Routes>
                          <Route
                            path="/"
                            element={<Login onLoginSubmit={handleLoginSubmit} />}
                          />
                          <Route path="/" element={<Connexion/>}></Route>
                          <Route path="/" element={<LayoutHome />}>
                            <Route path="/home" element={<Home/>}/>
                            <Route path="/banquedesang" element={<BanqueDesang/>}/>
                            <Route path="/hopital" element={<Hopital/>}/>
                            <Route path="/donneur" element={<Donneur/>}/>
                            <Route path="/stock" element={<Stock/>}/>
                            <Route path="/connexion" element={<Connexion/>}/>
                           

                          
                          </Route>
                          
                        </Routes>
                    </main>
           </BrowserRouter>

      </UserContext.Provider> 
     
  )
  
}