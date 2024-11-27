// Dependências:
import axios from "axios";
import { redirect } from "react-router-dom";

async function criarFuncionarioAction({ request }) {
  const baseUrl = import.meta.env.VITE_API_BASE_URL;
  const formData = await request.formData();

  const { funcionario_id } = await axios.get(`${baseUrl}/listByToken`, {
    headers: { Authorization: token.split(" ")[1] },
  });

  const submission = {
    email: formData.get("email"),
    cep: formData.get("cep"),
    numero: formData.get("numero"),
    data_nascimento: `${formData.get("data_nascimento")}T00:00:00Z`,
    endereco: formData.get("endereco"),
    bairro: formData.get("bairro"),
    cidade: formData.get("cidade"),
    estado: formData.get("estado"),
    pais: formData.get("pais"),
    telefone: formData.get("telefone"),
    cpf: formData.get("cpf"),
    quarto_id: window.location.href.split("/")[5],
    funcionario_id: funcionario_id,
    data_reserva: `${formData.get("data_reserva")}T00:00:00Z`,
    check_in: `${formData.get("check_in")}T00:00:00Z`,
    check_out: `${formData.get("check_out")}T00:00:00Z`,
  };
  console.log(submission);

  try {
    const token = localStorage.getItem("user");
    const response = await axios.post(
      `${baseUrl}/quartos/CriarQuartos`,
      submission,
      { headers: { Authorization: token.split(" ")[1] } }
    );

    // return redirect('/dashboard')
    return "null";
  } catch (error) {
    console.log(error);
    alert("Ocorreu um erro!");
    return "null";
  }
}

export default criarFuncionarioAction;
