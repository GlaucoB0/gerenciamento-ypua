// Dependências:
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom'

// Hooks:
import loginViewAction from 'hooks/actions/loginViewAction'
import loginViewLoader from 'hooks/loaders/loginViewLoader'
import dashboardLoader from 'hooks/loaders/dashboardLoader'

// Views e páginas:
import Login from 'views/Login/Login'
import Dashboard from 'views/Dashboard/Dashboard'
import ListaDeHospedes from 'pages/ListaDeHospedes/ListaDeHospedes'

// Componentes globais:
import Header from 'components/Header/Header'

const isUserLogged = () => localStorage.getItem("user") !== undefined

const router = createBrowserRouter([
  {
    path: "/",
    element: isUserLogged 
      ? <Navigate to="/dashboard" /> // <- Caso esteja logado
      : <Navigate to="/login" />     // <- Caso não esteja logado
  },
  {
    path: "/login",
    element: <Login />,
    loader: loginViewLoader,
    action: loginViewAction
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    loader: dashboardLoader,
    children: [
      /* ‼ IMPORTANTE: Inserir as páginas aqui */
      {
        path: "/dashboard/geral"
      },
      {
        path: "/dashboard/acomodacoes",
      },
      {
        path: "/dashboard/acomodacoes/acomodacao/:acomodacaoId",
      },
      {
        path: "/dashboard/hospedes",
        element: <ListaDeHospedes />
      },
      {
        path: "/dashboard/hospedes/hospede/:hospedeId",
      },
      {
        path: "/dashboard/criarAcomodacao",
      },
      {
        path: "/dashboard/criarFuncionario",
      },
    ]
  }
]);

const App = () => {
  return (
    <>
      <Header title="Gerenciamento" />
      <RouterProvider router={router} />
    </>
  )
}

export default App;