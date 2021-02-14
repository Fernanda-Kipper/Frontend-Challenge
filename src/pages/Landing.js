import React, {useEffect, useState, useContext} from 'react'
import axios from 'axios'

import '../styles/pages/Landing.css';

import MainBuilding from '../components/mainBuilding'
import SwitchButton from '../components/switchButton'

import WindowStatus from '../contexts/WindowStatus'
import DayStates from '../dayStates'

import sunImg from '../assets/sun.svg'
import moonImg from '../assets/moon.svg'

function LandingPage() {
    const { setStatus } = useContext(WindowStatus)
    const [day, setDay] = useState(DayStates.none)

  useEffect(()=>{
    navigator.geolocation.getCurrentPosition(function(position) {
      axios.get(`https://api.sunrise-sunset.org/json?lat=${position.coords.latitude}&lng=${position.coords.longitude}&date=today`).then(res => {
        let currentHour = new Date().getUTCHours()
        let resultsSunrise = res.data.results.sunrise.replace(' ', ':').split(':')
        let resultsSunset  = res.data.results.sunset.replace(' ', ':').split(':')
        if (resultsSunrise[3] === 'PM'){
          resultsSunrise[0] = Number(resultsSunrise[0]) + 12
          resultsSunset[0] = Number(resultsSunset[0])
          if (currentHour < resultsSunrise[0] && currentHour >= resultsSunset[0]){
            setDay(DayStates.day)
          }
          else{
            setDay(DayStates.nigth)
            setStatus('on')
          }
        }
        else{
          resultsSunset[0] = Number(resultsSunset[0]) + 12
          resultsSunrise[0] = Number(resultsSunrise[0])
          if (currentHour >= resultsSunrise[0] && currentHour < resultsSunset[0]){
            setDay(DayStates.day)
          }
          else{
            setDay(DayStates.nigth)
            setStatus('on')
          }
        }
      })
    })
  }, [])

  return (
    <div className={`Landing ${day.status}`}>
      <header>
          <SwitchButton/>
          <h1>Good {day.status}!</h1>
          <img src={sunImg} className={`SunMoon ${day.sun}`} alt="Imagem de Sol"/>
          <img src={moonImg} className={`SunMoon ${day.moon}`} alt="Imagem de Lua"/>
      </header>
      <main>
        <div className="building1"></div>
        <MainBuilding/>
        <div className="building2"></div>
      </main>
    </div>
  );
}

export default LandingPage;
