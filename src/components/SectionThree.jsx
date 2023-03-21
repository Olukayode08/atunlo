import React, { useContext } from 'react'
import styled from 'styled-components'
import { propositionFaq } from '../data'
import bgchildren from '../assets/childbg.png'
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from 'react-icons/md'
import { Atunlo } from '../Context'

const SectionThree = () => {
  const { propAccordion, togglePropAccordion } = useContext(Atunlo)

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
            </div>
            <div className='value-prop'>
              <h4>Our Value Proposition</h4>
              <div className='line'>
                {propositionFaq.map((propositions, i) => {
                  const {
                    id,
                    hasTwo,
                    hasThree,
                    hasFour,
                    image,
                    text,
                    one,
                    two,
                    three,
                    four,
                  } = propositions
                  return (
                    <section className='propositions' key={id}>
                      <div
                        className='accordion'
                        onClick={() => togglePropAccordion(i)}
                      >
                        <div className='title'>
                          <img src={image} className='prop-img' alt='Atunlo' />
                          <h2 className='prop-text'>{text}</h2>
                        </div>
                        <span>
                          {propAccordion === i ? (
                            <MdKeyboardArrowUp />
                          ) : (
                            <MdKeyboardArrowDown />
                          )}
                        </span>
                      </div>
                      <ul
                        className={
                          propAccordion === i ? 'content show' : 'content'
                        }
                      >
                        <li>{one}</li>
                        {hasTwo && <li>{two}</li>}
                        {hasThree && <li>{three}</li>}
                        {hasFour && <li>{four}</li>}
                      </ul>
                    </section>
                  )
                })}
              </div>
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
    height: 120vh;
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
    width: 100%;
    text-align: left;
    h3 {
      color: #4cc800;
      font-size: 33px;
      line-height: 38px;
      font-weight: 700;
      margin-bottom: 10px;
      letter-spacing: 0.8px;
    }
    .desc {
      color: #fff;
      font-size: 16px;
      line-height: 25px;
      padding: 14px 0;
      letter-spacing: 0.3px;
      width: 350px;
      font-weight: 100;
      text-align: left;
    }
  }
  .value-prop {
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 20px 15px;
    text-align: center;
    align-items: center;
    justify-content: center;
    background-color: #fff;
    box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
  }
  h4 {
    font-size: 25px;
    padding-bottom: 15px;
  }
  .line {
    border-top: 0.1px ridge #e6e2e2;
  }
  .propositions {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 98%;
    background: #fff;
    margin: 15px 0;
    box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.1);
  }
  .accordion {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 15px 20px;
  }
  .title {
    display: flex;
    align-items: center;
    justify-content: left;
    cursor: pointer;
  }
  span {
    color: #4cc800;
    font-size: 25px;
    text-align: left;
    cursor: pointer;
  }
  .prop-img {
    width: 14%;
  }
  .prop-text {
    padding-left: 20px;
    font-size: 18px;
    font-weight: 500;
    opacity: 0.87;
    color: #000;
    text-align: left;
  }
  .content {
    max-height: 0;
    overflow: hidden;
  }
  .content.show {
    height: auto;
    max-height: 9999px;
    width: 100%;
    padding: 5px 30px;
    border-top: 0.1px ridge #e6e2e2;
  }
  li {
    font-size: 15px;
    line-height: 25px;
    opacity: 0.87;
    margin: 6px 0;
    text-align: left;
    margin-left: 10px;
  }

  @media screen and (max-width: 1200px) {
    .bg-text,
    .brief-desc {
      width: 90%;
    }
    .value-prop {
      width: 90%;
    }
    .propositions {
      img {
        width: 14%;
      }
    }
  }

  @media screen and (max-width: 1000px) {
    main {
      display: flex;
      flex-direction: column;
    }
    .brief-desc,
    .value-prop,
    .bg-text {
      width: 87%;
      text-align: center;
      margin: 0 auto;
    }
    .value-prop {
      margin-top: 30px;
      width: 75%;
      .prop-img {
        width: 14%;
      }
    }
    .brief-desc {
      align-items: center;
      justify-content: center;
      width: 100%;
      padding: 15px;
      h3 {
        font-size: 29px;
        line-height: 34px;
        letter-spacing: 0.2px;
      }
      .desc {
        text-align: center;
        margin: 0 auto;
        width: 400px;
      }
    }
    .bg-img {
      height: 140vh;
    }
    .bg-text {
      display: flex;
      flex-direction: column;
    }
  }
  @media screen and (max-width: 750px) {
    .value-prop {
      width: 90%;
    }
  }
  @media screen and (max-width: 600px) {
    .propositions {
      display: flex;
      align-items: center;
    }
    .bg-img {
      height: 160vh;
    }
    .bg-text {
      width: 94%;
    }
    .brief-desc {
      width: 96%;
      .desc {
        width: 300px;
        font-size: 17px;
        line-height: 22px;
      }
    }
    .prop-text {
      font-size: 17px;
    }
    .value-prop {
      width: 100%;
      margin-top: 15px;
      padding: 20px 30px;
      h4 {
        font-size: 20px;
        padding-bottom: 20px;
      }
    }
    .propositions {
      width: 100%;
      .prop-img {
        width: 19%;
      }
    }
    .title {
      width: 100%;
    }
    span {
      width: 20%;
    }
  }
  @media screen and (max-width: 420px) {
    .bg-img {
      height: 140vh;
    }
    .value-prop {
      padding: 20px 10px;
    }
  }
  @media screen and (max-width: 370px) {
    .bg-img {
      height: 160vh;
    }
  }
  @media screen and (max-width: 320px) {
    .bg-img {
      height: 280vh;
    }
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
      width: 97%;
      padding: 15px 20px;
      margin: 0 auto;
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
      .desc {
        width: 250px;
      }
    }
  }
`
export default SectionThree
