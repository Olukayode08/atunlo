import React from 'react'
import { About } from '../components'
import styled from 'styled-components'
import { teams } from '../data'

const TeamAbout = () => {
  return (
    <>
      <About />
      <Team>
        <div className='atunlo-team'>
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
      </Team>
    </>
  )
}
const Team = styled.section`
  .atunlo-team {
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
    width: 90%;
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
      text-align: center;
      width: 100%;
    }
  }
`
export default TeamAbout
