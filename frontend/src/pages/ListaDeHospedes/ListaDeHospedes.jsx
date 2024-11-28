// Folha de estilos:
import $ from "./ListaDeHospedes.module.sass";

// Dependências e módulos:
import { Suspense, useState } from "react";
import { useLoaderData } from "react-router-dom";
import deleteReserva from 'src/hooks/tasks/deleteReserva';

// Componentes:
import Hospede from "components/Hospede";
import Modal from "components/Modal/Modal";
import Titulo from "components/Titulo/Titulo";
import Button from "components/Button/Button";

const DeletionModal = ({ onCancel, onDelete }) => {
  return (
    <Modal 
      title="Remover reserva"
      text="Deseja realmente remover essa reserva? Essa escolha é permanente.">
      <Button 
        height="50px"
        className={$.custom_modal_btn} 
        onClick={onCancel}>
        Cancelar
      </Button>
      <Button height="50px" onClick={onDelete}>
        Remover
      </Button>
    </Modal>
  )
}

export default function ListaDeHospedes() {
  const lista = useLoaderData();
  const [model, setModel] = useState(false);

  const handleDelete = async (id) => {
    await deleteReserva(id)
    window.location.reload()
    setModel(false)
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
                <Hospede.Button onClick={() => setModel(true)} />
                {model && (
                  <DeletionModal onCancel={() => setModel(false)} onDelete={() => handleDelete(a.reserva_id)} />
                )}
              </Hospede.Root>
            </li>
          ))}
        </ul>
    </>
  );
};