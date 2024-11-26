// Dependências:
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

// Componentes e estilos:
import 'styles/main.scss'
import App from 'src/App'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
