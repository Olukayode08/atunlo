import React from 'react'
import styled from 'styled-components'
import whatsapp from '../assets/Chat-big.png'
import { Link } from 'react-router-dom'



const Whatsapp = () => {
  return (
    <>
      <Wrapper>
        <section>
          <main>
            <Link to='https://wa.link/wjjb8a'>
              <img src={whatsapp} alt='Atunlo' />
            </Link>
            <Link className='link-w' to='https://wa.link/wjjb8a'>
              Chat with us
            </Link>
          </main>
        </section>
      </Wrapper>
    </>
  )
}
const Wrapper = styled.section`
  position: relative;

  section {
    width: 95px;
    background: #fff;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    position: fixed;
    cursor: pointer;
    z-index: 999;
    bottom: 5px;
    right: 0;
    padding: 5px;
  }
  main {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5px;
    width: 85px;
    background: #4cc800;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    cursor: pointer;
    img {
      width: 95%;
      animation: scale 1s linear infinite;
    }
    @keyframes scale {
      0% {
        transform: scale(0.8);
      }
      50% {
        transform: scale(0.9);
      }
      70% {
        transform: scale(1.1);
      }
      100% {
        transform: scale(1.2);
      }
    }
    .link-w {
      text-decoration: none;
      font-size: 13px;
      color: #fff;
      letter-spacing: 0.2px;
      font-family: 'FilsonProThin';
      src: url(./fonts/FilsonProThin.otf) format(opentype);
    }
  }
`
export default Whatsapp
