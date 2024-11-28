// Dependências:
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";

// Hooks:
import loginViewAction from 'hooks/actions/loginViewAction'
import criarFuncionarioAction from 'hooks/actions/criarFuncionarioAction'
import criarAcomodacaoAction from 'hooks/actions/criarAcomodacaoAction'
import loginViewLoader from 'hooks/loaders/loginViewLoader'
import dashboardLoader from 'hooks/loaders/dashboardLoader'
import visaoGeralLoader from 'hooks/loaders/visaoGeralLoader'
import listaDeHospedesLoader from 'hooks/loaders/listaDeHospedesLoader'

// Componentes globais:
import Header from 'components/Header/Header'

// Views:
import Login from 'views/Login/Login'
import Dashboard from 'views/Dashboard/Dashboard'

// Páginas:
import VisaoGeral from 'pages/VisaoGeral/VisaoGeral'
import ListaDeHospedes from 'pages/ListaDeHospedes/ListaDeHospedes'
import ListaDeAcomodacoes from 'pages/ListaDeAcomodacoes/ListaDeAcomodacoes'
import AcomodacaoInfo from 'pages/ListaDeAcomodacoes/AcomodacaoInfo/AcomodacaoInfo'
import HospedeInfo from 'pages/ListaDeHospedes/HospedeInfo/HospedeInfo'
import CriarAcomodacao from 'pages/CriarAcomodacao/CriarAcomodacao'
import CriarFuncionario from 'pages/CriarFuncionario/CriarFuncionario'

const isUserLogged = () => localStorage.getItem("user") !== undefined;

const router = createBrowserRouter([
  {
    path: "/",
    element: isUserLogged ? (
      <Navigate to="/dashboard" /> // <- Caso esteja logado
    ) : (
      <Navigate to="/login" /> // <- Caso não esteja logado
    ), 
  },
  {
    path: "/login",
    element: <Login />,
    loader: loginViewLoader,
    action: loginViewAction,
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
        element: <ListaDeAcomodacoes />,
      },
      {
        path: "/dashboard/acomodacoes/:acomodacaoId",
        element: <AcomodacaoInfo />,
        action: criarAcomodacaoAction,
      },
      {
        path: "/dashboard/hospedes",
        element: <ListaDeHospedes />,
        loader: listaDeHospedesLoader
      },
      {
        path: "/dashboard/hospedes/:hospedeId",
        element: <HospedeInfo />,
      },
      {
        path: "/dashboard/criarAcomodacao",
        element: <CriarAcomodacao/>
      },
      {
        path: "/dashboard/criarFuncionario",
        element: <CriarFuncionario />,
        action: criarFuncionarioAction,
      },
    ],
  },
]);

const App = () => {
  return (
    <>
      <Header title="Gerenciamento" />
      <RouterProvider router={router} />
    </>
  );
};

export default App;
