import React, { useState } from 'react'
import UserForm from '../components/UserForm'
import { User } from '../customTypes/customTypes'

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
  const [user, setUser] = useState({} as User)
 
  return (
    <div className="hero is-fullheight has-background-warning-light">
      <div className="container hero-title mt-5">
        <h1 className="title mt-3">Fortune Teller</h1>
        <h2 className="subtitle mt-3">Your future revealed by Tarot Cards and the stars...</h2>
        <br />

        {/* if there is no user data in the localStorage, the form will display */}
        {!isSavedUser && <UserForm setIsSavedUser={setIsSavedUser} setUserData={setUserData} />}

        {isSavedUser && <>Hello</>}

        {/* else, fortune telling options (tarot cards or horoscope) are displayed */}
      </div>
    </div>
  )
}

export default HomePage