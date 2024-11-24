import { Outlet } from 'react-router-dom';
import Header from './components/Header/Header';

const App = () => {
  return (
    <>
      <Header title="Gerenciamento" />
      <Outlet />
    </>
  )
}

export default App;