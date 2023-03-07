import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { bgslider } from '../data'

const Services = () => {
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
            <h1>Our Services</h1>
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
    padding: 0;
    height: 70vh;
    margin: -10px 0 50px 0;
    position: relative;
  }
  article {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
  }
  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
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
    top: 45%;
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
    font-size: 45px;
    line-height: 50px;
    padding: 6px 0;
  }
`
export default Services
