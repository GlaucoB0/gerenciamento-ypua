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
              <Form.Control.Input placeholder={"Ex: Domo"} />
            </Form.Control.Root>

            <Form.Control.Root name={"camas_solteiros"} label={"Qtd. Camas de solteiros"}>
              <Form.Control.Label />
              <Form.Control.Input placeholder={"quantidade de cama de solteiro"} type={'number'}/>
            </Form.Control.Root>

            <Form.Control.Root name={"cama_casal"} label={"Qtd. Camas de casais"}>
              <Form.Control.Label />
              <Form.Control.Input placeholder={"quantidade de cama de casal"} type={'number'}/>
            </Form.Control.Root>

            <Form.Control.Root name={"qtda_banheiros"} label={"Qtd. Banheiros"}>
              <Form.Control.Label />
              <Form.Control.Input placeholder={"Ex: 2"} type={'number'}/>
            </Form.Control.Root>

            <Form.Control.Root name={"min_noites"} label={"Mín. Noites"}>
              <Form.Control.Label />
              <Form.Control.Input placeholder={"Ex.: 2"} type={'number'}/>
            </Form.Control.Root>

            <Form.Control.Root name={"preco"} label={"Valor por noite"}>
              <Form.Control.Label />
              <Form.Control.Input placeholder={"Ex.: 490"} type={'number'}/>
            </Form.Control.Root>

            <Form.Control.Root name={"image"} label={"Imagem da Acomodação"}>
              <Form.Control.Label />
              <Form.Control.Input type={'file'}/>
            </Form.Control.Root>
          </div>
          <div>
            <Text color="gray" type={"Title2"} fontFamily="bold">
              Amenidades
            </Text>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr" }}>
              <Form.Control.Root name={"arCondicionado"}>
                <Form.Checkbox
                  img={`arCondicionado.svg`}
                  text="Ar Condicionado"
                />
              </Form.Control.Root>
              <Form.Control.Root name={"banheira"}>
                <Form.Checkbox img={`banheira.svg`} text="Banheira" />
              </Form.Control.Root>
              <Form.Control.Root name={"cozinha"}>
                <Form.Checkbox img={`cozinha.svg`} text="Cozinha" />
              </Form.Control.Root>
              <Form.Control.Root name={"ducha"}>
                <Form.Checkbox img={`ducha.svg`} text="Ducha" />
              </Form.Control.Root>
              <Form.Control.Root name={"geladeira"}>
                <Form.Checkbox img={`geladeira.svg`} text="Geladeira" />
              </Form.Control.Root>
              <Form.Control.Root name={"toalhas"}>
                <Form.Checkbox img={`toalhas.svg`} text="Toalhas" />
              </Form.Control.Root>
              <Form.Control.Root name={"tv"}>
                <Form.Checkbox img={`tv.svg`} text="Tv" />
              </Form.Control.Root>
              <Form.Control.Root name={"wifi"}>
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
            type={'submit'}
          >
            Criar
          </Button>
        </Form.Root>
      </div>
    </>
  );
};

export default CriarAcomodacao;
