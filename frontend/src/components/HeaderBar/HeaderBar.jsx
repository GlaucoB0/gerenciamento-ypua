import $ from './HeaderBar.module.scss'
import img_logo from 'assets/images/logo-quinta-do-ypua.png'

const HeaderBar = ({ title }) => {
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

export default HeaderBar;