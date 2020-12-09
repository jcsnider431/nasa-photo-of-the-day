import React from 'react';




function APOD(props) {


    return (
        <div>
            <iframe src={props.url} width='30%' height='300'></iframe>
        </div>
    )
}

export default APOD
