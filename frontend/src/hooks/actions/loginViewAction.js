import { redirect } from 'react-router-dom'
import requestLogin from 'src/api/requestLogin'
import CreateUserCookie from 'hooks/cookies/CreateUserCookie'

async function loginViewAction({ request }) {
  const formData = await request.formData()

  const submission = {
    cpf: formData.get('usuario'),
    senha: formData.get('senha')
  }

  try {
    const response = await requestLogin(submission)
    console.log(response)

    const { token, funcionarioId } = response.data
    CreateUserCookie(token, funcionarioId)

    return redirect('/app')
  } catch (error) {
    console.log(error)
    return redirect('/login')
  }
}

export default loginViewAction;