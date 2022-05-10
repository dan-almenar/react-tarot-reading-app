import React, { useEffect, useState } from 'react'
import UserForm from '../components/UserForm'
import WelcomeComponent from '../components/WelcomeComponent'

function HomePage() {
  /*
  The isSavedUser state is set to false if no user info
  is saved in the browser's localStorage
  */
  const [isSavedUser, setIsSavedUser] = useState(
    localStorage.getItem('userData') != null
  )

  const [userData, setUserData] = useState(
    isSavedUser ? JSON.parse(localStorage.getItem('userData') as string) : {}
  )

  const clearUserData = (): void => {
    localStorage.clear()
    setUserData({})
    setIsSavedUser(localStorage.getItem('userData') != null)
  }

  // updating isSavedUser state to true if userData is updated
  useEffect(() => {
    Object.keys(userData).length === 0 && setIsSavedUser(localStorage.getItem('userData') != null)
  }, [userData])

 
  return (
    <div className="hero is-fullheight has-background-warning-light">
      <div className="container hero-title mt-5">
        <h1 className="title mt-3">Fortune Teller</h1>
        <h2 className="subtitle mt-3">Your future revealed by Tarot and the stars...</h2>
        <br />

        {/* if there is no user data in the localStorage, the form will display
        Otherwise, fortune telling options (tarot cards or horoscope) are displayed */}
        {
        !isSavedUser ? <UserForm setIsSavedUser={setIsSavedUser} setUserData={setUserData} />
        : <WelcomeComponent userData={userData} clearUserData={clearUserData} />
        }
      </div>
    </div>
  )
}

/*
/// NOTES ///

Tarot Cards API endpoint (get 3 random cards):
https://rws-cards-api.herokuapp.com/api/v1/cards/random?n=3

Tarot Cards Images URL (example):
https://sacred-texts.com/tarot/pkt/img/${name_short}.jpg
https://sacred-texts.com/tarot/pkt/img/ar10.jpg
*/

export default HomePage