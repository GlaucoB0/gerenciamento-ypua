// Dependências:
import axios from 'axios'
import { redirect } from 'react-router-dom'

async function criarFuncionarioAction({ request }) {
    const baseUrl = import.meta.env.VITE_API_BASE_URL
    const formData = await request.formData()

    const submission = {
        nome: formData.get('nome'),
        cpf: formData.get('cpf'),
        funcao: formData.get('cargo'),
        senha: formData.get('senha')
    }
    console.log(submission)

    try {
        const token = localStorage.getItem('user')
        const response = await axios.post(`${baseUrl}/funcionarios/criarFuncionarios`, submission, { headers: { Authorization: token.split(" ")[1] } })

        // return redirect('/dashboard')
        return "null"
    } catch (error) {
        console.log(error)
        alert("Ocorreu um erro!")
        return "null"

    }
}

export default criarFuncionarioAction;