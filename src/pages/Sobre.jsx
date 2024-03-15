import React from 'react'
import { Container, ContainerSobre} from '../styles/styles'
import ComponenteLista from '../components/sobre/ComponenteLista'

const Sobre = () => {
    return (
        <Container>
            <ContainerSobre>
                <ComponenteLista />
            </ContainerSobre>
        </Container>
    )
}

export default Sobre