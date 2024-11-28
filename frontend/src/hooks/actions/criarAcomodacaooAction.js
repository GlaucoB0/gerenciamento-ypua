// Dependências:
import axios from "axios";
import { redirect } from "react-router-dom";

async function criarAcomodacaoAction({ request }) {
  const baseUrl = import.meta.env.VITE_API_BASE_URL;
  const formData = await request.formData();
  const token = localStorage.getItem("user");

  const verificaOn = (value) => {
    if(value == 'on') return true
    return false
  }
  const submission = {
    nome: formData.get("nome"),
    descricao: "Sem descrição.",
    camas_solteiros: Number(formData.get("camas_solteiros")) || 0,
    cama_casais: Number(formData.get("cama_casais")) || 0,
    qtda_banheiros: Number(formData.get("qtda_banheiros")) || 0,
    preco: Number(formData.get("preco")),
    image: formData.get("image"),
    amenidades: {
      tv: verificaOn(formData.get("tv")),
      arCondicionado: verificaOn(formData.get("arCondicionado")),
      banheira: verificaOn(formData.get("banheira")),
      cozinha: verificaOn(formData.get("cozinha")),
      toalhas: verificaOn(formData.get("toalhas")),
      wifi: verificaOn(formData.get("wifi")),
      geladeira: verificaOn(formData.get("geladeira")),
      ducha: verificaOn(formData.get("ducha")),
    }
  };
  console.log(submission);

  try {
    const response = await axios.post(
      `${baseUrl}/quartos/criarQuarto`,
      submission,
      { headers: { Authorization: token } }
    );

    return redirect('/dashboard/acomodacoes')
  } catch (error) {
    console.log(error);
    return "null";
  }
}

export default criarAcomodacaoAction;
