import React from 'react'

function TarotCardComponent(props: any) {
    const { name, shortName, cardType, description, reversedMeaning, normalMeaning, value, isReversed, footer } = props
    const position: string = isReversed ? 'Reversed' : 'Normal'
  return (
      <div className="column is-half container">
      <div className="box has-background-warning m-5">
        <div className="card-header">
            <p className="card-header-title title is-centered is-size-4"> {name} </p>
        </div>
        <div className="card-image m-5">
            <figure className={`image ${isReversed && 'reversed'}`} >
                <img className="" src={`https://sacred-texts.com/tarot/pkt/img/${shortName}.jpg`} alt={name} />
            </figure>
        </div>
        <div className="card-content has-text-left">
            {
                cardType != null &&
                <p>
                <span className='has-text-weight-bold'>
                    Arcane type:
                </span>
                <br />
                {cardType}
            </p>                
            }
            {
                isReversed != null &&
                <p>
                <span className='has-text-weight-bold'>
                    Meaning ({position}):
                </span>
                <br />
                {isReversed ? reversedMeaning : normalMeaning}
                </p>
            }
            {
                description != null &&
                <p>
                <span className='has-text-weight-bold'>
                    Card Description:
                </span>
                <br />
                {description}
            </p>                
            }
            {
                value != null &&
                <p>
                <span className='has-text-weight-bold'>
                    Card Value:
                </span>
                <br />
                {value}
            </p>                
            }
            {
                footer != null &&
                <p className='has-text-centered'>
                    {footer}
                <br />
                {value}
            </p>                
            }            
        </div>
    </div>          
      </div>
  )
}
// default short name ar10

export default TarotCardComponent