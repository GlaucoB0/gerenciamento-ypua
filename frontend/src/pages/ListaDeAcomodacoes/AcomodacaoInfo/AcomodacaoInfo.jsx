import axios from "axios";
import React, { useEffect, useState } from "react";
import Text from "src/components/Text/Text";
import Titulo from "src/components/Titulo/Titulo";
import $ from "./AcomodacaoInfo.module.sass";
import Button from "src/components/Button/Button";
import TitleForm from "src/components/TitleForm/TitleForm";
import Form from "src/components/Form";
import formatarDado from "src/hooks/mask.js";

const calculaPreco = (checkIn, checkOut, setPreco, valor) => {
  event.preventDefault();
  const start = new Date(checkIn);
  const end = new Date(checkOut);

  const diffInMs = end - start;
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

  // Inputs
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");

  const [telefone, setTelefone] = useState("");
  const [cpf, setCpf] = useState("");
  const [cep, setCep] = useState("");
  const [pais, setPais] = useState("");
  const [estado, setEstado] = useState("");

  useEffect(() => {
    QuartoLoader(setQuarto, setremoveLoading);
  }, []);

  return (
    <>
      <Titulo links={["Reserva", "Informações Detalhadas"]} />
      <div>
        {!removeLoading && <div></div>}

        {Object.keys(quarto).length != 0 && (
          <>
            <Form.Root
              method={"post"}
              action={`/dashboard/acomodacoes/${quarto.quarto_id}`}
              position={"relative"}
            >
              <div className={$.containerSimulacao}>
                <div className={$.containerInfo}>
                  <Text type="BigText" fontFamily="black">
                    {quarto.nome}
                  </Text>
                  <div style={{ display: "flex", gap: "30px" }}>
                    <Text color="gray">Acomoda: {quarto.acomoda}</Text>
                    <Text color="gray">
                      Camas Solteiro:
                      {" " + quarto.camas_solteiros}, Camas Casais:
                      {" " + quarto.cama_casais}
                    </Text>
                  </div>
                  <div>
                    <Text color="gray">Amenidades</Text>
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

                  <div>
                    <div className={$.grid3}>
                      <Form.Control.Root width={""} name={"check_in"}>
                        <Form.Control.Input
                          type={"date"}
                          onChange={({ target }) => {
                            setCheckIn(target.value);
                          }}
                        />
                      </Form.Control.Root>

                      <Form.Control.Root name={"check_out"}>
                        <Form.Control.Input
                          type={"date"}
                          onChange={({ target }) => {
                            setCheckOut(target.value);
                          }}
                        />
                      </Form.Control.Root>
                      <Form.Control.Input placeholder={"Qtd Adultos"} />
                    </div>
                  </div>
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

              <TitleForm
                color={"gray"}
                text={"Informações do Cliente"}
                img={"icon-userr.png"}
              />
              <div className={$.form}>
                <Form.Control.Root name={"nome"}>
                  <Form.Control.Input placeholder={"Nome Completo..."} />
                </Form.Control.Root>

                <Form.Control.Root name={"cpf"}>
                  <Form.Control.Input
                    id="cpf"
                    placeholder={"Digite seu cpf..."}
                    onChange={(e) => {
                      setCpf(formatarDado("cpf", e.target));
                    }}
                  />
                </Form.Control.Root>

                <Form.Control.Root name={"telefone"}>
                  <Form.Control.Input
                    placeholder={"Telefone..."}
                    id={"telefone"}
                    onChange={(e) => {
                      setTelefone(formatarDado("telefone", e.target));
                    }}
                  />
                </Form.Control.Root>
                <Form.Control.Root name={"email"}>
                  <Form.Control.Input placeholder={"Email..."} />
                </Form.Control.Root>

                <Form.Control.Root name={"data_nascimento"}>
                  <Form.Control.Input type={"date"} />
                </Form.Control.Root>
              </div>
              <TitleForm
                color={"gray"}
                text={"Informações de Endereço"}
                img={"icon-casa.png"}
              />
              <div className={$.form}>
                <Form.Control.Root name={"cep"}>
                  <Form.Control.Input
                    placeholder={"Digite seu Cep..."}
                    id={"cep"}
                    onChange={(e) => {
                      setCep(formatarDado("cep", e.target));
                    }}
                  />
                </Form.Control.Root>

                <Form.Control.Root name={"rua"}>
                  <Form.Control.Input placeholder={"Rua/Avenida..."} />
                </Form.Control.Root>

                <Form.Control.Root name={"numero"}>
                  <Form.Control.Input placeholder={"Numero..."} />
                </Form.Control.Root>
                <Form.Control.Root name={"complemento"}>
                  <Form.Control.Input placeholder={"Complemento..."} />
                </Form.Control.Root>

                <Form.Control.Root name={"cidade"}>
                  <Form.Control.Input placeholder={"Cidade..."} />
                </Form.Control.Root>
                <Form.Control.Root name={"estado"}>
                  <Form.Control.Input
                    placeholder={"Estado..."}
                    id={"estado"}
                    onChange={(e) => {
                      setEstado(formatarDado("estado", e.target));
                    }}
                  />
                </Form.Control.Root>
                <Form.Control.Root name={"pais"}>
                  <Form.Control.Input
                    placeholder={"Pais..."}
                    id={"pais"}
                    onChange={(e) => {
                      setPais(formatarDado("pais", e.target));
                    }}
                  />
                </Form.Control.Root>
              </div>
              <Button
                type="submit"
                style={{
                  position: "absolute",
                  right: 0,
                  bottom: 0,
                  width: "150px",
                  height: "70px",
                }}
              >
                {" "}
                Criar{" "}
              </Button>
            </Form.Root>
          </>
        )}
      </div>
    </>
  );
};

export default AcomodacaoInfo;
