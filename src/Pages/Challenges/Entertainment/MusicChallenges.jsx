import React, { useContext } from 'react'
import { ChallengesContext } from '../../../Contexts/ChallengesContext'
import { DashboardContext } from '../../../Contexts/DashboardContext'
import Button from '../../../Components/Utility-components/Button'
import MusicBg from '../../../Assets/Images/bg-music.png'
import Olamide from '../../../Assets/Images/olamide.png'
import Davido from '../../../Assets/Images/davido.png'
import Rema from '../../../Assets/Images/rema.png'
import Omah from '../../../Assets/Images/omahlay.png'
import Fireboy from '../../../Assets/Images/fireboy.png'
import Burnaboy from '../../../Assets/Images/burna-boy.png'
import Buju from '../../../Assets/Images/buju.png'
import Wizkid from '../../../Assets/Images/wizkid.png'

const MusicChallenges = ({setDefault, changeMovie, changeMusic}) => {

  const {setViewEntertainment, setViewMovie, setViewMusic} = useContext(ChallengesContext)
  const {setViewChallenges} = useContext(DashboardContext);

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
          <h2>Music Challenge</h2>
          <p>Challenge us and win</p>
        </div>
        <div className="movie-challenge-intro-image-holder">
          <img src={MusicBg} alt='music-background' />
        </div>
      </section>

      <section className="movie-challenge">
        <section className="movie-challenge-card-wrapper">
          <div className="movie-challenge-card">
          <div className="movie-challenge-card-image-holder">
            <img src={Davido} alt='doctor-strange'/>
          </div>
          <h4>Doctor Strange</h4>
          <p>Minimun Entry fee: <span>N200</span></p>
          <Button title='Enter Contest' short/>
          </div>
          <div className="movie-challenge-card">
          <div className="movie-challenge-card-image-holder">
            <img src={Burnaboy} alt='doctor-strange'/>
          </div>
          <h4>Doctor Strange</h4>
          <p>Minimun Entry fee: <span>N200</span></p>
          <Button title='Enter Contest' short/>
          </div>
          <div className="movie-challenge-card">
          <div className="movie-challenge-card-image-holder">
            <img src={Wizkid} alt='doctor-strange'/>
          </div>
          <h4>Doctor Strange</h4>
          <p>Minimun Entry fee: <span>N200</span></p>
          <Button title='Enter Contest' short/>
          </div>
          <div className="movie-challenge-card">
          <div className="movie-challenge-card-image-holder">
            <img src={Omah} alt='doctor-strange'/>
          </div>
          <h4>Doctor Strange</h4>
          <p>Minimun Entry fee: <span>N200</span></p>
          <Button title='Enter Contest' short/>
          </div>
          <div className="movie-challenge-card">
          <div className="movie-challenge-card-image-holder">
            <img src={Fireboy} alt='doctor-strange'/>
          </div>
          <h4>Doctor Strange</h4>
          <p>Minimun Entry fee: <span>N200</span></p>
          <Button title='Enter Contest' short/>
          </div>
          <div className="movie-challenge-card">
          <div className="movie-challenge-card-image-holder">
            <img src={Olamide} alt='doctor-strange'/>
          </div>
          <h4>Doctor Strange</h4>
          <p>Minimun Entry fee: <span>N200</span></p>
          <Button title='Enter Contest' short/>
          </div>
          <div className="movie-challenge-card">
          <div className="movie-challenge-card-image-holder">
            <img src={Rema} alt='doctor-strange'/>
          </div>
          <h4>Doctor Strange</h4>
          <p>Minimun Entry fee: <span>N200</span></p>
          <Button title='Enter Contest' short/>
          </div>
          <div className="movie-challenge-card">
          <div className="movie-challenge-card-image-holder">
            <img src={Buju} alt='doctor-strange'/>
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

export default MusicChallenges