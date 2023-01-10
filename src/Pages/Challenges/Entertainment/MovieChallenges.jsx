import React, { useContext } from 'react'
import { ChallengesContext } from '../../../Contexts/ChallengesContext'
import { DashboardContext } from '../../../Contexts/DashboardContext'
import Button from '../../../Components/Utility-components/Button'
import { Link } from 'react-router-dom'
import MovieBG from '../../../Assets/Images/bg-movie.png'
import Dstrange from '../../../Assets/Images/doctor-strange.png'
import FandF from '../../../Assets/Images/fast-and-furious.png'
import MoneyH from '../../../Assets/Images/money-heist.png'


const MovieChallenges = ({setDefault, changeMovie, changeMusic}) => {

  const {setDefaultView, setViewMovie, setViewMusic} = useContext(ChallengesContext)
  const {
    setViewUserDashboard,
    setViewChallenges,
    setViewFundAccount,
    setViewTransactions,
    setViewWithdrawal,
    setViewProfile,
  } = useContext(DashboardContext);

  function backToChallenge () {
    changeMusic(false)
    changeMovie(false)
    setDefault(true)
  }

  return (
    <section className='movie-challenge-main-section'>
      <section className="movie-challenge-intro-banner">
        <div className="movie-challenge-intro-title">
        <Button title='go back' short onClick={() => {backToChallenge()}}/>
          <h2>Movie Challenge</h2>
          <p>Challenge us and win</p>
        </div>
        <div className="movie-challenge-intro-image-holder">
          <img src={MovieBG} alt='movie-background' />
        </div>
      </section>

      <section className="movie-challenge">
        <section className="movie-challenge-card-wrapper">
          <div className="movie-challenge-card">
          <div className="movie-challenge-card-image-holder">
            <img src={Dstrange} alt='doctor-strange'/>
          </div>
          <h4>Doctor Strange</h4>
          <p>Minimun Entry fee: <span>N200</span></p>
          <Button title='Enter Contest' short/>
          </div>
          <div className="movie-challenge-card">
          <div className="movie-challenge-card-image-holder">
            <img src={MoneyH} alt='doctor-strange'/>
          </div>
          <h4>Doctor Strange</h4>
          <p>Minimun Entry fee: <span>N200</span></p>
          <Button title='Enter Contest' short/>
          </div>
          <div className="movie-challenge-card">
          <div className="movie-challenge-card-image-holder">
            <img src={FandF} alt='doctor-strange'/>
          </div>
          <h4>Doctor Strange</h4>
          <p>Minimun Entry fee: <span>N200</span></p>
          <Button title='Enter Contest' short/>
          </div>
          <div className="movie-challenge-card">
          <div className="movie-challenge-card-image-holder">
            <img src={Dstrange} alt='doctor-strange'/>
          </div>
          <h4>Doctor Strange</h4>
          <p>Minimun Entry fee: <span>N200</span></p>
          <Button title='Enter Contest' short/>
          </div>
        </section>
      </section>
    </section>
  )
}

export default MovieChallenges