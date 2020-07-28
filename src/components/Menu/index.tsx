import React from 'react'
import './Menu.css'
import Logo from '../../assets/logo.png'
import Button from '../Button'
import { Link } from 'react-router-dom'

export default Menu

export function Menu() {
    return (
        <nav className='Menu' >
            
            <Link to='/' >
                <img className='Logo' src={Logo} alt='Youflix logo' />
            </Link>

            <Button as={Link} className='ButtonLink' to='/add/video' >
                Novo Vídeo
            </Button>
        </nav>
    )
}