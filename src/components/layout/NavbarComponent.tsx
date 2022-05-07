import React from 'react'

function NavbarComponent() {
  return (
    <div className="navbar is-warning">
        <div className="navbar-brand">
            <div className="navbar-item">
                <i>
                    <img className='' src="/assets/astrologia.png" alt="logo" />
                </i>
            </div>
            <div className="navbar-burger">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
        <div className="navbar-menu">
            <div className="navbar-end">
                <a className='navbar-item' href="/">
                    Inicio
                    <i className='material-icons-outlined'>home</i>
                </a>
                <a className='navbar-item' href="/about">
                    Sobre la App
                    <i className='material-icons-outlined'>info</i>
                </a>
                <a className='navbar-item' href="/#tarot">
                    Tarot
                    <i className='material-icons-outlined'>home</i>
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