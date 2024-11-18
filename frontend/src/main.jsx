// Dependências:
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { 
  createBrowserRouter, RouterProvider 
} from 'react-router-dom'

// Folhas de Estilo:
import './index.scss'

// Componentes:
import App from './App'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
