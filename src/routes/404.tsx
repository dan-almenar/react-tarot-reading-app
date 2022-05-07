import React from 'react'
import { useNavigate } from 'react-router-dom'

function Error404Page() {
    const navigate = useNavigate()

  return (
    <div className="container">
        <div className="hero is-fullheight is-link">
            <div className="hero-body container">
                <div className="title is-size-1">
                    Error: 404
                </div>
                <div className="subtitle is-size-2 ml-5">
                    Página no encontrada
                </div>
            </div>
            <div className="container">
                <button onClick={() => navigate('/')} className="box button is-info">
                    Ir a Inicio
                </button>
            </div>
        </div>
    </div>
  )
}

export default Error404Page