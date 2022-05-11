import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function NavbarComponent() {
    const [isActive, setIsActive] = useState(false)
  return (
    <div className="navbar is-warning">
        <div className="navbar-brand">
            <div className="navbar-item">
                <i>
                    <img className='' src="/assets/astrologia.png" alt="logo" />
                </i>
            </div>
            <div onClick={() => setIsActive(!isActive)} className="navbar-burger">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
        <div className={`navbar-menu has-background-warning-light ${isActive ? 'is-active' : ''}`}>
            <div className="navbar-end has-text-right">
                <Link className='navbar-item' to={'/'}>
                    Home
                    <i className='material-icons-outlined ml-3'>home</i>
                </Link>
                <Link className='navbar-item' to={'/tarot'}>
                    Tarot
                    <i className='material-icons-outlined ml-3'>visibility</i>
                </Link>
                <Link className='navbar-item' to={'/about'}>
                    About
                    <i className='material-icons-outlined ml-3'>info</i>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default NavbarComponent

{/*
Icons credits:
<a href="https://www.flaticon.es/iconos-gratis/astrologia" title="astrología iconos">Astrología iconos creados por monkik - Flaticon</a>
<a href="https://www.flaticon.es/iconos-gratis/tarot" title="tarot iconos">Tarot iconos creados por Freepik - Flaticon</a>
*/}