import React, { useContext } from 'react'
import { About, OurPartners, Whatsapp } from '../components'
import waste from '../assets/corporate-img.png'
import styled from 'styled-components'
import { propositionFaq } from '../data'
import watermark from '../assets/watermark.png'

import { Atunlo } from '../Context'
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from 'react-icons/md'

const StoryAbout = () => {
  const { propAccordion, togglePropAccordion } = useContext(Atunlo)

  return (
    <>
      <About />
      <Whatsapp />

      <Story>
        <main>
          <div className='bg-img'></div>
          <div className='bg-text'>
            <div className='sec-two'>
              <img src={waste} className='waste-img' alt='Atunlo' />
              <div className='sec-two-r'>
                <div className='waste-pick-up'>
                  <h3>Our Story</h3>
                </div>
                <h5 className='spacing'>
                  Our idea was borne out of the need to improve the waste
                  management efforts in Nigeria for a cleaner environment.
                  According to a United Nations Industrial Development
                  Organisation (UNIDO) report, Nigeria generates over 32 million
                  tonnes of waste annually. Plastic waste accounts for 2.5
                  million tonnes, with about 80% ending up in landfills, sewers,
                  beaches and water bodies. Less than 20% of plastic waste is
                  recycled.
                </h5>
                <h5>
                  Nigeria is also ranked ninth globally among top 20 countries
                  with the highest contributions to plastic pollution, as we
                  contribute 83 percent of the total volume of land-based
                  plastic waste that ends up in the oceans.
                </h5>
                <h5>
                  Atunlo, which stands for “the art of recycling”, aims to solve
                  this problem by creating a Materials Recovery Facility to
                  collect, sort and bale recyclable PET bottles for sales to
                  offtakers and manufactures to complete the next process in the
                  recycling value chain.
                </h5>
                <h5>
                  Our value proposition in relation to the Sustainable
                  Development Goals will focus on creating in impact in relation
                  to ‘No poverty, Zero hunger, Quality education, Responsible
                  consumption and production, Clean water and sanitation as well
                  as Reduction in marine pollution’.
                </h5>
                <h5>
                  By taking waste off the street and letting our communities
                  understand the value of recycling, we will ensure over 50,000
                  households are impacted within 5 years, where each household
                  sees used PET bottles as income and not waste.
                </h5>
              </div>
            </div>
            <div className='value-prop'>
              <h4>Value Propositions</h4>
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
                  <div key={id} className='propositions'>
                    <div
                      className='accordion'
                      onClick={() => togglePropAccordion(i)}
                    >
                      <div className='title'>
                        <img src={image} className='prop-img' alt='Atunlo' />
                        <h2>{text}</h2>
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
                  </div>
                )
              })}
            </div>
          </div>
        </main>
      </Story>
      <OurPartners />
    </>
  )
}
const Story = styled.section`
  main {
    margin: 0 auto;
    width: 100%;
    position: relative;
  }
  .bg-img {
    background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.4)),
      url(${watermark});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
    height: 220vh;
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
    width: 88%;
    margin: 0 auto;
  }
  .sec-two {
    width: 90%;
    display: flex;
    justify-content: space-between;
    flex-direction: row-reverse;
    margin: 0 auto;
  }
  .waste-img {
    width: 430px;
    object-fit: cover;
    margin-top: 8px;
    margin-bottom: 30px;
  }
  .sec-two-r {
    display: flex;
    flex-direction: column;
    align-items: left;
    width: 430px;
    margin-bottom: 30px;
  }
  .waste-pick-up {
    display: flex;
    align-items: center;
    justify-content: left;
    margin: 0 0 0 5px;

    h3 {
      color: #4cc800;
      font-size: 25px;
      line-height: 33px;
      text-align: left;
    }
  }

  h5 {
    color: #000;
    padding: 6px;
    font-size: 15px;
    font-weight: lighter;
    line-height: 20px;
    text-align: justify;
  }
  .spacing {
    margin-top: 20px;
  }
  .value-prop {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 650px;
    margin: 30px auto;
  }
  h4 {
    font-size: 30px;
    color: #4cc800;
  }
  .propositions {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 98%;
    margin: 15px auto;
    background: #fff;
    box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.1);
  }
  .accordion {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px 30px;
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
    width: 10%;
  }
  h2 {
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
    padding: 5px 20px;
    border-top: 0.1px ridge #e6e2e2;
  }
  li {
    font-size: 15px;
    line-height: 25px;
    opacity: 0.75;
    margin: 8px 25px;
  }
  @media screen and (max-width: 1200px) {
    .bg-text {
      margin: 0 auto;
      width: 93%;
    }
  }
  @media screen and (max-width: 1070px) {
    .sec-two {
      flex-direction: column-reverse;
      justify-content: center;
      align-items: center;
    }
    .waste-img {
      width: 480px;
      height: 650px;
      padding: 20px 0;
    }
    .prop-img {
      width: 12%;
    }
    .sec-two-r {
      width: 480px;
    }
    .sec-two-r,
    h3 {
      text-align: center;
    }
    .waste-pick-up {
      justify-content: center;
      margin: 0 auto;
    }
    .bg-img {
      height: 330vh;
    }
  }
  @media screen and (max-width: 930px) {
    .bg-text {
      width: 85%;
    }
    .sec-two {
      width: 95%;
    }
    h4 {
      text-align: center;
    }
    .waste-img {
      width: 500px;
    }
    .value-prop {
      width: 600px;
    }
    .content.show {
      padding: 5px 20px;
    }
    .accordion {
      padding: 20px;
    }
  }
  @media screen and (max-width: 700px) {
    .bg-text {
      width: 95%;
    }
    .value-prop {
      width: 500px;
    }
  }
  @media screen and (max-width: 550px) {
    .waste-img {
      width: 320px;
      height: 450px;
      margin: 30px;
    }
    .title {
      width: 85%;
    }
    span {
      width: 15%;
    }
    h4 {
      font-size: 24px;
    }
    h2 {
      font-size: 15px;
      font-weight: 500;
    }
    .sec-two-r {
      width: 350px;
    }
    .value-prop {
      width: 430px;
      margin: 0 auto;
    }
    p {
      font-size: 20px;
      font-weight: 500;
    }
    li {
      font-size: 16px;
    }
  }
  @media screen and (max-width: 470px) {
    .value-prop {
      width: 430px;
    }
  }
  @media screen and (max-width: 420px) {
    .value-prop {
      width: 370px;
      margin: 0 auto;
    }
  }
  @media screen and (max-width: 320px) {
    .waste-img {
      width: 280px;
      padding: 0;
      margin: 10px 0;
      height: 500px;
    }
    .sec-two-r {
      width: 280px;
    }
    .prop-img {
      width: 14%;
    }
    main {
      width: 100%;
    }
    .value-prop {
      width: 270px;
    }
    h2 {
      font-size: 17px;
    }
    li {
      font-size: 14px;
    }
    .bg-img {
      height: 450vh;
    }
  }
`
export default StoryAbout
