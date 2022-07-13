import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom'

const Container = styled.h2`
    
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 100vh;
`

const NotFound = styled.h2`
    font-weight: 400;
    font-size:6rem;
    color: white;
    font-family: bellefair, serif;
    display: 
`


const Page404 = () => {
    return (
        <Container>
    <NotFound>404 Not Found</NotFound>
    <Link style={{color: 'white', textDecoration: 'none', fontFamily: 'bellair'}} to='/'>Back to home</Link> 
    </Container>
    ) 
}

export default Page404