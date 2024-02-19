import { useEffect, useState } from 'react'
import { Home } from './Components/Home/Home';
import { NotFound } from './Components/NotFound/NotFound';
import { LangContextProvider } from './Contexts/LangContext';

function App() {
  
  const [route, setRoute] = useState(window.location.pathname);

  useEffect(()=>{
    const handleRouteChange = () => {
      setRoute(window.location.pathname);
    }

    window.addEventListener('popstate', handleRouteChange);

    document.title = "Lucas Perônico Barbotin"

    return () => {
      window.removeEventListener('popstate', handleRouteChange);
    }

  }, [])

  const renderComponent = () => {
    switch(route){

      case "/":
        return (
        <LangContextProvider>
          <Home/>
        </LangContextProvider>
        )
      default:
        return <NotFound/>

    }
  }

  return (
    <>
      {renderComponent()}
    </>
  )
}

export default App
