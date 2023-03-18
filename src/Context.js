import React, { createContext, useState } from 'react'

const Atunlo = createContext()

const Context = ({ children }) => {
  const [accordion, setAccordion] = useState(null)
  const [propAccordion, setPropAccordion] = useState(null)

  const [active, setActive] = useState(false)
  const [color, setColor] = useState(false)
  const [colorAbout, setColorAbout] = useState(false)
    const [dropdown, setDropdown] = useState(false)
    const [subLinkOne, setSubLinkOne] = useState(false)
    const [subLinkTwo, setSubLinkTwo] = useState(false)
    const [dropdownAbout, setDropdownAbout] = useState(false)

  const toggle = () => {
    setActive(!active)
  }

  const toggleAccordion = (i) => {
    if (accordion === i) {
      return setAccordion(null)
    }
    setAccordion(i)
  }
    const togglePropAccordion = (i) => {
      if (propAccordion === i) {
        return setPropAccordion(null)
      }
      setPropAccordion(i)
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
          setColor,
          color,
          closeMobileAbout,
          closeMobileServices,
          dropdown,
          dropdownAbout,
          setDropdown,
          setDropdownAbout,
          subLinkOne,
          subLinkTwo,
          setSubLinkOne,
          setSubLinkTwo,
          togglePropAccordion,
          propAccordion,
        }}
      >
        {children}
      </Atunlo.Provider>
    </>
  )
}

export { Context, Atunlo }
