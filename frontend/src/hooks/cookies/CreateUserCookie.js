import { useCookies } from 'react-cookie'

const CreateUserCookie = (token, id) => {
  const [cookies, setCookie, removeCookie] = useCookies(['user'])
  
  let current = new Date()

  setCookie('user', { token, id }, {
    expires: current.setDate(current.getDate() + 7)
  })
}

export default CreateUserCookie;