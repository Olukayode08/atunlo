import React, { useContext, useState } from 'react'
import { Squash as Hamburger } from 'hamburger-react'
import styled from 'styled-components'
import { Atunlo } from '../Context'
import { Link } from 'react-scroll'
import { RiArrowDownSLine } from 'react-icons/ri'

import { useNavigate } from 'react-router-dom'
import logo from '../assets/Atunlo full logo (black+green).png'

const Navbar = () => {
  let navigate = useNavigate()

  const { active, setActive, toggle } = useContext(Atunlo)
  return (
    <>
      <section>
        <Wrapper>
          <nav>
            <img src={logo} alt='Atunlo' />
            <ul className='links'>
              <li className='desktop-links'>
                <p
                  onClick={() => {
                    navigate('/')
                  }}
                >
                  Home
                </p>
              </li>
              <li className='desktop-links'>
                <p>Services +</p>
                <ul className='navigate'>
                  <li>
                    <p
                      onClick={() => {
                        navigate('/pickup')
                      }}
                    >
                      Pickup
                    </p>
                  </li>
                  <li>
                    <p
                      onClick={() => {
                        navigate('/dropoff')
                      }}
                    >
                      Dropoff
                    </p>
                  </li>
                  <li>
                    <p
                      onClick={() => {
                        navigate('/corporate')
                      }}
                    >
                      Corporate
                    </p>
                  </li>
                </ul>
              </li>
              <li className='desktop-links'>
                <p>About</p>
                <ul className='navigate'>
                  <li>
                    <p
                      onClick={() => {
                        navigate('/ourstory')
                      }}
                    >
                      Our story
                    </p>
                  </li>
                  <li>
                    <p
                      onClick={() => {
                        navigate('/ourteam')
                      }}
                    >
                      Our Team
                    </p>
                  </li>
                </ul>
              </li>
              <li className='desktop-links'>
                <p
                  onClick={() => {
                    navigate('/contact')
                  }}
                >
                  Contact
                </p>
              </li>
              <li className='desktop-links'>
                <Link
                  to='faqs'
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                  onClick={() => {
                    navigate('/')
                  }}
                >
                  FAQ
                </Link>
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
                <p
                  onClick={() => {
                    navigate('/')
                  }}
                >
                  Home
                </p>
              </li>
              <li className='mobile-links'>
                <p>Services</p>
                <ul className='navigate'>
                  <li>
                    <p
                      onClick={() => {
                        navigate('/pickup')
                      }}
                    >
                      Pickup
                    </p>
                  </li>
                  <li>
                    <p
                      onClick={() => {
                        navigate('/dropoff')
                      }}
                    >
                      Dropoff
                    </p>
                  </li>
                  <li>
                    <p
                      onClick={() => {
                        navigate('/corporate')
                      }}
                    >
                      Corporate
                    </p>
                  </li>
                </ul>
              </li>
              <li className='mobile-links'>
                <p>About</p>
                <ul className='navigate'>
                  <li>
                    <p
                      onClick={() => {
                        navigate('/ourstory')
                      }}
                    >
                      Our story
                    </p>
                  </li>
                  <li>
                    <p
                      onClick={() => {
                        navigate('/ourteam')
                      }}
                    >
                      Our Team
                    </p>
                  </li>
                </ul>
              </li>
              <li className='mobile-links'>
                <p
                  onClick={() => {
                    navigate('/contact')
                  }}
                >
                  Contact
                </p>
              </li>
              <li className='mobile-links'>
                <Link
                  to='faqs'
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                  onClick={() => {
                    navigate('/')
                  }}
                >
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
        </Wrapper>
      </section>
    </>
  )
}

const Wrapper = styled.section`
  position: relative;

  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #fff;
    height: 80px;
    padding: 0 4em;
    position: sticky;
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
  }
  .desktop-links {
    padding: 2em;
    font-size: 15px;
    color: #8a8a8a;
    list-style: none;
    :hover {
      color: #fff;
      background: #4cc800;
      transition: all 0.3s ease-in;
    }
  }
  .desktop {
    display: none;
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
    height: 100vh;
    width: 100%;
    padding: 0;
    margin: 0;
    background: #fff;
    color: #8a8a8a;
  }
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
  /* .navigate {
    position: absolute;
    left: 0;
    width: 200px;
    background: #fff;
  } */
  @media screen and (min-width: 1100px) {
    .open-links,
    .mobile {
      display: none;
    }
  }
  @media screen and (max-width: 1100px) {
    .links {
      display: none;
    }
    .desktop {
      display: block;
    }
    .mobile {
      display: block;
      position: fixed;
      top: 11px;
      right: 60px;
      z-index: 10;
    }
  }
`
export default Navbar
