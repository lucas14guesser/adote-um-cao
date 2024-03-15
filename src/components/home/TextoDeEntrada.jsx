import React from 'react'
import { ContainerDoTextoDeEntrada, ContainerDoTextoDeEntradaGeral, EstiloDoTextoDeEntrada } from '../../styles/styles'
import { Link } from 'react-router-dom'

const TextoDeEntrada = () => {
    return (
        <ContainerDoTextoDeEntradaGeral>
            <ContainerDoTextoDeEntrada>
                <EstiloDoTextoDeEntrada>
                    Transforme uma patinha carente em um coração repleto de amor. Adote um cão e encha sua vida de alegria, lealdade e amizade incondicional. Seja o herói que um amigo peludo está esperando!
                    <br /><br />
                    Descubra o amor incondicional de um companheiro de quatro patas adotando um cachorro. Nossos adoráveis amigos peludos aguardam por lares amorosos, oferecendo lealdade, alegria e uma amizade para toda a vida.
                    <br /><br />
                    Ao escolher a adoção, você não apenas enriquece sua própria vida com uma conexão especial, mas também faz a diferença na vida de um cachorro, proporcionando-lhe uma segunda chance e um lugar para chamar de lar. Adote hoje e descubra o significado verdadeiro da amizade.
                </EstiloDoTextoDeEntrada>
            </ContainerDoTextoDeEntrada>
            <ContainerDoTextoDeEntrada>
                <EstiloDoTextoDeEntrada>
                    Marque sua visita para conhecer o cachorrinho que deseja adotar.
                    <br /><br />
                    Quer <Link to='/quero-adotar' className='link-texto-entrada'>adotar</Link> um cãozinho? Fale conosco!
                    <br /><br />
                    Deseja <Link to='/sobre' className='link-texto-entrada'>saber mais</Link> sobre a gente?
                </EstiloDoTextoDeEntrada>
            </ContainerDoTextoDeEntrada>
        </ContainerDoTextoDeEntradaGeral>
    )
}

export default TextoDeEntrada




