import React from 'react'
import styled from 'styled-components'
import { logistics } from '../data'
    


const SectionFour = () => {
  return (
    <>
      <Wrapper>
        <main>
          <div className='three-rs'>
            <h4>Reduce. Reuse. Recycle</h4>
            <p>
              To ensure waste is managed in a way that minimises harmful effects
              to the environment, we educate consumers on the importance of
              reducing and reusing waste. Where items cannot be reused, we
              provide access to waste disposal methods to collect waste, which
              we sell to recycling companies for use in making new products or
              as a replacement for raw materials.
            </p>
          </div>
          <div className='logistics'>
            <section className='logistics-services'>
              {logistics.map((data) => {
                const { id, image, text } = data
                return (
                  <div key={id} className='services'>
                    <h3>{text}</h3>
                    <img src={image} alt='Atunlo' />
                  </div>
                )
              })}
            </section>
          </div>
        </main>
      </Wrapper>
    </>
  )
}
const Wrapper = styled.section`
  main,
  .three-rs {
    display: flex;
    flex-direction: column;
    margin: 0 auto;
  }
  .three-rs {
    text-align: center;
    width: 70%;
    margin: 0 auto;
    padding: 65px 0px;
    h4 {
      color: #4cc800;
      font-size: 25px;
      line-height: 30px;
      padding: 10px 0;
    }
    p {
      font-size: 19px;
      line-height: 28px;
    }
  }

  .logistics {
    background-color: #4cc800;
  }
  .logistics-services {
    display: flex;
    justify-content: space-between;
    text-align: center;
    margin: 0 auto;
    padding: 65px 0px;
    width: 70%;
    img{
      background-color: #fff;
      padding: 11px;
      border-radius: 13px;
    }
    h3{
      color: #fff;
      font-size: 17px;
      padding: 10px;
    }
  }
  @media screen and (max-width: 900px) {
    .logistics-services{
      display: flex;
      flex-direction: column;
      padding: 30px 0;
    }
    .three-rs{
      width: 90%;
    }
  }
`
export default SectionFour
