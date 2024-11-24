// Dependências:
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

// Hooks:
import { appViewLoader } from 'hooks/loaders/viewLoaders'

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
        action: async ({ request, params }) => {
          /** Aqui, o seguinte fluxo ocorrerá:
           * - Validação dos dados enviados pelo Form
           * - Envio dos dados para a API
           * - Retorno com base nas respostas */
        }
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
