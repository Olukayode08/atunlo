import React from 'react'
import styled from 'styled-components'
import { valueProposition } from '../data'
import bgchildren from '../assets/childbg.png'

const SectionThree = () => {
  return (
    <>
      <Wrapper>
        <main>
          <div className='bg-img'></div>
          <div className='bg-text'>
            <div className='brief-desc'>
              <h3>
                Social technology for <br /> community impact
              </h3>
              <p className='desc'>
                Atunlo operates in line with 5 of the Sustainable Development
                goals to ensure a better, more sustainable future for the
                communities we serve.
              </p>
              <p className='view-more'>View more</p>
            </div>
            <div className='value-prop'>
              <h4>Our Value Proposition</h4>
              <div className='line'></div>
              {valueProposition.map((data) => {
                const { id, image, text } = data
                return (
                  <section className='propositions' key={id}>
                    <img src={image} alt='Atunlo' />
                    <p className='prop-text'>{text}</p>
                  </section>
                )
              })}
            </div>
          </div>
        </main>
      </Wrapper>
    </>
  )
}
const Wrapper = styled.section`
  main {
    display: flex;
    position: relative;
    justify-content: space-between;
    align-items: center;
    margin: 70px 0;
  }
  .bg-img {
    background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.4)),
      url(${bgchildren});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
    height: 100vh;
    width: 100%;
    margin: 0 auto;
  }
  .bg-text {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 5;
    display: flex;
    justify-content: space-between;
    text-align: center;
    width: 80%;
    margin: 0 auto;
  }
  .brief-desc {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    width: 47%;
    text-align: left;
    h3 {
      color: #4cc800;
      font-size: 33px;
      line-height: 38px;
      font-weight: 700;
      margin-bottom: 10px;
    }
    .desc {
      color: #fff;
      font-size: 19px;
      line-height: 25px;
      padding: 14px 0;
      letter-spacing: 0.4px;
      width: 300px;
      font-weight: normal;
      text-align: left;
      font-family: 'FilsonProRegular';
      src: url(./fonts/FilsonProRegular.ttf) format(truetype);
    }
    .view-more {
      background-color: #fff;
      color: #4cc800;
      width: 150px;
      font-size: 15px;
      text-align: center;
      border-radius: 4px;
      padding: 15px 5px;
      margin-top: 15px;
    }
  }
  .value-prop {
    display: flex;
    flex-direction: column;
    width: 53%;
    padding: 30px 25px;
    text-align: center;
    align-items: center;
    background-color: #fff;
    box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    h4 {
      font-size: 25px;
      padding-bottom: 25px;
    }
    .line {
      height: 2px;
      width: 190px;
      background-color: #fff;
      margin: 0 auto;
    }
    .propositions {
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 4px;
      padding: 8px 0;
    }
    img {
      width: 11%;
    }
  }
  .prop-text {
    font-size: 18px;
    text-align: left;
    padding-left: 15px;
    width: 380px;
    font-family: 'FilsonProRegular';
    src: url(./fonts/FilsonProRegular.ttf) format(truetype);
  }

  @media screen and (max-width: 1200px) {
    .bg-text,
    .brief-desc,
    .value-prop {
      width: 90%;
    }
  }

  @media screen and (max-width: 900px) {
    main {
      display: flex;
      flex-direction: column;
    }
    .brief-desc,
    .value-prop,
    .bg-text {
      width: 80%;
      text-align: center;
      margin: 0 auto;
    }
    .value-prop {
      margin-top: 30px;
      img {
        width: 14%;
      }
    }
    .brief-desc {
      width: 100%;
      padding: 15px;
      .desc {
        text-align: center;
        margin: 0 auto;
        width: 400px;
      }
    }
    .prop-text {
      width: 320px;
    }

    .view-more {
      margin: 0 auto;
    }
    .bg-img {
      height: 120vh;
    }
    .bg-text {
      display: flex;
      flex-direction: column;
    }
  }
  @media screen and (max-width: 500px) {
    .propositions {
      display: flex;
      align-items: center;
    }
    .bg-text {
      width: 94%;
    }
    .brief-desc {
      width: 93%;
      .desc {
        width: 300px;
      }
    }
    .value-prop {
      width: 100%;
      padding: 10px 20px;
      margin-top: 15px;
    }
  }
  @media screen and (max-width: 320px) {
    .bg-text,
    .brief-desc {
      width: 100%;
    }
    h3 {
      font-size: 19px;
    }
    p {
      font-size: 10px;
      text-align: center;
      padding-left: 0px;
    }
    h3 {
      color: #4cc800;
      font-size: 20px;
    }
    .value-prop {
      width: 100%;
      padding: 5px 20px;
      margin: 0;
      margin-top: 0;
    }
    .brief-desc {
      h3 {
        font-size: 20px;
        line-height: 25px;
      }
      p {
        font-size: 13px;
        line-height: 17px;
        padding: 8px 0;
      }
      .view-more {
        font-size: 12px;
      }
    }
  }
`
export default SectionThree
