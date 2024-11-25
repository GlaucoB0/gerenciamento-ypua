import { redirect } from "react-router-dom"

const dashboardLoader = () => {
  /* ABAIXO, placeholder da lógica de detecção de login: */
  const isUserLogged = true // <= Isso será alterado, o resto mantido

  if (!isUserLogged) {
    throw redirect('/login')
  }

  return null;
}

export default dashboardLoader