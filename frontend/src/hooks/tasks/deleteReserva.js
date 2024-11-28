import axios from 'axios'

const deleteReserva = async (reservaId, setter) => {
  const baseUrl = import.meta.env.VITE_API_BASE_URL;
  
  try {
    await axios.delete(`${baseUrl}/clientes/deleteById/${reservaId}`);
    setter(true)
  } catch (error) {
    console.error(error);
    return;
  }
}

export default deleteReserva;