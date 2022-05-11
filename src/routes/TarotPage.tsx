import React from 'react'
import { useNavigate } from 'react-router-dom'
import ErrorComponent from '../components/ErrorComponent'
import FooterComponent from '../components/layout/FooterComponent'
import NavbarComponent from '../components/layout/NavbarComponent'


const TarotPage = () => {

    const isUser: boolean = localStorage.getItem('userData') != null
    const navigate = useNavigate()

  return (
      <div>
          {
            !isUser &&
            <ErrorComponent
                code='403: Forbidden'
                message="Please provide your personal data in order to use this feature..."
            />
          }
        <div className="hero is-fullheight has-background-warning-light">
            <NavbarComponent />
            <FooterComponent />
        </div>          
      </div>
  )
}

export default TarotPage