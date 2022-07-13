import React from 'react';
import styled from 'styled-components';
import mobileBackground from '../assets/home/background-home-mobile.jpg';
import tabletBackground from '../assets/home/background-home-tablet.jpg';
import desktopBackground from '../assets/home/background-home-desktop.jpg';
import { motion } from 'framer-motion';


const HomePage = styled.div`
   height: 100vh;
   background-image: url(${mobileBackground});
   background-repeat: no-repeat;
   background-size: cover;
   display: flex;
   flex-direction: column;
   justify-content: center; 
   align-items: center;

@media(min-width: 650px) {
    height: auto;
    background: url(${tabletBackground}) no-repeat;
    background-size: cover; 
}

@media(min-width: 1000px) {
    background: url(${desktopBackground}) no-repeat;
    background-size: cover;
    height: 100vh;
    flex-direction: row;
    justify-content: space-between;
}` 

const SpaceContainer = styled.section `
    height: 300px;
    width: 300px;
   margin-top: 6rem;
    display: flex;
    flex-direction: column;
    justify-content:center;
    align-items:center;

    @media(min-width: 650px) {
        height: 500px;
    width: 500px;
    }

    @media(min-width: 1000px) {
        
    width: 100%;
       flex-direction: row;
    }
   
`

const Article = styled.article`
   width: 300px;
    text-align: center;
    
    font-family: 'Barlow Condensed', sans-serif;

    @media(min-width: 650px) {
        width: 100%;
      margin-top: 6rem;
    }

    @media(min-width: 1000px) {
        width: 600px;
    height: 600px;
        
    text-align: left;
    margin-left: 4rem;
}
`
const SoYouWant = styled.p`
    font-weight: 400;
    font-size: 1rem;
    color: rgb(208 214 249);
    line-height: 5;
    
    @media(min-width: 650px) {
        margin-top: 6rem;
        font-size: 1.25rem;
        line-height: 2;
}

@media(min-width: 1000px) {
        
        font-size: 1.5rem;
}
`

const Space = styled.h1`
    font-weight: 400;
    font-size:6rem;
    color: white;
    font-family: bellefair, serif;
`

const FaceIt = styled.p`
    font-family: 'Barlow Condensed', sans-serif;
    color: rgb(208 214 249);
    margin-top: 1rem;
    line-height: 1.5;
    padding: 1rem;

    @media(min-width: 650px) {
        font-size: 1.25rem;
        padding: 1.0rem;
}

@media(min-width: 1000px) {
        font-size: 1.5rem;
        padding: 0rem;
}
`

const ExploreButtonContainer = styled.div`
    width: 200px;
    height: 200px;
    border-radius: 100%;
    margin-top: 5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 0;
    @media(min-width: 650px) {
        width: 300px;
        height: 300px;
        margin-top: 10rem;
    } 
    
    @media(min-width: 1000px) {
        margin-right: 4rem;
    }  
`

const ExploreButtonGrey = styled.button`
    width: 151px;
    height: 151px;
    border-radius: 100%;
    background-color: white;
    opacity: .2;
    border-style: none;

    @media(min-width: 650px) {
        width: 200px;
        height: 200px;
    }   
`

const ExploreButtonWhite = styled.button`
    width: 150px;
    height: 150px;
    border-radius: 100%;
    background-color: white;
    position: absolute;
    border-style: none;
    font-family: bellefair, serif;
    font-size: 1.25rem;

    @media(min-width: 650px) {
        width: 200px;
        height: 200px;
    }   
`

const Home = () => {
    
    return (
        <HomePage>
            <SpaceContainer>
            <Article>
                <SoYouWant>SO YOU WANT TO TRAVEL TO</SoYouWant>
                <Space>SPACE</Space>
                <FaceIt>Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. 
                Well sit back, and relax because we’ll give you a truly out of this world experience!</FaceIt>
            </Article>
            <ExploreButtonContainer>
                <ExploreButtonWhite>EXPLORE</ExploreButtonWhite>
                <motion.div
                whileHover={{
                scale: 1.5,
                transition: {duration: 1},
                }}
                >
                    <ExploreButtonGrey></ExploreButtonGrey>
                </motion.div>
                
            </ExploreButtonContainer>
            </SpaceContainer>
            
        </HomePage>
    ) 
    
}

export default Home