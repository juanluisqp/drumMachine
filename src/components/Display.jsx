import React from 'react'

const Display = ({display, soundType, soundName}) => {
    return (
        <h3 id='display'>{display || soundName[soundType]}</h3>
    )
}

export default Display;