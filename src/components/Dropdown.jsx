import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import { dropdownItems } from '../data'
import styled from 'styled-components'
import { Atunlo } from '../Context'


const Dropdown = () => {
  const { closeMobile } = useContext(Atunlo)

  const [click, setClick] = useState(false)
  const handleClick = () => setClick(click)
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
                <Link
                  className='dropdown-link'
                  to={path}
                  onClick={() => setClick(false)}
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
    width: 180px;
    position: absolute;
    top: 26px;
    list-style: none;
    text-align: left;
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
    padding: 20px 10px;
    color: #000;
  }
  /* @media screen and (max-width: 900px) {
    .dropdown-menu{
      width: 100px;
    }
    .dropdown-menu li,
    .dropdown-link{
      padding: 2px;
      color: green;
      font-size: 12px;
    }
  } */
`
export default Dropdown
