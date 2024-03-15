import React from 'react'
import { Link } from 'react-router-dom'
import imagemLogo from '../../assets/icon.png'
import { Imagem } from '../../styles/styles'

const Logo = () => {
  return (
    <>
        <Link to="/">
            <Imagem src={imagemLogo} alt="Logo do adote seu cão" />
        </Link>
    </>
  )
}

export default Logo