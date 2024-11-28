import Form from "src/components/Form";
import Titulo from "src/components/Titulo/Titulo";
import $ from "./CriarAcomodacao.module.sass";
import TitleForm from "src/components/TitleForm/TitleForm";
import Button from "src/components/Button/Button";
import Text from "src/components/Text/Text";

const CriarAcomodacao = () => {
  return (
    <>
      <Titulo links={["Criar Acomodação"]} />

      <div className={$.containerCriarAcomodacao}>
        <TitleForm
          color="gray"
          text={"Informações da Acomodação"}
          img={"icon-casa.png"}
        />
        <Form.Root method={"post"} action={"/dashboard/criarAcomodacao"}>
          <div className={$.form}>
            <Form.Control.Root name={"nome"} label={"Nome da Acomodação"}>
              <Form.Control.Label />
              <Form.Control.Input placeholder={"Nome do Funcionário"} />
            </Form.Control.Root>

            <Form.Control.Root name={"cpf"} label={"Qtd. Camas"}>
              <Form.Control.Label />
              <Form.Control.Input placeholder={"Cpf do Funcionário"} />
            </Form.Control.Root>

            <Form.Control.Root name={"cargo"} label={"Qnts. Acomoda"}>
              <Form.Control.Label />
              <Form.Control.Input placeholder={"Ex.: Atendente"} />
            </Form.Control.Root>

            <Form.Control.Root name={"cargo"} label={"Mín. Noites"}>
              <Form.Control.Label />
              <Form.Control.Input placeholder={"Ex.: Atendente"} />
            </Form.Control.Root>

            <Form.Control.Root name={"cargo"} label={"Valor por noite"}>
              <Form.Control.Label />
              <Form.Control.Input placeholder={"Ex.: Atendente"} />
            </Form.Control.Root>

            <Form.Control.Root name={"cargo"} label={"Imagem da Acomodação"}>
              <Form.Control.Label />
              <Form.Control.Input placeholder={"Ex.: Atendente"} />
            </Form.Control.Root>

            <Form.Control.Root name={"cargo"} label={"Descrição"}>
              <Form.Control.Label />
              <Form.Control.Input placeholder={"Ex.: Atendente"} />
            </Form.Control.Root>
          </div>
          <div>
            <Text color="gray" type={"Title2"} fontFamily="bold">
              Amenidades
            </Text>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr" }}>
              <Form.Control.Root>
                <Form.Checkbox
                  img={`arCondicionado.svg`}
                  text="Ar Condicionado"
                />
              </Form.Control.Root>
              <Form.Control.Root>
                <Form.Checkbox img={`banheira.svg`} text="Banheira" />
              </Form.Control.Root>
              <Form.Control.Root>
                <Form.Checkbox img={`cozinha.svg`} text="Cozinha" />
              </Form.Control.Root>
              <Form.Control.Root>
                <Form.Checkbox img={`ducha.svg`} text="Ducha" />
              </Form.Control.Root>
              <Form.Control.Root>
                <Form.Checkbox img={`geladeira.svg`} text="Geladeira" />
              </Form.Control.Root>
              <Form.Control.Root>
                <Form.Checkbox img={`toalhas.svg`} text="Toalhas" />
              </Form.Control.Root>
              <Form.Control.Root>
                <Form.Checkbox img={`tv.svg`} text="Tv" />
              </Form.Control.Root>
              <Form.Control.Root>
                <Form.Checkbox img={`wifi.svg`} text="Wi-fi" />
              </Form.Control.Root>
            </div>
          </div>
          <Button
            style={{
              position: "absolute",
              right: "50px",
              bottom: "30px",
              width: "150px",
            }}
          >
            Criar
          </Button>
        </Form.Root>
      </div>
    </>
  );
};

export default CriarAcomodacao;
