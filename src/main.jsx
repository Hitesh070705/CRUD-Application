import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createBrowserRouter,RouterProvider}  from  'react-router-dom'
import Home from './Components/Home.jsx'
import Viewdata from './Components/Viewdata.jsx'
import Adduser from './Components/Adduser.jsx'
import { getUserData } from './Components/Home.jsx'
import Edituser from './Components/Edituser.jsx'

const router=createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    children:[{
      path:"",
      element:<Home/>,
      // loader: getUserData
    },
    {
      path:"user/:id",
      element:<Viewdata/>,
      // loader: Getsingleuserdata
    },
    {
      path:'adduser',
      element:<Adduser/>,
      loader: getUserData
    },
    {
      path:'edituser/:uid',
      element:<Edituser/>
    }
    
  ]
  },
  

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
