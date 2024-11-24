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
    const apiRequest = await axios({
      method: "POST",
      url: `${baseUrl}/funcionarios/login`, 
      data: submission
    })

    console.log(apiRequest.response)
    return redirect('/app')
  } catch (error) {
    console.log(error)
    return redirect('/login')
  }
}

export default loginViewAction;