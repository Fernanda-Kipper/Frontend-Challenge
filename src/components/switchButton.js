import React, { useContext } from 'react'

import WindowStatus from '../contexts/WindowStatus'

import '../styles/components/switchButton.css'

export default function SwitchButton(){
    const { status, setStatus } = useContext(WindowStatus)
    function handleToggle(){
        if(status === 'on'){
            setStatus('off')
        }
        else{
            setStatus('on')
        }
    }

    return (
    <label className="mainSwitch">
        <input className="input" type="checkbox" onChange={handleToggle}/>
        <span className="slide"></span>
      </label>
    )
}