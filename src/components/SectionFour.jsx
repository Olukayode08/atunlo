import React from 'react'
import styled from 'styled-components'
import watermark from '../assets/watermark.png'

const SectionFour = () => {
  return (
    <>
      <Wrapper>
        <main>
          <div className='bg-img'></div>
          <div className='bg-text'>
            <div className='three-rs'>
              <h4>Reduce. Reuse. Recycle</h4>
              <p>
                To ensure waste is managed in a way that minimises harmful
                effects to the environment, we educate consumers on the
                importance of reducing and reusing waste. Where items cannot be
                reused, we provide access to waste disposal methods to collect
                waste, which we sell to recycling companies for use in making
                new products or as a replacement for raw materials.
              </p>
            </div>
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
    position: relative;
  }
  .bg-img {
    background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.4)),
      url(${watermark});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
    height: 400px;
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
      font-weight: 100;
      opacity: 0.87;
      font-size: 20px;
      line-height: 32px;
      margin-top: 15px;
      text-align: center;
    }
  }

  @media screen and (max-width: 900px) {
    .three-rs {
      width: 90%;
      h4 {
        font-size: 25px;
        line-height: 28px;
      }
      p {
        font-size: 18px;
      }
    }
    .bg-img {
      height: 500px;
    }
  }
  @media screen and (max-width: 500px) {
    .bg-img {
      height: 600px;
    }
  }
`
export default SectionFour
