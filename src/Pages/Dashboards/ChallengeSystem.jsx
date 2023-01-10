import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { ChallengesContext } from '../../Contexts/ChallengesContext'
import EntertainmentCards from '../Challenges/Entertainment/EntertainmentCards'
import SportCards from '../Challenges/Sports/SportCards'
import TvshowCards from '../Challenges/TV-Shows/TvshowCards'

import MovieChallenges from '../Challenges/Entertainment/MovieChallenges'
import MusicChallenges from '../Challenges/Entertainment/MusicChallenges'

const ChallengeSystem = () => {
  const [viewSports, setViewSports] = useState(true);
  const [viewEntertainment, setViewEntertainment] = useState(false);
  const [viewTvshows, setViewTvshows] = useState(false);
  const [viewMovie, setViewMovie] = useState(false)
  const [viewMusic, setViewMusic] = useState(false)
  const [defaultView, setDefaultView] = useState(true)

  const displaySport = () => {
    setViewSports(true)
    setViewEntertainment(false)
    setViewTvshows(false)
  }
  const displayEntertainment = () => {
    setViewSports(false)
    setViewEntertainment(true)
    setViewTvshows(false)
  }
  const displayTvshows = () => {
    setViewSports(false)
    setViewEntertainment(false)
    setViewTvshows(true)
  }

  return (
    <>
    {viewMovie && <MovieChallenges setDefault={setDefaultView} changeMovie={setViewMovie} changeMusic={setViewMusic}/>}
    {viewMusic && <MusicChallenges setDefault={setDefaultView} changeMovie={setViewMovie} changeMusic={setViewMusic}/>}
    {defaultView &&
      <section className="challengeSystem-main-container">
        <section className="challengeSystem-intro-banner">
          <h3>Weapon (Categories)</h3>
          <p className='intro-banner-sub-text'>Challenge Us and Win</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Commodi numquam facilis soluta veritatis quibusdam autem laborum cum 
            eaque rerum doloremque voluptas debitis, rem obcaecati vero inventore totam ut maxime tempora?</p>
        </section>

        <section className="challengeSystem-option-links-wrapper">
          <ul className="challengeSystem-option-links">
            <li><Link onClick={()=>{displaySport()}}>Sports</Link></li>
            <li><Link onClick={()=>{displayEntertainment()}}>Entertainment</Link></li>
            <li><Link onClick={()=>{displayTvshows()}}>Tv Shows</Link></li>
          </ul>
        </section>

        <section className="challengeSystem-categories-section">
          <ChallengesContext.Provider value={{setDefaultView, setViewMovie, setViewMusic}}>
        {viewSports && <SportCards />}        
        {viewEntertainment && <EntertainmentCards />}        
        {viewTvshows && <TvshowCards />}       
        </ChallengesContext.Provider> 
        </section>
      </section>
    }
    </>
  )
}

export default ChallengeSystem