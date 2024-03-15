import React from 'react'
import { ContainerRodape } from '../../styles/styles'
import LogoRodape from './LogoRodape'
import TextoRodape from './TextoRodape'
import RedesSociais from '../navbar/RedesSociais'

const Rodape = () => {
    return (
        <ContainerRodape>
            <LogoRodape />
            <TextoRodape />
            <RedesSociais />
        </ContainerRodape>
    )
}

export default Rodape