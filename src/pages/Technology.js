import React from 'react'
import styled from 'styled-components';
import mobileBackground from '../assets/technology/background-technology-mobile.jpg';
import tabletBackground from '../assets/technology/background-technology-tablet.jpg';
import desktopBackground from '../assets/technology/background-technology-desktop.jpg';
import LaunchVehicle from '../assets/technology/image-launch-vehicle-landscape.jpg';
import Spaceport from '../assets/technology/image-spaceport-landscape.jpg'
import Spacecapsule from '../assets/technology/image-space-capsule-landscape.jpg';
import pageData from '../data/data.json'
import { useState } from 'react';


const TechnologyPage = styled.div`
background-image: url(${mobileBackground});
    height: 100vh;
   background-repeat: no-repeat;
   background-size: cover;
   
    
   @media(min-width: 650px) {
    
    
    background: url(${tabletBackground}) no-repeat;
    background-size: cover; 
}

@media(min-width: 1000px) {
   
    background: url(${desktopBackground}) no-repeat;
    flex-direction: row;
} ` 

const Title = styled.h2`
    font-family: bellefair, serif;
    color: white;
    text-align: center;

    @media(min-width:1000px) {
        position: absolute;
        transform: translate(-20rem, -12rem)
    }
`

const TechnologyContainer = styled.div`
    transform: translateY(6rem);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    @media(min-width: 1000px) {
       flex-direction: row;
    }

`

const ImageContainer = styled.div`
  margin-top: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media(min-width: 650px) {
       
   }

   @media(min-width: 1000px) {
    transform: translateX(35rem);
   
    width: 40rem;
   }
   `

   const StyledImage = styled.img`
   width: 100%;
    @media(min-width: 1000px) {
        width: 30rem;
        height: 30rem;
   }

   `

const TechnologyArticle = styled.article`

text-align: center;
width: 450px;

font-family: 'Barlow Condensed', sans-serif;
display: flex;
flex-direction:column;
justify-content: center;
align-items: center;

padding: .5rem;
@media(min-width: 650px) {
   
    width: 500px;
}

@media(min-width: 1000px) {
width: 30rem;
display: block;
flex-direction:column;
justify-content: center;
align-items: center;
text-align: left;
position: absolute;
transform: translate(-10rem, 0rem);

}
`

const TechnologyList = styled.ul`
     display: flex;
    flex-direction: row;
    width: 200px;
    justify-content: space-around;
    
    margin-top: 1rem;
    list-style:none;
    font-size: 1rem;
    color:white;
    height: 2rem;

    @media(min-width: 650px) {
        font-size: 1.25rem;
        width: 300px;
   }


   @media(min-width: 1000px) {
        font-size: 1.5rem;
        height: 400px;
        flex-direction: column;
       transform: translateX(-40rem);
   }
`

const TechnologyListItem = styled.button`
  height: 60px;
  width: 60px;
  border-radius: 100%;  
  cursor: pointer;
  background-color: transparent;
  border: none;
  color: white;
  font-size: 1.25rem;
  font-family: bellefair;

  :hover {
    background-color: white;
    color: black;
  }
`

const TechnologyTerminology= styled.p`
    
    font-family: 'barlow condensed', serif;
    color: rgb(208 214 249);
   
    

    @media(min-width: 1000px) {
    position: relative;
    font-size: 2rem;
    
}
`

const TechnologyName = styled.h2`
    font-family: bellefair, serif;
    color: white;
    @media(min-width: 1000px) {
    font-size: 2rem;
}
`

const Description = styled.p`
 font-family: 'Barlow Condensed', sans-serif;
    color: rgb(208 214 249);
    line-height: 1.5;
    padding: 2rem;

    @media(min-width: 650px) {
        font-size: 1.25rem;
        padding: 1.0rem;
}

@media(min-width: 1000px) {
        

        
}
`

const Technology = () => {

    const [technology] = useState(pageData.technology);
    const [tab, setTab] = useState(0);
    const {name, images, description} = technology[tab];
    
    
    const handleClick = (e) => {
        setTab(e.target.value);
        
        }
    return (
        <TechnologyPage>
        <TechnologyContainer>
            
             <Title>03 SPACE LAUNCH 101</Title>
            <ImageContainer>
                  <StyledImage src={tab === '0' ? LaunchVehicle
                  : tab === '1' ? Spaceport 
                  : tab === '2' ? Spacecapsule 
                  : LaunchVehicle} alt='vehicle'/>
            </ImageContainer> 
            <TechnologyList>
                        <TechnologyListItem  name='Technology-button' 
                        onClick={handleClick} value='0'>1</TechnologyListItem>
                        <TechnologyListItem name='Technology-button'
                         onClick={handleClick} value='1'>2</TechnologyListItem>
                        <TechnologyListItem  name='Technology-button' 
                        onClick={handleClick} value='2'>3</TechnologyListItem>                  
            </TechnologyList> 
            <TechnologyArticle>
                <TechnologyTerminology>THE TERMINOLOGY...</TechnologyTerminology>
                <TechnologyName>{name}</TechnologyName>
                <Description>
               {description}
                </Description>
            </TechnologyArticle>
            </TechnologyContainer>
             
        </TechnologyPage>
    
        )
}

export default Technology