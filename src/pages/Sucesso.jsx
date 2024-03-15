import React from 'react'
import { Container, ContainerSucesso, ContainerSucessoImagem, ContainerSucessoTexto, ContainerSucessoTitulo, EstiloDoTextoDeEntrada, Subtitulo, SucessoImagem, Titulo } from '../styles/styles'
import succes from '../assets/sucesso.png'

const Sucesso = () => {
    return (
        <Container>
            <ContainerSucesso>
                <ContainerSucessoTitulo>
                    <Titulo>Parabéns!!!</Titulo>
                    <Subtitulo>Seu formulário foi enviado com êxito...</Subtitulo>
                </ContainerSucessoTitulo>
                <ContainerSucessoTexto>
                    <EstiloDoTextoDeEntrada>Você não precisa se preocupar pois os dados preenchidos no formulário não ficaram salvos.</EstiloDoTextoDeEntrada>
                    <EstiloDoTextoDeEntrada>Logo você irá receber um e-mail de agradecimento por ter testado o meu projeto, muito obrigado.</EstiloDoTextoDeEntrada>
                </ContainerSucessoTexto>
                <ContainerSucessoImagem>
                    <SucessoImagem src={succes} alt="Shiba Ino extremamente feliz" />
                </ContainerSucessoImagem>
            </ContainerSucesso>
        </Container>
    )
}

export default Sucesso