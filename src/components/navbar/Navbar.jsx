import React from 'react'
import { ContainerDasRedesMenu, NavLista, Navbar } from "../../styles/styles"
import Logo from './Logo'
import Chamariz from './Chamariz'
import RedesSociais from './RedesSociais'
import MenuOpcoes from './MenuOpcoes'

const Nav = () => {
    return (
        <>
            <Navbar>
                <NavLista>
                    <Logo />
                    <Chamariz />
                    <ContainerDasRedesMenu>
                        <RedesSociais />
                        <MenuOpcoes />
                    </ContainerDasRedesMenu>
                </NavLista>
            </Navbar>
        </>
    )
}

export default Nav