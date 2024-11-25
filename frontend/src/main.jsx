// Dependências:
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

// Hooks:
import loginViewAction from 'src/hooks/actions/loginViewAction'
import loginViewLoader from './hooks/loaders/loginViewLoader'
import dashboardLoader from 'src/hooks/loaders/dashboardLoader'

// Visualizações & estilos:
import 'styles/main.scss'
import App from 'src/App'
import Login from 'src/views/Login/Login'
import Dashboard from 'src/views/Dashboard/Dashboard'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/login",
        element: <Login />,
        loader: loginViewLoader,
        action: loginViewAction
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
        loader: dashboardLoader,
        children: [
          {
            path: "/dashboard/geral",
          },
          {
            path: "/dashboard/acomodacoes",
          },
          {
            path: "/dashboard/acomodacoes/acomodacao/:acomodacaoId",
          },
          {
            path: "/dashboard/hospedes",
          },
          {
            path: "/dashboard/hospedes/hospede/:hospedeId",
          },
          {
            path: "/dashboard/criarAcomodacao",
          },
          {
            path: "/dashboard/criarFuncionario",
          },
        ]
      }
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
