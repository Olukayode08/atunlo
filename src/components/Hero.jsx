import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { bgslider } from '../data'
import { Link } from 'react-router-dom'

const Hero = () => {
  const [pictures, setPictures] = useState(bgslider)
  const [currentSlide, setCurrentSlide] = useState(0)
  const slideLength = bgslider.length

  const autoScroll = true
  let slideInterval
  let intervalTime = 5000

  function auto() {
    slideInterval = setInterval(nextSlide, intervalTime)
  }

  const nextSlide = () => {
    setCurrentSlide(currentSlide === slideLength - 1 ? 0 : currentSlide + 1)
  }
  useEffect(() => {
    if (autoScroll) {
      auto()
    }
    return () => clearInterval(slideInterval)
  }, [currentSlide])
  return (
    <>
      <Wrapper>
        <main>
          <div>
            {pictures.map((slide, slideIndex) => {
              const { id, image } = slide
              let position = 'nextSlide'
              if (slideIndex === currentSlide) {
                position = 'activeSlide'
              }
              if (
                slideIndex === currentSlide - 1 ||
                (currentSlide === 0 && slideIndex === pictures.length - 1)
              ) {
                position = 'lastSlide'
              }
              return (
                <article className={position} key={id}>
                  <img src={image} alt='Atunlo' />
                </article>
              )
            })}
          </div>
          <div className='bg-text'>
            <h1>
              Together, we can <br></br> restore the planet!
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
  main {
    overflow: hidden;
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
  article {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    opacity: 0;
  }
  img {
    object-fit: cover;
    width: 100%;
    height: 100vh;
  }
  article.activeSlide {
    opacity: 1;
    transform: translateX(0);
  }

  article.lastSlide {
    transform: translateX(-100%);
  }
  article.nextSlide {
    transform: translateX(100%);
  }
  .bg-text {
    background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.4));
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    z-index: 5;
    width: 100%;
    height: 120%;
    text-align: center;
    padding: 15px;
  }
  h1 {
    font-size: 60px;
    font-weight: 700;
    line-height: 70px;
    margin-bottom: 25px;
    letter-spacing: 2px;
  }
  h4 {
    max-width: 700px;
    padding: 10px;
    font-size: 22px;
    font-weight: lighter;
    line-height: 45px;
    /* letter-spacing: 1px; */
    padding: 6px 0;
    font-family: 'FilsonProRegular';
    src: url(./fonts/FilsonProRegular.ttf) format(truetype);
    text-align: center;
  }
  .request {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 15px;
  }
  .location {
    border: 2px solid #4cc800;
    color: #4cc800;
    width: 210px;
    font-size: 17px;
    border-radius: 5px;
    text-align: center;
    padding: 18px 10px;
    margin: 20px 15px;
    cursor: pointer;
    text-decoration: none;
    transition: all 0.2s ease-in;
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
      font-size: 35px;
      line-height: 42px;
    }
    h4 {
      font-size: 17px;
      line-height: 26px;
    }
    .bg-text {
      top: 45%;
    }
  }
  @media screen and (max-width: 320px) {
    h1 {
      font-size: 30px;
    }
    h4 {
      font-size: 15px;
    }
    .location {
      margin: 7px 0;
    }
  }
`
export default Hero
