import axios from 'axios'

async function requestLogin(body) {
  const baseUrl = import.meta.env.VITE_API_BASE_URL

  await axios
    .post(`${baseUrl}/funcionarios/login`, body)
    .then((response) => response)
    .catch((error) => { throw new Error(error) })
}

export default requestLogin;