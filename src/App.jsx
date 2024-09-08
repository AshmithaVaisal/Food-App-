import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import { Home } from './pages/Home'
import { FoodContextProvider } from './context/foodContext'

function App() {


  const router = createBrowserRouter([
    {
      path:'/',
      element:<FoodContextProvider>
        <Home />
      </FoodContextProvider>
    }
  ])
  
  return (
    <>
      <RouterProvider router = {router}></RouterProvider>
      
    </>
  )
}

export default App
