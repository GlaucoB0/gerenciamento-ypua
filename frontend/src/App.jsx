// Dependências:
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom'

// Hooks:
import loginViewAction from 'hooks/actions/loginViewAction'
import loginViewLoader from 'hooks/loaders/loginViewLoader'
import dashboardLoader from 'hooks/loaders/dashboardLoader'
import visaoGeralLoader from 'hooks/loaders/visaoGeralLoader'

// Componentes globais:
import Header from 'components/Header/Header'

// Views e páginas:
import Login from 'views/Login/Login'
import Dashboard from 'views/Dashboard/Dashboard'
import VisaoGeral from 'pages/VisaoGeral/VisaoGeral'
import ListaDeHospedes from 'pages/ListaDeHospedes/ListaDeHospedes'
import ListaDeAcomodacoes from 'pages/ListaDeAcomodacoes/ListaDeAcomodacoes'

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
    shouldRevalidate: ({ currentUrl }) => {
      return currentUrl.pathname === "/dashboard/geral"
    },
    children: [
      /* ‼ IMPORTANTE: Inserir as páginas aqui */
      {
        path: "/dashboard/geral",
        element: <VisaoGeral />,
        loader: visaoGeralLoader
      },
      {
        path: "/dashboard/acomodacoes",
        element: <ListaDeAcomodacoes/>
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