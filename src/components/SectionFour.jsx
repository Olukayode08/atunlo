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
      font-size: 28px;
      line-height: 30px;
      padding: 30px 0;
      font-weight: 700;
    }
    p {
      font-weight: lighter;
      font-size: 20px;
      line-height: 32px;
      margin-top: 15px;
      font-family: 'FilsonProRegular';
      src: url(./fonts/FilsonProRegular.ttf) format(truetype);
      text-align: center;
    }
  }

  @media screen and (max-width: 900px) {
    .three-rs {
      width: 90%;
    }
  }
`
export default SectionFour
