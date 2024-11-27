import Form from "src/components/Form";
import Titulo from "src/components/Titulo/Titulo";
import $ from "./CriarAcomodacoes.module.sass";
import TitleForm from "src/components/TitleForm/TitleForm";

const CriarAcomodacoes = () => {
    return (
        <>
            <Titulo links={["Criar Acomodação"]} />

            <div className={$.containerCriarAcomodacoes}>

                <TitleForm text={"Informações da acomodação"} img={"logo-quinta-do-ypua.png"} />
                <Form.Root method={"post"} action={"/dashboard/criarFuncionario"}>
                    <div className={$.form}>
                        <Form.Control.Root name={"nome"} label={"Nome da Acomodação"}>
                            <Form.Control.Label />
                            <Form.Control.Input placeholder={"Ex.: Chalé"} />
                        </Form.Control.Root>


                        <Form.Control.Root name={"camas"} label={"Qtd. Camas"}>
                            <Form.Control.Label />
                            <Form.Control.Input placeholder={"2..."} />
                        </Form.Control.Root>

                        <Form.Control.Root name={"acomoda"} label={"Qnts. Acomoda"}>
                            <Form.Control.Label />
                            <Form.Control.Input placeholder={"4..."} />
                        </Form.Control.Root>

                        <Form.Control.Root name={"noites"} label={"Min. Noites"}>
                            <Form.Control.Label />
                            <Form.Control.Input placeholder={"1..."} />
                        </Form.Control.Root>


                        <Form.Control.Root name={"valor"} label={"Valor por noite"}>
                            <Form.Control.Label />
                            <Form.Control.Input placeholder={"R$ 450,00"} />
                        </Form.Control.Root>


                        <Form.Control.Root name={"imagem"} label={"Imagem da Acomodação"}>
                            <Form.Control.Label />
                            <Form.Control.Input placeholder={"No file chosen"} />
                        </Form.Control.Root>

                        <Form.Control.Root name={"descricao"} label={"Descrição"}>
                            <Form.Control.Label />
                            <Form.Control.Input placeholder={"Ex.: Esta acomodação aceita..."} />
                        </Form.Control.Root>

                        <Form.Control.Root name={"amenidades"} label={"Amenidades"}>
                            <Form.Control.Label />
                        </Form.Control.Root>


                        <Form.Control.Root name={"wifi"} label={"Wi-fi"}>
                            <Form.Control.Label />
                            <Form.Checkbox />
                        </Form.Control.Root>

                        <Form.Control.Root name={"televisao"} label={"Televisão"}>
                            <Form.Control.Label />
                            <Form.Checkbox />
                        </Form.Control.Root>

                        <Form.Control.Root name={"arcondicionnado"} label={"Ar-Condicionado"}>
                            <Form.Control.Label />
                            <Form.Checkbox />
                        </Form.Control.Root>

                        <Form.Control.Root name={"ducha"} label={"Ducha"}>
                            <Form.Control.Label />
                            <Form.Checkbox />
                        </Form.Control.Root>

                        <Form.Control.Root name={"banheira"} label={"Banheira"}>
                            <Form.Control.Label />
                            <Form.Checkbox />
                        </Form.Control.Root>

                        <Form.Control.Root name={"toalhas"} label={"Toalhas"}>
                            <Form.Control.Label />
                            <Form.Checkbox />
                        </Form.Control.Root>

                        <Form.Control.Root name={"frigobar"} label={"Frigobar"}>
                            <Form.Control.Label />
                            <Form.Checkbox />
                        </Form.Control.Root>

                        <Form.Control.Root name={"cozinha"} label={"Cozinha"}>
                            <Form.Control.Label />
                            <Form.Checkbox />
                        </Form.Control.Root>

                    </div>
                    <Form.Submit isEnabled={"true"}> Criar </Form.Submit>
                </Form.Root>
            </div>
        </>
    );
};

export default CriarAcomodacoes;
