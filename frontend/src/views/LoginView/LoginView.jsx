import styles from './LoginView.module.scss'
import { Outlet } from 'react-router-dom'

const LoginView = () => {
  return (
    <div>
      <h1>LoginView</h1>
      <Outlet />
    </div>
  )
}

export default LoginView