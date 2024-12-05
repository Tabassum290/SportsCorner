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
    },
    {
      path:'/myequipmentlist',
      element:<PrivateRoute><MyEquipmentlist/></PrivateRoute>,
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
      path:'/viewdetails',
      element:<PrivateRoute><ViewDetails></ViewDetails></PrivateRoute>,
    },
    {
      path:'/update',
      element:<PrivateRoute><Update/></PrivateRoute>,
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
