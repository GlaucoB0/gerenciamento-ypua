import $ from './Card.module.sass'

function getCardClass(orientation) {
  switch(orientation) {
    case 'vertical':
      return $.card_vertical
    case 'horizontal':
      return $.card_horizontal
    default:
      throw new Error('Orientação do Card definida incorretamente.')
  }
}

const Card = ({ orientation = 'vertical', padding, children }) => {
  const style = getCardClass(orientation)

  return (
    <section className={style} style={{ padding: `${padding}rem` }}>
      {children}
    </section>
  )
}

export default Card;