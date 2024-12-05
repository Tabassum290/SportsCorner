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

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Home/>,
      errorElement:<Error/>,
    },
    {
      path:'/addequipment',
      element:<Addequipment/>,
    },
    {
      path:'/allsportsequipment',
      element:<AllSportsEquipment/>,
    },
    {
      path:'/myequipmentlist',
      element:<MyEquipmentlist/>,
    },
    {
      path:'/login',
      element:<Login/>,
    },
    {
      path:'/register',
      element:<Register/>,
    },
  ]
)


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
    <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </StrictMode>,
)
