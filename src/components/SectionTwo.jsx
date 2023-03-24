import React from 'react'
import styled from 'styled-components'
import waste from '../assets/IMG_20230129_153109_285 1.png'
import { Link } from 'react-router-dom'
import Stats from './Stats'
import watermark from '../assets/watermark.png'


const SectionTwo = () => {
  return (
    <>
      <Wrapper>
        <main>
          <div className='bg-img'></div>
          <div className='bg-text'>
            <div className='sec-two'>
              <img src={waste} alt='Atunlo' />
              <div className='sec-two-r'>
                <h3>We have built a system that works out for all</h3>
                <h5>
                  Atunlo partners with residential, commercial and institutional
                  waste generators, as well as municipal waste collectors whom
                  we pay to collect used PET bottles for sale to offtakers.
                </h5>
                <Link className='location' to='#'>
                  Request pickup
                </Link>
              </div>
            </div>
            <Stats />
          </div>
        </main>
      </Wrapper>
    </>
  )
}

const Wrapper = styled.section`
  main {
    width: 100%;
    position: relative;
  }
  .bg-img {
    background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.4)),
      url(${watermark});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
    height: 800px;
    width: 100%;
    margin: 0 auto;
    opacity: 0.05;
  }
  .bg-text {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 10;
    width: 100%;
    margin: 0 auto;
  }
  .sec-two {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  img {
    width: 440px;
    height: 360px;
    margin: 30px;
  }
  .sec-two-r {
    display: flex;
    flex-direction: column;
    align-items: left;
    justify-content: center;
    margin: 50px;
    width: 380px;
    text-align: left;
  }
  h3 {
    color: #4cc800;
    font-size: 30px;
    line-height: 36px;
    padding: 10px;
    font-weight: 700;
  }
  h5 {
    color: #000;
    padding: 15px;
    font-size: 16px;
    line-height: 24px;
    font-weight: 400;
    text-align: justify;
    text-justify: distribute;

  }
  .location {
    border: 2px solid #4cc800;
    color: #4cc800;
    width: 190px;
    font-size: 17px;
    text-align: center;
    padding: 10px;
    margin: 15px 14px;
    cursor: pointer;
    border-radius: 5px;
    text-decoration: none;
    :hover {
      background: #4cc800;
      color: #fff;
      transition: all 0.2s ease-in-out;
    }
  }

  @media screen and (max-width: 1200px) {
    img {
      width: 400px;
      margin: 20px;
    }
  }
  @media screen and (max-width: 1100px) {
    .sec-two {
      display: flex;
      flex-direction: column-reverse;
      justify-content: center;
      align-items: center;
    }
    .sec-two-r {
      text-align: center;
      width: 450px;
    }

    h3{
      text-align: center;
    }
    .location {
      margin: 0 auto;
    }
    .bg-img {
      height: 1200px;
    }
  }
  @media screen and (max-width: 600px) {
    img {
      width: 350px;
      height: 350px;
      margin: 20px;
    }
    .sec-two-r {
      margin: 30px 0;
      width: 380px;
    }
    h3 {
      font-size: 23px;
      line-height: 26px;
    }
  }
  @media screen and (max-width: 400px) {
    .sec-two-r {
      margin: 30px 0;
      width: 330px;
    }
  }
  @media screen and (max-width: 320px) {
    img {
      width: 270px;
      height: 300px;
      margin: 0px;
    }
    .sec-two-r {
      margin: 30px 0;
      width: 275px;
    }
  }
`
export default SectionTwo
