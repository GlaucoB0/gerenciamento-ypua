// Dependências:
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

// Folhas de Estilo:
import './Styles/main.scss'

// Componentes:
import App from 'src/App'
import AppView from 'views/AppView/AppView'
import LoginView from 'views/LoginView/LoginView'
import { appViewLoader } from 'src/hooks/viewLoaders'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/login",
        element: <LoginView />,
      },
      {
        path: "/app",
        loader: appViewLoader,
        element: <AppView />,
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
