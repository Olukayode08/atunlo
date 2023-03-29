import React from 'react'
import { About, Whatsapp } from '../components'
import styled from 'styled-components'
import { teams } from '../data'
import watermark from '../assets/watermark.png'

const TeamAbout = () => {
  return (
    <>
      <About />
      <Whatsapp />
      <Team>
        <div className='atunlo-team'>
          <div className='bg-img'></div>
          <div className='bg-text'>
            <h3>Meet Our Team</h3>
            {teams.map((team) => {
              const { id, image, name, about } = team
              return (
                <div key={id} className='our-team'>
                  <img src={image} alt='Atunlo' />
                  <div>
                    <h4>{name}</h4>
                    <p>{about}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </Team>
    </>
  )
}
const Team = styled.section`
  .atunlo-team {
    width: 100%;
    margin: 0 auto;
    position: relative;
  }
  .bg-img {
    background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.4)),
      url(${watermark});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
    height: 1200px;
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
    width: 80%;
    margin: 0 auto;
  }
  h3 {
    font-size: 28px;
    color: #4cc800;
  }
  .our-team {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
    padding: 40px 0;
  }
  img {
    width: 18%;
    border-radius: 7px;
    margin-right: 40px;
  }
  h4 {
    font-size: 20px;
    margin: 20px 0;
  }
  p {
    text-align: justify;
    text-justify: distribute;
    width: 90%;
  }
  @media screen and (min-width: 1600px) {
    .bg-text {
      width: 1300px;
    }
  }
  @media screen and (max-width: 900px) {
    img {
      display: none;
      margin-right: 0;
    }
    .our-team {
      padding: 20px 0;
    }
    h4,
    h3,
    p {
      width: 100%;
    }
    .bg-img {
      height: 1300px;
    }
  }
  @media screen and (max-width: 600px) {
    .bg-img {
      height: 1600px;
    }
  }
  @media screen and (max-width: 320px) {
    .bg-img {
      height: 1800px;
    }
  }
`
export default TeamAbout
