import $ from './LoginView.module.scss'
import Card from 'src/components/Card/Card'
import TitleArea from 'src/components/TitleArea/TitleArea'
import Form from 'src/components/Form'

const LoginView = () => {
  return (
    <main className={$.main}>
      <Card padding={2.5}>
        <TitleArea title="Bem-vindo de volta!" >
          <p>Insira suas informações de usuário e senha para acessar o sistema</p>
        </TitleArea>
        <Form.Root method="post" action="">
          <Form.Input 
            type="text" name="usuario" label="Usuário" 
            placeholder="Insira o seu nome de usuário"
            iconSrc="src/assets/images/icon-user.png" >
          </Form.Input>
          <Form.Input 
            type="password" name="senha" label="Senha" 
            placeholder="Insira a sua senha"
            iconSrc="src/assets/images/icon-eye.png" />
        </Form.Root>
      </Card>
    </main>
  )
}

export default LoginView