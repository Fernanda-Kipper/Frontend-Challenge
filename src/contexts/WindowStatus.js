import { createContext } from 'react'

const WindowStatus = createContext({
    status: "off",
    setStatus: ()=>{}
})

export default WindowStatus;