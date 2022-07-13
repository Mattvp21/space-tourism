import React, {useState} from 'react'
import styled from 'styled-components';
import mobileBackground from '../assets/crew/background-crew-mobile.jpg'
import tabletBackground from '../assets/crew/background-crew-tablet.jpg'
import desktopBackground from '../assets/crew/background-crew-desktop.jpg'

import pageData from '../data/data.json'
import Victor from '../assets/crew/image-victor-glover.png';
import Anousheh from '../assets/crew/image-anousheh-ansari.png';
import Douglas from '../assets/crew/image-douglas-hurley.png';
import Mark from '../assets/crew/image-mark-shuttleworth.png'
const CrewPage = styled.div`
   height: 100vh;
   background-image: url(${mobileBackground});
   background-repeat: no-repeat;
   background-size: cover;
   display: flex;
   flex-direction: column;
   justify-content: center; 
   align-items: center;

   @media(min-width: 650px) {
    height: 100%;
    background: url(${tabletBackground}) no-repeat;
    background-size: cover; 
}

@media(min-width: 1000px) {
   height: 100vh;
    background: url(${desktopBackground}) no-repeat;
   
}` 

const Title = styled.h2`
    font-family: bellefair, serif;
    color: white;
    text-align: center;

    @media(min-width:1000px) {
        transform: translate(-45rem, -5rem);
       
    }
`

const CrewContainer = styled.div`
    width:30rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media(min-width:650px) {
        margin-top:10rem;
    }

   
    @media(min-width:1000px) {
        margin-top: 0;
        justify-content: start;
        height: 100%;
    }
`

const ImageContainer = styled.div`
   margin-top: 1rem;
    width: 270px;
    height: 270px;
    display: flex;
    flex-direction: column;
    justify-content:center;
    align-items:center;
    border: solid grey 1px;
    border-top: none;
    border-left: none;
    border-right: none;

    @media(min-width: 650px) {
        
    
   }

   @media(min-width: 1000px) {
        transform: translate(20rem, 10rem);
        border: none;
        width: 650px;
    height: 500px;
   }
   `

   const StyledImage = styled.img`
   
    height: 80%;
    width: 80%;
   `

const CrewArticle = styled.article`
text-align: center;
font-family: 'Barlow Condensed', sans-serif;
display: flex;
flex-direction:column;
justify-content: center;
align-items: center;

padding: 2rem;
@media(min-width: 650px) {
    
   
}

@media(min-width: 1000px) {
width: 600px;
height: 400px;
text-align: left;
transform: translate(-15rem, -25rem);
}
`

const CrewList = styled.ul`
    display: flex;
    flex-direction: row;
    width: 200px;
    justify-content: space-around;
    margin-top: 1rem;
    font-size: 2rem;
    color:white;
    

    @media(min-width: 650px) {
        font-size: 1.25rem;
        width: 300px;
   }

   @media(min-width: 1000px) {
        font-size: 1.5rem;
        width: 400px;
        transform:translate(-12rem, 3rem) ;
   }
`

const CrewListItem = styled.li`
  cursor: pointer;
`

const CrewPosition = styled.p`
    
    font-family: bellefair, serif;
    color: white;
    opacity: .4;
    

    @media(min-width: 1000px) {
    
    font-size: 3rem;
    
}
`

const CrewName = styled.h2`
    
    font-family: bellefair, serif;
    color: white;
     
    @media(min-width: 1000px) {
    width: 600px;
    text-align: left;
    font-size: 4rem;
}
`

const Description = styled.p`
 font-family: 'Barlow Condensed', sans-serif;
    color: rgb(208 214 249);
    width: 100%;
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



const Crew = () => {

    const [crew] = useState(pageData.crew);
    const [tab, setTab] = useState(0)
    const {name, images, role, bio} = crew[tab]
    

    const handleClick = (e) => {
        setTab(e.target.value);

      
    }
    return (
        <CrewPage>
        <CrewContainer>
            <ImageContainer>
             <Title>02 MEET YOUR CREW</Title>
                  <StyledImage src={tab === 0 ? Douglas 
                  : tab === 1 ? Mark 
                  : tab === 2 ? Victor 
                  : tab === 3 ? Anousheh 
                  : Douglas} alt='crew'/>
            </ImageContainer> 
            <CrewList>
                    
                        <CrewListItem onClick={handleClick} name='crew-button' value='0'></CrewListItem>
                        <CrewListItem onClick={handleClick} name='crew-button' value='1'></CrewListItem>
                        <CrewListItem onClick={handleClick} name='crew-button' value='2'></CrewListItem>                    
                     <CrewListItem onClick={handleClick} name='crew-button' value='3'></CrewListItem>

            </CrewList> 
            <CrewArticle>
                <CrewPosition>{role}</CrewPosition>
                <CrewName>{name}</CrewName>
                <Description>{bio}</Description>
            </CrewArticle>
            </CrewContainer>
             
        </CrewPage>
    )
}

export default Crew