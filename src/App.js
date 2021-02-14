import React, {useState} from 'react'

import LandingPage from './pages/Landing'

import WindowStatus from './contexts/WindowStatus'

function App() {
  const [status, setStatus] = useState('off')

  return (
    <WindowStatus.Provider value={{status, setStatus}}>
      <LandingPage/>
    </WindowStatus.Provider>
  )
}

export default App;
