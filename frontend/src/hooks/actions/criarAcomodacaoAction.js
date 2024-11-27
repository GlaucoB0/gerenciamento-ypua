// Dependências:
import axios from "axios";
import { redirect } from "react-router-dom";

async function criarAcomodacaoAction({ request }) {
  const baseUrl = import.meta.env.VITE_API_BASE_URL;
  const formData = await request.formData();
  const token = localStorage.getItem("user");

  const response = await axios.get(`${baseUrl}/funcionarios/listByToken`, {
    headers: { Authorization: token },
  });

  console.log(token);
  let today = new Date();
  console.log(today);

  let dd = today.getDate();
  let mm = today.getMonth() + 1;

  let yyyy = today.getFullYear();
  const data = `${yyyy}-${mm}-${dd}T00:00:00Z`;

  const submission = {
    email: formData.get("email"),
    cep: formData.get("cep"),
    numero: Number(formData.get("numero")),
    data_nascimento: `${formData.get("data_nascimento")}T00:00:00Z`,
    endereco: formData.get("complemento"),
    nome: formData.get('nome'),
    bairro: formData.get("rua"),
    cidade: formData.get("cidade"),
    estado: formData.get("estado"),
    pais: formData.get("pais"),
    telefone: formData.get("telefone"),
    cpf: formData.get("cpf"),
    quarto_id: window.location.href.split("/")[5],
    funcionario_id: response.data.id,
    data_reserva: data,
    check_in: `${formData.get("check_in")}T00:00:00Z`,
    check_out: `${formData.get("check_out")}T00:00:00Z`,
  };
  console.log(submission);

  try {
    const response = await axios.post(
      `${baseUrl}/clientes/criarClientes`,
      submission,
      { headers: { Authorization: token } }
    );

    return redirect('/dashboard/hospedes')
  } catch (error) {
    console.log(error);
    return "null";
  }
}

export default criarAcomodacaoAction;
