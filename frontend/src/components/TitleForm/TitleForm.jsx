import React from 'react'
import $ from './TitleForm.module.sass'
import Text from '../Text/Text'

const TitleForm = ({text, img}) => {
    return (
        <div className={$.containerTitleForm}>
            <img className={$.iconImg} src={`/src/assets/images/${img}`} />
            <Text type="Title" color="red">{text}</Text>
        </div>

    )
}

export default TitleForm