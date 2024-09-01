import React from 'react'
import Layout from './Component/Layout/Layout'
import About from './Component/About/About'
import Contact from './Component/Contact/Contact'
import Protofile from './Component/Protofile/Protofile'
import Parent from './Component/Parent/Parent'





import { createBrowserRouter, RouterProvider } from 'react-router-dom'

export default function App() {
 let routes = createBrowserRouter([{
    path:"react-Project-vite",element:<Layout/>,children:[
      {path:"parent",element:<Parent/>},
      {path:"Protofile",element:<Protofile/>},
      {path:"about",element:<About/>},
      {path:"Contact",element:<Contact/>},
    ]
  }])

  return (
    <>

    
    <RouterProvider router={routes}></RouterProvider>
    
    
    </>
  )
}
