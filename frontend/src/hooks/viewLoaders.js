import { redirect } from "react-router-dom"

export const appViewLoader = () => {
  const isUserLogged = true

  if (!isUserLogged) {
    throw redirect('/login')
  }

  return null;
}