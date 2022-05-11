import React from 'react'
import { useNavigate } from 'react-router-dom'
import TarotCardComponent from './TarotCardComponent'

function GetTarotComponent(props: any) {
  const navigate = useNavigate()

  return (
    <div onClick={() => navigate('/tarot')} className="has-background-warning">
      <TarotCardComponent
      name={props.headerTitle}
      shortName='ar10'
      description={props.footer}
      />
    </div>
  )
}

export default GetTarotComponent