import { createGlobalStyle, styled } from 'styled-components'

// Estilos globais e reutilizáveis
export const EstilizacaoGlobal = createGlobalStyle`
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
    text-decoration: none;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
    font-family: 'Martian Mono', monospace;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
`
export const Titulo = styled.h1`
font-size: 32px;
text-transform: uppercase;
color: #3498DB;
font-weight: 800;
margin-top: 20px;
@media (max-width: 528px) {
	margin-top: 5px;
	font-size: 12px;
	text-align: center;
}
`
export const Subtitulo = styled.h2`
font-size: 20px;
text-transform: uppercase;
color: #3498DB;
@media (max-width: 528px) {
	font-size: 10px;
	text-align: center;
	margin-bottom: 5px;
}
`
export const Container = styled.div`
display: flex;
width: 100%;
flex-direction: column;
justify-content: center;
align-items: center;
margin-right: 10rem;
margin-top: 10rem;
margin-bottom: 10rem;
`

// Estilos da barra de navegação
export const Navbar = styled.header`
display: flex;
flex-direction: row;
font-size: 16px;
padding: 30px 0;
width: 100%;
justify-content: flex-start;
align-items: center;
gap: 25px;
border-bottom: 10px solid #3498DB;
@media (max-width: 528px) {
	padding: 1px 0;
	font-size: 10px;
	justify-content: space-between;
	gap: 5px;
}
`
export const NavLista = styled.ul`
display: flex;
margin-left: 15px;
align-items: center;
@media (max-width: 528px) {
	margin-left: 1px;
}
`
export const Imagem = styled.img`
width: 110px;
margin-left: 110px;
@media (max-width: 528px) {
	width: 50px;
	margin-left: 1px;
}
`
export const ContainerDoChamariz = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
width: 70vw;
gap: 15px;
@media (max-width: 528px) {
	margin-left: 30px;
}
`
export const ContainerDasRedesSociais = styled.div`
display: flex;
justify-content: flex-end;
gap: 50px;
@media (max-width: 528px) {
	gap: 0;
}
`
export const ListaDeRedesSociais = styled.ul`
display: flex;
justify-content: flex-end;
flex-direction: row;
flex-wrap: wrap;
gap: 13px;
@media (max-width: 528px) {
	gap: 5px;
}
`
export const ItensRedesSociais = styled.li`
padding: 0;
`
export const ContainerDasRedesMenu = styled.div`
display: flex;
flex-direction: column;
align-items: center;
gap: 7px;
@media (max-width: 528px) {
	width: 25%;
	gap: 1px;
}

.menu {
	color: #3498DB;
	cursor: pointer;
	font-size: 50px;
	width: 50px;
	height: 50px;
	@media (max-width: 528px) {
		font-size: 25px;
		width: 25px;
		height: 25px;
	}
}
.menu__link {
	padding: 17px;
	color: #FFF;
	transition: background 1s ease;
	font-weight: normal;
	@media (max-width: 528px) {
		padding: 10px;
	}
	&:hover {
		background: #154360;
		
	}
	@media (max-width: 528px) {
		&:hover {
			transform: none;
		}
	}
}

`
export const LinkRedesSociais = styled.a`
color: #3498DB;
cursor: pointer;
font-size: 40px;
@media (max-width: 528px) {
	font-size: 17px;
}
`
export const MenuHamburguer = styled.div`
position: absolute;
background: #3498DB;
top: 19.2%;
right: 0;
width: 25vw;
text-align: center;
@media (max-width: 528px) {
	top: 9.6%;
}
`
export const ListaHamburguer = styled.ul`
display: flex;
flex-direction: column;
flex-wrap: wrap;
color: #FFF;
text-transform: uppercase;
@media (max-width: 528px) {
	font-size: 6px;
}
`
export const ItemHamburguer = styled.li`
cursor: pointer;
`

// Estilos da HomePage
export const ContainerDoBanner = styled.div`
width: 100%;
`
export const Banner = styled.img`
width: 100%;
height: 64vh;
@media (max-width: 528px) {
	height: 25vh;
	margin-bottom: 4rem;
}
`
export const ContainerDoTextoDeEntradaGeral = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
width: 100%;
`
export const ContainerDoTextoDeEntrada = styled.div`
display: flex;
justify-content: center;
width: 50%;
margin: 30px 30px 70px 30px;
@media (max-width: 528px) {
	margin: 30px 30px 110px 30px;
}
`
export const EstiloDoTextoDeEntrada = styled.p`
font-size: 16px;
color: #3498DB;
font-family: 'Roboto', sans-serif;
@media (max-width: 528px) {
	font-size: 12px;
	text-align: center;
}

.link-texto-entrada {
	color: #3498DB;
	text-decoration: underline;
	font-weight: 700;
}
`

