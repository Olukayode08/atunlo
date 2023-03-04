import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import bg from '../assets/images-img-7.png'
import bgOne from '../assets/images-img-1.png'
import bgTwo from '../assets/images-img-7.png'
import bgThree from '../assets/images-img-6.png'
import bgFour from '../assets/images-img-8.png'
import bgFive from '../assets/images-img-5.png'
import bgSix from '../assets/images-img-2.png'
import bgSeven from '../assets/images-img-3.png'

// import { bgslider } from '../data'
import { Link } from 'react-router-dom'

const Hero = () => {
  // const [currentSlide, setCurrentSlide] = useState(0)
  // const slideLength = bgslider.length

  // const autoScroll = true
  // let slideInterval
  // let intervalTime = 5000

  // function auto() {
  //   slideInterval = setInterval(nextSlide, intervalTime)
  // }

  // const nextSlide = () => {
  //   setCurrentSlide(currentSlide === slideLength - 1 ? 0 : currentSlide + 1)
  // }
  // useEffect(() => {
  //   if (autoScroll) {
  //     auto()
  //   }
  //   return () => clearInterval(slideInterval)
  // }, [currentSlide])
  return (
    <>
      <Wrapper>
        <main>
          <div className='bg-img'>
            {/* {bgslider.map((slide, index) => {
              return (
                <div
                  key={index}
                  className={index === currentSlide ? 'slide current' : 'slide'}
                >
                  {index === currentSlide && (
                    <div>
                      <img src={slide.image} alt='Atunlo' />
                    </div>
                  )}
                </div>
              )
            })} */}
          </div>
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
              <Link className='location' to='/pickup'>
                Request pickup
              </Link>
              <Link className='location' to='/dropoff'>
                Find drop off points
              </Link>
            </div>
          </div>
        </main>
      </Wrapper>
    </>
  )
}
const Wrapper = styled.section`
  /* height: 100vh; */
  main {
    color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: -10px 0 50px 0;
    padding: 0;
    height: 100vh;
    position: relative;
  }
  .bg-img {
    background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.4)),
      url(${bgOne});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
    height: 100vh;
    width: 100%;
    margin: 0 auto;
    /* transition: 5s;
    animation-name: animate;
    animation-direction: alternate-reverse;
    animation-play-state: running;
    animation-timing-function: ease-in-out;
    animation-fill-mode: forwards;
    animation-duration: 45s;
    animation-iteration-count: infinite; */
  }
  /* @keyframes animate {
    0% {
      background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.4)),
        url(${bgOne});
    }
    17% {
      background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.4)),
        url(${bgTwo});
    }
    33% {
      background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.4)),
        url(${bgThree});
    }
    50% {
      background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.4)),
        url(${bgFour});
    }
    67% {
      background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.4)),
        url(${bgFive});
    }
    83% {
      background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.4)),
        url(${bgSix});
    }
    100% {
      background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.4)),
        url(${bgSeven});
    }
  } */
  /* .bg-img {
    position: relative;
    overflow: hidden;
    height: 100%;
    width: 100%;
  }
  .slide img {
    width: 100%;
    height: 100vh;
    animation: fadeIn 2s;
    object-fit: cover;
  }
  .slide {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    opacity: 0;
    transform: translateX(-50%);
    transition: all 0.5s ease;
  } */
  /* @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  } */
  /* @keyframes fadeIn {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  } */
  .current {
    opacity: 1;
    transform: translateX(0);
  }
  .bg-text {
    position: absolute;
    top: 40%;
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
  .location {
    border: 2px solid #4cc800;
    color: #4cc800;
    width: 190px;
    font-size: 17px;
    text-align: center;
    padding: 10px;
    margin: 15px 10px;
    cursor: pointer;
    text-decoration: none;
    :hover {
      background: #4cc800;
      color: #fff;
    }
  }
  @media screen and (min-width: 600px) {
    .slide img {
      width: 100%;
      height: 100vh;
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
    .bg-text {
      top: 45%;
    }
  }
  @media screen and (max-width: 600px) {
    .bg-text {
      width: 80%;
    }
  }
`
export default Hero
