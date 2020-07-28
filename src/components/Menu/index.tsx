import React from 'react'
import './Menu.css'
import Logo from '../../assets/logo.png'
import Button from '../Button'

export default Menu

export function Menu() {
    return (
        <nav className='Menu' >
            
            <a href='/' >
                <img className='Logo' src={Logo} alt='Youflix logo' />
            </a>

            <Button className='ButtonLink' href='/' >
                Novo Vídeo
            </Button>
        </nav>
    )
}