// Estilos do Rodapé
export const ContainerRodape = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
padding: 10px 0;
width: 100%;
background: #154360;
`
export const ImagemRodape = styled.img`
width: 70px;
@media (max-width: 528px) {
	width: 35px;
}
`
export const TextoDev = styled.p`
font-size: 16px;
color: #3498DB;
@media (max-width: 528px) {
	font-size: 9px;
}
`

// Estilos da página Sobre
export const ContainerSobre = styled.div`
background: #154360;
padding: 4rem;
margin: 0 10rem;
@media (max-width: 528px) {
	margin: 0;
}
`
export const ListaSobre = styled.ol`
display: flex;
flex-direction: column;
gap: 1rem;
padding: 2rem 0 2rem 0;
color: #FFF;
font-size: 20px;
@media (max-width: 528px) {
	gap:1rem;
	font-size: 12px;
}
`
export const ItensSobre = styled.li`
	display: flex;
	padding-left: 2.5rem;
	align-items: center;
	margin-bottom: 1rem;
	@media (max-width: 528px) {
		padding-left: 2rem;
	}
`
export const ListaImagem = styled.img`
width: 30px;
height: 30px;
margin-right: 1rem;
`

// Estilos da página Adotar
export const ContainerAdotar = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-wrap: wrap;
flex-direction: column;
gap: 30px;
margin: 7rem 30rem;
background: #154360;
padding: 1.2rem;
@media (max-width: 528px) {
	width: 100%;
	margin: 6.5rem 0;
	padding: 1.2rem 0;

}
`
export const CampoAdotar = styled.div`
position: relative;
width: 250px;
@media (max-width: 528px) {
	width: 200px;
}
.input-adotar {
	padding: 10px;
	border: 1px solid #FFF;
	background: #FFF;
	border-radius: 5px;
	outline: none;
	color: #154360;
	font-size: 1rem;
	font-family: 'Martian Mono', monospace;
	transition: 0.5s;
		&:valid ~ span, &:focus ~ span {
			color: #3498DB;
			transform: translateX(10px) translateY(-7px);
			font-size: 1rem;
			padding: 0 10px;
			border-left: 1px solid #3498DB;
			border-right: 1px solid #3498DB;
			letter-spacing: 0.2rem;
			background: #3498DB;
			color: #FFF;
			border-radius: 2px;
		}
		&:valid, &:focus {
			border: 1px solid #3498DB;
		}
		&::placeholder {
			color: transparent;
		}
	
		@media (max-width: 528px) {
			&::placeholder {
			  color: #000;
			}
		  }
	}
`
export const LabelInput = styled.span`
position: absolute;
left: 0;
padding: 12px;
pointer-events: none;
font-size: 1rem;
color: #154360;
text-transform: uppercase;
transition: 0.5s;
@media (max-width: 528px) {
	display: none;
}
`
export const BotaoEnviar = styled.button`
padding: 10px;
width: 246px;
border-radius: 5px;
border: 1px solid #154360;
background: #3498DB;
cursor: pointer;
font-size: 1rem;
font-family: 'Martian Mono', monospace;
color: #FFF;
transition: 0.3s;
@media (max-width: 528px) {
	width: 222px;
}
	&:hover {
		border-color: #FFF;
	}
`

// Estilos da página Sucesso
export const ContainerSucesso = styled.div`
display: flex;
justify-content: center;
text-align: center;
flex-direction: column;
width: 50%;
`
export const ContainerSucessoTitulo = styled.div`
display: flex;
flex-direction: column;
gap: 20px;
margin-bottom: 2rem;
@media (max-width: 528px) {
	gap: 10px;
	margin-bottom: 1rem;
}
`
export const ContainerSucessoTexto = styled.div`
display: flex;
flex-direction: column;
gap: 5px;
margin-bottom: 2rem;
@media (max-width: 528px) {
	margin-bottom: 1rem;
}
`
export const ContainerSucessoImagem = styled.div`
border: 10px solid #3498DB;
`
export const SucessoImagem = styled.img`
width: 100%;
height: 100%;
`

// Estilos do loading
export const ImagemLoad = styled.img`
margin: top: 2rem;
width: 100px;
`