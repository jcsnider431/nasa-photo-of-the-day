import React from 'react';
import styled, { keyframes } from 'styled-components'






const StyledImg = styled.div`


@media (max-width: 550px){
    width: 100%auto;
  }

&:hover{
    opacity: 1;
}
img {
    height: 60vh;
    border: 4px solid mediumpurple;
    border-radius: 90%;

}
&img:hover{
animation: wobble;

}
`

function APOD(props) {


    return (
        <StyledImg>
        <div>
            <img src={props.url} alt="" ></img>
        </div>
        </StyledImg>
    )
}

export default APOD
