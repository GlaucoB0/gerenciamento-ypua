import $ from "./Login.module.sass";
import Card from "src/components/Card/Card";
import TitleArea from "src/components/TitleArea/TitleArea";
import Form from "src/components/Form";
import formatarDado from "src/hooks/mask.js";
import { useState } from "react";

const Login = () => {

  const [cpf, setCpf] = useState('')

  return (
    <main className={$.main}>
      <Card padding={2.5}>
        <TitleArea title="Bem-vindo de volta!">
          <p>
            Insira suas informações de usuário e senha para acessar o sistema
          </p>
        </TitleArea>
        <Form.Root method="post" action="/login">
          <Form.Control.Root name="usuario" label="Usuário">
            <Form.Control.Label />
            <Form.Control.Input
              width="380px"
              type="text"
              placeholder="Insira o seu CPF"
              iconSrc="src/assets/images/icon-user.png"
              id={"cpf"}
              onChange={(e) => {
                setCpf(formatarDado("cpf", e.target));
              }}
            />
          </Form.Control.Root>
          <Form.Control.Root name="senha" label="Senha">
            <Form.Control.Label />
            <Form.Control.Input
              width="380px"
              type="password"
              placeholder="Insira a sua senha"
              iconSrc="src/assets/images/icon-eye.png"
            />
          </Form.Control.Root>
          <Form.Submit isEnabled={true}>Entrar</Form.Submit>
        </Form.Root>
      </Card>
    </main>
  );
};

export default Login;
