import React, { useContext, useEffect, useRef, useState } from 'react'
import { Squash as Hamburger } from 'hamburger-react'
import styled from 'styled-components'
import { Atunlo } from '../Context'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import logo from '../assets/Atunlo-logo.png'
import down from '../assets/down-grey.png'
import up from '../assets/upnav.png'

import Dropdown from './Dropdown'
import DropdownAbout from './DropdownAbout'
import { Link as Scroll } from 'react-scroll'
import { aboutDropdown, dropdownItems } from '../data'

const Navbar = () => {
  const navigate = useNavigate()
  const {
    active,
    setActive,
    setColor,
    color,
    setColorAbout,
    colorAbout,
    closeMobile,
    closeMobileServices,
    closeMobileAbout,
    dropdown,
    dropdownAbout,
    setDropdown,
    setDropdownAbout,
    subLinkOne,
    subLinkTwo,
    setSubLinkOne,
    setSubLinkTwo,
  } = useContext(Atunlo)

  const aboutService = () => {
    setColor(false)
    setColorAbout(false)
  }

  const closeFaq = () => {
    navigate('/', { state: { targetId: 'faqs' } })
    closeMobile()
    setColor(false)
    setColorAbout(false)
  }

  const toggleDropdown = () => {
    setDropdown(!dropdown)
    setDropdownAbout(false)
  }
  const toggleAbout = () => {
    setDropdown(false)
    setDropdownAbout(!dropdownAbout)
  }

  let menuRef = useRef()

  useEffect(() => {
    let handler = (e) => {
      if (!menuRef.current.contains(e.target)) {
        setDropdown(false)
        setDropdownAbout(false)
      }
    }
    document.addEventListener('mousedown', handler)
    return () => {
      document.removeEventListener('mousedown', handler)
    }
  })

  // MOBILE

  const toggleLinkOne = () => {
    setSubLinkOne(!subLinkOne)
    setSubLinkTwo(false)
  }
  const toggleLinkTwo = () => {
    setSubLinkTwo(!subLinkTwo)
    setSubLinkOne(false)
  }

  return (
    <>
      <section>
        <Wrapper>
          <nav ref={menuRef}>
            <Link to='/' className='navbar-logo'>
              <img className='logo' src={logo} alt='Atunlo' />
            </Link>
            <ul className='links'>
              <li className='desktop-links' onClick={aboutService}>
                <NavLink
                  to='/'
                  className={({ isActive }) =>
                    isActive ? 'active-link' : 'link'
                  }
                >
                  Home
                </NavLink>
              </li>
              <li
                onClick={toggleDropdown}
                className={color ? 'd-color desktop-links' : 'desktop-links'}
              >
                {dropdown ? (
                  <div>
                    Services <img src={up} alt='Atunlo' />
                  </div>
                ) : (
                  <div>
                    Services <img src={down} alt='Atunlo' />
                  </div>
                )}
                {dropdown && <Dropdown />}
              </li>
              <li
                onClick={toggleAbout}
                className={
                  colorAbout ? 'd-color desktop-links' : 'desktop-links'
                }
              >
                {dropdownAbout ? (
                  <div>
                    About <img src={up} alt='Atunlo' />
                  </div>
                ) : (
                  <div>
                    About <img src={down} alt='Atunlo' />
                  </div>
                )}
                {dropdownAbout && <DropdownAbout />}
              </li>
              <li className='desktop-links' onClick={aboutService}>
                <NavLink
                  to='/contact'
                  className={({ isActive }) =>
                    isActive ? 'active-link' : 'link'
                  }
                >
                  Contact
                </NavLink>
              </li>
              <li className='desktop-links' onClick={aboutService}>
                <Scroll
                  onClick={closeFaq}
                  to='faq'
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
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? 'active-link-mobile mobile-links'
                      : 'link-mobile mobile-links'
                  }
                  to='/'
                  onClick={closeMobile}
                >
                  Home
                </NavLink>
              </li>

              <li
                className={
                  subLinkOne ? 'remove-m border' : 'mobile-links border'
                }
              >
                <div
                  onClick={toggleLinkOne}
                  className={color ? 'link-mobile c-color' : 'link-mobile'}
                >
                  {subLinkOne ? (
                    <div>
                      Services <img src={up} alt='Atunlo' />
                    </div>
                  ) : (
                    <div>
                      Services <img src={down} alt='Atunlo' />
                    </div>
                  )}
                </div>
                <div className={subLinkOne ? 'sublinks' : 'no-sublink'}>
                  {dropdownItems.map((items) => {
                    const { id, text, path } = items
                    return (
                      <div key={id} className='sub-link'>
                        <NavLink
                          className={({ isActive }) =>
                            isActive ? 'active-link-mobile' : 'link-mobile'
                          }
                          to={path}
                          onClick={closeMobileServices}
                        >
                          {text}
                        </NavLink>
                      </div>
                    )
                  })}
                </div>
              </li>
              <li
                className={
                  subLinkTwo ? 'remove-m border' : 'mobile-links border'
                }
              >
                <div
                  onClick={toggleLinkTwo}
                  className={colorAbout ? 'link-mobile c-color' : 'link-mobile'}
                >
                  {subLinkTwo ? (
                    <div>
                      About <img src={up} alt='Atunlo' />
                    </div>
                  ) : (
                    <div>
                      About <img src={down} alt='Atunlo' />
                    </div>
                  )}
                </div>

                <div className={subLinkTwo ? 'sublinks' : 'no-sublink'}>
                  {aboutDropdown.map((abouts) => {
                    const { idx, text, path } = abouts
                    return (
                      <div key={idx} className='sub-link'>
                        <NavLink
                          className={({ isActive }) =>
                            isActive ? 'active-link-mobile' : 'link-mobile'
                          }
                          to={path}
                          onClick={closeMobileAbout}
                        >
                          {text}
                        </NavLink>
                      </div>
                    )
                  })}
                </div>
              </li>
              <li className='mobile-links'>
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? 'active-link-mobile mobile-links'
                      : 'link-mobile mobile-links'
                  }
                  onClick={closeMobile}
                  to='/contact'
                >
                  Contact
                </NavLink>
              </li>
              <li className='mobile-links'>
                <Scroll
                  onClick={closeFaq}
                  to='faq'
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
  .desktop-links {
    font-size: 14px;
    padding: 26px 20px;
    color: #8a8a8a;
  }
  .active-link,
  .link {
    padding: 26px 20px;
    color: #8a8a8a;
    text-decoration: none;
    font-size: 14px;
    height: 100%;
    font-weight: 300;
  }
  .d-color {
    color: #fff;
    background: #4cc800;
  }
  .active-link {
    color: #fff;
    background: #4cc800;
  }
  .active-link-mobile,
  .link-mobile {
    text-decoration: none;
    color: #8a8a8a;
    font-size: 20px;
  }
  .active-link-mobile {
    color: #4cc800;
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
  }
  .remove-m {
    margin: 0;
    text-align: center;
  }
  .sublinks {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    padding: 6px 0;
  }
  .no-sublink {
    position: absolute;
    display: none;
    top: -100%;
    left: -100%;
  }
  .sub-link {
    margin: 10px 0;
  }
  .sublink {
    text-decoration: none;
    color: #8a8a8a;
  }
  .c-color {
    color: #4cc800;
  }
  @media screen and (min-width: 1150px) {
    .open-links,
    .mobile,
    .desktop {
      display: none;
    }
  }
  @media screen and (max-width: 1250px) {
    .links {
      width: 70%;
      display: flex;
      justify-content: flex-end;
    }
  }
  .desktop-links,
  .active-link,
  .link {
    padding: 26px 15px;
  }
  @media screen and (max-width: 1150px) {
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
