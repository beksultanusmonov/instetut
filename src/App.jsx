import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import MainLayout from './MainLayout'
import Contact from './pages/Contact'
import Home from './pages/Home'
import Quiz from './Quiz'

function App() {
  const routes = createBrowserRouter([
    {
      path: '/',
      element: <MainLayout />,
      children: [ 
        {
          index: true,
          element: <Home />
        }, 
        {
          path: 'contact/',
          element: <Contact />
        }
      ]
    },
    {
      path: 'test/',
      element: <Quiz />
    }
  ])

  return <RouterProvider router={routes} />
}

export default App
