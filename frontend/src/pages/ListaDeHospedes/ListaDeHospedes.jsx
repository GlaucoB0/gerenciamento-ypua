import axios from "axios";
import { useEffect, useState } from "react";
import Card from "src/components/Card/Card";
import Hospede from "src/components/Hospede";
import Model from "src/components/Model/Model";
import Text from "src/components/Text/Text";
import Titulo from "src/components/Titulo/Titulo";
import $ from "./ListaDeHospedes.module.sass";

const ListaDeHospedesLoader = (setter) => {
  const baseUrl = import.meta.env.VITE_API_BASE_URL;
  console.log(baseUrl);
  axios
    .get(baseUrl + "/clientes/listarClientes")
    .then((response) => {
      console.log(response.data);
      setter(response.data);
    })
    .catch((error) => {
      console.log(error);
      if (error.response.status !== 404) {
        throw new Error(error);
      }
    });
};

const deleteReserva = async (id, setModel) => {
  const baseUrl = import.meta.env.VITE_API_BASE_URL;
  try {
    await axios.delete(`${baseUrl}/clientes/deleteById/${id}`);

    setModel(true)
    
  } catch (error) {
    console.error(error);
    return;
  }
};

const handleDelete = (id, setModel) => {
  deleteReserva(id, setModel);
};

const ListaDeHospedes = () => {
  const [lista, setLista] = useState([]);
  const [model, setModel] = useState(false);

  useEffect(() => {
    ListaDeHospedesLoader(setLista);
  }, []);
  return (
    <>
      <Titulo links={["Lista de Hospedes"]} />
      <div className={$.list}>
        {lista.length > 0 &&
          lista.map((a) => {
            return (
              <Hospede.Root>
                <Hospede.Informacao
                  titulo={"Identificador"}
                  data={a.reserva_id}
                />
                <Hospede.Informacao titulo={"Nome"} data={a.nome} />
                <Hospede.Informacao
                  titulo={"Acomodação"}
                  data={a.quarto.nome}
                />
                <Hospede.Informacao titulo={"Telefone"} data={a.telefone} />
                <Hospede.Informacao
                  titulo={"Realizado em"}
                  data={a.data_reserva.split("T")[0]}
                />
                <Hospede.Button
                  onClick={() => {
                    handleDelete(a.reserva_id, setModel);
                  }}
                />
                {model && <Model text={'Tarefa Deletada!'} setModel={setModel}/>}
              </Hospede.Root>
            );
          })}
      </div>
    </>
  );
};

export default ListaDeHospedes;
