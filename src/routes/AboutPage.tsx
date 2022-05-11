import React from 'react'
import FooterComponent from '../components/layout/FooterComponent'
import NavbarComponent from '../components/layout/NavbarComponent'

function AboutPage() {
  return (
    <div>
      <NavbarComponent />
    <div className='hero is-fullheight has-background-warning-light'>
      <div className="box has-background-warning m-5">
        <div className="hero-title">
          <p className="title has-text-centered">
            Ophiuchus Oracle
          </p>
          <div className="box has-background-warning-light">
            <p className='subtitle'>
              Let the cards and the stars guide you.
            </p>
            <p className="subtitle">
              With this App you have in the palm of your hands not only your destiny's secrets hidden in the stars,
              but also the guidance from the Tarot Cards.
            </p>
            <p className='subtitle'>
              Just fill the user info form with your personal data and you will be able
              to use the App in its full potential.
            </p>
            <p className="subtitle">
              You'll get your horoscope predicctions for the day 
              and the posibility to get a random Tarot card revealed 
              for you.
            </p>
          </div>
          <p className="subtitle has-text-right has-text-bold">
            Enjoy!
          </p>
        </div>
    </div>
      </div>
    <FooterComponent />
    </div>
  )
}

export default AboutPage