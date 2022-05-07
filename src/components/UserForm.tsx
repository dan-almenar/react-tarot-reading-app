import React, { useState } from 'react'
import { Parallax } from 'react-scroll-parallax'
import { User } from '../customTypes/customTypes'

function UserForm(props: any) {
    // props
    const setUserData: Function = props.setUserData
    const setIsSavedUser: Function = props.setIsSavedUser

    // states
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [birthDate, setBirthDate] = useState('')
    const [gender, setGender] = useState('')

    // getters
    const getFirstName = (e: any): void => {
        setFirstName(e.target.value)
    }
    const getLastName = (e: any): void => {
        setLastName(e.target.value)
    }
    const getEmail = (e: any): void => {
        setEmail(e.target.value)
    }
    const getBirthDate = (e: any): void => {
        setBirthDate(e.target.value)
        console.log(new Date(e.target.value).getMonth())
    }
    const getGender = (e: any): void => {
        setGender(e.target.value)
    }

    /*
    currentDate setter will be set as the input:date max value
    */
   const currentDate = (): string => {
       const today = new Date()
       const day = today.getDate()
       const month = today.getMonth() + 1
       const year = today.getFullYear()
       
       return `${year}-${month}-${day}` 
   }

    const getZodiacSign = (birthDate: string): string => {
        let zodiacSign: string = ''
        const bDate = new Date(birthDate)
        const month = bDate.getMonth()
        const date = bDate.getDate()

        /*
        As counterintuitive as it may be, the getMonth() method
        of the Date object returns the month as a zero-based value,
        meaning January === 0, February === 1 and so forth.
        */

        switch (month){
            case 0:
                date >= 20 ? zodiacSign = 'Aquarius' : zodiacSign = 'Capricorn'
                break
            case 1:
                date >= 19 ? zodiacSign = 'Pisces' : zodiacSign = 'Aquarius'
                break
            case 2:
                date >= 21 ? zodiacSign = 'Aries' : zodiacSign = 'Pisces'
                break
            case 3:
                date >= 20 ? zodiacSign = 'Taurus' : zodiacSign = 'Aries'
                break
            case 4:
                date >= 21 ? zodiacSign = 'Gemini' : zodiacSign = 'Taurus'
                break 
            case 5:
                date >= 22 ? zodiacSign = 'Cancer' : zodiacSign = 'Gemini'
                break
            case 6:
                date >= 23 ? zodiacSign = 'Leo' : zodiacSign = 'Cancer'
                break 
            case 7:
                date >= 23 ? zodiacSign = 'Virgo' : zodiacSign = 'Leo'
                break 
            case 8:
                date >= 23 ? zodiacSign = 'Libra' : zodiacSign = 'Virgo'
                break 
            case 9:
                date >= 23 ? zodiacSign = 'Scorpio' : zodiacSign = 'Libra'
                break
            case 10:
                date >= 23 ? zodiacSign = 'Sagitarius' : zodiacSign = 'Scorpio'
                break 
            case 11:
                date >= 22 ? zodiacSign = 'Capricorn' : zodiacSign = 'Sagitarius'
                break
        }

        return zodiacSign
    }

    const handleSubmit = (e: any) => {
        e.preventDefault()
        /*
        The setUserData funciton will update the userData state
        in the HomePage component.
        The userData state is then passed onto the necessary children as a User type object.
        */
        const userData: User = {
            firstName: firstName,
            lastName: lastName,
            email: email,
            gender: gender,
            birthDate: birthDate,
            zodiacSign: getZodiacSign(birthDate)
        }
        setUserData(userData)

        /*
        Save the userDate onto the localStorage for future use
        */
        localStorage.setItem('userData', JSON.stringify(userData))

        /*
        Once the isSavedUser state gets updated to true,
        the UserForm component gets removed from the HomePage component
        */
        setIsSavedUser(true)
        
    }
  return (
    <Parallax speed={-10}>
      <div className="container mt-5 mb-5">
          <p className="subtitle">
              Please fill out the form below to continue.
          </p>
        <div className="box mr-5 ml-5 has-background-warning">
            <div className="box has-background-warning-light ">
                <p className="subtitle has-text-dark has-text-weight-bold">
                    Personal Information
                </p>
                <p>
                    (Your data will be locally stored for future use. No data is sent to the server)
                </p>
            </div>
            <form onSubmit={handleSubmit} className='form'>
                <div className="form-field mb-3">
                    <label className="label has-text-left has-text-dark">Name:</label>
                    <div className="control">
                        <input onChange={getFirstName} className="input is-warning has-background-warning-light" type="text" placeholder="Name" required />
                    </div>
                </div>
                <div className="form-field mb-3 pt-3">
                    <label className="label has-text-left has-text-dark">Last Name:</label>
                    <div className="control">
                        <input onChange={getLastName} className="input is-warning has-background-warning-light" type="text" placeholder="Last Name" required />
                    </div>
                </div>
                <div className="form-field mb-3 pt-3">
                    <label className="label has-text-left has-text-dark">Email:</label>
                    <div className="control">
                        <input onChange={getEmail} className="input is-warning has-background-warning-light" type="email" placeholder="Email" required />
                    </div>
                </div>
                <div className="form-field mb-3 pt-3">
                    <label className="label has-text-left has-text-dark">Birth date:</label>
                    <div className="control">
                        <input onChange={getBirthDate} className="input is-warning has-background-warning-light" type="date" max={currentDate()} required />
                    </div>
                </div>
                <label className="label has-text-left has-text-dark">Gender:</label>                
                <div className="is-fullwidth select is-warning has-background-warning-light">
                    <select onChange={getGender} className='' name="gender" required>
                        <option className='is-warning has-background-warning-light' value="female">Female</option>
                        <option className='is-warning has-background-warning-light' value="male">Male</option>
                        <option className='is-warning has-background-warning-light' value="nonBinary">Non binary</option>
                    </select>
                </div>
                <div className="control is-flex is-justify-content-flex-end mt-5">
                    <button className="box button has-background-warning-light" type='submit'>
                        Continue
                    </button>
                </div>
            </form>
        </div>
      </div>
    </Parallax>
  )
}

export default UserForm