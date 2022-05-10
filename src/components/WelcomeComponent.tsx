import React from 'react'
import { User } from '../customTypes/customTypes'
import GetTarotComponent from './GetTarotComponent'
import UserInfoDisplay from './UserInfoDisplay'

function WelcomeComponent(props: any) {
    const {userData, clearUserData } = props

    return (
        <div className="container">
            <UserInfoDisplay userData={userData} />
            <div className='hero-body columns'>
                <GetTarotComponent
                    headerTitle={'TAROT'}
                    image={'https://sacred-texts.com/tarot/pkt/img/ar10.jpg'}
                    footer={'Let the cards guide you...'}
                />
                {/* <p className="box title column has-background-warning"> {userData.firstName} </p> */}
                <p className="column subtitle">
                    {userData.zodiacSign}
                </p>
            </div>
            <button onClick={clearUserData} className="button is-warning is-fullwidth">
                Delete User Data
            </button>
            <br />
        </div>

    )
}

export default WelcomeComponent