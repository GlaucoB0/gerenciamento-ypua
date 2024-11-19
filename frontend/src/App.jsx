import { Outlet } from 'react-router-dom';
import Header from './components/HeaderBar/Header';

const App = () => {
  return (
    <>
      <Header title="Gerenciamento" />
      <Outlet />
    </>
  )
}

export default App;