import React from 'react';
import styled from 'styled-components';

const TitleHeading = styled.h2`
    text-align: center;
    color: white;
    font-family: 'Barlow Condensed', sans-serif;
    margin-top: 2rem;
    @media(min-width: 650px) {
        margin-top: 15rem;
        
    }

    @media(min-width: 1000px) {
       margin-top:-22rem;
      
    }
`

const Title = (props) => {
    return <TitleHeading ><span style={{color: 'grey'}}>{props.number}</span><span style={{marginLeft : '.5rem' }}>{props.heading}</span></TitleHeading>
}

export default Title