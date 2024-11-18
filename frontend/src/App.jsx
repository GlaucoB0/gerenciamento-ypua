import { useState } from 'react'
import { Navigate } from 'react-router-dom';

const App = () => {
  const [isLogged, setLoginState] = useState(false)

  return (
    <>
      { isLogged === true ? <Navigate to="/app" /> : <Navigate to="/login" /> }
    </>
  )
}

export default App;