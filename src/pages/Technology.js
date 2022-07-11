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
   background-repeat: no-repeat;
   background-size: cover;
   display: flex;
   flex-direction: column;
   justify-content: center; 
   align-items: center;
    
   @media(min-width: 650px) {
    
    height: 100vh;
    background: url(${tabletBackground}) no-repeat;
    background-size: cover; 
}

@media(min-width: 1000px) {
    height: 100vh;
    background: url(${desktopBackground}) no-repeat;
    background-size: cover;
    
    flex-direction: row;
} ` 

const Title = styled.h2`
    font-family: bellefair, serif;
    color: white;
    text-align: center;

    @media(min-width:1000px) {
        transform: translateX(-45rem)
    }
`

const TechnologyContainer = styled.div`
    margin-top: 6rem;
    width: 400px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: .5rem;

    @media(min-width:650px) {
        margin-top: 10rem;
    }

    @media(min-width:1000px) {
        height: 400px;
        width: 500px;
    }
`

const ImageContainer = styled.div`
   margin-top: 1rem;
    
    
    display: flex;
    flex-direction: column;
    justify-content:center;
    align-items:center;
    border: solid grey 1px;
    border-top: none;
    border-left: none;
    border-right: none;

    @media(min-width: 650px) {
       
        width: 100%;
   }

   @media(min-width: 1000px) {
    transform: translate(20rem, 12rem);
    height: 500px;
    width: 500px;
   }
   `

   const StyledImage = styled.img`
    @media(min-width: 1000px) {
    height: 500px;
    width: 500px;
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
width: 400px;
height: 400px;
text-align: left;
transform: translate(-15rem, -20rem);

}
`

const TechnologyList = styled.ul`
    display: flex;
    flex-direction: row;
    width: 200px;
    justify-content: space-around;
    margin-top: 1rem; 
    font-size: 2rem;
    color:white;
    height: 4rem;

    @media(min-width: 650px) {
        font-size: 1.25rem;
        width: 300px;
   }

   @media(min-width: 1000px) {
        font-size: 1.5rem;
        height: 400px;
        flex-direction: column;
        transform: translate(-25rem, -2rem);
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
    padding: .5rem;

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
    const [image, setImage] = useState(LaunchVehicle);
    console.log(image)
    const handleClick = (e) => {
        setTab(e.target.value);
        switch (tab) {
            case 0:
               setImage(LaunchVehicle);
               break
                case 1:
                 setImage(Spaceport);
                 break
                case 2:
                    setImage(Spacecapsule);
                    break
                    default:
                return; 
            }
        }
    return (
        <TechnologyPage>
        <TechnologyContainer>
            <ImageContainer>
             <Title>03 SPACE LAUNCH 101</Title>
                  <StyledImage src={image} alt='vehicle'/>
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