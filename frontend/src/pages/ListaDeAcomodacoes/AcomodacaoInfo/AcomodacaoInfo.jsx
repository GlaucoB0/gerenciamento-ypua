import axios from "axios";
import React, { useEffect, useState } from "react";
import Text from "src/components/Text/Text";
import Titulo from "src/components/Titulo/Titulo";
import $ from "./AcomodacaoInfo.module.sass";
import Button from "src/components/Button/Button";
import TitleForm from "src/components/TitleForm/TitleForm";
import Form from "src/components/Form";

const calculaPreco = (checkIn, checkOut, setPreco, valor) => {
  const start = new Date(checkIn);
  const end = new Date(checkOut);

  // Calcular a diferença em milissegundos
  const diffInMs = end - start;

  // Converter a diferença em dias (1 dia = 24 * 60 * 60 * 1000 ms)
  const diffInDays = diffInMs / (1000 * 60 * 60 * 24);

  setPreco(`${diffInDays * valor},00`);
};

const QuartoLoader = (setter, loading) => {
  const quarto_id = window.location.href.split("/")[5];
  const baseUrl = import.meta.env.VITE_API_BASE_URL;

  axios
    .get(baseUrl + `/quartos/listarQuarto/${quarto_id}`)
    .then((response) => {
      setter(response.data);
      loading(true);
    })
    .catch((error) => {
      console.log(error);
      if (error.response.status !== 404) {
        throw new Error(error);
      }
    });
};

const AcomodacaoInfo = () => {
  const [quarto, setQuarto] = useState([]);
  const [removeLoading, setremoveLoading] = useState(false);
  const [preco, setPreco] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");

  useEffect(() => {
    QuartoLoader(setQuarto, setremoveLoading);
  }, []);

  return (
    <>
      <Titulo links={["Reserva", "Informações Detalhadas"]} />
      <div>
        {!removeLoading && (
          <Text type="Title" color="red">
            Loading...
          </Text>
        )}

        {Object.keys(quarto).length != 0 && (
          <>
            <div className={$.containerSimulacao}>
              <div className={$.containerInfo}>
                <Text type="BigText" fontFamily="black">
                  {quarto.nome}
                </Text>
                <div style={{ display: "flex", gap: "30px" }}>
                  <Text color="light-gray">Acomoda: {quarto.acomoda}</Text>
                  <Text color="light-gray">
                    Camas Solteiro:
                    {" " + quarto.camas_solteiros}, Camas Casais:
                    {" " + quarto.cama_casais}
                  </Text>
                </div>
                <div>
                  <Text color="light-gray">Amenidades</Text>
                  <div className={$.amenidades}>
                    {quarto.amenidades.tv && (
                      <img
                        style={{ height: "100%" }}
                        src={`/public/amenidades/tv.svg`}
                      />
                    )}
                    {quarto.amenidades.wifi && (
                      <img
                        style={{ height: "100%" }}
                        src={`/public/amenidades/wifi.svg`}
                      />
                    )}
                    {quarto.amenidades.ducha && (
                      <img
                        style={{ height: "100%" }}
                        src={`/public/amenidades/ducha.svg`}
                      />
                    )}
                    {quarto.amenidades.cozinha && (
                      <img
                        style={{ height: "100%" }}
                        src={`/public/amenidades/cozinha.svg`}
                      />
                    )}
                    {quarto.amenidades.toalhas && (
                      <img
                        style={{ height: "100%" }}
                        src={`/public/amenidades/toalhas.svg`}
                      />
                    )}
                    {quarto.amenidades.banheira && (
                      <img
                        style={{ height: "100%" }}
                        src={`/public/amenidades/banheira.svg`}
                      />
                    )}
                    {quarto.amenidades.geladeira && (
                      <img
                        style={{ height: "100%" }}
                        src={`/public/amenidades/geladeira.svg`}
                      />
                    )}
                    {quarto.amenidades.arCondicionado && (
                      <img
                        style={{ height: "100%" }}
                        src={`/public/amenidades/arCondicionado.svg`}
                      />
                    )}
                  </div>
                </div>
                <Form.Root>
                  <div className={$.grid3}>
                    <Form.Control.Input
                      type={"date"}
                      onChange={({ target }) => {
                        setCheckIn(target.value);
                      }}
                    />
                    <Form.Control.Input
                      type={"date"}
                      onChange={({ target }) => {
                        setCheckOut(target.value);
                      }}
                    />
                    <Form.Control.Input placeholder={"Qtd Adultos"} />
                  </div>
                </Form.Root>
                <div className={$.grid2}>
                  <Button
                    height={"64px"}
                    onClick={() => {
                      calculaPreco(checkIn, checkOut, setPreco, quarto.preco);
                    }}
                  >
                    Simular Reserva
                  </Button>
                  <Text type="BigText" color="gray">
                    {preco && `R$ ${preco}`}
                  </Text>
                </div>
              </div>

              <img
                className={$.img}
                src={`/public/quartos/${quarto.image}`}
                alt=""
              />
            </div>
            <hr style={{ margin: "25px" }} />

            <Form.Root
              method={"post"}
              action={`/dashboard/acomodacoes/${quarto.quarto_id}`}
            >
              <TitleForm
                text={"Informações do Cliente"}
                img={"icon-user-list.png"}
              />
              <div className={$.form}>
                <Form.Control.Root name={"nome"}>
                  <Form.Control.Input placeholder={"Nome Completo..."} />
                </Form.Control.Root>

                <Form.Control.Root name={"cpf"}>
                  <Form.Control.Input placeholder={"Digite seu cpf..."} />
                </Form.Control.Root>

                <Form.Control.Root name={"telefone"}>
                  <Form.Control.Input placeholder={"Telefone..."} />
                </Form.Control.Root>
                <Form.Control.Root name={"email"}>
                  <Form.Control.Input placeholder={"Email..."} />
                </Form.Control.Root>

                <Form.Control.Root name={"data_nascimento"}>
                  <Form.Control.Input type={"date"} />
                </Form.Control.Root>
              </div>
              <TitleForm
                text={"Informações do Cliente"}
                img={"icon-user-list.png"}
              /> 
                            <div className={$.form}>
                <Form.Control.Root name={"nome"}>
                  <Form.Control.Input placeholder={"Nome Completo..."} />
                </Form.Control.Root>

                <Form.Control.Root name={"cpf"}>
                  <Form.Control.Input placeholder={"Digite seu cpf..."} />
                </Form.Control.Root>

                <Form.Control.Root name={"telefone"}>
                  <Form.Control.Input placeholder={"Telefone..."} />
                </Form.Control.Root>
                <Form.Control.Root name={"email"}>
                  <Form.Control.Input placeholder={"Email..."} />
                </Form.Control.Root>

                <Form.Control.Root name={"data_nascimento"}>
                  <Form.Control.Input type={"date"} />
                </Form.Control.Root>
              </div>
              <Form.Submit isEnabled={"true"}> Criar </Form.Submit>
            </Form.Root>
          </>
        )}
      </div>
    </>
  );
};

export default AcomodacaoInfo;
