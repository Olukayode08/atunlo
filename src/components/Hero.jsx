import React, { useState } from 'react'
import styled from 'styled-components'
import bg from '../assets/images-img-3.png'
import { bgslider } from '../data'

const Hero = () => {
  const [currentSlide, SetcurrentSlide] = useState(0)
  const bgImageStyle = {
    backgroundImage: `url(${bgslider[currentSlide].url})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    height: '100%',
  }
  return (
    <>
      <Wrapper>
        <main>
          <div style={bgImageStyle} className='bg-img'></div>
          <div className='bg-text'>
            <h1>
              Together, we can <br></br> restore the planet
            </h1>
            <h4>
              You can benefit from keeping your used PET bottles by requesting
              for a pickup from us, or dropping off at any of our collection
              sites
            </h4>
            <div className='request'>
              <p>Request pickup</p>
              <p>Find drop off points</p>
            </div>
          </div>
        </main>
      </Wrapper>
    </>
  )
}
const Wrapper = styled.section`
height: 100vh;
  background-color: #333;
  main {
    color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0 0 50px 0;
    height: 100vh;
    position: relative;
  }
  /* .bg-img {
    position: relative;
    background-image: url(${bg});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
    height: 90vh;
    width: 100%;
  } */
  .bg-text {
    position: absolute;
    top: 60%;
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
  h4 {
    max-width: 600px;
    padding: 10px;
    font-size: 20px;
    line-height: 30px;
    padding: 6px 0;
    text-align: center;
  }
  .request {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  p {
    border: 2px solid #4cc800;
    color: #4cc800;
    width: 190px;
    font-size: 18px;
    text-align: center;
    padding: 10px;
    margin: 15px 10px;
    cursor: pointer;
    :hover {
      border: 2px solid #fff;
      color: #fff;
    }
  }
  @media screen and (max-width: 900px) {
    .request {
      flex-direction: column;
    }
    h1 {
      font-size: 40px;
    }
    h4 {
      font-size: 18px;
    }
  }
  @media screen and (max-width: 600px) {
    .bg-text {
      width: 80%;
    }
  }
`
export default Hero
