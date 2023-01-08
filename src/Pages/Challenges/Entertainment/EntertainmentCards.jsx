import React from 'react'
import Button from '../../../Components/Utility-components/Button'
import Movie from '../../../Assets/Images/movie.png'
import Music from '../../../Assets/Images/music.png'
const EntertainmentCards = () => {
  return (
    <section className='challenge-category'>
    <section className='challenge-cards'>
     <div className="challenge-card">
          <div className="challenge-card-image-holder">
            <img src={Movie} alt='movie-challenges' />
          </div>
          <p>Movie Challenges</p>
        </div>
        <div className="challenge-card">
          <div className="challenge-card-image-holder">
          <img src={Music} alt='movie-challenges' />
          </div>
          <p>Music Challenges</p>
        </div>
        <div className="challenge-card">
          <div className="challenge-card-image-holder">
          <img src={Movie} alt='movie-challenges' />
          </div>
          <p>Movie Challenges</p>
        </div>
        <div className="challenge-card">
          <div className="challenge-card-image-holder">
          <img src={Music} alt='movie-challenges' />
          </div>
          <p>Music Challenges</p>
        </div>

        <div className="challenge-card">
          <div className="challenge-card-image-holder">
          <img src={Music} alt='movie-challenges' />
          </div>
          <p>Music Challenges</p>
        </div>
        <div className="challenge-card">
          <div className="challenge-card-image-holder">
          <img src={Movie} alt='movie-challenges' />
          </div>
          <p>Movie Challenges</p>
        </div>

        <div className="challenge-card">
          <div className="challenge-card-image-holder">
          <img src={Music} alt='movie-challenges' />
          </div>
          <p>Music Challenges</p>
        </div>

        <div className="challenge-card">
          <div className="challenge-card-image-holder">
          <img src={Movie} alt='movie-challenges' />
          </div>
          <p>Movie Challenges</p>
        </div>
    </section>
    <div className="challenge-category-button-wrapper">
    <Button title='LOAD MORE' medium/>
    </div>
    </section>
  )
}

export default EntertainmentCards