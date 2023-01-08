import React from 'react'
import Button from '../../../Components/Utility-components/Button'

const TvshowCards = () => {
  return (
    <section className='challenge-category'>
    <section className='challenge-cards'>
     <div className="challenge-card">
          <div className="challenge-card-image-holder">

          </div>
          <p>The great gatsby</p>
        </div>
        <div className="challenge-card">
          <div className="challenge-card-image-holder">

          </div>
          <p>Harry Potter</p>
        </div>
        <div className="challenge-card">
          <div className="challenge-card-image-holder">

          </div>
          <p>Game of Thrones</p>
        </div>
        <div className="challenge-card">
          <div className="challenge-card-image-holder">

          </div>
          <p>Why women kill</p>
        </div>
    </section>

    <div className="challenge-category-button-wrapper">
    <Button title='LOAD MORE' medium/>
    </div>
    </section>
  )
}

export default TvshowCards