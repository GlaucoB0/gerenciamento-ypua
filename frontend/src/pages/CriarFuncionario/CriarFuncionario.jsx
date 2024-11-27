import Form from "src/components/Form";
import Titulo from "src/components/Titulo/Titulo";
import $ from "./CriarFuncionario.module.sass";
import TitleForm from "src/components/TitleForm/TitleForm";
import Button from "src/components/Button/Button";

const CriarFuncionario = () => {
    return (
        <>
            <Titulo links={["Criar Funcionário"]} />

            <div className={$.containerCriarFuncionario}>

                <TitleForm text={"Informações do Funcionário"} img={"icon-user-list.png"} />
                <Form.Root method={"post"} action={"/dashboard/criarFuncionario"}>
                    <div className={$.form}>
                        <Form.Control.Root name={"nome"} label={"Nome do Funcionário"}>
                            <Form.Control.Label />
                            <Form.Control.Input placeholder={"Nome do Funcionário"} />
                        </Form.Control.Root>


                        <Form.Control.Root name={"cpf"} label={"Cpf do Funcionário"}>
                            <Form.Control.Label />
                            <Form.Control.Input placeholder={"Cpf do Funcionário"} />
                        </Form.Control.Root>


                        <Form.Control.Root name={"cargo"} label={"Cargo"}>
                            <Form.Control.Label />
                            <Form.Control.Input placeholder={"Ex.: Atendente"} />
                        </Form.Control.Root>


                        <Form.Control.Root name={"senha"} label={"Senha"}>
                            <Form.Control.Label />
                            <Form.Control.Input givenType={"password"} placeholder={"Senha"} />
                        </Form.Control.Root>
                    </div>
                    <Button style={{position: 'absolute', right: '50px', bottom: '30px', width: '150px', height: '70px'}}> Criar </Button>
                </Form.Root>
            </div>
        </>
    );
};

export default CriarFuncionario;
