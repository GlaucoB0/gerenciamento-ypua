import { redirect } from "react-router-dom"

const appViewLoader = () => {
  /* ABAIXO, placeholder da lógica de detecção de login: */
  const isUserLogged = false // <= Isso será alterado, o resto mantido

  if (!isUserLogged) {
    throw redirect('/login')
  }

  return null;
}

export default appViewLoader