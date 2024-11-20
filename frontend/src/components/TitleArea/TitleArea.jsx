import $ from './TitleArea.module.sass'

const TitleArea = ({ title, children }) => {
  return (
    <hgroup className={$.hgroup}>
      <h1>{title}</h1>
      {children}
    </hgroup>
  )
}

export default TitleArea;