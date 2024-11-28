// Folha de estilos:
import $ from "./ListaDeHospedes.module.sass";

// Dependências e módulos:
import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import deleteReserva from 'src/hooks/tasks/deleteReserva';

// Componentes:
import Hospede from "components/Hospede";
import Model from "components/Model/Model";
import Titulo from "components/Titulo/Titulo";

const ListaDeHospedes = () => {
  const lista = useLoaderData();
  const [model, setModel] = useState(false);

  const handleDelete = (id, setter) => {
    deleteReserva(id, setter)
  }

  return (
    <>
      <Titulo links={["Lista de Hospedes"]} />
      <ul className={$.list}>
        {lista.map((a, i) => (
          <li key={i}>
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
              <Hospede.Button onClick={() => handleDelete(a.reserva_id, setModel)} />
              {model && <Model text={'Tarefa Deletada!'} setModel={setModel}/>}
            </Hospede.Root>
          </li>
        ))}
      </ul>
    </>
  );
};

export default ListaDeHospedes;
