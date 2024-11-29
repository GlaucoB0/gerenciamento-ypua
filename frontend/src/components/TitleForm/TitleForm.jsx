import React from 'react'
import $ from './TitleForm.module.sass'
import Text from '../Text/Text'

const TitleForm = ({text, img, color = 'red'}) => {
    let tipo = ''
    switch(color){
        case 'red':
            tipo = 'Title'
            break
        default:
            'Title2'
            break
    }
    return (
        <div className={$.containerTitleForm}>
            <img className={$.iconImg} src={`/src/assets/images/${img}`} />
            <Text type={'Title3'} style={{fontSize: '24px'}} color={color}>{text}</Text>
        </div>

    )
}

export default TitleForm