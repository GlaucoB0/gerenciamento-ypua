import { redirect } from "react-router-dom"

export const appViewLoader = () => {
  /* ABAIXO, placeholder da lógica de detecção de login: */
  const isUserLogged = false // <= Isso será alterado, o resto mantido

  if (!isUserLogged) {
    throw redirect('/login')
  }

  return null;
}