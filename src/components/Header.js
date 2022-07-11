import React, {useState} from 'react';
import styled from 'styled-components';
import open from '../assets/shared/icon-hamburger.svg';
import closed from '../assets/shared/icon-close.svg';
import { motion } from 'framer-motion';
import {Link} from 'react-router-dom'


const HeaderComponent = styled.header`
    position: absolute;
    display: flex;
    align-items: center;
    top: 24px;
    right: 24px;
    left: 24px;
    color: white;
    font-family: 'Barlow Condensed', sans-serif;
    font-size: 2rem;
    z-index: 1000;
`

const LogoContainer = styled.div`
    background-color: #fff;
    width: 48px;
    height: 48px;
    border-radius: 100%;
`



const Hamburger = styled.div`
   margin-left:auto;
    cursor: pointer;
   @media(min-width:650px) {
        display: none;
   }
`

const HiddenNav = styled.nav`
    position: absolute;
    top: 50px;
    background: gray;
    opacity: .9;
    border-radius: 10px;
    right: 0;
    height: 100vh;
    width: 300px;
    display: flex;
    justify-content: center;
    align-items:center;
    @media(min-width: 650px) {
      display:none
    }
`

const DesktopNav = styled.ul`
    display: none;

    @media(min-width: 650px) {
        background-color: transparent;
        backdrop-filter: blur(1rem);
        position:absolute;
        top: 0;
        right:0;
        display: flex;
        flex-wrap: wrap;
      flex-direction: row;
      justify-content: space-around;
      align-items: space-between;
      height: 4rem;
      width: 500px;
      
    }
`

const NavList = styled.ul`
    list-style: none;
    
    text-align: center;
    line-height: 2;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items:center;
    cursor: pointer;

    @media(min-width: 650px) {
        flex-direction: row;
        justify-content:space-between;
        width:100%;
        color: white;
        font-size: 1.10rem;
        line-height: 3;
        
    }
`

const LineItem = styled.li`
    font-size: 1.5rem;
   text-decoration: none;
   color: white;
    font-weight: 500;
   @media(min-width: 650px) {
    font-size: 1rem;
   }
    
    &:hover {
        border-bottom: solid .5rem;
        animation-duration: 1s;
        animation-name: moveInLeft;
    }

    @keyframes moveInLeft {
        from {
            margin-top: -1rem;
        }

        to {
            margin-top: 0rem;
        }
    }
`




const Header = () => {

    const [click, setClick] = useState(true);

    const handleClick = () => {
        if(click === true) {
            setClick(false)
        }
        if(click === false) {
            setClick(true)
        }
    }

    

    return (
        <HeaderComponent>
        <motion.div
        whileHover={{
            rotate: 360,
            transition: {duration: 5},
        }}>
        <LogoContainer>
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48"><g fill="none" fillRule="evenodd"><circle cx="24" cy="24" r="24" fill="#FFF"/><path fill="#0B0D17" d="M24 0c0 16-8 24-24 24 15.718.114 23.718 8.114 24 24 0-16 8-24 24-24-16 0-24-8-24-24z"/></g></svg>
          </LogoContainer>
        </motion.div>
          
          
          <Hamburger  onClick={handleClick}>
            {click ? <img src={open} alt='open'/> : <img src={closed} alt='closed' />}
          </Hamburger>
          {click 
           ? null 
           :
           <motion.div
            animate={{ x: 50 }}
            transition={{ ease: "easeOut", duration: 2 }}>
           <HiddenNav>
           
        <NavList>
            <Link to='/' style={{textDecoration: 'none'}}>
              <LineItem>00 HOME</LineItem>  
            </Link>
            <Link to='/destination' style={{textDecoration: 'none'}}>
                <LineItem>01 DESTINATION</LineItem>
            </Link>
            <Link to='/crew' style={{textDecoration: 'none'}}>
                <LineItem>02 CREW</LineItem>
            </Link>
            <Link to='/technology' style={{textDecoration: 'none'}}>
            <LineItem>03 TECHNOLOGY</LineItem>
            </Link>     
        </NavList>
          
           
          
          </HiddenNav>
           </motion.div>
         
          }
          <DesktopNav>
            <NavList>
            <Link to='/' style={{textDecoration: 'none'}}>
                <LineItem>00 HOME</LineItem>
            </Link>
            <Link to='/destination' style={{textDecoration: 'none'}}>
                <LineItem>01 DESTINATION</LineItem>
            </Link>
            <Link to='/crew' style={{textDecoration: 'none'}}>
                <LineItem>02 CREW</LineItem>
            </Link>
            <Link to='/technology' style={{textDecoration: 'none'}}>
            <LineItem>03 TECHNOLOGY</LineItem>
            </Link> 
            </NavList>
          </DesktopNav>
        </HeaderComponent>
    )
}

export default Header



