import React from 'react'
import styled from 'styled-components'
import waste from '../assets/IMG_20230129_153109_285 1.png'
import bgwhite from '../assets/web-bg-white.png'
import { Link } from 'react-router-dom'

const SectionTwo = () => {
  return (
    <>
      <Wrapper>
        <main>
          <div className='sec-two'>
            <img src={waste} alt='Atunlo' />
            <div className='sec-two-r'>
              <h3>We have built a system that works out for all</h3>
              <h5>
                Atunlo partners with residential, commercial and institutional
                waste generators, as well as municipal waste collectors whom we
                pay to collect used PET bottles for sale to offtakers.
              </h5>
              <Link className='location' to='/pickup'>
                Request pickup
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
    margin: 50px auto;
    width: 80%;
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

  @media screen and (max-width: 1000px) {
    .sec-two {
      display: flex;
      flex-direction: column-reverse;
      justify-content: center;
      align-items: center;
    }
    .sec-two-r {
      text-align: center;
      margin: 30px;
    }

    h3,
    h5 {
      text-align: center;
    }
    .location {
      margin: 0 auto;
    }
  }
  @media screen and (max-width: 500px) {
    img {
      width: 350px;
      height: 350px;
      margin: 20px;
    }
    h3,
    h5 {
      text-align: center;
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
