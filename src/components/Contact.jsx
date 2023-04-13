import React from 'react'

const Contact = (props) => {
    return (
        <button className='contact-btns'>{props.comp} {props.text}</button>
    )
}

export default Contact