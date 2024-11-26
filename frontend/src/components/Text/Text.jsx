import $ from './Text.module.sass'

const Text = ({type = 'Paragraph', color = '#353535', children}) => {
    if(color == 'red'){
        color = '#7E2726'
    }
    if(color == 'gray'){
        color = '#888888'
    }

    switch (type) {
        case 'Title':
            return <h1 className={$.title} style={{color}}>{children}</h1>
        case 'BigText':
            return <h1 className={$.bigText} style={{color}}>{children}</h1>
        case 'Subtitle':
            return <p className={$.subtitle}>{children}</p>
        default:
            return <p className={$.text} style={{color}}>{children}</p>
    }
}

export default Text