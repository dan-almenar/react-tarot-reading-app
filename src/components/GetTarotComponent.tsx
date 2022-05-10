import React from 'react'
import { useNavigate } from 'react-router-dom'

function GetTarotComponent(props: any) {
  const navigate = useNavigate()

  return (
    <div onDoubleClick={() => navigate('/tarot')} className="column">
      <div className="card-header has-background-warning">
          <p className="card-header-title title is-centered is-size-4"> {props.headerTitle} </p>
      </div>
      <img className="card-image" src="https://sacred-texts.com/tarot/pkt/img/ar10.jpg" alt="" />
      <p className="box subtitle has-background-warning"> {props.footer} </p>
    </div>
  )
}

export default GetTarotComponent