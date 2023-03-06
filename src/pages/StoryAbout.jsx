import React from 'react'
import { About, Whatsapp } from '../components'
import waste from '../assets/corporate-img.png'
import styled from 'styled-components'
import { valueProposition } from '../data'
const StoryAbout = () => {
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
              <h5>
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
              <h5>
                By taking waste off the street and letting our communities
                understand the value of recycling, we will ensure over 50,000
                households are impacted within 5 years, where each household
                sees used PET bottles as income and not waste.
              </h5>
            </div>
          </div>
          <div className='value-prop'>
            <h2>Value Propositions</h2>
            {valueProposition.map((propositions) => {
              const { id, image, text } = propositions
              return (
                <div key={id} className='propositions'>
                  <img src={image} className='prop-img' alt='Atunlo' />
                  <p>{text}</p>
                </div>
              )
            })}
          </div>
        </main>
      </Story>
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
  }
  .sec-two-r {
    display: flex;
    flex-direction: column;
    align-items: left;
    width: 430px;
  }
  .waste-pick-up {
    display: flex;
    align-items: center;
    justify-content: left;
    height: 80px;
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
    line-height: 20px;
    text-align: justify;
  }
  .value-prop {
    width: 90%;
    margin: 0 auto;
    padding: 20px 0;
  }
  h2 {
    color: #4cc800;
  }
  .propositions {
    display: flex;
    align-items: center;
    margin: 25px 0;
  }
  .prop-img {
    width: 6%;
  }
  p {
    padding-left: 20px;
    width: 90%;
  }
  @media screen and (max-width: 1200px) {
    main {
      margin: 0 auto;
      width: 93%;
    }
  }
  @media screen and (max-width: 1050px) {
    .sec-two {
      flex-direction: column-reverse;
      justify-content: center;
      align-items: center;
    }
    .value-prop,
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
    p {
      margin: 0 auto;
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
    .value-prop,
    .waste-img {
      width: 530px;
    }
    p{
      text-align: justify;
    }
  }
  @media screen and (max-width: 550px) {
    .waste-img {
      width: 320px;
      height: 450px;
      margin: 30px;
    }
    .sec-two-r {
      width: 350px;
    }
    .prop-img {
      width: 15%;
    }
    .value-prop {
      width: 95%;
    }
  }
  @media screen and (max-width: 290px) {
    .value-prop,
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
    main,
    .value-prop {
      width: 100%;
    }
  }
`
export default StoryAbout
