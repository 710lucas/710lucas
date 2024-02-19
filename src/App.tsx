import { useEffect} from 'react'
import { Home } from './Components/Home/Home';
import { LangContextProvider } from './Contexts/LangContext';
import { createBrowserRouter, RouterProvider} from "react-router-dom";

function App() {
  

  useEffect(()=>{

    document.title = "Lucas Perônico Barbotin"

  }, [])


  const router = createBrowserRouter([
    {
      path: "/",
      element: <LangContextProvider><Home/></LangContextProvider>
    }
  ])

  return (
    <RouterProvider router={router}/>
  )
}

export default App
