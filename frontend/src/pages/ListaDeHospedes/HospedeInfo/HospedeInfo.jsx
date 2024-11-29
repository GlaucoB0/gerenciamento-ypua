import React, { useEffect, useState } from "react";
import $ from "./HospedeInfo.module.sass";
import { redirect, useParams } from "react-router-dom";
import axios from "axios";
import Informacao from "src/components/Informacao/Informacao";
import Form from "src/components/Form";
import Titulo from "src/components/Titulo/Titulo";
import TitleForm from "src/components/TitleForm/TitleForm";
import Model from "src/components/Modal/Modal";
import Button from "src/components/Button/Button";
import Text from "src/components/Text/Text";
import deleteReserva from "src/hooks/tasks/deleteReserva";

const DeletionModal = ({ onCancel, onSubmit, type }) => {
  if (type == "Cancelar") {
    return (
      <Model width="" title={`Tem certeza que deseja cancelar?`}>
        <Button height="50px" className={$.custom_modal_btn} onClick={onCancel}>
          Cancelar
        </Button>
        <Button height="50px" onClick={onSubmit}>
          Confirmar
        </Button>
      </Model>
    );
  }
  return (
    <Model
      title={`Realizar ${type}`}
      text={`Confirmar ${type} do hospede no hotel.`}
    >
      <Button height="50px" className={$.custom_modal_btn} onClick={onCancel}>
        Cancelar
      </Button>
      <Button height="50px" onClick={onSubmit}>
        Confirmar
      </Button>
    </Model>
  );
};

const HospedeInfo = () => {
  const [reserva, setHospede] = useState({});
  const [preco, setPreco] = useState({});
  const [CheckOut, setCheckOut] = useState(false);
  const [CheckIn, setCheckIn] = useState(false);
  const [Cancelar, setCancelar] = useState(false);
  const { hospedeId } = useParams();

  const handleFetch = async () => {
    const baseUrl = import.meta.env.VITE_API_BASE_URL;

    try {
      const response = await axios.get(
        baseUrl + `/clientes/porId/${hospedeId}`
      );
      const data = response.data;
      setHospede(data);

      console.log(reserva);
    } catch (error) {
      console.log(error);
      throw new Error(error);
    }
  };     
  const deleteHospede = async (id) => {
    await deleteReserva(id);
    window.location.href = "/dashboard/hospedes"
  };

  useEffect(() => {
    handleFetch();
  }, []);

  return (
    <>
      <Titulo links={["Lista de Hospedes", "Informações da reserva"]} />

      {Object.keys(reserva).length > 0 && (
        <>
          <TitleForm
            text={"Informações do Hospede"}
            img={"icon-user-red.png"}
          />
          <div className={$.infos}>
            <Form.Control.Root label={"Nome"}>
              <Form.Control.Label />
              <Informacao text={reserva.cliente.nome} />
            </Form.Control.Root>

            <Form.Control.Root label={"CPF"}>
              <Form.Control.Label />
              <Informacao text={reserva.cliente.cpf} />
            </Form.Control.Root>

            <Form.Control.Root label={"Telefone"}>
              <Form.Control.Label />
              <Informacao text={reserva.cliente.telefone} />
            </Form.Control.Root>

            <Form.Control.Root label={"Email"}>
              <Form.Control.Label />
              <Informacao text={reserva.cliente.email} />
            </Form.Control.Root>

            <Form.Control.Root label={"Data de Nascimento"}>
              <Form.Control.Label />
              <Informacao
                text={reserva.cliente.data_nascimento
                  .split("T")[0]
                  .replace(/-/g, "/")}
              />
            </Form.Control.Root>
          </div>
          <TitleForm text={"Informações da Reserva"} img={"icon-lapis.png"} />
          <div className={$.infos}>
            <Form.Control.Root label={"Acomodação"}>
              <Form.Control.Label />
              <Informacao text={reserva.reserva.acomodacao} />
            </Form.Control.Root>

            <Form.Control.Root label={"Reservado"}>
              <Form.Control.Label />
              <Informacao
                text={reserva.reserva.reservado
                  .split("T")[0]
                  .replace(/-/g, "/")}
              />
            </Form.Control.Root>

            <Form.Control.Root label={"Valor Total"}>
              <Form.Control.Label />
              <Informacao text={`R$ ${reserva.reserva.preco},00`} />
            </Form.Control.Root>

            <Form.Control.Root label={"Check-In"}>
              <Form.Control.Label />
              <Informacao
                text={reserva.reserva.check_in.split("T")[0].replace(/-/g, "/")}
              />
            </Form.Control.Root>

            <Form.Control.Root label={"Check-Out"}>
              <Form.Control.Label />
              <Informacao
                text={reserva.reserva.check_out
                  .split("T")[0]
                  .replace(/-/g, "/")}
              />
            </Form.Control.Root>
          </div>

          <TitleForm text={"Informações de endereço"} img={"icon-house.png"} />
          <div className={$.infos}>
            <Form.Control.Root label={"Cep"}>
              <Form.Control.Label />
              <Informacao text={reserva.endereco.cep} />
            </Form.Control.Root>

            <Form.Control.Root label={"País"}>
              <Form.Control.Label />
              <Informacao text={reserva.endereco.pais} />
            </Form.Control.Root>

            <Form.Control.Root label={"Estado"}>
              <Form.Control.Label />
              <Informacao text={reserva.endereco.estado} />
            </Form.Control.Root>

            <Form.Control.Root label={"Cidade"}>
              <Form.Control.Label />
              <Informacao text={reserva.endereco.cidade} />
            </Form.Control.Root>

            <Form.Control.Root label={"Complemento"}>
              <Form.Control.Label />
              <Informacao text={reserva.endereco.complemento} />
            </Form.Control.Root>

            <Form.Control.Root label={"Numero"}>
              <Form.Control.Label />
              <Informacao text={reserva.endereco.numero} />
            </Form.Control.Root>
            <Button
              style={{
                position: "absolute",
                width: "200px",
                bottom: "20px",
              }}
              onClick={() => {
                setCancelar(true);
              }}
            >
              Cancelar Reserva
            </Button>
            <Button
              style={{
                position: "absolute",
                width: "150px",
                bottom: "20px",
                right: "190px",
              }}
              onClick={() => {
                setCancelar(true);
              }}
            >
              Check-In
            </Button>
            <Button
              style={{
                position: "absolute",
                width: "150px",
                bottom: "20px",
                right: "20px",
              }}
              onClick={() => {
                setCheckOut(true);
              }}
            >
              Check-Out
            </Button>
          </div>
          {Cancelar && (
            <DeletionModal
              type={"Cancelar"}
              onCancel={() => {
                setCancelar(false);
              }}
              onSubmit={() => {
                deleteHospede(hospedeId);
              }}
            ></DeletionModal>
          )}
          {CheckIn && (
            <DeletionModal
              type={"Check-In"}
              onCancel={() => {
                setCheckIn(false);
              }}
              onSubmit={() => {
                setCheckIn(false);
              }}
            ></DeletionModal>
          )}

          {CheckOut && (
            <DeletionModal
              type={"Check-Out"}
              onCancel={() => {
                setCheckOut(false);
              }}
              onSubmit={() => {
                setCheckOut(false);
              }}
            ></DeletionModal>
          )}
        </>
      )}
    </>
  );
};

export default HospedeInfo;
