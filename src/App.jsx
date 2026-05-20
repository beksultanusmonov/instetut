import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import MainLayout from './MainLayout'
import Contact from './pages/Contact'
import Home from './pages/Home'
import SecretHome from './pages/SecretHome'
import Quiz from './Quiz'
import QuizSelect from './pages/QuizSelect'
import { QuizProvider } from './QuizContext'

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
        },
        {
          path: 'secret',
          element: <SecretHome />
        }
      ]
    },
    {
      path: 'test/select',
      element: <QuizSelect />
    },
    {
      path: 'test',
      element: <Quiz />
    },
    {
      path: 'secret/test/select',
      element: <QuizSelect />
    },
    {
      path: 'secret/test',
      element: <Quiz />
    }
  ])

  return (
    <QuizProvider>
      <RouterProvider router={routes} />
    </QuizProvider>
  )
}

export default App
