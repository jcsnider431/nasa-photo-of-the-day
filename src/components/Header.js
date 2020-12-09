
import React from 'react'

function Header(title) {
    return (
        <div>
            <h1>{`Nasa's Video of ${title.title}`}</h1>
            <p>{` Date for the video is ${title.date}`}</p>
        </div>
    )
}

export default Header
