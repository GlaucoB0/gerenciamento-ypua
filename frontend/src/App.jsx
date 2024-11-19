import { useState } from 'react'
import { redirect, Outlet } from 'react-router-dom';

const App = () => {
  return (
    <>
      <h1>Olaaaa</h1>
      <Outlet />
    </>
  )
}

export default App;