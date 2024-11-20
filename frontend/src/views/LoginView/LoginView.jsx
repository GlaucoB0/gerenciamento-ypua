import $ from './LoginView.module.scss'
import Card from 'src/components/Card/Card'
import Form from 'src/components/Form'

const LoginView = () => {
  return (
    <main className={$.main}>
      <Card padding={2.5}>
        <hgroup className={$.hgroup}>
          <h1>Bem-vindo de volta!</h1>
          <p>Insira suas informações de usuário e senha para acessar o sistema</p>
        </hgroup>
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