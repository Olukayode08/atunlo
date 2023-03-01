import React from 'react'
import styled from 'styled-components'
import mohinani from '../assets/Mohinani.png'
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
              <img src={mohinani} alt='Atunlo' />
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
  @media screen and (max-width: 900px) {
    .container{
      flex-direction: column;
    }
    img{
      width: 35%;
    }

  }
`
export default OurPartners
