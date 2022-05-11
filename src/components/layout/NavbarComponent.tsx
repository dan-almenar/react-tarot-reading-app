import React, { useState } from 'react'

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
                <a className='navbar-item' href="/">
                    Home
                    <i className='material-icons-outlined ml-3'>home</i>
                </a>
                <a className='navbar-item' href="/tarot">
                    Tarot
                    <i className='material-icons-outlined ml-3'>visibility</i>
                </a>
                <a className='navbar-item' href="/about">
                    About the App
                    <i className='material-icons-outlined ml-3'>info</i>
                </a>
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