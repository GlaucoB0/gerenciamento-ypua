import $ from './Dashboard.module.sass'
import { Outlet } from 'react-router-dom'
import Card from 'src/components/Card/Card'
import Navbar from 'src/components/Navbar'

import icon_VisaoGeral from 'assets/images/icon-filled-eye.png'
import icon_Reservas from 'assets/images/icon-tag.png'
import icon_ListaUsuarios from 'assets/images/icon-user-list.png'
import icon_Criar from 'assets/images/icon-create.png'
import icon_Sair from 'assets/images/icon-exit.png'

const AppView = () => {
  return (
    <>
      <aside className={$.aside}>
        <Card
          orientation='vertical'
          padding={3}
          style={{ height: '100%' }}>
          <Navbar.Root>
            <Navbar.Link imgSrc={icon_VisaoGeral} 
              name="Visão Geral" to="/dashboard/geral" />
            <Navbar.Link imgSrc={icon_Reservas} 
              name="Acomodações" to="/dashboard/acomodacoes" />
            <Navbar.Link imgSrc={icon_ListaUsuarios} 
              name="Lista de Hóspedes" to="/dashboard/hospedes" />
            <Navbar.Link imgSrc={icon_Criar} 
              name="Criar Acomodação" to="/dashboard/criarAcomodacao" />
            <Navbar.Link imgSrc={icon_Criar} 
              name="Criar Funcionário" to="/dashboard/criarFuncionario" />
          </Navbar.Root>
          {/* ⚠ AVISO: O elemento abaixo será substituído por um modal de logout. */}
          <Navbar.Link imgSrc={icon_Sair} name="Sair" to="#" />
        </Card>
      </aside>
      <main className={$.main}>
        <Outlet />
      </main>
    </>
  )
}

export default AppView