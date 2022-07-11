import React, {useState} from 'react'
import styled from 'styled-components';
import mobileBackground from '../assets/crew/background-crew-mobile.jpg'
import tabletBackground from '../assets/crew/background-crew-tablet.jpg'
import desktopBackground from '../assets/crew/background-crew-desktop.jpg'
import Title from '../components/Title';
import pageData from '../data/data.json'
import CrewMember from '../assets/crew/image-anousheh-ansari.png'
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
    background: url(${tabletBackground}) no-repeat;
    background-size: cover; 
}

@media(min-width: 1000px) {
    background: url(${desktopBackground}) no-repeat;
    background-size: cover;
    height: 100vh;
}` 

const ImageContainer = styled.div`
    margin-top: 2rem;
    width: 450px;
    height: 265px;
    display: flex;
    flex-direction: column;
    justify-content:center;
    align-items:center;
    border: solid grey 1px;
    border-top: none;
    border-left: none;
    border-right: none;

    @media(min-width: 650px) {
        width: 250px;
    height: 250px;
   }

   @media(min-width: 1000px) {
        transform: translate(-8rem, 3rem);
        width: 350px;
    height: 350px;
   }
   `

const CrewArticle = styled.article`

text-align: center;
width: 450px;
margin-top: 1rem;
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
width: 600px;
text-align: left;
margin-left: 48px;
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

const CrewListLabel = styled.label`

`

const CrewListItem = styled.button`
  position: relative;
  
  margin: 0 1rem 0 0 ;
  
  cursor: pointer;
  
  ::before {
    
    content: "";

    
    z-index: 1;
    
    width: 1rem;
    height: 1rem;
    background: grey;
    border-radius: 50%;

    :checked {
    ::before {
     transform: scale(1,1); 
    }
  }
}
  ::after {
    content: "";
    
    position: absolute;
    
    
    width: 1rem;
    height: 1rem;
    
    background: #fff;
    
    border: 2px solid green;
    border-radius: 50%;
  }
`

const CrewPosition = styled.p`
    margin-top: 1rem;
    font-family: bellefair, serif;
    color: white;
    opacity: .4;
`

const CrewName = styled.h2`
    margin-top: 1rem;
    font-family: bellefair, serif;
    color: white;
     
`

const Description = styled.p`
 font-family: 'Barlow Condensed', sans-serif;
    color: rgb(208 214 249);
    margin-bottom: 5rem;
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
        setTab(e.target.value)
    }
    return (
        <CrewPage>
             <Title number='02' heading='MEET YOUR CREW'/>
             <ImageContainer>
                  <img src={CrewMember} alt='planet' width={250}/>
            </ImageContainer> 
            <CrewList>
                    <CrewListLabel>
                        <CrewListItem onClick={handleClick} name='crew-button' type='radio' value='0'></CrewListItem>
                    </CrewListLabel>
                    <CrewListLabel>
                        <CrewListItem onClick={handleClick} name='crew-button' type='radio' value='1'></CrewListItem>
                    </CrewListLabel>
                    <CrewListLabel>
                    <CrewListItem onClick={handleClick} name='crew-button' type='radio' value='2'></CrewListItem>
                    </CrewListLabel>
                    <CrewListLabel>
                    <CrewListItem onClick={handleClick} name='crew-button' type='radio' value='3'></CrewListItem>
                    </CrewListLabel>
            </CrewList> 
            <CrewArticle>
                <CrewPosition>COMMANDER</CrewPosition>
                <CrewName>MATTHEW VAN PELT</CrewName>
                <Description>Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.</Description>
            </CrewArticle>
        </CrewPage>
    )
}

export default Crew