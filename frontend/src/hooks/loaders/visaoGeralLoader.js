import axios from 'axios'

async function visaoGeralLoader() {
  const baseUrl = import.meta.env.VITE_API_BASE_URL

  try {
    const { data: accommList } = await axios
      .get(`${baseUrl}/quartos/listarQuartos/list`)
    const freeAccomms = accommList.map((room) => room.disponivel === true)

    return {
      acomodacoes: {
        total: String(accommList.length).padStart(2, '0'),
        livre: String(freeAccomms.length).padStart(2, '0')
      }
    }
  } catch (error) {
    console.log(error)
    return null; 
  }
}

export default visaoGeralLoader