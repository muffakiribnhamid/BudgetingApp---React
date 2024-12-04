import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Error from './pages/Error'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Dashboard, { dashboardAction, dashboardLoader } from './pages/Dashboard'
import Main, { mainLoader } from './layouts/main'

//toastify
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



//actions
import { logoutAction } from './actions/logout'



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
        action : dashboardAction,
        loader : dashboardLoader,
        errorElement : <Error/>
      },
      {
        path: 'logout',
        action: logoutAction
      }
    ]
  }
])

function App() {
  const [count, setCount] = useState(0)

 

  return (
   <div className="App">
    <RouterProvider router={router} />
    <ToastContainer/>
   </div>
  )
}

export default App
