import axios from 'axios'

async function listaDeHospedesLoader() {
  const baseUrl = import.meta.env.VITE_API_BASE_URL;
  
  try {
    const response = await axios.get(baseUrl + "/clientes/listarClientes")
    const guestList = response.data
    return guestList;
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};

export default listaDeHospedesLoader