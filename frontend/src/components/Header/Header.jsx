import $ from './Header.module.sass'
import img_logo from 'assets/images/logo-quinta-do-ypua.png'

const Header = ({ title }) => {
  return (
    <header className={$.header}>
      <img
        className={$.logo}
        src={img_logo}
        alt="Logotipo da Pousada Quinta do Ypuã" />
      <h1 className={$.title}>
        {title}
      </h1>
    </header>
  )
}

export default Header;