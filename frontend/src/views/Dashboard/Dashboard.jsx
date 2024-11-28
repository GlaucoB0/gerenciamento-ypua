import $ from './Dashboard.module.sass'

// Dependências:
import { Outlet, useNavigate } from 'react-router-dom'
import { useState } from 'react'

// Componentes:
import Card from 'components/Card/Card'
import Navbar from 'components/Navbar'
import Button from 'components/Button/Button'
import Modal from 'components/Modal/Modal'

// Assets:
import icon_VisaoGeral from 'assets/images/icon-filled-eye.png'
import icon_Reservas from 'assets/images/icon-tag.png'
import icon_ListaUsuarios from 'assets/images/icon-user-list.png'
import icon_Criar from 'assets/images/icon-create.png'
import icon_Sair from 'assets/images/icon-exit.png'

const ExitModal = ({onCancel, onExit}) => {
  return (
    <Modal 
      title="Sair da Conta"
      text="Tem certeza de que deseja sair? O login deverá ser feito novamente.">
      <Button className={$.custom_modal_btn} height="50px" onClick={onCancel}>
        Cancelar
      </Button>
      <Button height="50px" onClick={onExit}>
        Sair
      </Button>
    </Modal>
  )
}

export default function Dashboard() {
  const [show, setShow] = useState(false)
  const navigate = useNavigate()
  
  const handleExit = () => {
    localStorage.removeItem('user')
    navigate('/login')
  }

  return (
    <div className={$.root}>
      {show && (
        <ExitModal onExit={handleExit} onCancel={() => setShow(false)} />
      )}
      <aside className={$.aside}>
        <Card
          orientation='vertical'
          padding={3}
          style={{ height: '100%' }}>
          <Navbar.Root>
            <Navbar.Link imgSrc={icon_VisaoGeral} 
              name="Visão Geral" to="/dashboard/geral" 
            />
            <Navbar.Link imgSrc={icon_Reservas} 
              name="Acomodações" to="/dashboard/acomodacoes" 
            />
            <Navbar.Link imgSrc={icon_ListaUsuarios} 
              name="Lista de Hóspedes" to="/dashboard/hospedes" 
            />
            <Navbar.Link imgSrc={icon_Criar} 
              name="Criar Acomodação" to="/dashboard/criarAcomodacao" 
            />
            <Navbar.Link imgSrc={icon_Criar} 
              name="Criar Funcionário" to="/dashboard/criarFuncionario" 
            />
          </Navbar.Root>
          <Button className={$.custom_btn} onClick={() => setShow(true)}>
            <img src={icon_Sair} alt="Sair da conta" />
            Sair
          </Button>
        </Card>
      </aside>
      <main className={$.main}>
        <Outlet />
      </main>
    </div>
  )
}