import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import './App.css'
import Login from "./pages/home-espace/login.jsx";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Accueil from './pages/home-espace/home.jsx';
import Home from "./pages/home-espace/home.jsx";
import LayoutHome from "./components/layout/layout-home.jsx";
import LayoutDashboard from "./components/layout/layout-dashboard.jsx";
import BanqueDesang from './pages/home-espace/banquedesang.jsx';
import Hopital from './pages/home-espace/hopital.jsx';
import Donneur from "./pages/home-espace/donneur.jsx";
import AllSang from './pages/admin-espace/all-sang.jsx';
import CreateSang from './pages/admin-espace/create-sang.jsx';
import DeleteSang from './pages/admin-espace/delete-sang.jsx';
import UpdateSang from './pages/admin-espace/update-sang.jsx';
import Connexion from './pages/home-espace/login.jsx';
import Stock from './pages/home-espace/stock.jsx';
import BoutonConnexion from './pages/home-espace/boutonconnexion.jsx';





const router = createBrowserRouter([
  {
    path: "/",
    element: <Connexion/>,
  },


  {
    path: "/",
    element: <LayoutHome/>,
    children:[
      {
        path: "/home",
        element: <Accueil/>
      },
    
      {
       path: "/banquedesang",
        element: <BanqueDesang/>
      },

      {
        path: "/hopital",
         element: <Hopital/>
       },


      {
        path: "/donneur",
         element: <Donneur/>
       },

       {
        path: "/stock",
         element: <Stock/>
       },

       {
        path: "/connexion",
         element: <Connexion/>
       },

      

      
      
    ]

    
  },

  {
    path: "/",
    element: <LayoutDashboard />,
    children:[
      {
        path: "/all-sang",
        element: <AllSang />
      },
    
      {
        path: "/create-sang",
        element: <CreateSang/>
      },

      {
        path: "/delete-sang",
        element: <DeleteSang/>
      },

      {
        path: "/update-sang",
        element: <UpdateSang/>
      },
    
    
    ]
  },




]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router={router} />
  </React.StrictMode>,
)



