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
import AddNewwProduct from './pages/home-espace/addnewproduct.jsx';
import UpdateProduct from './pages/home-espace/updateproduct.jsx';
import BanqueForm from './pages/home-espace/banqueform.jsx';
import HopitalForm from './pages/home-espace/hopitalform.jsx';
import DonneurForm from './pages/home-espace/donneurform.jsx';
import Rendezvous from './pages/home-espace/rdvform.jsx';
import Searchevent from './pages/home-espace/searchevent.jsx';
import Resetpassword from './pages/home-espace/resetpassword.jsx';
import DashboardInscription from './pages/home-espace/dashboardinscription.jsx';
import ContactForm from './pages/home-espace/contactform.jsx';
import AchatForm from './pages/home-espace/achatform.jsx';
import RegisterForm from './pages/home-espace/registerform.jsx';
import Event from './pages/home-espace/addevent.jsx';
import Findevent from './pages/home-espace/findevent.jsx';







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
        path: "/addnewproduct",
         element: <AddNewwProduct/>
       },

       {
        path: "/banqueform",
         element: < BanqueForm/>
       },

       {
        path: "/hopitalform",
         element: < HopitalForm/>
       },

       {
        path: "/donneurform",
         element: < DonneurForm/>
       },

       {
        path: "/rdvform",
         element: < Rendezvous/>
       },


      {
        path: "/searchevent",
         element: < Searchevent/>
       },

       {
        path: "/dashboardinscription",
         element: < DashboardInscription/>
       },

       {
        path: "/registerform",
         element: < RegisterForm/>
       },

       {
        path: "/resetpassword",
         element: < Resetpassword/>
       },

       {
        path: "/contactform",
         element: < ContactForm/>
       },

       {
        path: "/achatform",
         element: < AchatForm/>
       },

       
       {
        path: "/addevent",
         element: < Event/>
       },

       {
        path: "/findevent",
         element: < Findevent/>
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



