import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Error from './pages/Error'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Dashboard, { dashboardLoader } from './pages/Dashboard'
import Main, { mainLoader } from './layouts/main'



const router = createBrowserRouter([
 
  {
    path : '/',
    element : <Main/>,
    loader : mainLoader,
    errorElement : <Error/>,
    children : [
      {
        path : '/',
        element : <Dashboard/>,
        loader : dashboardLoader,
        errorElement : <Error/>
      },
      {
        path : 'logout',
        element : <h1>Log out</h1>
      }
    ]
  }
])

function App() {
  const [count, setCount] = useState(0)

 

  return (
   <div className="App">
    <RouterProvider router={router} />
   </div>
  )
}

export default App
