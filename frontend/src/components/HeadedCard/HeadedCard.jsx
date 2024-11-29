import $ from './HeadedCard.module.sass'

function getDivClass(orientation) {
  switch(orientation) {
    case 'vertical':
      return $.div_vertical
    case 'horizontal':
      return $.div_horizontal
    default:
      throw new Error('Orientação do elemento <div> no Card definida incorretamente.')
  }
}

const HeadedCard = ({ title, orientation = 'vertical', cardStyle, divStyle, children }) => {
  const divClass = getDivClass(orientation)

  return (
    <section className={$.card} style={cardStyle}>
      <header>
        {title}
      </header>
      <div className={divClass} style={divStyle}>
        {children}
      </div>
    </section>
  )
}

export default HeadedCard;