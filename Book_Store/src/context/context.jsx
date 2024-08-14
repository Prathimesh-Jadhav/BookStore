import React, { createContext, useContext, useState } from 'react'
export const Authuser = createContext(null)

const context = ({children}) => {

   const [Login,verifyLogin] = useState(false)

  return (
     <div>
         <Authuser.Provider value={{Login,verifyLogin}}>
            {children}
         </Authuser.Provider>
     </div>
  )
}

export default context