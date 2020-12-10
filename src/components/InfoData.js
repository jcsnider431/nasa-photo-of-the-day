import React from 'react'
import styled, { keyframes } from 'styled-components'


const kf = keyframes`
    {
        opacity:1;
    }

`

const StyledBody = styled.div`
  color: mediumpurple;
  animation:${kf} 0.5s;
  font-size: 2rem;
  font-family:fantasy;
  font-weight: bold ;
  width: 50%;
  display: inline-flex;
  text-align:center;
  justify-content: space-between;
  align-items: center;
  opacity: 0;
  transition: .1s;
  text-shadow: 2px 2px mediumspringgreen;
  
  
  
  
  @media (max-width: 550px){
    width: 100%auto;
  }
  &:hover {
      opacity: 1;
  }
  
`

function Explanation(props) {
    return (
        <StyledBody >
        <div>
            <p>{props.info}</p>
        </div>
        </StyledBody>
    )
}

export default Explanation
