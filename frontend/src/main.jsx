// Dependências:
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

// Componentes e estilos:
import 'styles/main.scss'
import App from 'src/App'

// Mask input
$("#data").mask("00/00/0000");
$("#cpf").mask("000.000.000-00");
$("#telefone").mask("(00) 00000-0000");
$("#cep").mask("00000-00");
$("#pais").mask("AA");
$("#estado").mask("AA");

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
