/*
ErrorComponent takes an Error code and message as props or location
and redirects to HomePage after five seconds
*/
import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function ErrorComponent(props: any) {
    const { code, message } = props
    const navigate = useNavigate()
    
    const redirect: boolean = true
    if (redirect) {
        setTimeout(() => {
            navigate('/')
        }, 5000)
    }

  return (
    <div className="container">
        <div className="hero is-fullheight has-background-warning-light">
            <div className="hero-body container">
                <div className="title">
                    { code }
                </div>
            </div>
            <div className="hero-body-container">
            <div className="subtitle is-size-2 ml-5">
                    { message }
                </div>                
            </div>
            <div className="hero-body container">
                <p className="box has-background-warning title is-size-4">
                    You'll be redirected to the Home page within five seconds...
                </p>
            </div>
        </div>
    </div>
  )
}