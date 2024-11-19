import styles from './AppView.module.scss'
import { Outlet } from 'react-router-dom'

const AppView = () => {
  return (
    <div>
      <h1>AppView</h1>
      <Outlet />
    </div>
  )
}

export default AppView