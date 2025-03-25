import React from 'react'
import Header from './components/Header';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About'
import Contact from './components/Contact'
import Doctors from './components/Doctors';
import Department from './components/Department';
import Appointment from './components/Appointment';
import Admin from './components/Admin';
const App = () => {
  const Head = () => {
    return (
      <div>
        <Header />
        <Outlet/> 
      </div>
    );
  };
  
  const appRouter=createBrowserRouter([

    {
      path:"/",
      element:<Head/>,
      children:[
        {
         path:"/",
         element:<Home/>
        },
        {
          path:"/about",
          element:<About/>
        },
        {
          path:"/contact",
          element:<Contact/>
        },
        {
           path:"/appointement/:id",
           element:<Appointment/>
        },
        {
          path:"/doctors",
          element:<Doctors/>,
          children:[
            {
              path:"/doctors/:speciality",
              element:<Department/>
            }
          ]
        },
        
      ]
      
    },
    {
      path:"/admin",
      element:<Admin/>
    }

  ])
  return (
    <div>
     <RouterProvider router={appRouter}></RouterProvider>
    </div>
  )
}

export default App;