// Dependências:
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";

// Hooks:
import loginViewAction from "hooks/actions/loginViewAction";
import loginViewLoader from "hooks/loaders/loginViewLoader";
import dashboardLoader from "hooks/loaders/dashboardLoader";
import criarFuncionarioAction from "./hooks/actions/criarFuncionarioAction.js";
import criarAcomodacaoAction from "./hooks/actions/criarAcomodacaoAction.js";

// Views e páginas:
import Login from "views/Login/Login";
import Dashboard from "views/Dashboard/Dashboard";
import ListaDeHospedes from "pages/ListaDeHospedes/ListaDeHospedes";
import CriarFuncionario from "./pages/CriarFuncionario/CriarFuncionario";

// Componentes globais:
import Header from "components/Header/Header";
import ListaDeAcomodacoes from "./pages/ListaDeAcomodacoes/ListaDeAcomodacoes";
import AcomodacaoInfo from "./pages/ListaDeAcomodacoes/AcomodacaoInfo/AcomodacaoInfo.jsx";
import HospedeInfo from "./pages/ListaDeHospedes/HospedeInfo/HospedeInfo.jsx";
import CriarAcomodacao from "./pages/CriarAcomodacao/CriarAcomodacao.jsx";


const isUserLogged = () => localStorage.getItem("user") !== undefined;

const router = createBrowserRouter([
  {
    path: "/",
    element: isUserLogged ? (
      <Navigate to="/dashboard" /> // <- Caso esteja logado
    ) : (
      <Navigate to="/login" />
    ), // <- Caso não esteja logado
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
    children: [
      /* ‼ IMPORTANTE: Inserir as páginas aqui */
      {
        path: "/dashboard/geral",
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
