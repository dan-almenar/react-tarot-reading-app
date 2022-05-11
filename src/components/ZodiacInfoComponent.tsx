import React, { useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom'
import { ZodiacInfo, ZodiacSign } from '../customTypes/customTypes'
import ErrorComponent from './ErrorComponent'

function ZodiacInfoComponent( props: any ) {
    const zodiacSign: ZodiacSign = props.zodiacSign
    const [zodiacInfo, setZodiacInfo] = useState({} as ZodiacInfo)

    const fetchAPI = async () => {
        if (zodiacInfo.data != undefined) {
            return
        } else {
            const url: string = `https://aztro.sameerkumar.website/?sign=${zodiacSign.toLowerCase()}&day=today`
            try {
                const response = await fetch(url, {method: 'POST'})
                const data = await response.json()
                const { current_date, description, mood, compatibility, color, lucky_number } = data

                setTimeout(() => {
                    setZodiacInfo({
                        data: {
                        current_date,
                        description,
                        mood,
                        compatibility,
                        color,
                        lucky_number
                    }})
                }, 8000)

                return
            } catch (err) {
                setTimeout(() => {
                    setZodiacInfo({error: new Error('Something went wrong. Please stand by...')})
                }, 8000)
                return
            }
        }
    }
    fetchAPI()

  return (
        <div className="mr-3 ml-3">
            {/* data is being fetched */}
            { zodiacInfo.data === undefined && zodiacInfo.error === undefined &&
                <div className='mb-5'>
                    <p className='loading'>Loading horoscope...</p>
                    <progress className="progress is-small is-warning" max="100">45%</progress>
                </div>            
            }
            {/* data has been successfully fetched */}
            { zodiacInfo.data !== undefined &&
                <div className='box has-background-warning-light mb-5'>
                    <div className="is-flex mb-5 pt-3">
                        <img className='image is-64x64' src={`../assets/${zodiacSign.toLowerCase()}.png`} alt="Taurus" />
                        <p className="title ml-5 pt-4">
                            {zodiacSign}
                        </p>
                    </div>
                    <p className="subtitle has-text-left pt-5 has-text-weight-bold">
                        Today's horoscope:
                    </p>
                    <p className='has-text-left is-size-5'>
                        <span className="tag has-background-warning-light">
                            ({zodiacInfo.data?.current_date})
                        </span>
                        <br />
                        {zodiacInfo.data?.description}
                    </p>
                    <br />
                    <p className="subtitle has-text-left has-text-weight-bold">
                        {zodiacSign}'s tips for today:
                    </p>
                    <p className="has-text-left">
                       <span className='has-text-weight-bold'> Mood: </span>{zodiacInfo.data?.mood}
                    </p>
                    <p className="has-text-left">
                        <span className='has-text-weight-bold'>Compatibility: </span>{zodiacInfo.data?.compatibility}
                    </p>
                    <p className="has-text-left">
                        <span className='has-text-weight-bold'>Color: </span>{zodiacInfo.data?.color}
                    </p>
                    <p className="has-text-left">
                        <span className='has-text-weight-bold'>Lucky number: </span>{zodiacInfo.data?.lucky_number}
                    </p>
                </div>
            }
            {/* An error ocurred fetching the data. */}
            { zodiacInfo.error !== undefined &&
              <ErrorComponent
                code='500: Internal Server Error'
                message='Something went wrong. Please stand by...'
              />
            }
        </div>
  )
}

export default ZodiacInfoComponent