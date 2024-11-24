import { Outlet } from 'react-router-dom';
import { CookiesProvider } from 'react-cookie';
import Header from './components/Header/Header';

const App = () => {
  return (
    <CookiesProvider>
      <Header title="Gerenciamento" />
      <Outlet />
    </CookiesProvider>
  )
}

export default App;