import React, { createContext, useState } from 'react'

const Atunlo = createContext()

const Context = ({ children }) => {
  const [accordion, setAccordion] = useState(null)
  const [active, setActive] = useState(false)
  const toggle = () => {
    setActive(!active)
  }

  const toggleAccordion = (i) =>{
    if(accordion === i){
      return setAccordion(null)
    }
    setAccordion(i)
  }
  return (
    <>
      <Atunlo.Provider
        value={{
          active,
          setActive,
          accordion,
          setAccordion,
          toggleAccordion
        }}
      >
        {children}
      </Atunlo.Provider>
    </>
  )
}

export { Context, Atunlo }
