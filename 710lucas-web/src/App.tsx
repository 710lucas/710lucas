import { useEffect, useState } from 'react'
import { Home } from './Components/Home/Home';
import { NotFound } from './Components/NotFound/NotFound';

function App() {
  
  const [route, setRoute] = useState(window.location.pathname);

  useEffect(()=>{
    const handleRouteChange = () => {
      setRoute(window.location.pathname);
    }

    window.addEventListener('popstate', handleRouteChange);

    return () => {
      window.removeEventListener('popstate', handleRouteChange);
    }

  }, [])

  const renderComponent = () => {
    switch(route){

      case "/":
        return <Home/>
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
