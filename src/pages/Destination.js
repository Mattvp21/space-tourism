import React, { useState } from 'react';
import styled from 'styled-components';
import mobileBackground from '../assets/destination/background-destination-mobile.jpg'
import tabletBackground from '../assets/destination/background-destination-tablet.jpg'
import desktopBackground from '../assets/destination/background-destination-desktop.jpg'
import pageData from '../data/data.json'

import moon from '../assets/destination/image-moon.png'
import mars from '../assets/destination/image-mars.png'
import europa from '../assets/destination/image-europa.png'
import titan from '../assets/destination/image-titan.png'

const DestinationPage = styled.div`
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
    flex-direction: row;
} 
`

const Title = styled.h2`
    font-family: bellefair, serif;
    color: white;
`

const DestinationArticle = styled.article`
    
    
    text-align: center;
    width: 450px;
    
    font-family: 'Barlow Condensed', sans-serif;
    display: flex;
    flex-direction:column;
    justify-content: center;
    align-items: center;
    border: solid grey 1px;
    border-top: none;
    border-left: none;
    border-right: none;
    padding: .5rem;
    @media(min-width: 650px) {
       
        width: 500px;
    }

    @media(min-width: 1000px) {
    width: 600px;
    text-align: left;
    margin-left: 48px;
}
`
const DestinationContainer = styled.div`
    margin-top: 10rem;
    display: flex;
    flex-direction: column;

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
       
   }
    
`

const StyledImage = styled.img`
    margin-top: 1rem;
    width: 200px;
   height: 200px;

   @media(min-width: 650px) {
   
    }
 
    @media(min-width: 1000px) {
         width: 450px;
     height: 450px;
    }
`
const MoonList = styled.ul`
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
        
        width: 400px;
   }
`

const DestinationListItem = styled.li`
    cursor: pointer;
     &:hover {
        border-bottom: solid .2rem;
    }
`

const Moons = styled.h1`
    font-weight: 400;
    font-size:5rem;
    color: white;
    font-family: bellefair, serif;
    margin-top: 2rem;
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
        font-size: 1.5rem;
        padding: 0rem;
        
}
`

const Part2 = styled.div`
    display: flex;
    flex-direction: column;

    @media(min-width: 650px) {
        width: 500px;
        flex-direction: row;
        justify-content: space-between;
}
`

const StatContainer = styled.div`
    margin-top: 2rem;
    width:150px;

    @media(min-width: 650px) {
        width:200px;
}
    
`
const Stat = styled.p`
    font-family: 'Barlow Condensed', sans-serif;
    font-size: .8rem;
    line-spacing: 3rem;
    color: rgb(208 214 249);
    text-align: center;

    @media(min-width: 650px) {
        font-size: 1.25rem;
}
`
const StatNum = styled.p`
    font-family: bellefair, serif;
    font-size: 1.5rem;
    line-spacing: 3rem;
    color: white;
    text-align: center;

    @media(min-width: 650px) {
        font-size: 2rem;
}
`



const Destination = () => {
    const [planets] = useState(pageData.destinations)
    const [tab, setTab] = useState(0);
   
    const {name, description, images, distance, travel } = planets[tab]
    const [image, setImage] = useState(moon)
    console.log(images.png)
    

    const handleClick = (e) => {
        setTab(e.target.value)
        
    }

    const handleImage = () => {
        switch (tab) {
            case 0:
               setImage(moon);
               break
                case 1:
                 setImage(mars);
                 break
                case 2:
                    setImage(europa);
                    break
                    case 3:
                        setImage(titan);
                        break
                        default:
                return ; 
        }
    }

   
    
   
    return (
        <DestinationPage>
        

        <DestinationContainer> 
            <ImageContainer >
            <Title>01 PICK YOUR DESTINATION</Title>
                  <StyledImage src={image} alt='planet' title={name} />
            </ImageContainer> 
            <DestinationArticle>

                <MoonList>
                  {
                    planets.map((item,index) => {
                       return <DestinationListItem key={index}
                        value={index}
                        onClick={event => {
                            handleClick(event);
                            handleImage();
                        }}
                        o> 
                        {item.name}
                        </DestinationListItem>
                  })
                  }
            </MoonList> 
            <Moons>{name}</Moons>
            <Description>{description}</Description>
            <Part2>
            <StatContainer>
                <Stat>AVG DISTANCE</Stat>
                <StatNum>{distance}</StatNum>
            </StatContainer>
            <StatContainer>
            <Stat>AVG DISTANCE</Stat>
                <StatNum>{travel}</StatNum>
            </StatContainer>
            </Part2>
            </DestinationArticle>
            </DestinationContainer>   
        </DestinationPage>
            
           
    )
}

export default Destination;