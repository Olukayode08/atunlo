import React from 'react'
import styled from 'styled-components'
import bio from '../assets/BioLogo.jpeg'
import fme from '../assets/FME.png'



const OurPartners = () => {
  return (
    <>
      <section>
        <Wrapper>
          <div className='partners'>
            <h1>Our Partners</h1>
            <div className='container'>
              <img src={fme} alt='Atunlo' />
              <img src={bio} alt='Atunlo' />
            </div>
          </div>
        </Wrapper>
      </section>
    </>
  )
}

const Wrapper = styled.section`
  .partners {
    padding: 50px;
    margin: 0 auto;
  }
  h1 {
    text-align: center;
    color: #4cc800;
    font-size: 25px;
    margin: 15px;
  }
  .container {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  img {
    width: 20%;
    margin: 10px;
  }
  @media screen and (min-width: 1500px) {
    img {
      width: 250px;
    }
  }
  @media screen and (max-width: 900px) {
    .container {
      flex-direction: column;
    }
    img {
      width: 35%;
    }
  }
  @media screen and (max-width: 500px) {
    img {
      width: 40%;
    }
  }
`
export default OurPartners
