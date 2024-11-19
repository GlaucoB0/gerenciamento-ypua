// Dependências:
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { 
  createBrowserRouter, RouterProvider 
} from 'react-router-dom'

// Folhas de Estilo:
import './Styles/main.scss'

// Componentes:
import App from 'src/App'
import AppView from 'views/AppView/AppView'
import LoginView from 'views/LoginView/LoginView'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/login",
    element: <LoginView />,
  },
  {
    path: "/app",
    element: <AppView />
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
