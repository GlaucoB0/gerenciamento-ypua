import $ from './ProgressBar.module.sass'

const ProgressBar = ({ color = '#7E2726', progress = '10' }) => {
  return (
    <div className={$.bar}>
      <div 
        className={$.progress}
        style={{ 
          backgroundColor: color,
          width: `${progress}%`
        }}/>
    </div>
  )
}

export default ProgressBar