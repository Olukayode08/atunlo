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
            <img src={whatsapp} alt='Atunlo' />
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
    width: 110px;
    background: #fff;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    position: absolute;
    cursor: pointer;
    z-index: 10;
    top: -55px;
    padding: 5px;
    right: 0;
  }
  main {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5px;
    width: 100px;
    background: #4cc800;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    cursor: pointer;
    img {
      width: 55%;
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
