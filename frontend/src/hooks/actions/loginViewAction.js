// Dependências:
import axios from 'axios'
import { redirect } from 'react-router-dom'

const createCookie = (name, value) => document.cookie = `${name}=${value}`

async function loginViewAction({ request }) {
  const baseUrl = import.meta.env.VITE_API_BASE_URL
  const formData = await request.formData()

  const submission = {
    cpf: formData.get('usuario'),
    senha: formData.get('senha')
  }

  try {
    const response = await axios.post(`${baseUrl}/funcionarios/login`, submission)
    console.log(response)

    const { token } = response.data
    createCookie("user", token)

    return redirect('/dashboard')
  } catch (error) {
    console.log(error)
    return redirect('/login')
  }
}

export default loginViewAction;