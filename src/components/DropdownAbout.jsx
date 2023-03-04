import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import { dropdownAbout } from '../data'
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
          {dropdownAbout.map((about) => {
            const { id, text, path } = about
            return (
              <li onClick={closeMobile} key={id}>
                <Link
                  className='dropdown-link'
                  to={path}
                  onClick={() => setClickAbout(false)}
                >
                  {text}
                </Link>
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
    width: 120px;
    position: absolute;
    top: 26px;
    list-style: none;
    text-align: center;
    transition: all 0.2s ease-in;
  }
  .dropdown-menu li {
    background: #fff;
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
  /* @media screen and (max-width: 900px) {
    .dropdown-menu {
      width: 100px;
    }
    .dropdown-link {
      padding: 2px;
      color: green;
      font-size: 12px;
    }
  } */
`
export default DropdownAbout
