import React from 'react'
import Button from '../../../Components/Utility-components/Button'

const SportCards = () => {
  return (
    <section className='challenge-category'>
    <section className='challenge-cards'>
     <div className="challenge-card">
          <div className="challenge-card-image-holder">

          </div>
          <p>Football Challenges</p>
        </div>
        <div className="challenge-card">
          <div className="challenge-card-image-holder">

          </div>
          <p>Basket-ball Challenges</p>
        </div>
        <div className="challenge-card">
          <div className="challenge-card-image-holder">

          </div>
          <p>Football Challenges</p>
        </div>
        <div className="challenge-card">
          <div className="challenge-card-image-holder">

          </div>
          <p>Basket-ball Challenges</p>
        </div>
    </section>
    <div className="challenge-category-button-wrapper">
    <Button title='LOAD MORE' medium/>
    </div>
    </section>
  )
}

export default SportCards