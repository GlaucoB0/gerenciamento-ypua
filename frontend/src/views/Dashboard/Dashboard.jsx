import styles from './Dashboard.module.sass'
import { Outlet } from 'react-router-dom'

const AppView = () => {
  return (
    <div>
      <h1>Dashboard View</h1>
      <p>Vou colocar uma navbar aqui...</p>
      <Outlet />
    </div>
  )
}

export default AppView