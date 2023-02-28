import React from 'react'
import styled from 'styled-components'
import bg from '../assets/bg.png'

const Services = () => {
  return (
    <>
      <Wrapper>
        <main>
          <div className='bg-img'></div>
          <div className='bg-text'>
            <h1>Our Services</h1>
          </div>
        </main>
      </Wrapper>
    </>
  )
}
const Wrapper = styled.section`
  main {
    color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0 0 50px 0;
  }
  .bg-img {
    background-image: url(${bg});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
    height: 50vh;
    width: 100%;
    filter: blur(3px);
    backdrop-filter: blur(3px);
    -webkit-filter: blur(3px);
  }
  .bg-text {
    position: absolute;
    top: 35%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 5;
    width: 50%;
    text-align: center;
    padding: 40px 0;
  }
  h1 {
    font-size: 45px;
    line-height: 50px;
    padding: 6px 0;
  }
`
export default Services
