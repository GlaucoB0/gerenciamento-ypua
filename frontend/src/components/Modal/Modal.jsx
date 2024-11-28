import $ from './Modal.module.sass'
import Text from 'components/Text/Text'

const Model = ({title, text, children}) => {
  return (
    <>
      <section className={$.containerModel}>
        {title && <Text type='Title'>{title}</Text>}
        {text && <p>{text}</p>}
        <div className={$.modal_children}>
          {children}
        </div>
      </section>

      <div className={$.overlay}/>
    </>
  )
}

export default Model
