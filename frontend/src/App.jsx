import React from 'react'
import AppView from 'views/AppView/AppView';
import LoginView from 'views/LoginView/LoginView';

const App = () => {
  const isLogged = React.useRef(false)

  return (
    <>
      { isLogged === true ? (
        <AppView />
      ) : (
        <LoginView />
      )}
    </>
  )
}

export default App;