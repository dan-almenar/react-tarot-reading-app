import React from 'react'
import { useNavigate } from 'react-router-dom'

function GetTarotComponent(props: any) {
  const navigate = useNavigate()

  return (
    <div onClick={() => navigate('/tarot')} className="box has-background-warning m-5">
      <div className="card-header">
          <p className="card-header-title title is-centered is-size-4"> {props.headerTitle} </p>
      </div>
      <div className="card-image m-5">
        <figure className="image">
        <img className="" src="https://sacred-texts.com/tarot/pkt/img/ar10.jpg" alt="" />
        </figure>
      </div>
      <p className="box subtitle has-background-warning"> {props.footer} </p>
    </div>
  )
}

export default GetTarotComponent