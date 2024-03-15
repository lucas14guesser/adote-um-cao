import React from 'react'
import { BsInstagram, BsFacebook } from 'react-icons/bs'
import { FaYoutubeSquare } from 'react-icons/fa'
import { ContainerDasRedesSociais, ItensRedesSociais, LinkRedesSociais, ListaDeRedesSociais } from '../../styles/styles'

const RedesSociais = () => {
    return (
        <ContainerDasRedesSociais>
            <ListaDeRedesSociais>
                <ItensRedesSociais>
                    <LinkRedesSociais
                        href="https://www.instagram.com/"
                        target='_blank'>
                        <BsInstagram />
                    </LinkRedesSociais>
                </ItensRedesSociais>
                <ItensRedesSociais>
                    <LinkRedesSociais
                        href="https://www.facebook.com/"
                        target='_blank'>
                        <BsFacebook />
                    </LinkRedesSociais>
                </ItensRedesSociais>
                <ItensRedesSociais>
                    <LinkRedesSociais
                        href="https://www.youtube.com/"
                        target='_blank'>
                        <FaYoutubeSquare />
                    </LinkRedesSociais>
                </ItensRedesSociais>
            </ListaDeRedesSociais>
        </ContainerDasRedesSociais>
    )
}

export default RedesSociais