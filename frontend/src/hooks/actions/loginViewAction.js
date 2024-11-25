// Dependências:
import axios from 'axios'
import { redirect } from 'react-router-dom'

async function loginViewAction({ request }) {
  const baseUrl = import.meta.env.VITE_API_BASE_URL
  const formData = await request.formData()

  const submission = {
    cpf: formData.get('usuario'),
    senha: formData.get('senha')
  }

  try {
    const response = await axios.post(`${baseUrl}/funcionarios/login`, submission)

    const { token } = response.data
    localStorage.setItem('user', `Bearer ${token}`)

    return redirect('/dashboard')
  } catch (error) {
    console.log(error)
    return redirect('/login')
  }
}

export default loginViewAction;