import axios from "axios";
import React, { useEffect, useState } from "react";
import Acomodacao from "src/components/Acomodacao";
import Titulo from "src/components/Titulo/Titulo";
import $ from "./ListaDeAcomodacoes.module.sass";
import Text from "src/components/Text/Text";
import { redirect } from "react-router-dom";
import Filtros from "src/components/Filtrar";

const ListaDeAcomodacoesLoader = (setter, loading) => {
  const baseUrl = import.meta.env.VITE_API_BASE_URL;
  console.log(baseUrl);
  axios
    .get(baseUrl + "/quartos/listarQuartos/list")
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

const ListaDeAcomodacoes = () => {
  const [lista, setLista] = useState([]);
  const [removeLoading, setremoveLoading] = useState(false);

  useEffect(() => {
    ListaDeAcomodacoesLoader(setLista, setremoveLoading);
  }, []);

  return (
    <>
      <Titulo links={["Lista de Acomodações"]} />
      <div style={{ display: "flex", gap: "10px" }}>
        <Filtros.Root setter={setLista} value={lista} color={"yellow"}>
          <Filtros.Img img={"icon-casa-simple.png"} />
          <Text color="white" fontFamily="bold">Geral</Text>
        </Filtros.Root>
        <Filtros.Root setter={setLista} value={lista} color={"gray"}>
          <Filtros.Img img={"icon-verify.png"} />
          <Text color="gray" fontFamily="bold">Disponiveis</Text>
        </Filtros.Root>
      </div>
      <div className={$.containerAcomodacoes}>
        {!removeLoading && <div></div>}
        {lista.length > 0 &&
          lista.map((a) => {
            return (
              <Acomodacao.Root>
                <Acomodacao.Imagem img={a.image} />
                <Acomodacao.Info.Root>
                  <Acomodacao.Info.Descricao
                    titulo={a.nome}
                    data={{
                      camas_solteiros: a.camas_solteiros,
                      cama_casais: a.cama_casais,
                    }}
                  />
                  <Acomodacao.Info.Amenidades amenidades={a.amenidades} />
                  <Acomodacao.Button
                    text={"Mais informações"}
                    onClick={() => {
                      window.location.href = `/dashboard/acomodacoes/${a.quarto_id}`;
                    }}
                  />
                </Acomodacao.Info.Root>
              </Acomodacao.Root>
            );
          })}
      </div>
    </>
  );
};

export default ListaDeAcomodacoes;
