import React from 'react'
import styled from 'styled-components';
import mobileBackground from '../assets/technology/background-technology-mobile.jpg';
import tabletBackground from '../assets/technology/background-technology-tablet.jpg';
import desktopBackground from '../assets/technology/background-technology-desktop.jpg';
import Title from '../components/Title'


const TechnologyPage = styled.div`
   height: 100vh;
   background-image: url(${mobileBackground});
   background-repeat: no-repeat;
   background-size: cover;
   display: flex;
   flex-direction: column;
   justify-content: center; 
   align-items: center;

   @media(min-width: 650px) {
    background: url(${tabletBackground}) no-repeat;
    background-size: cover; 
}

@media(min-width: 1000px) {
    background: url(${desktopBackground}) no-repeat;
    background-size: cover;
    height: 100vh;
}` 

const Technology = () => {
    return (
        <TechnologyPage>  
            <Title number='03' heading='SPACE LAUNCH 101'/>
        </TechnologyPage>
    )
}

export default Technology