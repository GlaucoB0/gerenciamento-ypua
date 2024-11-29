import axios from 'axios'

const deleteReserva = async (reservaId) => {
  const baseUrl = import.meta.env.VITE_API_BASE_URL;
  
  try {
    await axios.delete(`${baseUrl}/clientes/deleteById/${reservaId}`);
  } catch (error) {
    console.error(error);
    return;
  }
}

export default deleteReserva;