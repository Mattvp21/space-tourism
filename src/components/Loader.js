import React from 'react'; 
import { motion } from 'framer-motion'
import Load from '../assets/shared/logo.svg'
import styled from 'styled-components'

const LoaderContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    transform: translateY(20rem);
`

const Loader = () => {
    return (
        <LoaderContainer>
            <motion.div animate={{
                    rotate: 10000,
                   
                }}
                transition={{
      flip: Infinity,
      duration: 9,
      ease: "easeInOut",
}}>
             <img src={Load} alt='loader' />
            </motion.div>
            
        </LoaderContainer>
    )
}

export default Loader