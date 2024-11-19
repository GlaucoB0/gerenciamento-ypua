import $ from './Card.module.scss'

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

const Card = ({ orientation = 'horizontal', radiusPx = 5, children }) => {
  const style = getCardClass(orientation)

  return (
    <section className={style} style={{
      borderRadius: `${radiusPx}px`
    }}>
      {children}
    </section>
  )
}

export default Card;