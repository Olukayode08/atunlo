import React, { useState, useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { aboutDropdown } from '../data'
import styled from 'styled-components'
import { Atunlo } from '../Context'

const DropdownAbout = () => {
  const { closeMobile } = useContext(Atunlo)

  const [clickAbout, setClickAbout] = useState(false)
  const handleClickAbout = () => setClickAbout(clickAbout)
  return (
    <Wrapper>
      <div>
        <ul
          onClick={handleClickAbout}
          className={clickAbout ? 'dropdown-menu clicked' : 'dropdown-menu'}
        >
          {aboutDropdown.map((about) => {
            const {idx, text, path } = about
            return (
              <li key={idx} onClick={closeMobile}>
                <NavLink
                  className='dropdown-link'
                  to={path}
                  onClick={() => setClickAbout(false)}
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
    border-radius: 5px;
    width: 120px;
    position: absolute;
    top: 24px;
    list-style: none;
    text-align: center;
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
    padding: 20px 0;
    color: #000;
  }
`
export default DropdownAbout
