import axios from "axios";
import { useEffect, useState } from "react";
import Card from "src/components/Card/Card";
import Hospede from "src/components/Hospede";
import Text from "src/components/Text/Text";
import Titulo from "src/components/Titulo/Titulo";

const ListaDeHospedesLoader = (setter) => {
  const baseUrl = import.meta.env.VITE_API_BASE_URL;
  console.log(baseUrl);
  axios
    .get("http://localhost:3333/clientes/listarClientes")
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

const ListaDeHospedes = () => {
  const [lista, setLista] = useState([]);
  useEffect(() => {
    ListaDeHospedesLoader(setLista);
  }, []);
  return (
    <>
      <Titulo links={["Lista de Hospedes"]} />
      {lista.length > 0 &&
        lista.map((a) => {
          return (
            <Hospede.Root>
              <Hospede.Informacao
                titulo={"Identificador"}
                data={a.reserva_id}
              />
              <Hospede.Informacao
                titulo={"Nome"}
                data={a.nome}
              />
              <Hospede.Informacao
                titulo={"Acomodação"}
                data={a.quarto.nome}
              />
              <Hospede.Informacao
                titulo={"Telefone"}
                data={a.telefone}
              />
              <Hospede.Informacao
                titulo={"Realizado em"}
                data={a.data_reserva.split('T')[0]}
              />
              <Hospede.Button />
            </Hospede.Root>
          );
        })}
    </>
  );
};

export default ListaDeHospedes;
