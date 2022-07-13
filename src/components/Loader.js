import React from 'react'; 
import { motion } from 'framer-motion'
import Load from '../assets/shared/logo.svg'
import styled from 'styled-components'

const LoaderContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

const Loader = () => {
    return (
        <LoaderContainer>
            <img src={Load} alt='loader' />
        </LoaderContainer>
    )
}

export default Loader