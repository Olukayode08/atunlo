import React, { useState, useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { dropdownItems } from '../data'
import styled from 'styled-components'
import { Atunlo } from '../Context'

const Dropdown = () => {
  const { closeMobile, closeMobileServices } = useContext(Atunlo)

  const [click, setClick] = useState(false)
  const handleClick = () => setClick(click)

  const clickColor = ()=>{
    setClick(false)
    closeMobileServices()
  }
  return (
    <Wrapper>
      <div>
        <ul
          onClick={handleClick}
          className={click ? 'dropdown-menu clicked' : 'dropdown-menu'}
        >
          {dropdownItems.map((item) => {
            const { id, text, path } = item
            return (
              <li key={id} onClick={closeMobile}>
                <NavLink
                  className='dropdown-link'
                  to={path}
                  onClick={clickColor}
                >
                  {text}
                </NavLink>
              </li>
            )
          })}
        </ul>
      </div>
    </Wrapper>
  )
}
const Wrapper = styled.section`
  .dropdown-menu {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100px;
    padding: 10px;
    position: absolute;
    border-radius: 5px;
    top: 10px;
    left: -13px;
    list-style: none;
    cursor: pointer;
    background: #fff;
    transition: all 0.2s ease-in;
  }
  .dropdown-menu li {
    cursor: pointer;
  }
  li {
    padding: 8px;

  }
  .dropdown-menu.clicked {
    display: none;
  }
  .dropdown-link {
    width: 100%;
    height: 100%;
    text-decoration: none;
    padding: 15px 0;
    color: #000;
  }
`
export default Dropdown
