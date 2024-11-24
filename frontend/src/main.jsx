// Dependências:
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

// Hooks:
import loginRequest from 'hooks/actions/loginRequest'
import loginViewLoader from './hooks/loaders/loginViewLoader'
import appViewLoader from 'hooks/loaders/appViewLoader'

// Visualizações & estilos:
import 'styles/main.scss'
import App from 'src/App'
import AppView from 'views/AppView/AppView'
import LoginView from 'views/LoginView/LoginView'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/login",
        element: <LoginView />,
        loader: loginViewLoader,
        action: loginRequest
      },
      {
        path: "/app",
        element: <AppView />,
        loader: appViewLoader,
        children: [/* ⚠ NOTA: Inserir páginas aqui */]
      }
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
