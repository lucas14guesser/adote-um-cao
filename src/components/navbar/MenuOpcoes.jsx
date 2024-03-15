import React, { useState } from 'react'
import { RxHamburgerMenu } from 'react-icons/rx'
import { ItemHamburguer, ListaHamburguer, MenuHamburguer } from '../../styles/styles'
import { itensMenu } from '../functions/functions'
import { Link } from 'react-router-dom'

const MenuOpcoes = () => {
    const [abrirMenu, setAbrirMenu] = useState(false)

    const CliqueParaAlternarMenu = () => {
        setAbrirMenu(!abrirMenu);
    };

    return (
        <>
            <RxHamburgerMenu
                onClick={CliqueParaAlternarMenu}
                className={abrirMenu ? 'menu': 'menu'}
            />
            {abrirMenu && (
                <MenuHamburguer>
                    <ListaHamburguer>
                        <Link to="/" className='menu__link'>Início</Link>
                        {itensMenu.map((item) => (
                            <Link to={`/${item.toLowerCase().replace(/\s+/g, '-')}`} className='menu__link'><ItemHamburguer>{item}</ItemHamburguer></Link>
                        ))}
                    </ListaHamburguer>
                </MenuHamburguer>
            )}
        </>
    )
}

export default MenuOpcoes