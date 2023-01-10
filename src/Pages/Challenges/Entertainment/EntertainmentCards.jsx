import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import { ChallengesContext } from '../../../Contexts/ChallengesContext'
import Button from '../../../Components/Utility-components/Button'
import Movie from '../../../Assets/Images/movie.png'
import Music from '../../../Assets/Images/music.png'
const EntertainmentCards = () => {
const {setViewMovie, setViewMusic, setDefaultView} = useContext(ChallengesContext)

const displayViewMovie = () => {
  setViewMovie(true)
  setViewMusic(false)
  setDefaultView(false)
}
const displayViewMusic = () => {
  setViewMovie(false)
  setViewMusic(true)
  setDefaultView(false)
}
  return (
    <section className='challenge-category'>
    <section className='challenge-cards'>
     <div className="challenge-card">
        <Link onClick={() => {displayViewMovie()}}>
          <div className="challenge-card-image-holder">
            <img src={Movie} alt='movie-challenges' />
          </div>
          <p>Movie Challenges</p>
        </Link>
        </div>

        <div className="challenge-card">
          <Link onClick={() => {displayViewMusic()}}>
          <div className="challenge-card-image-holder">
          <img src={Music} alt='movie-challenges' />
          </div>
          <p>Music Challenges</p>
          </Link>
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