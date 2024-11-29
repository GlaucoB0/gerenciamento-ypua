import $ from "./VisaoGeral.module.scss";

// Dependências:
import { Form, Link, redirect, useLoaderData } from "react-router-dom";

// Componentes:
import Titulo from "components/Titulo/Titulo";
import Card from "components/Card/Card";
import Text from "components/Text/Text";
import HeadedCard from "components/HeadedCard/HeadedCard";
import ProgressBar from "components/ProgressBar/ProgressBar";
import Button from "components/Button/Button";
import Model from "src/components/Modal/Modal";
import FormControlInput from "src/components/Form/FormControlInput/FormControlInput";
import { useEffect, useState } from "react";
import axios from "axios";

const ReservasTitle = () => {
  return (
    <Text type="Title1" color="white" fontFamily="bold">
      Reservas
    </Text>
  );
};

export default function VisaoGeral() {
  let { acomodacoes, reservas } = useLoaderData();
  const [modal, setModal] = useState(false);
  const [modalDelete, setModalDelete] = useState({modal:false});
  const [nome, setNome] = useState('');
  const [tarefas, setTarefas] = useState([])


  const handleFetch = async () => {
    const baseUrl = import.meta.env.VITE_API_BASE_URL;

    try {
      const response = await axios.get(
        baseUrl + `/tarefas/listarTarefas`
      );
      const data = response.data;
      setTarefas(data);

    } catch (error) {
      console.log(error);
      throw new Error(error);
    }
  };     
  const handleDelete = async (id) => {
    const baseUrl = import.meta.env.VITE_API_BASE_URL;

    try {
      const response = await axios.delete(
        baseUrl + `/tarefas/deletarTarefa/${id}`
      );
      const data = response.data;
      setTarefas(data);
      setModalDelete({modal:false})
      
    } catch (error) {
      console.log(error);
      throw new Error(error);
    }
  };     
  const handlePost = async (nome) => {
    const baseUrl = import.meta.env.VITE_API_BASE_URL;

    try {
      const response = await axios.post(
        baseUrl + `/tarefas/criarTarefa`, {nome}
      );
      setModal(false)
    } catch (error) {
      console.log(error);
      throw new Error(error);
    }
  };     

  useEffect(()=>{
    handleFetch()
  },[])

  return (
    <>
      <Titulo links={["Visão Geral"]} />
      <div className={$.page_wrapper}>
        <div>
          <div className={$.top_left_wrapper}>
            <Card
              orientation="horizontal"
              style={{
                width: "30rem",
                height: "12.5rem",
              }}
            >
              <section>
                <Text type="Title1" fontFamily="black">
                  Acomodações
                </Text>
                <Text>
                  Aqui consta a quantidade de acomodações disponíveis para
                  hospedagem atualmente.
                </Text>
                <hgroup className={$.inline_text}>
                  <Text type="GiantText" fontFamily="black">
                    {acomodacoes.livre}
                  </Text>
                  <Text type="Subtitle">de {acomodacoes.total}</Text>
                </hgroup>
              </section>
              <section className={$.block_group}>
                <div className={$.block_s1} />
                <div className={$.block_s2} />
              </section>
            </Card>
            <Card
              orientation="horizontal"
              style={{
                width: "30rem",
                height: "12.5rem",
                gap: "24px",
              }}
            >
              <section className={$.text_wrapper}>
                <div>
                  <Text type="Title1" fontFamily="black">
                    Lista de hóspedes
                  </Text>
                  <Text>
                    Aqui é possível visualizar uma lista dos hóspedes e suas
                    informações.
                  </Text>
                </div>
                <Link className={$.button} to="/dashboard/hospedes">
                  Visualizar
                </Link>
              </section>
              <section className={$.block_group}>
                <div className={$.block_s1} />
                <div className={$.block_s2} />
              </section>
            </Card>
          </div>
          <Card orientation="horizontal" style={{ width: "100%" }}>
            <section>
              <div className={$.pending_tasks}>
                <Text type="Title1" fontFamily="black">
                  Tarefas Pendentes
                </Text>
                <Button
                  onClick={() => {
                    setModal(true);
                  }}
                >
                  {" "}
                  + Criar{" "}
                </Button>
              </div>
              <div style={{display: "flex", gap: '10px', flexWrap: 'wrap', width: '100%'}}>
                {tarefas.length > 0 &&
              tarefas.map((a)=>{
                return(
                <Button style={{width:'fit-content'}} onClick={()=>{setModalDelete({id: a.tarefa_id, modal: true})}}>{a.nome}</Button>
              )
              })
              
              }
              </div>
              
            </section>
          </Card>
        </div>
        <HeadedCard
          cardStyle={{ width: "20rem", height: "fit-content" }}
          title={<ReservasTitle />}
        >
          <ul className={$.reserves}>
            <li className={$.reserves_by_type}>
              <Text type="Title2">Totais:</Text>
              <div style={{ display: "flex", gap: "1rem" }}>
                <Text type="Title1">{reservas.length}</Text>
                <div className={$.block_mini_blue} />
              </div>
            </li>
            <ProgressBar color="#6474BD" progress={100} />
            {/* <hr className={$.hr} />

            <li className={$.reserves_by_type}>
              <Text type="Title2">Confirmadas:</Text>
              <div style={{ display: "flex", gap: "1rem" }}>
                <Text type="Title1">60</Text>
                <div className={$.block_mini_green} />
              </div>
            </li>
            <ProgressBar color="#79DDA1" progress="60" />
            <hr className={$.hr} />

            <li className={$.reserves_by_type}>
              <Text type="Title2">Pendentes:</Text>
              <div style={{ display: "flex", gap: "1rem" }}>
                <Text type="Title1">21</Text>
                <div className={$.block_mini_yellow} />
              </div>
            </li>
            <ProgressBar color="#F8D57A" progress="21" />
            <hr className={$.hr} />

            <li className={$.reserves_by_type}>
              <Text type="Title2">Canceladas:</Text>
              <div style={{ display: "flex", gap: "1rem" }}>
                <Text type="Title1">24</Text>
                <div className={$.block_mini_red} />
              </div>
            </li>
            <ProgressBar color="#FE6D4C" progress="24" /> */}
            <hr className={$.hr} />

            <li className={$.reserves_by_type}>
              <Link className={$.button} to="/dashboard/acomodacoes">
                Reservar
              </Link>
            </li>
          </ul>
        </HeadedCard>
        {modal && (
          <Model title={"Criar nova tarefa"} voltar={true} setModal={setModal}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <FormControlInput placeholder={"Ex: Limpeza...."} onChange={({target})=>{setNome(target.value)}}/>
              <Button style={{ width: "20px" }} onClick={()=>{handlePost(nome)}}>Criar</Button>
            </div>
          </Model>
        )}
        {modalDelete.modal && (
              <Model
                title="Remover tarefa"
                text="Deseja realmente remover essa tarefa? Essa escolha é permanente."
              >
                <Button height="50px" className={$.custom_modal_btn} onClick={()=>{setModalDelete({modal:false})}}>
                  Cancelar
                </Button>
                <Button height="50px" onClick={()=>{handleDelete(modalDelete.id)}}>
                  Remover
                </Button>
              </Model>
            )
          }
      </div>
    </>
  );
}
