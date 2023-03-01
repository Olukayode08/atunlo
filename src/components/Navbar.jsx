import React, { useContext } from 'react'
import { Squash as Hamburger } from 'hamburger-react'
import styled from 'styled-components'
import { Atunlo } from '../Context'
import { Link } from 'react-router-dom'
import logo from '../assets/Atunlo-logo.png'

const Navbar = () => {

  const { active, setActive, toggle } = useContext(Atunlo)
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
                <Link className='link' to='/'>Home</Link>
              </li>
              <li className='mobile-links'>
                <Link className='link' to='/services'>Services +</Link>
              </li>
              <li className='mobile-links'>
                <Link className='link' to='/about'>About +</Link>
              </li>
              <li className='mobile-links'>
                <Link className='link' to='/contact'>Contact</Link>
              </li>
              <li className='mobile-links'>
                <Link className='link' to='/'>FAQ</Link>
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
  .logo {
    width: 20%;
  }
  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #fff;
    height: 70px;
    padding: 0 4em;
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
    padding: 25px 20px;
    height: 70px;
    text-decoration: none;
    color: #8a8a8a;
    font-size: 15px;
    :hover {
      color: #fff;
      background: #4cc800;
      transition: all 0.3s ease-in;
    }
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
      display: block;
      top: 20px;
      left: 20px;
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
  }
`
export default Navbar
