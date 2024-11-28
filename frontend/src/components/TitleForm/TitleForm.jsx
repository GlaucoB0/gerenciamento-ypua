import React from 'react'
import $ from './TitleForm.module.sass'
import Text from '../Text/Text'

const TitleForm = ({text, img, color = 'red'}) => {
    return (
        <div className={$.containerTitleForm}>
            <img className={$.iconImg} src={`/src/assets/images/${img}`} />
            <Text type="Title2" color={color}>{text}</Text>
        </div>

    )
}

export default TitleForm