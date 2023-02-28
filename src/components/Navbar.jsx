import React, { useContext } from 'react'
import { Squash as Hamburger } from 'hamburger-react'
import styled from 'styled-components'
import { Atunlo } from '../Context'
import { Link } from 'react-router-dom'
import logo from '../assets/Atunlo full logo (black+green).png'

const Navbar = () => {

  const { active, setActive, toggle } = useContext(Atunlo)
  return (
    <>
      <section>
        <Wrapper>
          <nav>
            <Link to='/' className='navbar-logo'>
              <img src={logo} alt='Atunlo' />
            </Link>
            <ul className='links'>
              <li className='desktop-links'>
                <Link className='link' to='/'>
                  Home
                </Link>
              </li>
              <li className='desktop-links'>
                <Link className='link' to='/services'>
                  Services +
                </Link>
              </li>
              <li className='desktop-links'>
                <Link className='link' to='/about'>
                  About +
                </Link>
              </li>
              <li className='desktop-links'>
                <Link className='link' to='/contact'>
                  Contact
                </Link>
              </li>
              <li className='desktop-links'>
                <Link className='link' to='/'>
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
                <Link to='/'>Home</Link>
              </li>
              <li className='mobile-links'>
                <Link to='/services'>Services +</Link>
              </li>
              <li className='mobile-links'>
                <Link to='/about'>About +</Link>
              </li>
              <li className='mobile-links'>
                <Link to='/contact'>Contact</Link>
              </li>
              <li className='mobile-links'>
                <Link to='/'>FAQ</Link>
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
