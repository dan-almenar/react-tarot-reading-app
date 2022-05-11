import React from 'react'
import { User } from '../customTypes/customTypes'
import GetTarotComponent from './GetTarotComponent'
import UserInfoDisplay from './UserInfoDisplay'
import ZodiacInfoComponent from './ZodiacInfoComponent'

function WelcomeComponent(props: any) {
    const {userData, clearUserData } = props

    return (
        <div className="box has-background-warning m-5">
            <UserInfoDisplay
                firstName={userData.firstName}
                lastName={userData.lastName}
                birthDate={userData.birthDate}
            />
            {/* <div className='hero-body mr-2 ml-2'> */}
                <ZodiacInfoComponent zodiacSign={userData.zodiacSign} />
                <GetTarotComponent
                    headerTitle={'TAROT'}
                    image={'https://sacred-texts.com/tarot/pkt/img/ar10.jpg'}
                    footer={'Get guidance from the cards'}
                />
            {/* </div> */}
            <div className="is-flex is-justify-content-center">
                <p className="is-warning subtitle">
                    Not {userData.firstName}?
                <button onClick={clearUserData} className="button box is-warning has-text-weight-bold">
                    Change User
                </button>
                </p>
            </div>
            <br />
        </div>
    )
}

export default WelcomeComponent