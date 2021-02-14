import React, { useContext, useState, useEffect } from 'react'
import WindowStatus from '../contexts/WindowStatus'

import '../styles/components/window.css'

export default function Window(){
    const { status } = useContext(WindowStatus)
    const [thisStatus, setThisStatus] = useState(status)

    useEffect(()=>{
        setThisStatus(status)
    }, [status])
    
    function handleStatus(){
        if(thisStatus === "off"){
            setThisStatus("on")
        }
        else{
            setThisStatus("off")
        }
    }

    return(
        <div 
        className={`window ${thisStatus}`}
        onClick={handleStatus}
        >
        </div>
    )
}