import React, { useContext, useEffect } from 'react'
import { About, OurPartners, Whatsapp } from '../components'
import waste from '../assets/corporate-img.png'
import styled from 'styled-components'
import { propositionFaq } from '../data'
import { useLocation } from 'react-router-dom'
import { Atunlo } from '../Context'
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from 'react-icons/md'

const StoryAbout = () => {
  const { propAccordion, togglePropAccordion } = useContext(Atunlo)
  const { state } = useLocation()
  const { targetId } = state || {}
  useEffect(() => {
    const el = document.getElementById(targetId)
    if (el) {
      el.scrollIntoView()
    }
  }, [targetId])
  return (
    <>
      <About />
      <Whatsapp />

      <Story>
        <main>
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
                tonnes of waste annually. Plastic waste accounts for 2.5 million
                tonnes, with about 80% ending up in landfills, sewers, beaches
                and water bodies. Less than 20% of plastic waste is recycled.
              </h5>
              <h5>
                Nigeria is also ranked ninth globally among top 20 countries
                with the highest contributions to plastic pollution, as we
                contribute 83 percent of the total volume of land-based plastic
                waste that ends up in the oceans.
              </h5>
              <h5>
                Atunlo, which stands for “the art of recycling”, aims to solve
                this problem by creating a Materials Recovery Facility to
                collect, sort and bale recyclable PET bottles for sales to
                offtakers and manufactures to complete the next process in the
                recycling value chain.
              </h5>
              <h5>
                Our value proposition in relation to the Sustainable Development
                Goals will focus on creating in impact in relation to ‘No
                poverty, Zero hunger, Quality education, Responsible consumption
                and production, Clean water and sanitation as well as Reduction
                in marine pollution’.
              </h5>
              <h5 id='values'>
                By taking waste off the street and letting our communities
                understand the value of recycling, we will ensure over 50,000
                households are impacted within 5 years, where each household
                sees used PET bottles as income and not waste.
              </h5>
            </div>
          </div>
          <div className='value-prop'>
            <h2>Value Propositions</h2>
            {propositionFaq.map((propositions, i) => {
              const { id, image, text, one, two, three, four } = propositions
              return (
                <div key={id} className='propositions'>
                  <div
                    className='accordion'
                    onClick={() => togglePropAccordion(i)}
                  >
                    <div className='title'>
                      <img src={image} className='prop-img' alt='Atunlo' />
                      <p>{text}</p>
                    </div>
                    <span onClick={() => togglePropAccordion(i)}>
                      {propAccordion === i ? (
                        <MdKeyboardArrowUp />
                      ) : (
                        <MdKeyboardArrowDown />
                      )}
                    </span>
                  </div>

                  <ul
                    className={propAccordion === i ? 'content show' : 'content'}
                  >
                    <li>{one}</li>
                    <li>{two}</li>
                    <li>{three}</li>
                    <li>{four}</li>
                  </ul>
                </div>
              )
            })}
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
    width: 88%;
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
  h2 {
    font-size: 30px;
    color: #4cc800;
  }
  .propositions {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
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
    font-size: 25px;
    color: #4cc800;
    cursor: pointer;
  }
  .prop-img {
    width: 8%;
  }
  p {
    padding-left: 20px;
    font-size: 18px;
    font-weight: 100;
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
    margin: 8px 0;
    list-style: none;
  }
  @media screen and (max-width: 1200px) {
    main {
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
    h3,
    h5 {
      text-align: center;
    }
    .waste-pick-up {
      justify-content: center;
      margin: 0 auto;
    }
  }
  @media screen and (max-width: 930px) {
    main {
      width: 85%;
    }
    .sec-two {
      width: 95%;
    }
    h2 {
      text-align: center;
    }
    .waste-img {
      width: 500px;
    }
    .value-prop {
      width: 600px;
    }
  }
  @media screen and (max-width: 700px) {
    main {
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
    .prop-img {
      display: none;
    }
    h2 {
      font-size: 24px;
    }
    p {
      font-size: 17px;
      font-weight: 500;
      padding: 0;
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
    p {
      font-size: 17px;
    }
    li {
      font-size: 14px;
    }
  }
`
export default StoryAbout
