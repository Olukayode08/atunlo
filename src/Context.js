import React, { createContext, useState } from 'react'

const Atunlo = createContext()

const Context = ({ children }) => {
  const [accordion, setAccordion] = useState(null)
  const [active, setActive] = useState(false)
  const [color, setColor] = useState(false)
  const [colorAbout, setColorAbout] = useState(false)

  const toggle = () => {
    setActive(!active)
  }

  const toggleAccordion = (i) => {
    if (accordion === i) {
      return setAccordion(null)
    }
    setAccordion(i)
  }
  const closeMobileAbout = () => {
    setActive(false)
    setColorAbout(true)
    setColor(false)
  }
  const closeMobileServices = () => {
    setActive(false)
    setColorAbout(false)
    setColor(true)
  }
  const closeMobile = () => {
    setActive(false)
    setColor(false)
    setColorAbout(false)
  }
  return (
    <>
      <Atunlo.Provider
        value={{
          active,
          setActive,
          accordion,
          setAccordion,
          toggleAccordion,
          closeMobile,
          colorAbout,
          color,
          closeMobileAbout,
          closeMobileServices,
        }}
      >
        {children}
      </Atunlo.Provider>
    </>
  )
}

export { Context, Atunlo }
