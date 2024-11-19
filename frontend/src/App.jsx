import { Outlet } from 'react-router-dom';
import HeaderBar from './components/HeaderBar/HeaderBar';

const App = () => {
  return (
    <>
      <HeaderBar title="Gerenciamento" />
      <Outlet />
    </>
  )
}

export default App;