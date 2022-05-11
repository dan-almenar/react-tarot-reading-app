import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import ErrorComponent from '../components/ErrorComponent'
import FooterComponent from '../components/layout/FooterComponent'
import NavbarComponent from '../components/layout/NavbarComponent'
import TarotCardComponent from '../components/TarotCardComponent'
import { TarotCard } from '../customTypes/customTypes'


const TarotPage = () => {

    const isUser: boolean = localStorage.getItem('userData') != null
    const navigate = useNavigate()
    const [tarotCard, setTarotCard] = useState({} as TarotCard)
    
    // helper functions
    const setCardReversed = (): boolean => {
      return Math.floor(Math.random() *2) === 0 ? true : false
    }

    const getCardImageURL =(): string => {
      const cardID = tarotCard.data?.shortName
      return `https://sacred-texts.com/tarot/pkt/img/${cardID}.jpg
      https://sacred-texts.com/tarot/pkt/img/ar10.jpg`

    }

    // fetch tarot cards API
    const fetchCard = async() => {
      if (tarotCard.data === undefined){
        try {
          const response = await fetch('https://rws-cards-api.herokuapp.com/api/v1/cards/random?n=1')
          const data = await response.json()
          const newCard = data.cards[0]
          const { desc, meaning_rev, meaning_up, name, name_short, type, value_int } = newCard
  
          /*
          Even if the data has already been fetched, the loading bar
          is displayed for eight seconds to simulate data processing.
          */
          setTimeout(() => {
            setTarotCard({data: {
              description: desc,
              reversedMeaning: meaning_rev,
              normalMeaning: meaning_up,
              name,
              shortName: name_short,
              type,
              value: value_int,
            }})            
          }, 8000)
          return
        } catch (error) {
          /*
          If an error ocurred, tarotCard value is reseted and
          an Error page is displayed. The app will be redirected
          to the Home page afterwards.
          */
          setTimeout(() => {
          }, 3000)
          setTarotCard({error: new Error('Something went wrong while getting your card. Please stand by...')})
          return
        }
      } else {
        return
      }
    }
    fetchCard()

  return (
      <div>
          {
            !isUser &&
            <ErrorComponent
                code='403: Forbidden'
                message="Please provide your personal data in order to use this feature..."
            />
          }
          {
            tarotCard.error != undefined &&
              <ErrorComponent
                code='500: Internal Server Error'
                message={tarotCard.error.message}
              />
          }
        <div className="hero is-fullheight has-background-warning-light">
            <NavbarComponent />
            {
              tarotCard.data === undefined && tarotCard.error === undefined &&
              <div className='mr-5 ml-5'>
              <p className='loading has-text-centered'>Getting random tarot card...</p>
              <progress className="progress is-small is-warning" max="100">45%</progress>
              </div>                        
            }
            {
              tarotCard.data != undefined &&
              <TarotCardComponent
              name={tarotCard.data.name}
              shortName={tarotCard.data.shortName}
              description={tarotCard.data.description}
              normalMeaning={tarotCard.data.normalMeaning}
              reversedMeaning={tarotCard.data.reversedMeaning}
              value={tarotCard.data.value}
              cardType={tarotCard.data.type}
              isReversed={setCardReversed()}
              />
            }
            <FooterComponent />
        </div>          
      </div>
  )
}

export default TarotPage