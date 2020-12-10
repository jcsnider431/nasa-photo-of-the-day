
import React from 'react'
import styled from 'styled-components'

const StyledHeader = styled.div`
color: mediumpurple;
font-family:fantasy;
text-shadow: 2px 2px mediumspringgreen;
transition: .1s;
font-size:2rem;


p{
    font-size:1.75rem;
}

@media (max-width: 550px){
    width: 100%auto;
  }
&:hover {
    color: white;
    transform: scale(1.5);
}

`

function Header(title) {
    return (
        <StyledHeader>
        <div>
            <h1>{`NASA Photo Of The Day`}</h1>
            <h2>{`${title.title}`}</h2>
            <p>{`${title.date}`}</p>
        </div>
        </StyledHeader>
    )
}

export default Header
