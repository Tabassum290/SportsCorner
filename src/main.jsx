import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Error from './pages/Error.jsx'
import Addequipment from './pages/Addequipment.jsx'
import AllSportsEquipment from './pages/AllSportsEquipment.jsx'
import MyEquipmentlist from './pages/MyEquipmentlist.jsx'
import Login from './pages/Login.jsx'
import Register from './pages/Register.jsx'
import AuthProvider from './Providers/AuthProvider.jsx'
import PrivateRoute from './Private/PrivateRoute.jsx'
import ViewDetails from './pages/ViewDetails.jsx'
import Update from './pages/Update.jsx'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Home/>,
      errorElement:<Error/>,
    },
    {
      path:'/addequipment',
      element:<PrivateRoute><Addequipment/></PrivateRoute>,
    },
    {
      path:'/allsportsequipment',
      element:<AllSportsEquipment/>,
      loader: () => fetch("https://assignment-10-server-side-plum.vercel.app/equipment")
    },
    {
      path:'/myequipmentlist',
      element:<PrivateRoute><MyEquipmentlist/></PrivateRoute>,
      loader: () => fetch("https://assignment-10-server-side-plum.vercel.app/equipment")
    },
    {
      path:'/login',
      element:<Login/>,
    },
    {
      path:'/register',
      element:<Register/>,
    },
    {
      path:'/viewdetails/:id',
      element:<PrivateRoute><ViewDetails></ViewDetails></PrivateRoute>,
      loader:({params})=> fetch(`https://assignment-10-server-side-plum.vercel.app/${params.id}`)
    },
    {
      path:'/update/:id',
      element:<PrivateRoute><Update/></PrivateRoute>,
      loader:({params})=> fetch(`https://assignment-10-server-side-plum.vercel.app/${params.id}`)
    },
  ]
)


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ToastContainer></ToastContainer>
    <AuthProvider>
    <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </StrictMode>,
)
