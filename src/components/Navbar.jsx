import React, { useContext, useState } from 'react'
import { Squash as Hamburger } from 'hamburger-react'
import styled from 'styled-components'
import { Atunlo } from '../Context'
import { Link } from 'react-router-dom'
import logo from '../assets/Atunlo-logo.png'
import down from '../assets/down-grey.png'
import Dropdown from './Dropdown'
import DropdownAbout from './DropdownAbout'
import { Link as Scroll } from 'react-scroll'

const Navbar = () => {
  const { active, setActive, closeMobile } = useContext(Atunlo)
  const [dropdown, setDropdown] = useState(false)
  const [dropdownAbout, setDropdownAbout] = useState(false)

  const onMouseEnter = () => {
    setDropdown(true)
  }
  const onMouseLeave = () => {
    setDropdown(false)
  }
  const onMouseEnterAbout = () => {
    if (window.innerWidth < 960) {
      setDropdownAbout(false)
    } else {
      setDropdownAbout(true)
    }
  }
  const onMouseLeaveAbout = () => {
    if (window.innerWidth < 960) {
      setDropdownAbout(false)
    } else {
      setDropdownAbout(false)
    }
  }

  return (
    <>
      <section>
        <Wrapper>
          <nav>
            <Link to='/' className='navbar-logo'>
              <img className='logo' src={logo} alt='Atunlo' />
            </Link>
            <ul className='links'>
              <li className='desktop-links'>
                <Link className='link' to='/'>
                  Home
                </Link>
              </li>
              <li
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
                className='desktop-links'
              >
                <Link className='link' to='#'>
                  Services <img src={down} alt='Atunlo' />
                </Link>
                {dropdown && <Dropdown />}
              </li>
              <li
                onMouseEnter={onMouseEnterAbout}
                onMouseLeave={onMouseLeaveAbout}
                className='desktop-links'
              >
                <Link className='link'>
                  About <img src={down} alt='Atunlo' />
                </Link>
                {dropdownAbout && <DropdownAbout />}
              </li>
              <li className='desktop-links'>
                <Link className='link' to='/contact'>
                  Contact
                </Link>
              </li>
              <li className='desktop-links'>
                <Scroll
                  className='link'
                  to='faqs'
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                >
                  FAQ
                </Scroll>
              </li>
            </ul>
            <div className={active ? 'mobile' : 'desktop'}>
              <Hamburger
                toggled={active}
                toggle={setActive}
                easing='ease-in'
                size={25}
                direction='left'
              />
            </div>
          </nav>
          <div className={active ? 'open-links' : 'close-links'}>
            <ul className='mobile-link'>
              <li className='mobile-links'>
                <Link className='link-mobile' to='/' onClick={closeMobile}>
                  Home
                </Link>
              </li>
              <li
                className='mobile-links'
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
              >
                <Link className='link-mobile' to='#'>
                  Services <img src={down} alt='Atunlo' />
                </Link>
                {/* {dropdown && <Dropdown />} */}
              </li>
              <li
                onMouseEnter={onMouseEnterAbout}
                onMouseLeave={onMouseLeaveAbout}
                className='mobile-links'
              >
                <Link className='link-mobile' to='#'>
                  About <img src={down} alt='Atunlo' />
                </Link>
                {/* {dropdownAbout && <DropdownAbout />} */}
              </li>
              <li className='mobile-links'>
                <Link
                  className='link-mobile'
                  onClick={closeMobile}
                  to='/contact'
                >
                  Contact
                </Link>
              </li>
              <li className='mobile-links'>
                <Scroll
                  onClick={closeMobile}
                  className='link-mobile'
                  to='faqs'
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                >
                  FAQ
                </Scroll>
              </li>
            </ul>
          </div>
        </Wrapper>
      </section>
    </>
  )
}

const Wrapper = styled.section`
  margin-bottom: 80px;
  padding: 0;
  section {
    position: relative;
  }
  .logo {
    width: 20%;
    margin-top: 15px;
  }
  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #fff;
    height: 70px;
    position: fixed;
    padding: 0 100px;
    top: 0;
    left: 0;
    z-index: 70;
    width: 100%;
  }
  ul {
    display: flex;
  }
  li {
    cursor: pointer;
    list-style: none;
  }
  .link {
    padding: 24px 20px;
    text-decoration: none;
    color: #8a8a8a;
    font-size: 14px;
    height: 100%;
    font-weight: 300;
    :hover {
      color: #fff;
      background: #4cc800;
      transition: all 0.3s ease-in;
    }
  }
  .link-mobile {
    padding: 24px 20px;
    text-decoration: none;
    color: #8a8a8a;
    font-size: 15px;
    height: 100%;
  }
  .open-links {
    position: fixed;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    top: 0;
    left: 0;
    z-index: 50;
    height: 100%;
    width: 100%;
    padding: 0;
    margin: 0;
    background: #fff;
    color: #8a8a8a;
  }
  .desktop,
  .close-links {
    display: none;
  }
  .mobile-link {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .mobile-links {
    margin: 1.3em 0;
    list-style: none;
    font-size: 20px;
    font-weight: 500;
    :hover {
      color: rgb(76, 200, 0);
      transition: all 0.3s ease-in;
    }
  }

  @media screen and (min-width: 1100px) {
    .open-links,
    .mobile,
    .desktop {
      display: none;
    }
  }
  @media screen and (max-width: 1100px) {
    .links {
      display: none;
    }
    .mobile {
      display: block;
    }
    .mobile,
    .desktop {
      position: absolute;
      height: 100vh;
      display: block;
      top: 15px;
      right: 30px;
      z-index: 90;
    }
    .logo {
      width: 23%;
    }
  }

  @media screen and (max-width: 550px) {
    .logo {
      width: 30%;
    }
    nav {
      padding: 0 1em;
    }
  }
  @media screen and (max-width: 400px) {
    .mobile,
    .desktop {
      right: 20px;
    }
  }
`
export default Navbar
